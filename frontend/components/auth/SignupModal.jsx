"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import SelectedPlanBadge from "@/components/landing/SelectedPlanBadge"
import { signupRoles } from "@/lib/signup-roles"

const contentVariants = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.18 } },
}

export default function SignupModal({
  variant = "modal",
  onClose,
  onSwitchToLogin,
  selectedPlan = null,
}) {
  const isModal = variant === "modal"

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")

  const handleCreateAccount = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = "Full name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    if (!role) newErrors.role = "Please select a role"
    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success(
        selectedPlan
          ? `Welcome! Your ${selectedPlan === "pro" ? "Pro" : "Basic"} plan workspace is ready.`
          : "Account created successfully!"
      )
      if (isModal && onClose) onClose()
    }, 1200)
  }

  const form = (
    <AnimatePresence mode="wait">
      <motion.div
        key="signup-form"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          "relative w-full text-slate-900 dark:text-slate-100",
          isModal &&
            "max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900"
        )}
      >
        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-gray-500 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
            aria-label="Close signup"
          >
            ✕
          </button>
        )}

        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
          Create Workspace 🚀
        </h1>

        <p className="mb-6 text-slate-600 dark:text-slate-400">
          Build smarter learning experiences for your team
        </p>

        {selectedPlan && <SelectedPlanBadge planId={selectedPlan} />}

        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-xl dark:border-slate-700 dark:bg-slate-800/60"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl dark:border-slate-700 dark:bg-slate-800/60"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <Input
            type="text"
            placeholder="Company Name"
            className="h-12 rounded-xl dark:border-slate-700 dark:bg-slate-800/60"
          />

          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
            >
              <option value="">Select Role</option>
              {signupRoles.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-1 text-sm text-red-500">{errors.role}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl pr-12 dark:border-slate-700 dark:bg-slate-800/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-slate-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 rounded-xl pr-12 dark:border-slate-700 dark:bg-slate-800/60"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-slate-400"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <input type="checkbox" className="rounded border-slate-300" />
          <span>I agree to Terms & Privacy Policy</span>
        </label>

        <Button
          variant="outline"
          className="mt-6 h-12 w-full rounded-xl dark:border-slate-700 dark:bg-slate-800/40 dark:hover:bg-slate-800"
        >
          Continue with Google
        </Button>

        <Button
          disabled={loading}
          onClick={handleCreateAccount}
          className="mt-4 h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        <p className="mt-5 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onSwitchToLogin?.()}
            className="cursor-pointer font-medium text-violet-600 transition-colors hover:underline dark:text-violet-400"
          >
            Sign In
          </button>
        </p>
      </motion.div>
    </AnimatePresence>
  )

  return form
}
