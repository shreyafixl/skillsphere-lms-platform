"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout, { FormField, FormInput, FormSelect } from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"
import { assignedCourses } from "../trainer-data"

const emptyForm = {
  title: "",
  course: "",
  date: "",
  time: "",
  duration: "",
  format: "Live",
}

export default function SessionFormModal({ open, onOpenChange, session, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const { loading, errors, submit, clearErrors } = useFormSubmit({
    successMessage: session ? "Session updated" : "Session scheduled",
    onSuccess: (values) => {
      onSuccess?.(values, session)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) {
      clearErrors()
      if (session) {
        setForm({
          title: session.title,
          course: session.course,
          date: session.date,
          time: session.time,
          duration: session.duration,
          format: session.format,
        })
      } else {
        setForm({ ...emptyForm, course: assignedCourses[0]?.title ?? "" })
      }
    }
  }, [open, session, clearErrors])

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={session ? "Edit Session" : "Schedule Session"}
      description="Manage live sessions, labs, and workshops for your courses."
      size="lg"
    >
      <FormLayout
        loading={loading}
        errors={errors}
        submitLabel={session ? "Save Changes" : "Schedule Session"}
        onSubmit={(e) => {
          e.preventDefault()
          submit(form, {
            title: { required: true, minLength: 3 },
            course: { required: true },
            date: { required: true },
            time: { required: true },
            duration: { required: true },
          })
        }}
        onCancel={() => onOpenChange(false)}
      >
        <FormField label="Session title" name="title" error={errors.title}>
          <FormInput value={form.title} onChange={(e) => update("title", e.target.value)} />
        </FormField>
        <FormField label="Course" name="course">
          <FormSelect value={form.course} onChange={(e) => update("course", e.target.value)}>
            {assignedCourses.map((c) => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </FormSelect>
        </FormField>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Date" name="date" error={errors.date}>
            <FormInput type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
          </FormField>
          <FormField label="Time" name="time" error={errors.time}>
            <FormInput value={form.time} placeholder="10:00 AM" onChange={(e) => update("time", e.target.value)} />
          </FormField>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Duration" name="duration" error={errors.duration}>
            <FormInput value={form.duration} placeholder="90 min" onChange={(e) => update("duration", e.target.value)} />
          </FormField>
          <FormField label="Format" name="format">
            <FormSelect value={form.format} onChange={(e) => update("format", e.target.value)}>
              <option value="Live">Live</option>
              <option value="Lab">Lab</option>
              <option value="Workshop">Workshop</option>
            </FormSelect>
          </FormField>
        </div>
      </FormLayout>
    </DashboardModal>
  )
}
