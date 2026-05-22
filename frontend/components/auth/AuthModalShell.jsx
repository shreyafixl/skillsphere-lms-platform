"use client"

import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 8,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
}

export default function AuthModalShell({ open, onClose, children, className }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="auth-modal-backdrop"
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className={cn("w-full max-w-md", className)}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
