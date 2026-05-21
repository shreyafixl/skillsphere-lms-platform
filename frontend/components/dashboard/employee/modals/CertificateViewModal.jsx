"use client"

import { Award, Download } from "lucide-react"
import { toast } from "sonner"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"

export default function CertificateViewModal({ open, onOpenChange, certificate }) {
  if (!certificate) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Certificate"
      description={certificate.course}
    >
      <div className="flex flex-col items-center p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-500/30">
          <Award size={40} className="text-white" />
        </div>
        <p className="mt-6 text-lg font-bold text-slate-900 dark:text-slate-50">{certificate.course}</p>
        <p className="mt-2 text-sm text-slate-500">Credential ID: {certificate.credentialId}</p>
        <p className="mt-1 text-sm text-slate-500">Issued {certificate.issued}</p>
        <button
          type="button"
          onClick={() => {
            toast.success("Certificate downloaded")
            onOpenChange(false)
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>
    </DashboardModal>
  )
}
