"use client"

import { useRouter } from "next/navigation"
import AuthLayout from "@/components/auth/AuthLayout"
import LoginModal from "@/components/auth/LoginModal"

export default function LoginPage() {
  const router = useRouter()

  return (
    <AuthLayout>
      <LoginModal
        variant="inline"
        onSwitchToSignup={() => router.push("/signup")}
      />
    </AuthLayout>
  )
}
