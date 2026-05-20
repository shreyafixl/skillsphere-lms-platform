"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

export default function LoginModal({ open, setOpen }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  if (!open) return null

  return (

    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* HEADING */}
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mb-6">
          Continue your learning journey
        </p>

        {/* INPUTS */}
        <div className="space-y-4">

        <Input
  type="email"
  placeholder="Work Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="h-12 rounded-xl"
/>
{errors.email && (
  <p className="text-red-500 text-sm">
    {errors.email}
  </p>
)}

<div className="relative">

<Input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  value={password}
onChange={(e) => setPassword(e.target.value)}
  className="h-12 rounded-xl pr-12"
/>
{errors.password && (
  <p className="text-red-500 text-sm">
    {errors.password}
  </p>
)}

<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
>
  {showPassword ? (
    <EyeOff size={20} />
  ) : (
    <Eye size={20} />
  )}
</button>

</div>
        </div>

        {/* REMEMBER + FORGOT */}
        <div className="flex items-center justify-between mt-4 text-sm">

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-gray-600">
              Remember Me
            </p>
          </div>

          <p className="text-violet-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>

        </div>

        {/* LOGIN BUTTON */}
        <Button
  disabled={loading}
  onClick={() => {

    let newErrors = {}
  
    if (!email) {
      newErrors.email = "Email is required"
    }
  
    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }
  
    setErrors(newErrors)
  
    if (Object.keys(newErrors).length > 0) {

      toast.error("Please fix the form errors")
    
      return
    }
  
    setLoading(true)
  
    setTimeout(() => {

      setLoading(false)
    
      toast.success("Login successful!")
    
    }, 2000)
  }}
  className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition-all duration-300 shadow-lg text-white font-semibold mt-6"
>
  {loading ? "Signing In..." : "Sign In"}
</Button>
        {/* GOOGLE BUTTON */}
        <Button
          variant="outline"
          className="w-full h-12 rounded-xl mt-4"
        >
          Continue with Google
        </Button>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <span className="text-violet-600 font-medium cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>

      </div>

    </div>

  )
}