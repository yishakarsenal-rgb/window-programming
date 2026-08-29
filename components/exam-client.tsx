"use client"

import { useMemo, useState } from "react"
import { Clock, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuizRunner } from "@/components/quiz-runner"
import { getQuestionById } from "@/lib/data/questions"
import type { ExamDefinition } from "@/lib/types"

export function ExamClient({ exams }: { exams: ExamDefinition[] }) {
  const [activeExamId, setActiveExamId] = useState<string | null>(null)
  const [key, setKey] = useState(0)

  const activeExam = exams.find((e) => e.id === activeExamId) ?? null
  const questions = useMemo(() => {
    if (!activeExam) return []
    return activeExam.questionIds.map((id) => getQuestionById(id)).filter(Boolean) as NonNullable<
      ReturnType<typeof getQuestionById>
    >[]
  }, [activeExam])

  if (!activeExam) {
    return (
      <div className="flex flex-col gap-3">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col gap-3 rounded border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-medium">{exam.title}</h3>
              <p className="text-xs text-muted-foreground">{exam.source}</p>
              <div className="mt-1 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FileQuestion className="h-3.5 w-3.5" />
                  {exam.questionIds.length} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {exam.durationMinutes} min
                </span>
              </div>
            </div>
            <Button
              onClick={() => {
                setActiveExamId(exam.id)
                setKey((k) => k + 1)
              }}
            >
              Start exam
            </Button>
          </div>
        ))}
      </div>
    )
  }

  return (
    <QuizRunner
      key={key}
      questions={questions}
      mode="exam"
      examId={activeExam.id}
      durationMinutes={activeExam.durationMinutes}
      title={activeExam.title}
      onExit={() => setActiveExamId(null)}
    />
  )
}
