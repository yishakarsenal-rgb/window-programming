"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Check, Clock, RotateCcw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CodeBlock } from "@/components/code-block"
import { useProgress } from "@/hooks/use-progress"
import type { Question } from "@/lib/types"
import { cn } from "@/lib/utils"

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase()
}

interface QuizRunnerProps {
  questions: Question[]
  mode: "practice" | "exam"
  moduleId?: string
  examId?: string
  durationMinutes?: number
  title: string
  onExit?: () => void
}

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${String(s).padStart(2, "0")}`
}

export function QuizRunner({ questions, mode, moduleId, examId, durationMinutes, title, onExit }: QuizRunnerProps) {
  const { recordAnswer, recordModuleQuiz, recordExamScore } = useProgress()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [finished, setFinished] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes ? durationMinutes * 60 : 0)
  const [startedAt] = useState(() => Date.now())

  const current = questions[index]
  const isTimed = mode === "exam" && durationMinutes !== undefined

  useEffect(() => {
    if (!isTimed || finished) return
    if (secondsLeft <= 0) {
      setFinished(true)
      return
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(t)
  }, [isTimed, finished, secondsLeft])

  const answeredCount = Object.keys(results).length
  const correctCount = Object.values(results).filter(Boolean).length

  function submitAnswer() {
    if (!selected?.trim() || !current) return
    const correct =
      current.type === "fillblank"
        ? normalizeAnswer(selected) === normalizeAnswer(current.correctAnswer)
        : selected === current.correctAnswer
    setResults((prev) => ({ ...prev, [current.id]: correct }))
    setRevealed(true)
    recordAnswer(current.id, correct)
  }

  function next() {
    if (index + 1 >= questions.length) {
      finishQuiz()
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
    setRevealed(false)
  }

  function finishQuiz() {
    setFinished(true)
    if (mode === "practice" && moduleId) {
      recordModuleQuiz(moduleId, correctCount, answeredCount || questions.length)
    }
    if (mode === "exam" && examId) {
      recordExamScore(examId, correctCount, answeredCount || questions.length)
    }
  }

  function restart() {
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setResults({})
    setFinished(false)
    setSecondsLeft(durationMinutes ? durationMinutes * 60 : 0)
  }

  const options = useMemo(() => {
    if (current?.type === "truefalse") return ["True", "False"]
    if (current?.type === "fillblank") return []
    return current?.options ?? []
  }, [current])

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded border border-border bg-card p-10 text-center">
        <p className="text-sm text-muted-foreground">No questions available for this selection.</p>
        {onExit && (
          <Button variant="outline" onClick={onExit}>
            Go back
          </Button>
        )}
      </div>
    )
  }

  if (finished) {
    const total = answeredCount || questions.length
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0
    const elapsed = Math.round((Date.now() - startedAt) / 1000)

    return (
      <div className="flex flex-col gap-6 rounded border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{title} — complete</span>
          <span className="font-mono text-5xl font-semibold tabular-nums">{pct}%</span>
          <p className="text-sm text-muted-foreground">
            {correctCount} correct out of {total} answered
            {isTimed ? ` · time used ${formatTime(Math.min(elapsed, (durationMinutes ?? 0) * 60))}` : ""}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={restart}>
            <RotateCcw className="h-4 w-4" />
            Try again
          </Button>
          {onExit && (
            <Button variant="outline" onClick={onExit}>
              Back
            </Button>
          )}
          <Button variant="outline" render={<Link href="/" />} nativeButton={false}>
            Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Question {index + 1} / {questions.length}
          </span>
          {isTimed && (
            <span
              className={cn(
                "flex items-center gap-1.5 font-mono text-xs tabular-nums",
                secondsLeft < 60 ? "text-accent" : "text-muted-foreground",
              )}
            >
              <Clock className="h-3.5 w-3.5" />
              {formatTime(secondsLeft)}
            </span>
          )}
        </div>
        <Progress value={((index + (revealed ? 1 : 0)) / questions.length) * 100} />
      </div>

      <div className="flex flex-col gap-4 rounded border border-border bg-card p-5 md:p-6">
        {current.difficulty && (
          <span className="w-fit rounded bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
            {current.difficulty}
          </span>
        )}
        <p className="text-base font-medium leading-relaxed text-balance">{current.prompt}</p>
        {current.code && <CodeBlock content={current.code} />}

        {current.type === "fillblank" ? (
          <div className="flex flex-col gap-2">
            <Input
              value={selected ?? ""}
              disabled={revealed}
              placeholder="Type your answer…"
              onChange={(e) => setSelected(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                  e.preventDefault()
                  if (!revealed && selected?.trim()) submitAnswer()
                }
              }}
              className={cn(
                revealed &&
                  (results[current.id]
                    ? "border-success bg-success/10"
                    : "border-destructive bg-destructive/10"),
              )}
            />
            {revealed && (
              <div className="flex items-center gap-2 text-sm">
                {results[current.id] ? (
                  <Check className="h-4 w-4 shrink-0 text-success" />
                ) : (
                  <X className="h-4 w-4 shrink-0 text-destructive" />
                )}
                <span className="text-muted-foreground">
                  Correct answer: <span className="text-foreground">{current.correctAnswer}</span>
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {options.map((opt) => {
              const isSelected = selected === opt
              const isCorrectOpt = opt === current.correctAnswer
              let stateClass = "border-border hover:border-accent"
              if (revealed) {
                if (isCorrectOpt) stateClass = "border-success bg-success/10"
                else if (isSelected) stateClass = "border-destructive bg-destructive/10"
                else stateClass = "border-border opacity-60"
              } else if (isSelected) {
                stateClass = "border-accent bg-accent/10"
              }

              return (
                <button
                  key={opt}
                  type="button"
                  disabled={revealed}
                  onClick={() => setSelected(opt)}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default",
                    stateClass,
                  )}
                >
                  <span>{opt}</span>
                  {revealed && isCorrectOpt && <Check className="h-4 w-4 shrink-0 text-success" />}
                  {revealed && isSelected && !isCorrectOpt && <X className="h-4 w-4 shrink-0 text-destructive" />}
                </button>
              )
            })}
          </div>
        )}

        {revealed && (
          <div className="flex flex-col gap-1 rounded border border-border bg-secondary/40 p-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Explanation</span>
            <p className="text-sm leading-relaxed text-muted-foreground">{current.explanation}</p>
            {current.examSource && (
              <span className="mt-1 font-mono text-[11px] text-muted-foreground">Source: {current.examSource}</span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">
          {answeredCount} answered · {correctCount} correct
        </span>
        {!revealed ? (
          <Button onClick={submitAnswer} disabled={!selected?.trim()}>
            Submit answer
          </Button>
        ) : (
          <Button onClick={next}>{index + 1 >= questions.length ? "Finish" : "Next question"}</Button>
        )}
      </div>
    </div>
  )
}
