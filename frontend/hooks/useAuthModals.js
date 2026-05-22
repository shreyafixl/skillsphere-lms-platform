"use client"

import { useCallback, useState } from "react"

/** @typedef {'login' | 'signup' | null} AuthModalView */
/** @typedef {'basic' | 'pro' | null} SelectedSignupPlan */

/**
 * Reusable landing auth modal state (login ↔ signup + pricing plan preselect).
 */
export function useAuthModals() {
  const [activeModal, setActiveModal] = useState(/** @type {AuthModalView} */ (null))
  const [selectedPlan, setSelectedPlan] = useState(/** @type {SelectedSignupPlan} */ (null))

  const openLogin = useCallback(() => {
    setSelectedPlan(null)
    setActiveModal("login")
  }, [])

  const openSignup = useCallback(() => {
    setSelectedPlan(null)
    setActiveModal("signup")
  }, [])

  const openSignupWithPlan = useCallback((/** @type {SelectedSignupPlan} */ planId) => {
    setSelectedPlan(planId)
    setActiveModal("signup")
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    setSelectedPlan(null)
  }, [])

  const switchToLogin = useCallback(() => {
    setSelectedPlan(null)
    setActiveModal("login")
  }, [])

  const switchToSignup = useCallback(() => {
    setActiveModal("signup")
  }, [])

  return {
    activeModal,
    selectedPlan,
    isLoginOpen: activeModal === "login",
    isSignupOpen: activeModal === "signup",
    openLogin,
    openSignup,
    openSignupWithPlan,
    closeModal,
    switchToLogin,
    switchToSignup,
  }
}
