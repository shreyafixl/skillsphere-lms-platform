"use client"

import { useCallback, useState } from "react"
import { toast } from "sonner"
import {
  ContinueCourseModal,
  CertificateViewModal,
  EnrollCourseModal,
  EmployeeSettingsModal,
} from "./modals"
import {
  enrolledCourses as initialCourses,
  certificates as initialCertificates,
  recommendedCourses as initialRecommended,
  employeeInfo as initialEmployeeInfo,
} from "./employee-data"

export function useEmployeeState() {
  const [enrolledCourses, setEnrolledCourses] = useState(initialCourses)
  const [certificates] = useState(initialCertificates)
  const [recommendedCourses, setRecommendedCourses] = useState(initialRecommended)
  const [employeeInfo, setEmployeeInfo] = useState(initialEmployeeInfo)

  const [continueModal, setContinueModal] = useState({ open: false, course: null })
  const [certificateModal, setCertificateModal] = useState({ open: false, certificate: null })
  const [enrollModal, setEnrollModal] = useState({ open: false, course: null })
  const [settingsOpen, setSettingsOpen] = useState(false)

  const openContinueCourse = useCallback(
    (course) => setContinueModal({ open: true, course }),
    []
  )
  const openViewCertificate = useCallback(
    (certificate) => setCertificateModal({ open: true, certificate }),
    []
  )
  const openEnrollCourse = useCallback(
    (course) => setEnrollModal({ open: true, course }),
    []
  )
  const openSettings = useCallback(() => setSettingsOpen(true), [])

  const handleContinue = useCallback((course) => {
    toast.success("Opening course", { description: `Resuming ${course.title}` })
  }, [])

  const handleEnrollSuccess = useCallback((course) => {
    if (!course) return
    setRecommendedCourses((prev) => prev.filter((c) => c.id !== course.id))
    setEnrolledCourses((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: course.title,
        category: course.category,
        progress: 0,
        modules: 8,
        completedModules: 0,
        dueDate: "—",
        instructor: "SkillSphere Faculty",
        status: "in-progress",
        thumbnail: "react",
      },
    ])
  }, [])

  const handleSettingsSuccess = useCallback((values) => {
    setEmployeeInfo((prev) => ({ ...prev, name: values.displayName }))
  }, [])

  const modals = (
    <>
      <ContinueCourseModal
        open={continueModal.open}
        onOpenChange={(open) => setContinueModal((m) => ({ ...m, open }))}
        course={continueModal.course}
        onContinue={handleContinue}
      />
      <CertificateViewModal
        open={certificateModal.open}
        onOpenChange={(open) => setCertificateModal((m) => ({ ...m, open }))}
        certificate={certificateModal.certificate}
      />
      <EnrollCourseModal
        open={enrollModal.open}
        onOpenChange={(open) => setEnrollModal((m) => ({ ...m, open }))}
        course={enrollModal.course}
        onSuccess={handleEnrollSuccess}
      />
      <EmployeeSettingsModal
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        initialName={employeeInfo.name}
        onSuccess={handleSettingsSuccess}
      />
    </>
  )

  return {
    enrolledCourses,
    certificates,
    recommendedCourses,
    employeeInfo,
    openContinueCourse,
    openViewCertificate,
    openEnrollCourse,
    openSettings,
    modals,
  }
}
