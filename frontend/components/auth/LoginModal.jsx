"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginModal({ open, setOpen }) {

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
            className="h-12 rounded-xl"
          />

          <Input
            type="password"
            placeholder="Password"
            className="h-12 rounded-xl"
          />

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
          className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] transition-all duration-300 shadow-lg text-white font-semibold mt-6"
        >
          Sign In
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