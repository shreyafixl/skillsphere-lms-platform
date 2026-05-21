"use client"

import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function FormField({
  label,
  name,
  error,
  required,
  children,
  className,
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label}
        {required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-rose-600 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClassName =
  "h-11 w-full rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-violet-500/50 dark:focus:bg-slate-800 dark:focus:ring-violet-500/20 aria-invalid:border-rose-400 aria-invalid:ring-rose-500/20"

export function FormInput({ error, className, ...props }) {
  return (
    <input
      className={cn(inputClassName, error && "border-rose-400", className)}
      aria-invalid={!!error}
      {...props}
    />
  )
}

export function FormSelect({ error, className, children, ...props }) {
  return (
    <select
      className={cn(inputClassName, "cursor-pointer appearance-none", error && "border-rose-400", className)}
      aria-invalid={!!error}
      {...props}
    >
      {children}
    </select>
  )
}

export function FormTextarea({ error, className, ...props }) {
  return (
    <textarea
      className={cn(
        inputClassName,
        "min-h-[100px] resize-y py-3",
        error && "border-rose-400",
        className
      )}
      aria-invalid={!!error}
      {...props}
    />
  )
}

export default function FormLayout({
  children,
  onSubmit,
  onCancel,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  loading = false,
  footer,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
      className="flex flex-col"
    >
      <div className="space-y-5 px-6 py-5">{children}</div>
      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-4 sm:flex-row sm:justify-end dark:border-slate-800 dark:bg-slate-900/50">
        {footer ?? (
          <>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={loading}
              className="h-11 rounded-xl border-slate-200 px-5 dark:border-slate-700"
            >
              {cancelLabel}
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="h-11 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-violet-600"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Saving...
                </>
              ) : (
                submitLabel
              )}
            </Button>
          </>
        )}
      </div>
    </form>
  )
}
