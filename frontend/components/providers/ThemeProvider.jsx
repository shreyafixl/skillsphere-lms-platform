"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

const STORAGE_KEY = "skillsphere-theme"

const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "light",
  themes: ["light", "dark"],
  forcedTheme: undefined,
  systemTheme: undefined,
})

function getSystemTheme() {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function resolveTheme(theme, forcedTheme) {
  if (forcedTheme) return forcedTheme
  if (theme === "system") return getSystemTheme()
  return theme === "dark" ? "dark" : "light"
}

function applyThemeToDocument(theme, forcedTheme) {
  if (typeof document === "undefined") return resolveTheme(theme, forcedTheme)
  const resolved = resolveTheme(theme, forcedTheme)
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved
  return resolved
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  storageKey = STORAGE_KEY,
  forcedTheme,
}) {
  const [theme, setThemeState] = useState(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let stored = defaultTheme
    try {
      stored = localStorage.getItem(storageKey) || defaultTheme
    } catch {
      /* ignore */
    }
    setThemeState(stored)
    setResolvedTheme(applyThemeToDocument(stored, forcedTheme))
    setMounted(true)
  }, [defaultTheme, storageKey, forcedTheme])

  useEffect(() => {
    if (!mounted) return
    setResolvedTheme(applyThemeToDocument(theme, forcedTheme))
  }, [theme, forcedTheme, mounted])

  useEffect(() => {
    if (!enableSystem || theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      setResolvedTheme(applyThemeToDocument("system", forcedTheme))
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [theme, enableSystem, forcedTheme])

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== storageKey) return
      const next = event.newValue || defaultTheme
      setThemeState(next)
      setResolvedTheme(applyThemeToDocument(next, forcedTheme))
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [storageKey, defaultTheme, forcedTheme])

  const setTheme = useCallback(
    (value) => {
      setThemeState((current) => {
        const next = typeof value === "function" ? value(current) : value
        try {
          localStorage.setItem(storageKey, next)
        } catch {
          /* ignore */
        }
        return next
      })
    },
    [storageKey]
  )

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      forcedTheme,
      resolvedTheme: forcedTheme ?? resolvedTheme,
      themes: enableSystem ? ["light", "dark", "system"] : ["light", "dark"],
      systemTheme: enableSystem ? getSystemTheme() : undefined,
    }),
    [theme, setTheme, forcedTheme, resolvedTheme, enableSystem]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
