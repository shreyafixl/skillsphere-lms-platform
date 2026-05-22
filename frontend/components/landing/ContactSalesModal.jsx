"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Mail, MessageSquare, Send, Users } from "lucide-react"
import { toast } from "sonner"

import AuthModalShell from "@/components/auth/AuthModalShell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
}

const companySizes = [
  { value: "", label: "Select company size" },
  { value: "1-50", label: "1–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
]

export default function ContactSalesModal({ open, onClose }) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    const newErrors = {}
    if (!companyName.trim()) newErrors.companyName = "Company name is required"
    if (!email.trim()) newErrors.email = "Work email is required"
    if (!companySize) newErrors.companySize = "Please select company size"
    if (!message.trim()) newErrors.message = "Please describe your requirements"

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Thanks! Our sales team will contact you within 1 business day.")
      setCompanyName("")
      setEmail("")
      setCompanySize("")
      setMessage("")
      setErrors({})
      onClose()
    }, 1200)
  }

  return (
    <AuthModalShell open={open} onClose={onClose} className="max-w-lg">
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          "relative max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200/80 p-8 shadow-2xl",
          "bg-white/95 text-slate-900 backdrop-blur-xl",
          "dark:border-slate-700/80 dark:bg-slate-900/95 dark:text-slate-100",
          "dark:shadow-violet-500/10"
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 transition-colors hover:text-black dark:text-slate-400 dark:hover:text-white"
          aria-label="Close contact form"
        >
          ✕
        </button>

        <div className="mb-6">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
            <Building2 size={12} />
            Enterprise
          </span>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Contact Sales
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Tell us about your organization and we&apos;ll tailor an Enterprise plan
            for you.
          </p>
        </div>

        <div className="space-y-4">
          <Field label="Company Name" icon={Building2} error={errors.companyName}>
            <Input
              placeholder="Acme Corporation"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="h-12 rounded-xl pl-10 dark:border-slate-700 dark:bg-slate-800/60"
            />
          </Field>

          <Field label="Work Email" icon={Mail} error={errors.email}>
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl pl-10 dark:border-slate-700 dark:bg-slate-800/60"
            />
          </Field>

          <Field label="Company Size" icon={Users} error={errors.companySize}>
            <select
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
            >
              {companySizes.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Requirements / Message"
            icon={MessageSquare}
            error={errors.message}
            iconTop
          >
            <textarea
              placeholder="Describe your team size, integrations, security needs..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 pl-10 text-sm text-slate-800 outline-none transition-all focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100"
            />
          </Field>
        </div>

        <Button
          disabled={loading}
          onClick={handleSubmit}
          className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {loading ? (
            "Sending..."
          ) : (
            <span className="inline-flex items-center gap-2">
              <Send size={18} />
              Submit inquiry
            </span>
          )}
        </Button>
      </motion.div>
    </AuthModalShell>
  )
}

function Field({ label, icon: Icon, error, children, iconTop = false }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className={cn(
            "pointer-events-none absolute left-3.5 z-10 text-slate-400 dark:text-slate-500",
            iconTop ? "top-3.5" : "top-1/2 -translate-y-1/2"
          )}
        />
        {children}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
