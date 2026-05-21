"use client"

import { useEffect, useState } from "react"
import { Upload } from "lucide-react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, {
  FormField,
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { courseCategories } from "../tenant-admin-data"

const emptyForm = {
  title: "",
  category: "",
  duration: "",
  fileName: "",
  description: "",
}

const rules = {
  title: { required: true, minLength: 3 },
  category: { required: true },
  duration: { required: true },
  description: { required: true, minLength: 10 },
}

export default function UploadCourseMaterialModal({
  open,
  onOpenChange,
  onSuccess,
}) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: "Course material uploaded successfully",
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
      title="Upload Course Material"
      description="Add learning content, modules, and resources to your course catalog."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel="Upload Material"
        onCancel={() => onOpenChange(false)}
        onSubmit={() => submit(form, rules)}
      >
        <FormField label="Course Title" name="title" required error={errors.title}>
          <FormInput
            id="title"
            value={form.title}
            error={errors.title}
            placeholder="Advanced Security Practices"
            onChange={(e) => update("title", e.target.value)}
          />
        </FormField>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Category" name="category" required error={errors.category}>
            <FormSelect
              id="category"
              value={form.category}
              error={errors.category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option value="">Select category</option>
              {courseCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </FormSelect>
          </FormField>
          <FormField label="Duration" name="duration" required error={errors.duration}>
            <FormInput
              id="duration"
              value={form.duration}
              error={errors.duration}
              placeholder="e.g. 4h 30m"
              onChange={(e) => update("duration", e.target.value)}
            />
          </FormField>
        </div>
        <FormField label="Material File" name="fileName">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:bg-violet-50 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10">
              <Upload size={18} />
              Choose file
              <input
                type="file"
                className="sr-only"
                onChange={(e) =>
                  update("fileName", e.target.files?.[0]?.name || "")
                }
              />
            </label>
            {form.fileName && (
              <span className="truncate text-sm text-slate-500 dark:text-slate-400">
                {form.fileName}
              </span>
            )}
          </div>
        </FormField>
        <FormField label="Description" name="description" required error={errors.description}>
          <FormTextarea
            id="description"
            value={form.description}
            error={errors.description}
            placeholder="Describe modules, objectives, and target audience..."
            onChange={(e) => update("description", e.target.value)}
          />
        </FormField>
      </FormLayout>
    </DashboardModal>
  )
}
