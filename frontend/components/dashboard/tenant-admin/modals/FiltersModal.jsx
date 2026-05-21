"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormSelect } from "@/components/dashboard/modals/FormLayout"
import { toast } from "sonner"

const filterConfig = {
  employees: {
    title: "Filter Employees",
    description: "Narrow the employee list by department and status.",
    fields: ["department", "status"],
  },
  trainers: {
    title: "Filter Trainers",
    description: "Filter trainers by specialty and availability.",
    fields: ["specialty", "status"],
  },
  courses: {
    title: "Filter Assignments",
    description: "Filter course assignments by status and trainer.",
    fields: ["status", "trainer"],
  },
}

export default function FiltersModal({
  open,
  onOpenChange,
  type = "employees",
  onApply,
}) {
  const [filters, setFilters] = useState({
    department: "",
    status: "",
    specialty: "",
    trainer: "",
  })
  const config = filterConfig[type] ?? filterConfig.employees

  useEffect(() => {
    if (open) {
      setFilters({
        department: "",
        status: "",
        specialty: "",
        trainer: "",
      })
    }
  }, [open, type])

  const handleApply = (e) => {
    e.preventDefault()
    onApply?.(filters)
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
        onCancel={() => {
          setFilters({
            department: "",
            status: "",
            specialty: "",
            trainer: "",
          })
          onOpenChange(false)
        }}
        onSubmit={handleApply}
      >
        {type === "employees" && (
          <>
            <FormField label="Department" name="department">
              <FormSelect
                value={filters.department}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, department: e.target.value }))
                }
              >
                <option value="">All departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </FormSelect>
            </FormField>
            <FormField label="Status" name="status">
              <FormSelect
                value={filters.status}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, status: e.target.value }))
                }
              >
                <option value="">All statuses</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </FormSelect>
            </FormField>
          </>
        )}
        {type === "trainers" && (
          <>
            <FormField label="Specialty" name="specialty">
              <FormSelect
                value={filters.specialty}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, specialty: e.target.value }))
                }
              >
                <option value="">All specialties</option>
                <option value="Leadership">Leadership</option>
                <option value="Compliance">Compliance</option>
                <option value="Technical Skills">Technical Skills</option>
              </FormSelect>
            </FormField>
            <FormField label="Status" name="status">
              <FormSelect
                value={filters.status}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, status: e.target.value }))
                }
              >
                <option value="">All statuses</option>
                <option value="active">Active</option>
                <option value="away">Away</option>
              </FormSelect>
            </FormField>
          </>
        )}
        {type === "courses" && (
          <>
            <FormField label="Status" name="status">
              <FormSelect
                value={filters.status}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, status: e.target.value }))
                }
              >
                <option value="">All statuses</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="draft">Draft</option>
              </FormSelect>
            </FormField>
            <FormField label="Trainer" name="trainer">
              <FormSelect
                value={filters.trainer}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, trainer: e.target.value }))
                }
              >
                <option value="">All trainers</option>
                <option value="Marcus Webb">Marcus Webb</option>
                <option value="Priya Sharma">Priya Sharma</option>
              </FormSelect>
            </FormField>
          </>
        )}
      </FormLayout>
    </DashboardModal>
  )
}
