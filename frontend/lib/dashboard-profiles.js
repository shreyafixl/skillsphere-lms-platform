/**
 * Mock user profiles for dashboard topbars (frontend-only).
 * Import the profile for each dashboard — do not duplicate dropdown UI per role.
 */

/** @typedef {{ name: string, email: string, role: string, avatar: string }} DashboardProfile */

export function getInitials(name) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("") || "U"
  )
}

/** @type {Record<string, DashboardProfile>} */
export const dashboardProfiles = {
  superadmin: {
    name: "Alex Morgan",
    email: "admin@skillsphere.com",
    role: "Super Admin",
    avatar: "AM",
  },
  manager: {
    name: "Manager User",
    email: "manager@skillsphere.com",
    role: "Manager",
    avatar: "MG",
  },
  
  "tenantadmin": {
    name: "Tenant Admin",
    email: "tenant@skillsphere.com",
    role: "Tenant Admin",
    avatar: "TA",
  
  },
  trainer: {
    name: "Marcus Webb",
    email: "trainer@skillsphere.com",
    role: "Trainer",
    avatar: "MW",
  },
  employee: {
    name: "Sarah Chen",
    email: "employee@skillsphere.com",
    role: "Employee",
    avatar: "SC",
  },
}
