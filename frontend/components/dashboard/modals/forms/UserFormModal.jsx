"use client"

import { useEffect, useState } from "react"
import DashboardModal from "../DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect } from "../FormLayout"
import { useFormSubmit } from "../useFormSubmit"

const emptyForm = {
  name: "",
  email: "",
  tenant: "",
  role: "Learner",
  status: "active",
}

const rules = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  tenant: { required: true },
  role: { required: true },
}

const tenants = [
  "Acme Corporation",
  "TechFlow Inc",
  "LearnHub Academy",
  "GlobalEdu Partners",
  "NovaLearn",
]

export default function UserFormModal({
  open,
  onOpenChange,
  mode = "invite",
  initialData,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: mode === "invite" ? "Invitation sent successfully" : "User updated successfully",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      if (mode === "edit" && initialData) {
        setForm({
          name: initialData.name || "",
          email: initialData.email || "",
          tenant: initialData.tenant || "",
          role: initialData.role || "Learner",
          status: initialData.status || "active",
        })
      } else {
        setForm(emptyForm)
      }
    }
  }, [open, mode, initialData, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={mode === "invite" ? "Invite User" : "Edit User"}
      description={
        mode === "invite"
          ? "Send an invitation to join a tenant on the platform."
          : `Update profile for ${initialData?.name || "this user"}.`
      }
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel={mode === "invite" ? "Send Invitation" : "Save Changes"}
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full Name" name="name" required error={errors.name}>
            <FormInput
              id="name"
              name="name"
              placeholder="Jane Doe"
              value={form.name}
              error={errors.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </FormField>
          <FormField label="Email" name="email" required error={errors.email}>
            <FormInput
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              error={errors.email}
              onChange={(e) => update("email", e.target.value)}
              disabled={mode === "edit"}
            />
          </FormField>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Tenant" name="tenant" required error={errors.tenant}>
            <FormSelect
              id="tenant"
              name="tenant"
              value={form.tenant}
              error={errors.tenant}
              onChange={(e) => update("tenant", e.target.value)}
            >
              <option value="">Select tenant</option>
              {tenants.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </FormSelect>
          </FormField>
          <FormField label="Role" name="role" required error={errors.role}>
            <FormSelect
              id="role"
              name="role"
              value={form.role}
              error={errors.role}
              onChange={(e) => update("role", e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Trainer">Trainer</option>
              <option value="Learner">Learner</option>
            </FormSelect>
          </FormField>
        </div>
        {mode === "edit" && (
          <FormField label="Status" name="status">
            <FormSelect
              id="status"
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </FormSelect>
          </FormField>
        )}
      </FormLayout>
    </DashboardModal>
  )
}
