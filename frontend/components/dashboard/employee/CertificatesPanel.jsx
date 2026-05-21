"use client"

import Link from "next/link"
import { Award, Download, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import StatusBadge from "./StatusBadge"
import { certificates as defaultCerts } from "./employee-data"

export default function CertificatesPanel({
  certificates = defaultCerts,
  limit,
  showViewAll = false,
  onView,
}) {
  const items = limit ? certificates.slice(0, limit) : certificates

  const handleDownload = (course) => {
    toast.success("Certificate download started", { description: course })
  }

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Certificates"
        subtitle="Credentials you've earned"
        action={
          showViewAll ? (
            <Link href="/dashboard/employee/certificates" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      <ul className="space-y-3">
        {items.map((cert) => (
          <li
            key={cert.id}
            className={cn(
              "flex flex-col gap-3 rounded-2xl border border-slate-100 p-4 transition-all duration-300 sm:flex-row sm:items-center",
              "hover:border-violet-200 hover:bg-violet-50/30 dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
            )}
          >
            <div className="flex min-w-0 flex-1 items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-500/15">
                <Award size={22} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{cert.course}</p>
                <p className="mt-0.5 text-xs text-slate-500">{cert.credentialId}</p>
                <p className="mt-1 text-xs text-slate-400">Issued {cert.issued}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <StatusBadge status={cert.status} />
              {cert.status === "earned" && (
                <>
                  <button
                    type="button"
                    onClick={() => handleDownload(cert.course)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-violet-200 hover:text-violet-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-violet-400"
                  >
                    <Download size={14} />
                    Download
                  </button>
                  <button
                    type="button"
                    onClick={() => onView?.(cert)}
                    className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:hover:bg-violet-500/10 dark:hover:text-violet-400"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={16} />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}
