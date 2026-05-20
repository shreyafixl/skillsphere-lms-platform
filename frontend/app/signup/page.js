"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // fake API call
    setTimeout(() => {
      setLoading(false)
      alert("Account created successfully 🚀")
    }, 1200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 px-4">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-violet-300/30 rounded-full blur-3xl top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-300/30 rounded-full blur-3xl bottom-10 right-10" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Start your SaaS journey 🚀
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white bg-violet-600 hover:bg-violet-700 transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </motion.div>
    </div>
  )
}
