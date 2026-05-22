import { getInitials } from "@/lib/dashboard-profiles"

export { getInitials }

/**
 * Normalize profile props for ProfileDropdown (supports `avatar` or legacy `avatarInitials`).
 * @param {{ name?: string, email?: string, role?: string, avatar?: string, avatarInitials?: string }} params
 */
export function normalizeProfile({
  name = "Admin User",
  email = "",
  role = "Super Admin",
  avatar,
  avatarInitials,
}) {
  return {
    name,
    email,
    role,
    avatar: avatar ?? avatarInitials ?? getInitials(name),
  }
}

/** Resolve settings route from current dashboard pathname. */
export function getSettingsHrefFromPathname(pathname = "") {
  const match = pathname.match(/^\/dashboard\/([^/]+)/)
  const segment = match?.[1]

  const routes = {
    superadmin: "/dashboard/superadmin/settings",
    "tenant-admin": "/dashboard/tenant-admin/settings",
    manager: "/dashboard/manager/settings",
    trainer: "/dashboard/trainer/settings",
    employee: "/dashboard/employee/settings",
  }

  return (segment && routes[segment]) || "/dashboard/superadmin/settings"
}
