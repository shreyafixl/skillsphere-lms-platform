"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function DashboardModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  size = "default",
}) {
  const sizeClasses = {
    sm: "sm:max-w-md",
    default: "sm:max-w-lg",
    lg: "sm:max-w-2xl",
    xl: "sm:max-w-3xl",
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className={cn(
          "max-h-[min(90vh,900px)] gap-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-0 shadow-2xl shadow-violet-500/10",
          "duration-300 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          "dark:border-slate-800/80 dark:bg-slate-900 dark:shadow-black/40",
          "[&_[data-slot=dialog-close]]:top-4 [&_[data-slot=dialog-close]]:right-4",
          sizeClasses[size],
          className
        )}
      >
        <DialogHeader className="shrink-0 border-b border-slate-100 px-6 py-5 dark:border-slate-800">
          <DialogTitle className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-sm text-slate-500 dark:text-slate-400">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
