"use client"

import { useCallback, useState } from "react"

/** @typedef {'login' | 'signup' | null} AuthModalView */

/**
 * Reusable auth modal state for landing-page login ↔ signup switching.
 */
export function useAuthModals() {
  const [activeModal, setActiveModal] = useState(/** @type {AuthModalView} */ (null))

  const openLogin = useCallback(() => setActiveModal("login"), [])
  const openSignup = useCallback(() => setActiveModal("signup"), [])
  const closeModal = useCallback(() => setActiveModal(null), [])
  const switchToLogin = useCallback(() => setActiveModal("login"), [])
  const switchToSignup = useCallback(() => setActiveModal("signup"), [])

  return {
    activeModal,
    isLoginOpen: activeModal === "login",
    isSignupOpen: activeModal === "signup",
    openLogin,
    openSignup,
    closeModal,
    switchToLogin,
    switchToSignup,
  }
}
