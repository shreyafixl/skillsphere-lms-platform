"use client"

import { useEffect, useState } from "react"
import DashboardModal from "../DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect, FormTextarea } from "../FormLayout"
import { useFormSubmit } from "../useFormSubmit"

const emptyForm = {
  name: "",
  email: "",
  tenant: "",
  expertise: "",
  bio: "",
}

const rules = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  tenant: { required: true },
  expertise: { required: true },
}

export default function TrainerFormModal({ open, onOpenChange, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Trainer added successfully",
    onSuccess: (values) => {
      onSuccess?.(values)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      setForm(emptyForm)
    }
  }, [open, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Add Trainer"
      description="Invite a new instructor to the platform."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Add Trainer"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full Name" name="name" required error={errors.name}>
            <FormInput
              id="name"
              name="name"
              placeholder="Dr. Rachel Adams"
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
              placeholder="trainer@company.com"
              value={form.email}
              error={errors.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </FormField>
        </div>
        <FormField label="Tenant" name="tenant" required error={errors.tenant}>
          <FormSelect
            id="tenant"
            name="tenant"
            value={form.tenant}
            error={errors.tenant}
            onChange={(e) => update("tenant", e.target.value)}
          >
            <option value="">Select tenant</option>
            <option value="Platform">Platform (Global)</option>
            <option value="Acme Corporation">Acme Corporation</option>
            <option value="TechFlow Inc">TechFlow Inc</option>
            <option value="GlobalEdu Partners">GlobalEdu Partners</option>
          </FormSelect>
        </FormField>
        <FormField label="Expertise Tags" name="expertise" required error={errors.expertise}>
          <FormInput
            id="expertise"
            name="expertise"
            placeholder="React, TypeScript, Leadership (comma-separated)"
            value={form.expertise}
            error={errors.expertise}
            onChange={(e) => update("expertise", e.target.value)}
          />
        </FormField>
        <FormField label="Bio" name="bio">
          <FormTextarea
            id="bio"
            name="bio"
            placeholder="Brief professional background..."
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
