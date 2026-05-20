"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Account created 🚀")
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">

      {/* glow background */}
      <div className="absolute w-[400px] h-[400px] bg-violet-300/30 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-300/30 blur-3xl rounded-full bottom-10 right-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/70 border"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-white/70 border"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full">
            {loading ? "Loading..." : "Sign Up"}
          </Button>

        </form>
      </motion.div>
    </div>
  )
}