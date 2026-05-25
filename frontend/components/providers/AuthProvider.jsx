"use client"

import axios from "axios"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

const STORAGE_KEY = "token"

const AuthContext = createContext({
  user: null,
  token: null,
  loading: true,
  initialized: false,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  fetchCurrentUser: async () => {},
})

const authClient = axios.create({
  baseURL: "http://localhost:5000/api/auth",
})

function setAuthHeader(token) {
  if (token) {
    authClient.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete authClient.defaults.headers.common.Authorization
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)

  const logout = useCallback(() => {
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setUser(null)
    setToken(null)
    setAuthHeader(null)
  }, [])

  const fetchCurrentUser = useCallback(
    async (currentToken) => {
      if (!currentToken) {
        setUser(null)
        setLoading(false)
        return
      }

      setAuthHeader(currentToken)
      setLoading(true)

      try {
        const response = await authClient.get("/me")
        setUser(response.data.user ?? response.data)
        setToken(currentToken)
      } catch (error) {
        console.error("Failed to load current user", error)
        logout()
      } finally {
        setLoading(false)
      }
    },
    [logout]
  )

  const login = useCallback(async (email, password) => {
    setLoading(true)

    try {
      const response = await authClient.post("/login", {
        email,
        password,
      })

      const nextToken = response.data.token
      if (!nextToken) {
        throw new Error("Login response did not include a token")
      }

      window.localStorage.setItem(STORAGE_KEY, nextToken)
      setAuthHeader(nextToken)
      setToken(nextToken)

      const meResponse = await authClient.get("/me")
      setUser(meResponse.data.user ?? meResponse.data)

      return response.data
    } catch (error) {
      console.error("Login failed", error)
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const savedToken = window.localStorage.getItem(STORAGE_KEY)
    if (savedToken) {
      fetchCurrentUser(savedToken).finally(() => setInitialized(true))
    } else {
      setLoading(false)
      setInitialized(true)
    }
  }, [fetchCurrentUser])

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      initialized,
      isAuthenticated: Boolean(user),
      login,
      logout,
      fetchCurrentUser,
    }),
    [user, token, loading, initialized, login, logout, fetchCurrentUser]
  )

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
