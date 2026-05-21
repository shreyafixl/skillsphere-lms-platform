"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormSelect } from "@/components/dashboard/modals/FormLayout"
import { toast } from "sonner"

const filterConfig = {
  courses: { title: "Filter Courses", description: "Filter by category and status." },
  students: { title: "Filter Students", description: "Filter by course and progress status." },
  sessions: { title: "Filter Sessions", description: "Filter by format and status." },
  submissions: { title: "Filter Submissions", description: "Filter by grading status." },
}

export default function TrainerFiltersModal({ open, onOpenChange, type = "courses" }) {
  const [filters, setFilters] = useState({ category: "", status: "", course: "" })
  const config = filterConfig[type] ?? filterConfig.courses

  useEffect(() => {
    if (open) setFilters({ category: "", status: "", course: "" })
  }, [open, type])

  return (
    <DashboardModal open={open} onOpenChange={onOpenChange} title={config.title} description={config.description}>
      <FormLayout
        submitLabel="Apply Filters"
        cancelLabel="Clear"
        onCancel={() => onOpenChange(false)}
        onSubmit={(e) => {
          e.preventDefault()
          toast.success("Filters applied")
          onOpenChange(false)
        }}
      >
        {type === "courses" && (
          <>
            <FormField label="Category" name="category">
              <FormSelect value={filters.category} onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}>
                <option value="">All categories</option>
                <option value="Technology">Technology</option>
                <option value="Compliance">Compliance</option>
              </FormSelect>
            </FormField>
            <FormField label="Status" name="status">
              <FormSelect value={filters.status} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}>
                <option value="">All statuses</option>
                <option value="live">Live</option>
                <option value="draft">Draft</option>
                <option value="completed">Completed</option>
              </FormSelect>
            </FormField>
          </>
        )}
        {type === "students" && (
          <>
            <FormField label="Course" name="course">
              <FormSelect value={filters.course} onChange={(e) => setFilters((f) => ({ ...f, course: e.target.value }))}>
                <option value="">All courses</option>
                <option value="React Advanced Patterns">React Advanced Patterns</option>
                <option value="Security Awareness 2025">Security Awareness 2025</option>
              </FormSelect>
            </FormField>
            <FormField label="Status" name="status">
              <FormSelect value={filters.status} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}>
                <option value="">All statuses</option>
                <option value="active">Active</option>
                <option value="at-risk">At risk</option>
                <option value="completed">Completed</option>
              </FormSelect>
            </FormField>
          </>
        )}
        {(type === "sessions" || type === "submissions") && (
          <FormField label="Status" name="status">
            <FormSelect value={filters.status} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value }))}>
              <option value="">All statuses</option>
              {type === "sessions" ? (
                <>
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="draft">Draft</option>
                </>
              ) : (
                <>
                  <option value="pending">Pending</option>
                  <option value="graded">Graded</option>
                </>
              )}
            </FormSelect>
          </FormField>
        )}
      </FormLayout>
    </DashboardModal>
  )
}
