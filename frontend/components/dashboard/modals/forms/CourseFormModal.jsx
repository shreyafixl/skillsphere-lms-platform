"use client"

import { useEffect, useState } from "react"
import DashboardModal from "../DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect, FormTextarea } from "../FormLayout"
import { useFormSubmit } from "../useFormSubmit"

const emptyForm = {
  title: "",
  category: "",
  duration: "",
  description: "",
  status: "draft",
}

const rules = {
  title: { required: true, minLength: 3 },
  category: { required: true },
  duration: { required: true },
  description: { required: true, minLength: 10 },
}

const categories = ["Technology", "Leadership", "Compliance", "Sales", "Soft Skills"]

export default function CourseFormModal({ open, onOpenChange, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Course uploaded successfully",
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
      title="Upload Course"
      description="Add new learning content to the platform catalog."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Upload Course"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <FormField label="Course Title" name="title" required error={errors.title}>
          <FormInput
            id="title"
            name="title"
            placeholder="Advanced React Patterns"
            value={form.title}
            error={errors.title}
            onChange={(e) => update("title", e.target.value)}
          />
        </FormField>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Category" name="category" required error={errors.category}>
            <FormSelect
              id="category"
              name="category"
              value={form.category}
              error={errors.category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </FormSelect>
          </FormField>
          <FormField label="Duration" name="duration" required error={errors.duration}>
            <FormInput
              id="duration"
              name="duration"
              placeholder="e.g. 12h"
              value={form.duration}
              error={errors.duration}
              onChange={(e) => update("duration", e.target.value)}
            />
          </FormField>
        </div>
        <FormField label="Status" name="status">
          <FormSelect
            id="status"
            value={form.status}
            onChange={(e) => update("status", e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </FormSelect>
        </FormField>
        <FormField label="Description" name="description" required error={errors.description}>
          <FormTextarea
            id="description"
            name="description"
            placeholder="Describe the course objectives and audience..."
            value={form.description}
            error={errors.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
