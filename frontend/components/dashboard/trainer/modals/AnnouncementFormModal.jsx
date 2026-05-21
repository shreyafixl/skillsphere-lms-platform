"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect, FormTextarea } from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { assignedCourses } from "../trainer-data"

export default function AnnouncementFormModal({ open, onOpenChange, announcement, onSuccess }) {
  const [form, setForm] = useState({ title: "", course: "", message: "", pinned: false })
  const { loading, submit, clearErrors } = useFormSubmit({
    successMessage: announcement ? "Announcement updated" : "Announcement posted",
    onSuccess: (values) => {
      onSuccess?.(values, announcement)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      if (announcement) {
        setForm({
          title: announcement.title,
          course: announcement.course,
          message: announcement.message,
          pinned: announcement.pinned,
        })
      } else {
        setForm({ title: "", course: assignedCourses[0]?.title ?? "", message: "", pinned: false })
      }
    }
  }, [open, announcement, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={announcement ? "Edit Announcement" : "Post Announcement"}
      description="Share updates with learners enrolled in your courses."
      size="lg"
    >
      <FormLayout
        loading={loading}
        submitLabel={announcement ? "Save" : "Post"}
        onSubmit={(e) => {
          e.preventDefault()
          submit(form, {
            title: { required: true, minLength: 3 },
            course: { required: true },
            message: { required: true, minLength: 10 },
          })
        }}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Title" name="title">
          <FormInput value={form.title} onChange={(e) => update("title", e.target.value)} />
        </FormField>
        <FormField label="Course" name="course">
          <FormSelect value={form.course} onChange={(e) => update("course", e.target.value)}>
            {assignedCourses.map((c) => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </FormSelect>
        </FormField>
        <FormField label="Message" name="message">
          <FormTextarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} />
        </FormField>
        <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-100 p-4 dark:border-slate-800">
          <span className="text-sm text-slate-600 dark:text-slate-300">Pin to top of course feed</span>
          <input
            type="checkbox"
            checked={form.pinned}
            onChange={(e) => update("pinned", e.target.checked)}
            className="h-4 w-4 rounded text-violet-600"
          />
        </label>
      </FormLayout>
    </DashboardModal>
  )
}
