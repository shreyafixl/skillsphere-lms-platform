/** @typedef {'basic' | 'pro' | 'enterprise'} PricingPlanId */

/** @type {Record<'basic' | 'pro', { id: string, label: string, price: number, featured?: boolean }>} */
export const pricingPlans = {
  basic: {
    id: "basic",
    label: "Basic Plan",
    price: 19,
  },
  pro: {
    id: "pro",
    label: "Pro Plan",
    price: 49,
    featured: true,
  },
  enterprise: {
    id: "enterprise",
    label: "Enterprise Plan",
    price: 99,
  },
}

export function getPricingPlan(planId) {
  return pricingPlans[planId] ?? null
}
