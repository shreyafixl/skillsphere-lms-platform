"use client"

import { useEffect, useState } from "react"
import DashboardModal from "../DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect } from "../FormLayout"
import { useFormSubmit } from "../useFormSubmit"

const emptyForm = {
  company: "",
  domain: "",
  plan: "Starter",
  status: "pending",
  adminEmail: "",
}

const rules = {
  company: { required: true, message: "Company name is required" },
  domain: { required: true, minLength: 3 },
  plan: { required: true },
  adminEmail: { required: true, email: true },
}

export default function TenantFormModal({
  open,
  onOpenChange,
  mode = "create",
  initialData,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: mode === "create" ? "Tenant created successfully" : "Tenant updated successfully",
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
          company: initialData.company || "",
          domain: initialData.domain || "",
          plan: initialData.plan || "Starter",
          status: initialData.status || "active",
          adminEmail: initialData.adminEmail || "",
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
      title={mode === "create" ? "Add Tenant" : "Edit Tenant"}
      description={
        mode === "create"
          ? "Onboard a new organization to the SkillSphere platform."
          : `Update details for ${initialData?.company || "this tenant"}.`
      }
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel={mode === "create" ? "Create Tenant" : "Save Changes"}
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Company Name" name="company" required error={errors.company}>
            <FormInput
              id="company"
              name="company"
              placeholder="Acme Corporation"
              value={form.company}
              error={errors.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </FormField>
          <FormField label="Domain" name="domain" required error={errors.domain}>
            <FormInput
              id="domain"
              name="domain"
              placeholder="acme.skillsphere.io"
              value={form.domain}
              error={errors.domain}
              onChange={(e) => update("domain", e.target.value)}
            />
          </FormField>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Plan" name="plan" required error={errors.plan}>
            <FormSelect
              id="plan"
              name="plan"
              value={form.plan}
              error={errors.plan}
              onChange={(e) => update("plan", e.target.value)}
            >
              <option value="Starter">Starter</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </FormSelect>
          </FormField>
          {mode === "edit" && (
            <FormField label="Status" name="status">
              <FormSelect
                id="status"
                name="status"
                value={form.status}
                onChange={(e) => update("status", e.target.value)}
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </FormSelect>
            </FormField>
          )}
        </div>
        <FormField label="Admin Email" name="adminEmail" required error={errors.adminEmail}>
          <FormInput
            id="adminEmail"
            name="adminEmail"
            type="email"
            placeholder="admin@company.com"
            value={form.adminEmail}
            error={errors.adminEmail}
            onChange={(e) => update("adminEmail", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
