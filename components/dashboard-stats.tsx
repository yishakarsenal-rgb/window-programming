"use client"

import { useMemo } from "react"
import { useProgress } from "@/hooks/use-progress"

function StatBlock({ label, value, sublabel }: { label: string; value: string; sublabel: string }) {
  return (
    <div className="flex flex-col gap-1 border-l border-border pl-4">
      <span className="font-mono text-2xl font-semibold tabular-nums text-foreground md:text-3xl">{value}</span>
      <span className="text-sm text-foreground">{label}</span>
      <span className="text-xs text-muted-foreground">{sublabel}</span>
    </div>
  )
}

export function DashboardStats({
  totalQuestions,
  totalModules,
}: {
  totalQuestions: number
  totalModules: number
}) {
  const { hydrated, state } = useProgress()

  const answeredCount = useMemo(() => Object.keys(state.answeredCorrect).length, [state.answeredCorrect])
  const correctCount = useMemo(
    () => Object.values(state.answeredCorrect).filter(Boolean).length,
    [state.answeredCorrect],
  )
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0
  const bestExam = useMemo(() => {
    if (state.examScores.length === 0) return null
    return state.examScores.reduce((best, cur) =>
      cur.correct / cur.total > best.correct / best.total ? cur : best,
    )
  }, [state.examScores])

  return (
    <section className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <StatBlock label="Modules" sublabel={`${totalModules} chapters of notes`} value={String(totalModules)} />
      <StatBlock label="Question bank" sublabel="Pulled from real past exams" value={String(totalQuestions)} />
      <StatBlock
        label="Practice accuracy"
        sublabel={hydrated && answeredCount > 0 ? `${correctCount} / ${answeredCount} correct` : "No attempts yet"}
        value={hydrated && answeredCount > 0 ? `${accuracy}%` : "—"}
      />
      <StatBlock
        label="Best exam score"
        sublabel={hydrated && bestExam ? `${bestExam.correct} / ${bestExam.total}` : "Not attempted"}
        value={hydrated && bestExam ? `${Math.round((bestExam.correct / bestExam.total) * 100)}%` : "—"}
      />
    </section>
  )
}
