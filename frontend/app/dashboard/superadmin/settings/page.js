"use client"

import { useState } from "react"
import { useTheme } from "@/components/providers/ThemeProvider"
import {
  User,
  Bell,
  Shield,
  Moon,
  Sun,
  Monitor,
  Key,
  Smartphone,
  Mail,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"

function Toggle({ enabled, onChange, label, description }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{label}</p>
        {description && (
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{description}</p>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300",
          enabled ? "bg-violet-600" : "bg-slate-200 dark:bg-slate-700"
        )}
      >
        <span
          className={cn(
            "absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300",
            enabled && "translate-x-5"
          )}
        />
      </button>
    </div>
  )
}

function SettingsRow({ icon: Icon, label, value, action }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 last:border-0 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-500/15">
          <Icon size={18} className="text-violet-600 dark:text-violet-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{label}</p>
          {value && <p className="text-xs text-slate-500 dark:text-slate-400">{value}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    tenantAlerts: true,
    weeklyReport: false,
    securityAlerts: true,
  })
  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionAlerts: true,
    loginNotifications: true,
  })

  const themeOptions = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor },
  ]

  return (
    <DashboardLayout topbarTitle="Settings">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Settings"
          description="Manage your profile, notifications, appearance, and security preferences."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DashboardCard>
            <SectionHeader title="Profile Settings" subtitle="Your super admin account details" />
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6 dark:border-slate-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xl font-bold text-white shadow-lg">
                A
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Admin User</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">admin@skillsphere.io</p>
                <span className="mt-2 inline-flex rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  Super Admin
                </span>
              </div>
            </div>
            <div className="mt-2 space-y-0">
              <SettingsRow icon={User} label="Full Name" value="Admin User" action={<button type="button" className="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">Edit</button>} />
              <SettingsRow icon={Mail} label="Email Address" value="admin@skillsphere.io" action={<button type="button" className="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">Edit</button>} />
              <SettingsRow icon={Globe} label="Timezone" value="UTC-05:00 Eastern" action={<button type="button" className="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">Change</button>} />
            </div>
          </DashboardCard>

          <DashboardCard>
            <SectionHeader title="Theme Settings" subtitle="Customize dashboard appearance" />
            <div className="grid grid-cols-3 gap-3">
              {themeOptions.map((option) => {
                const Icon = option.icon
                const isActive = theme === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setTheme(option.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all duration-300",
                      isActive
                        ? "border-violet-500 bg-violet-50 shadow-md shadow-violet-500/10 dark:border-violet-500 dark:bg-violet-500/15"
                        : "border-slate-200/80 hover:border-violet-200 dark:border-slate-700 dark:hover:border-violet-500/40"
                    )}
                  >
                    <Icon
                      size={22}
                      className={cn(
                        isActive ? "text-violet-600 dark:text-violet-400" : "text-slate-500 dark:text-slate-400"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-violet-700 dark:text-violet-300" : "text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {option.label}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Theme preference is saved automatically and persists across sessions.
            </p>
          </DashboardCard>

          <DashboardCard>
            <SectionHeader title="Notification Settings" subtitle="Control how you receive updates" />
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <Toggle
                enabled={notifications.email}
                onChange={(v) => setNotifications((n) => ({ ...n, email: v }))}
                label="Email notifications"
                description="Receive updates via email"
              />
              <Toggle
                enabled={notifications.push}
                onChange={(v) => setNotifications((n) => ({ ...n, push: v }))}
                label="Push notifications"
                description="Browser and mobile alerts"
              />
              <Toggle
                enabled={notifications.tenantAlerts}
                onChange={(v) => setNotifications((n) => ({ ...n, tenantAlerts: v }))}
                label="Tenant alerts"
                description="New tenant onboarding and status changes"
              />
              <Toggle
                enabled={notifications.weeklyReport}
                onChange={(v) => setNotifications((n) => ({ ...n, weeklyReport: v }))}
                label="Weekly analytics report"
                description="Summary delivered every Monday"
              />
              <Toggle
                enabled={notifications.securityAlerts}
                onChange={(v) => setNotifications((n) => ({ ...n, securityAlerts: v }))}
                label="Security alerts"
                description="Critical security events only"
              />
            </div>
          </DashboardCard>

          <DashboardCard>
            <SectionHeader title="Security Settings" subtitle="Protect your admin account" />
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <Toggle
                enabled={security.twoFactor}
                onChange={(v) => setSecurity((s) => ({ ...s, twoFactor: v }))}
                label="Two-factor authentication"
                description="Require OTP on login"
              />
              <Toggle
                enabled={security.sessionAlerts}
                onChange={(v) => setSecurity((s) => ({ ...s, sessionAlerts: v }))}
                label="Session alerts"
                description="Notify on new device login"
              />
              <Toggle
                enabled={security.loginNotifications}
                onChange={(v) => setSecurity((s) => ({ ...s, loginNotifications: v }))}
                label="Login notifications"
                description="Email on every sign-in"
              />
            </div>
            <div className="mt-4 space-y-0 border-t border-slate-100 pt-4 dark:border-slate-800">
              <SettingsRow
                icon={Key}
                label="Change Password"
                value="Last changed 30 days ago"
                action={
                  <button type="button" className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10">
                    Update
                  </button>
                }
              />
              <SettingsRow
                icon={Smartphone}
                label="Authenticated Devices"
                value="2 devices connected"
                action={
                  <button type="button" className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10">
                    Manage
                  </button>
                }
              />
              <SettingsRow
                icon={Shield}
                label="API Keys"
                value="3 active keys"
                action={
                  <button type="button" className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10">
                    View
                  </button>
                }
              />
            </div>
          </DashboardCard>
        </div>

        <DashboardCard className="border-rose-200/50 dark:border-rose-900/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 dark:bg-rose-500/15">
                <Bell size={18} className="text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Danger Zone</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Sign out of all devices or deactivate admin account
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-xl border border-rose-200 px-4 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-500/10"
            >
              Sign Out All Devices
            </button>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}
