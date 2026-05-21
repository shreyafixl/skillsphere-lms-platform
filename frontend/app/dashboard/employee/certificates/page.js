"use client"

import { Award, Download, Shield } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { EmployeeLayout, CertificatesPanel, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeCertificatesPage() {
  return (
    <EmployeeLayout topbarTitle="Certificates">
      {({ certificates, openViewCertificate }) => {
        const earned = certificates.filter((c) => c.status === "earned").length

        return (
          <EmployeePageSection className="space-y-6 sm:space-y-8">
            <PageHeader title="My Certificates" description="Download and share credentials you've earned." />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard title="Earned" value={String(earned)} growth="Verified" icon={<Award size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
              <StatsCard title="In Progress" value={String(certificates.length - earned)} growth="Almost there" icon={<Shield size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
              <StatsCard title="Shareable" value={String(earned)} growth="LinkedIn ready" icon={<Download size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
            </div>
            <CertificatesPanel certificates={certificates} onView={openViewCertificate} />
          </EmployeePageSection>
        )
      }}
    </EmployeeLayout>
  )
}
