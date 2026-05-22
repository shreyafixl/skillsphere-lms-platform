"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { DEMO_PASSWORD, mockAuthenticate } from "@/lib/mock-auth"
import DemoAccounts from "@/components/auth/DemoAccounts"
import AuthModalShell from "@/components/auth/AuthModalShell"

const contentVariants = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.18 } },
}

export default function LoginModal({
  open,
  setOpen,
  variant = "modal",
  onClose,
  onSwitchToSignup,
}) {
  const router = useRouter()
  const isEmbedded = variant === "embedded"
  const isInline = variant === "inline"
  const isModal = variant === "modal"
  const isOpen = isInline ? true : isEmbedded ? true : open

  const handleClose = onClose ?? (setOpen ? () => setOpen(false) : undefined)

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedDemoEmail, setSelectedDemoEmail] = useState("")

  if (!isOpen) return null

  const handleDemoSelect = (account) => {
    setEmail(account.email)
    setPassword(DEMO_PASSWORD)
    setSelectedDemoEmail(account.email)
    setErrors({})
  }

  const handleSignIn = () => {
    const newErrors = {}

    if (!email.trim()) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors")
      return
    }

    const result = mockAuthenticate(email, password)

    if (!result.success) {
      toast.error(result.error)
      return
    }

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toast.success(`Welcome, ${result.account.role}!`)
      handleClose?.()
      router.push(result.route)
    }, 800)
  }

  const form = (
    <AnimatePresence mode="wait">
      <motion.div
        key="login-form"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          "relative w-full text-slate-900 dark:text-slate-100",
          (isModal || isEmbedded) &&
            "max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900"
        )}
      >
        {(isModal || isEmbedded) && handleClose && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-xl text-gray-500 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
            aria-label="Close login"
          >
            ✕
          </button>
        )}

        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
          Welcome Back 👋
        </h1>

        <p className="mb-6 text-slate-600 dark:text-slate-400">
          Continue your learning journey
        </p>

        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Work Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setSelectedDemoEmail("")
              }}
              className="h-12 rounded-xl dark:border-slate-700 dark:bg-slate-800/60"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-xl pr-12 dark:border-slate-700 dark:bg-slate-800/60"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-slate-400"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="rounded border-slate-300" />
            <span className="text-gray-600 dark:text-slate-400">Remember Me</span>
          </label>

          <button
            type="button"
            className="cursor-pointer text-violet-600 transition-colors hover:underline dark:text-violet-400"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          disabled={loading}
          onClick={handleSignIn}
          className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <DemoAccounts
          selectedEmail={selectedDemoEmail}
          onSelect={handleDemoSelect}
        />

        <Button
          variant="outline"
          className="mt-4 h-12 w-full rounded-xl dark:border-slate-700 dark:bg-slate-800/40 dark:hover:bg-slate-800"
        >
          Continue with Google
        </Button>

        <p className="mt-5 text-center text-sm text-gray-600 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => onSwitchToSignup?.()}
            className="cursor-pointer font-medium text-violet-600 transition-colors hover:underline dark:text-violet-400"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </AnimatePresence>
  )

  if (isInline) return form

  if (isEmbedded) return form

  return (
    <AuthModalShell open={open} onClose={handleClose}>
      {form}
    </AuthModalShell>
  )
}
