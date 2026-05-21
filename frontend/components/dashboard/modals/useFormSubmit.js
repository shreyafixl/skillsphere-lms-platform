"use client"

import { useState, useCallback } from "react"
import { toast } from "sonner"

export function validateFields(values, rules) {
  const errors = {}
  for (const [key, rule] of Object.entries(rules)) {
    const value = values[key]
    const trimmed = typeof value === "string" ? value.trim() : value

    if (rule.required && !trimmed) {
      errors[key] = rule.message || "This field is required"
      continue
    }
    if (rule.email && trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      errors[key] = "Enter a valid email address"
    }
    if (rule.minLength && trimmed && trimmed.length < rule.minLength) {
      errors[key] = `Must be at least ${rule.minLength} characters`
    }
  }
  return errors
}

export function useFormSubmit({ onSuccess, successMessage = "Saved successfully" }) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const submit = useCallback(
    async (values, rules, submitFn) => {
      const validationErrors = validateFields(values, rules)
      setErrors(validationErrors)
      if (Object.keys(validationErrors).length > 0) {
        toast.error("Please fix the errors below")
        return
      }

      setLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200))
        if (submitFn) await submitFn(values)
        toast.success(successMessage)
        onSuccess?.(values)
      } catch {
        toast.error("Something went wrong. Please try again.")
      } finally {
        setLoading(false)
      }
    },
    [onSuccess, successMessage]
  )

  const clearErrors = useCallback(() => setErrors({}), [])

  return { loading, errors, setErrors, submit, clearErrors }
}
