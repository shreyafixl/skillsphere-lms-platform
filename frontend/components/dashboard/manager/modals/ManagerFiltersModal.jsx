"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormSelect } from "@/components/dashboard/modals/FormLayout"
import { toast } from "sonner"

const filterConfig = {
  team: {
    title: "Filter Team",
    description: "Narrow your team list by role and status.",
  },
  progress: {
    title: "Filter Progress",
    description: "Filter learners by progress and activity status.",
  },
}

export default function ManagerFiltersModal({
  open,
  onOpenChange,
  type = "team",
}) {
  const [filters, setFilters] = useState({ role: "", status: "", progress: "" })
  const config = filterConfig[type] ?? filterConfig.team

  useEffect(() => {
    if (open) setFilters({ role: "", status: "", progress: "" })
  }, [open, type])

  const handleApply = (e) => {
    e.preventDefault()
    toast.success("Filters applied", {
      description: "List updated with your filter criteria.",
    })
    onOpenChange(false)
  }

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={config.title}
      description={config.description}
      size="default"
    >
      <FormLayout
        submitLabel="Apply Filters"
        cancelLabel="Clear"
        onCancel={() => onOpenChange(false)}
        onSubmit={handleApply}
      >
        <FormField label="Role" name="role">
          <FormSelect
            value={filters.role}
            onChange={(e) => setFilters((f) => ({ ...f, role: e.target.value }))}
          >
            <option value="">All roles</option>
            <option value="Developer">Developer</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
          </FormSelect>
        </FormField>
        <FormField label="Status" name="status">
          <FormSelect
            value={filters.status}
            onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}
          >
            <option value="">All statuses</option>
            <option value="active">Active</option>
            <option value="at-risk">At risk</option>
            <option value="pending">Pending</option>
          </FormSelect>
        </FormField>
        {type === "progress" && (
          <FormField label="Min. progress" name="progress">
            <FormSelect
              value={filters.progress}
              onChange={(e) =>
                setFilters((f) => ({ ...f, progress: e.target.value }))
              }
            >
              <option value="">Any progress</option>
              <option value="50">50%+</option>
              <option value="75">75%+</option>
              <option value="90">90%+</option>
            </FormSelect>
          </FormField>
        )}
      </FormLayout>
    </DashboardModal>
  )
}
