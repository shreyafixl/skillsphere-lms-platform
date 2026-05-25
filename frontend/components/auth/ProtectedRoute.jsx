"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, isAuthenticated, loading, initialized } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!initialized) return
    if (loading) return

    if (!isAuthenticated) {
      router.replace("/login")
      return
    }

    const currentRole = String(user?.role || "").trim().toLowerCase()
    const isAllowed = allowedRoles.some(
      (role) => String(role).trim().toLowerCase() === currentRole
    )

    if (!isAllowed) {
      router.replace("/login")
    }
  }, [allowedRoles, user, isAuthenticated, loading, initialized, router])

  if (!initialized || loading) {
    return null
  }

  const currentRole = String(user?.role || "").trim().toLowerCase()
  const isAllowed = allowedRoles.some(
    (role) => String(role).trim().toLowerCase() === currentRole
  )

  if (!isAuthenticated || !isAllowed) {
    return null
  }

  return <>{children}</>
}
