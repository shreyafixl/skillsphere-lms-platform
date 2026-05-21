"use client"

import { useCallback, useState } from "react"
import {
  EmployeeFormModal,
  TrainerFormModal,
  AssignCourseModal,
  TenantReportFormModal,
  UploadCourseMaterialModal,
  SettingsFormModal,
  FiltersModal,
} from "./modals"
import {
  employees as initialEmployees,
  trainers as initialTrainers,
  courseAssignments as initialAssignments,
  reports as initialReports,
  tenantInfo as initialTenantInfo,
} from "./tenant-admin-data"

function formatDueDate(isoDate) {
  if (!isoDate) return "—"
  const d = new Date(isoDate)
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function useTenantAdminState() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [trainers, setTrainers] = useState(initialTrainers)
  const [assignments, setAssignments] = useState(initialAssignments)
  const [reports, setReports] = useState(initialReports)
  const [tenantInfo, setTenantInfo] = useState(initialTenantInfo)

  const [employeeModal, setEmployeeModal] = useState({
    open: false,
    mode: "add",
    data: null,
  })
  const [trainerModal, setTrainerModal] = useState({
    open: false,
    mode: "add",
    data: null,
  })
  const [assignCourseOpen, setAssignCourseOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [filtersModal, setFiltersModal] = useState({
    open: false,
    type: "employees",
  })

  const openAddEmployee = useCallback(
    () => setEmployeeModal({ open: true, mode: "add", data: null }),
    []
  )
  const openInviteEmployee = useCallback(
    () => setEmployeeModal({ open: true, mode: "invite", data: null }),
    []
  )
  const openEditEmployee = useCallback(
    (employee) =>
      setEmployeeModal({ open: true, mode: "edit", data: employee }),
    []
  )

  const openAddTrainer = useCallback(
    () => setTrainerModal({ open: true, mode: "add", data: null }),
    []
  )
  const openEditTrainer = useCallback(
    (trainer) => setTrainerModal({ open: true, mode: "edit", data: trainer }),
    []
  )

  const openAssignCourse = useCallback(() => setAssignCourseOpen(true), [])
  const openCreateReport = useCallback(() => setReportOpen(true), [])
  const openUploadMaterial = useCallback(() => setUploadOpen(true), [])
  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const openFilters = useCallback(
    (type) => setFiltersModal({ open: true, type }),
    []
  )

  const handleEmployeeSuccess = useCallback(
    (values, mode) => {
      if (mode === "edit" && employeeModal.data) {
        setEmployees((prev) =>
          prev.map((e) =>
            e.id === employeeModal.data.id
              ? {
                  ...e,
                  name: values.name,
                  department: values.department,
                  role: values.role,
                  status: values.status,
                }
              : e
          )
        )
        return
      }
      if (mode === "invite") {
        setEmployees((prev) => [
          ...prev,
          {
            id: Date.now(),
            name: values.email.split("@")[0],
            email: values.email,
            department: values.department,
            role: values.role,
            status: "pending",
            progress: 0,
            courses: 0,
          },
        ])
        return
      }
      setEmployees((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: values.name,
          email: values.email,
          department: values.department,
          role: values.role,
          status: "active",
          progress: 0,
          courses: 0,
        },
      ])
    },
    [employeeModal.data]
  )

  const handleTrainerSuccess = useCallback(
    (values, mode) => {
      if (mode === "edit" && trainerModal.data) {
        setTrainers((prev) =>
          prev.map((t) =>
            t.id === trainerModal.data.id
              ? {
                  ...t,
                  name: values.name,
                  specialty: values.specialty,
                  status: values.status,
                }
              : t
          )
        )
        return
      }
      setTrainers((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: values.name,
          email: values.email,
          specialty: values.specialty,
          courses: 0,
          learners: 0,
          rating: 5,
          status: "active",
        },
      ])
    },
    [trainerModal.data]
  )

  const handleAssignSuccess = useCallback((values) => {
    setAssignments((prev) => [
      ...prev,
      {
        id: Date.now(),
        course: values.course,
        trainer: values.trainer,
        assigned: values.audience === "all" ? 248 : 42,
        completed: 0,
        dueDate: formatDueDate(values.dueDate),
        status: "active",
      },
    ])
  }, [])

  const handleReportSuccess = useCallback((values) => {
    const typeMap = {
      analytics: "Analytics",
      compliance: "Compliance",
      performance: "Performance",
      engagement: "Engagement",
      enrollment: "Analytics",
    }
    setReports((prev) => [
      {
        id: Date.now(),
        name: values.reportName,
        description: `Custom ${values.reportType} report for your organization`,
        type: typeMap[values.reportType] || "Analytics",
        updated: "Just now",
        size: values.format === "pdf" ? "2.1 MB" : "840 KB",
      },
      ...prev,
    ])
  }, [])

  const handleSettingsSuccess = useCallback((values) => {
    setTenantInfo((prev) => ({
      ...prev,
      name: values.organization,
    }))
  }, [])

  const modals = (
    <>
      <EmployeeFormModal
        open={employeeModal.open}
        onOpenChange={(open) => setEmployeeModal((m) => ({ ...m, open }))}
        mode={employeeModal.mode}
        initialData={employeeModal.data}
        onSuccess={handleEmployeeSuccess}
      />
      <TrainerFormModal
        open={trainerModal.open}
        onOpenChange={(open) => setTrainerModal((m) => ({ ...m, open }))}
        mode={trainerModal.mode}
        initialData={trainerModal.data}
        onSuccess={handleTrainerSuccess}
      />
      <AssignCourseModal
        open={assignCourseOpen}
        onOpenChange={setAssignCourseOpen}
        onSuccess={handleAssignSuccess}
        trainers={trainers}
      />
      <TenantReportFormModal
        open={reportOpen}
        onOpenChange={setReportOpen}
        onSuccess={handleReportSuccess}
      />
      <UploadCourseMaterialModal
        open={uploadOpen}
        onOpenChange={setUploadOpen}
      />
      <SettingsFormModal
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        onSuccess={handleSettingsSuccess}
        initialOrganization={tenantInfo.name}
      />
      <FiltersModal
        open={filtersModal.open}
        onOpenChange={(open) => setFiltersModal((m) => ({ ...m, open }))}
        type={filtersModal.type}
      />
    </>
  )

  return {
    employees,
    trainers,
    assignments,
    reports,
    tenantInfo,
    openAddEmployee,
    openInviteEmployee,
    openEditEmployee,
    openAddTrainer,
    openEditTrainer,
    openAssignCourse,
    openCreateReport,
    openUploadMaterial,
    openSettings,
    openFilters,
    modals,
  }
}
