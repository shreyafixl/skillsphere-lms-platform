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

const emptyAdd = {
  name: "",
  email: "",
  specialty: "",
  bio: "",
}

const emptyEdit = {
  name: "",
  email: "",
  specialty: "",
  status: "active",
  bio: "",
}

const rulesAdd = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  specialty: { required: true },
}

const rulesEdit = {
  name: { required: true, minLength: 2 },
  specialty: { required: true },
}

export default function TrainerFormModal({
  open,
  onOpenChange,
  mode = "add",
  initialData,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyAdd)
  const isEdit = mode === "edit"
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: isEdit
      ? "Trainer updated successfully"
      : "Trainer added successfully",
    onSuccess: (values) => {
      onSuccess?.(values, mode)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (!open) return
    clearErrors()
    if (isEdit && initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
        specialty: initialData.specialty || "",
        status: initialData.status || "active",
        bio: initialData.bio || "",
      })
    } else {
      setForm(emptyAdd)
    }
  }, [open, isEdit, initialData, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={isEdit ? "Edit Trainer" : "Add Trainer"}
      description={
        isEdit
          ? `Update trainer profile for ${initialData?.name || "this trainer"}.`
          : "Add a new trainer to your organization and assign specialties."
      }
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel={isEdit ? "Save Changes" : "Add Trainer"}
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, isEdit ? rulesEdit : rulesAdd)}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Full Name" name="name" required error={errors.name}>
            <FormInput
              id="name"
              value={form.name}
              error={errors.name}
              placeholder="Dr. Rachel Adams"
              onChange={(e) => update("name", e.target.value)}
            />
          </FormField>
          <FormField label="Email" name="email" required error={errors.email}>
            <FormInput
              id="email"
              type="email"
              value={form.email}
              error={errors.email}
              placeholder="trainer@company.com"
              disabled={isEdit}
              onChange={(e) => update("email", e.target.value)}
            />
          </FormField>
        </div>
        <FormField label="Specialty" name="specialty" required error={errors.specialty}>
          <FormInput
            id="specialty"
            value={form.specialty}
            error={errors.specialty}
            placeholder="Leadership, Compliance, Technical Skills..."
            onChange={(e) => update("specialty", e.target.value)}
          />
        </FormField>
        {isEdit && (
          <FormField label="Status" name="status">
            <FormSelect
              id="status"
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
            >
              <option value="active">Active</option>
              <option value="away">Away</option>
              <option value="inactive">Inactive</option>
            </FormSelect>
          </FormField>
        )}
        <FormField label="Bio" name="bio">
          <FormTextarea
            id="bio"
            placeholder="Brief professional background..."
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
