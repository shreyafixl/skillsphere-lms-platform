"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { departments } from "../tenant-admin-data"

const emptyAdd = {
  name: "",
  email: "",
  department: "",
  role: "Developer",
}

const emptyInvite = {
  email: "",
  department: "",
  role: "Developer",
  message: "",
}

const emptyEdit = {
  name: "",
  email: "",
  department: "",
  role: "",
  status: "active",
}

const rulesByMode = {
  add: {
    name: { required: true, minLength: 2 },
    email: { required: true, email: true },
    department: { required: true },
    role: { required: true },
  },
  invite: {
    email: { required: true, email: true },
    department: { required: true },
    role: { required: true },
  },
  edit: {
    name: { required: true, minLength: 2 },
    department: { required: true },
    role: { required: true },
  },
}

const copy = {
  add: {
    title: "Add Employee",
    description: "Create a new employee profile and assign them to a department.",
    submit: "Add Employee",
    success: "Employee added successfully",
  },
  invite: {
    title: "Invite Employee",
    description: "Send an email invitation to join your organization workspace.",
    submit: "Send Invitation",
    success: "Invitation sent successfully",
  },
  edit: {
    title: "Edit Employee",
    description: "Update employee details, department, and status.",
    submit: "Save Changes",
    success: "Employee updated successfully",
  },
}

export default function EmployeeFormModal({
  open,
  onOpenChange,
  mode = "add",
  initialData,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyAdd)
  const meta = copy[mode] ?? copy.add
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: meta.success,
    onSuccess: (values) => {
      onSuccess?.(values, mode)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (!open) return
    clearErrors()
    if (mode === "edit" && initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        department: initialData.department || "",
        role: initialData.role || "Developer",
        status: initialData.status || "active",
      })
    } else if (mode === "invite") {
      setForm(emptyInvite)
    } else {
      setForm(emptyAdd)
    }
  }, [open, mode, initialData, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={meta.title}
      description={
        mode === "edit" && initialData?.name
          ? `Update profile for ${initialData.name}.`
          : meta.description
      }
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel={meta.submit}
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rulesByMode[mode])}
      >
        {mode !== "invite" && (
          <FormField label="Full Name" name="name" required error={errors.name}>
            <FormInput
              id="name"
              value={form.name}
              error={errors.name}
              placeholder="Jane Doe"
              onChange={(e) => update("name", e.target.value)}
            />
          </FormField>
        )}
        <FormField label="Work Email" name="email" required error={errors.email}>
          <FormInput
            id="email"
            type="email"
            value={form.email}
            error={errors.email}
            placeholder="jane@company.com"
            disabled={mode === "edit"}
            onChange={(e) => update("email", e.target.value)}
          />
        </FormField>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Department" name="department" required error={errors.department}>
            <FormSelect
              id="department"
              value={form.department}
              error={errors.department}
              onChange={(e) => update("department", e.target.value)}
            >
              <option value="">Select department</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </FormSelect>
          </FormField>
          <FormField label="Role" name="role" required error={errors.role}>
            <FormSelect
              id="role"
              value={form.role}
              error={errors.role}
              onChange={(e) => update("role", e.target.value)}
            >
              <option value="Developer">Developer</option>
              <option value="Manager">Manager</option>
              <option value="Analyst">Analyst</option>
              <option value="Specialist">Specialist</option>
              <option value="Lead">Lead</option>
            </FormSelect>
          </FormField>
        </div>
        {mode === "invite" && (
          <FormField label="Personal Message" name="message">
            <FormTextarea
              id="message"
              placeholder="Optional welcome message for the invitation email..."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </FormField>
        )}
        {mode === "edit" && (
          <FormField label="Status" name="status">
            <FormSelect
              id="status"
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </FormSelect>
          </FormField>
        )}
      </FormLayout>
    </DashboardModal>
  )
}
