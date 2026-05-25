export const DEMO_PASSWORD = "demo123"

/** @type {const} */
export const demoAccounts = [
  {
    role: "Super Admin",
    email: "admin@skillsphere.com",
    route: "/dashboard/superadmin",
    icon: "Shield",
  },
  {
    role: "Tenant Admin",
    email: "tenant@skillsphere.com",
    route: "/dashboard/tenantadmin",
    icon: "Building2",
  },
  {
    role: "Manager",
    email: "manager@skillsphere.com",
    route: "/dashboard/manager",
    icon: "Users",
  },
  {
    role: "Trainer",
    email: "trainer@skillsphere.com",
    route: "/dashboard/trainer",
    icon: "GraduationCap",
  },
  {
    role: "Employee",
    email: "employee@skillsphere.com",
    route: "/dashboard/employee",
    icon: "User",
  },
]

export function getDemoAccountByEmail(email) {
  const normalized = email.trim().toLowerCase()
  return demoAccounts.find((account) => account.email === normalized) ?? null
}

export function mockAuthenticate(email, password) {
  const account = getDemoAccountByEmail(email)

  if (!account) {
    return {
      success: false,
      error: "Use one of the demo accounts below to sign in.",
    }
  }

  if (password !== DEMO_PASSWORD) {
    return {
      success: false,
      error: "Invalid password. Demo password is demo123.",
    }
  }

  return { success: true, route: account.route, account }
}
