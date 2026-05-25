"use client"

import { useCallback, useState } from "react"
import UploadCourseMaterialModal from "@/components/dashboard/tenantadmin/modals/UploadCourseMaterialModal"
import {
  StudentViewModal,
  GradeSubmissionModal,
  SessionFormModal,
  AnnouncementFormModal,
  TrainerFiltersModal,
  TrainerSettingsModal,
} from "./modals"
import {
  assignedCourses as initialCourses,
  students as initialStudents,
  sessions as initialSessions,
  announcements as initialAnnouncements,
  recentSubmissions as initialSubmissions,
  trainerInfo as initialTrainerInfo,
} from "./trainer-data"

function formatDate(iso) {
  if (!iso) return "May 30, 2026"
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function useTrainerState() {
  const [assignedCourses, setAssignedCourses] = useState(initialCourses)
  const [students, setStudents] = useState(initialStudents)
  const [sessions, setSessions] = useState(initialSessions)
  const [announcements, setAnnouncements] = useState(initialAnnouncements)
  const [recentSubmissions, setRecentSubmissions] = useState(initialSubmissions)
  const [trainerInfo, setTrainerInfo] = useState(initialTrainerInfo)

  const [uploadModal, setUploadModal] = useState({ open: false, course: null })
  const [viewStudentModal, setViewStudentModal] = useState({ open: false, student: null })
  const [gradeModal, setGradeModal] = useState({ open: false, submission: null })
  const [sessionModal, setSessionModal] = useState({ open: false, session: null })
  const [announcementModal, setAnnouncementModal] = useState({ open: false, announcement: null })
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [filtersModal, setFiltersModal] = useState({ open: false, type: "courses" })

  const openUploadMaterial = useCallback((course) => {
    setUploadModal({ open: true, course: course ?? null })
  }, [])
  const openViewStudent = useCallback(
    (student) => setViewStudentModal({ open: true, student }),
    []
  )
  const openGradeSubmission = useCallback(
    (submission) => setGradeModal({ open: true, submission }),
    []
  )
  const openCreateSession = useCallback(
    () => setSessionModal({ open: true, session: null }),
    []
  )
  const openEditSession = useCallback(
    (session) => setSessionModal({ open: true, session }),
    []
  )
  const openCreateAnnouncement = useCallback(
    () => setAnnouncementModal({ open: true, announcement: null }),
    []
  )
  const openEditAnnouncement = useCallback(
    (announcement) => setAnnouncementModal({ open: true, announcement }),
    []
  )
  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const openFilters = useCallback(
    (type) => setFiltersModal({ open: true, type }),
    []
  )

  const handleUploadSuccess = useCallback((values) => {
    if (uploadModal.course) {
      setAssignedCourses((prev) =>
        prev.map((c) =>
          c.id === uploadModal.course.id
            ? { ...c, modules: c.modules + 1 }
            : c
        )
      )
    }
  }, [uploadModal.course])

  const handleSessionSuccess = useCallback((values, existing) => {
    if (existing) {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === existing.id
            ? {
                ...s,
                title: values.title,
                course: values.course,
                date: formatDate(values.date) || values.date,
                time: values.time,
                duration: values.duration,
                format: values.format,
              }
            : s
        )
      )
      return
    }
    setSessions((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: values.title,
        course: values.course,
        date: formatDate(values.date) || values.date,
        time: values.time,
        duration: values.duration,
        attendees: 0,
        format: values.format,
        status: "scheduled",
      },
    ])
  }, [])

  const handleAnnouncementSuccess = useCallback((values, existing) => {
    if (existing) {
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === existing.id
            ? {
                ...a,
                title: values.title,
                course: values.course,
                message: values.message,
                pinned: values.pinned,
              }
            : a
        )
      )
      return
    }
    setAnnouncements((prev) => [
      {
        id: Date.now(),
        title: values.title,
        message: values.message,
        course: values.course,
        posted: "Just now",
        pinned: values.pinned,
      },
      ...prev,
    ])
  }, [])

  const handleGradeSuccess = useCallback((values, submission) => {
    if (!submission) return
    setRecentSubmissions((prev) =>
      prev.map((s) =>
        s.id === submission.id
          ? { ...s, score: Number(values.score), status: "graded" }
          : s
      )
    )
  }, [])

  const handleSettingsSuccess = useCallback((values) => {
    setTrainerInfo((prev) => ({ ...prev, admin: values.displayName }))
  }, [])

  const modals = (
    <>
      <UploadCourseMaterialModal
        open={uploadModal.open}
        onOpenChange={(open) => setUploadModal((m) => ({ ...m, open }))}
        onSuccess={handleUploadSuccess}
      />
      <StudentViewModal
        open={viewStudentModal.open}
        onOpenChange={(open) => setViewStudentModal((m) => ({ ...m, open }))}
        student={viewStudentModal.student}
      />
      <GradeSubmissionModal
        open={gradeModal.open}
        onOpenChange={(open) => setGradeModal((m) => ({ ...m, open }))}
        submission={gradeModal.submission}
        onSuccess={handleGradeSuccess}
      />
      <SessionFormModal
        open={sessionModal.open}
        onOpenChange={(open) => setSessionModal((m) => ({ ...m, open }))}
        session={sessionModal.session}
        onSuccess={handleSessionSuccess}
      />
      <AnnouncementFormModal
        open={announcementModal.open}
        onOpenChange={(open) => setAnnouncementModal((m) => ({ ...m, open }))}
        announcement={announcementModal.announcement}
        onSuccess={handleAnnouncementSuccess}
      />
      <TrainerSettingsModal
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        initialName={trainerInfo.admin}
        onSuccess={handleSettingsSuccess}
      />
      <TrainerFiltersModal
        open={filtersModal.open}
        onOpenChange={(open) => setFiltersModal((m) => ({ ...m, open }))}
        type={filtersModal.type}
      />
    </>
  )

  return {
    assignedCourses,
    students,
    sessions,
    announcements,
    recentSubmissions,
    trainerInfo,
    openUploadMaterial,
    openViewStudent,
    openGradeSubmission,
    openCreateSession,
    openEditSession,
    openCreateAnnouncement,
    openEditAnnouncement,
    openSettings,
    openFilters,
    modals,
  }
}
