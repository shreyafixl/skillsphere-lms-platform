"use client"

import { useCallback, useState } from "react"
import {
  TeamMemberViewModal,
  NudgeLearnerModal,
  TeamReportFormModal,
  ManagerFiltersModal,
  ManagerSettingsModal,
} from "./modals"
import {
  teamMembers as initialTeamMembers,
  reports as initialReports,
  managerInfo as initialManagerInfo,
} from "./manager-data"

export function useManagerState() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [reports, setReports] = useState(initialReports)
  const [managerInfo, setManagerInfo] = useState(initialManagerInfo)

  const [viewMemberModal, setViewMemberModal] = useState({
    open: false,
    member: null,
  })
  const [nudgeModal, setNudgeModal] = useState({ open: false, member: null })
  const [reportOpen, setReportOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [filtersModal, setFiltersModal] = useState({
    open: false,
    type: "team",
  })

  const openViewMember = useCallback(
    (member) => setViewMemberModal({ open: true, member }),
    []
  )
  const openNudgeMember = useCallback(
    (member) => setNudgeModal({ open: true, member }),
    []
  )
  const openCreateReport = useCallback(() => setReportOpen(true), [])
  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const openFilters = useCallback(
    (type) => setFiltersModal({ open: true, type }),
    []
  )

  const handleReportSuccess = useCallback((values) => {
    const typeMap = {
      performance: "Performance",
      completion: "Analytics",
      engagement: "Engagement",
      deadlines: "Analytics",
    }
    setReports((prev) => [
      {
        id: Date.now(),
        name: values.reportName,
        description: `Custom ${values.reportType} report for your team`,
        type: typeMap[values.reportType] || "Performance",
        updated: "Just now",
        size: values.format === "pdf" ? "2.1 MB" : "840 KB",
      },
      ...prev,
    ])
  }, [])

  const handleSettingsSuccess = useCallback((values) => {
    setManagerInfo((prev) => ({
      ...prev,
      admin: values.displayName,
    }))
  }, [])

  const modals = (
    <>
      <TeamMemberViewModal
        open={viewMemberModal.open}
        onOpenChange={(open) =>
          setViewMemberModal((m) => ({ ...m, open }))
        }
        member={viewMemberModal.member}
      />
      <NudgeLearnerModal
        open={nudgeModal.open}
        onOpenChange={(open) => setNudgeModal((m) => ({ ...m, open }))}
        member={nudgeModal.member}
      />
      <TeamReportFormModal
        open={reportOpen}
        onOpenChange={setReportOpen}
        onSuccess={handleReportSuccess}
      />
      <ManagerSettingsModal
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        initialName={managerInfo.admin}
        onSuccess={handleSettingsSuccess}
      />
      <ManagerFiltersModal
        open={filtersModal.open}
        onOpenChange={(open) => setFiltersModal((m) => ({ ...m, open }))}
        type={filtersModal.type}
      />
    </>
  )

  return {
    teamMembers,
    assignedLearners: teamMembers,
    reports,
    managerInfo,
    openViewMember,
    openNudgeMember,
    openCreateReport,
    openSettings,
    openFilters,
    modals,
  }
}
