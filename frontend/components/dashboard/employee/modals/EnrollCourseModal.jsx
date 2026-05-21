"use client"

import { useEffect, useState } from "react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import FormLayout from "@/components/dashboard/modals/FormLayout"
import { useFormSubmit } from "@/components/dashboard/modals/useFormSubmit"

export default function EnrollCourseModal({ open, onOpenChange, course, onSuccess }) {
  const [notify, setNotify] = useState(true)
  const { loading, submit } = useFormSubmit({
    successMessage: "Successfully enrolled in course",
    onSuccess: () => {
      onSuccess?.(course)
      onOpenChange(false)
    },
  })

  useEffect(() => {
    if (open) setNotify(true)
  }, [open])

  if (!course) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Enroll in Course"
      description={course.title}
    >
      <FormLayout
        loading={loading}
        submitLabel="Confirm Enrollment"
        onSubmit={(e) => {
          e.preventDefault()
          submit({ notify }, {})
        }}
        onCancel={() => onOpenChange(false)}
      >
        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">{course.duration}</strong> · Rating {course.rating} · {course.match}% match
          </p>
          <label className="flex cursor-pointer items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span>Email me when the course starts</span>
            <input
              type="checkbox"
              checked={notify}
              onChange={(e) => setNotify(e.target.checked)}
              className="h-4 w-4 rounded text-violet-600"
            />
          </label>
        </div>
      </FormLayout>
    </DashboardModal>
  )
}
