"use client"

import { AnimatePresence, motion } from "framer-motion"

import AuthModalShell from "@/components/auth/AuthModalShell"
import LoginModal from "@/components/auth/LoginModal"
import SignupModal from "@/components/auth/SignupModal"

const swapVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.18 } },
}

export default function AuthModals({
  activeModal,
  onClose,
  switchToLogin,
  switchToSignup,
  selectedPlan = null,
}) {
  const isOpen = activeModal === "login" || activeModal === "signup"

  return (
    <AuthModalShell open={isOpen} onClose={onClose}>
      <AnimatePresence mode="wait">
        {activeModal === "login" && (
          <motion.div
            key="login"
            variants={swapVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <LoginModal
              variant="embedded"
              onClose={onClose}
              onSwitchToSignup={switchToSignup}
            />
          </motion.div>
        )}
        {activeModal === "signup" && (
          <motion.div
            key="signup"
            variants={swapVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <SignupModal
              variant="modal"
              onClose={onClose}
              onSwitchToLogin={switchToLogin}
              selectedPlan={selectedPlan}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthModalShell>
  )
}
