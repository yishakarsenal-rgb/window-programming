"use client"

import { useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getQuestionsByModule, questions as allQuestions } from "@/lib/data/questions"
import { QuizRunner } from "@/components/quiz-runner"
import type { Module } from "@/lib/types"
import { cn } from "@/lib/utils"

export function PracticeClient({ modules }: { modules: Module[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const preselected = searchParams.get("module")
  const [selectedModule, setSelectedModule] = useState<string | null>(preselected)
  const [key, setKey] = useState(0)

  const questions = useMemo(() => {
    if (!selectedModule) return []
    if (selectedModule === "all") return allQuestions
    return getQuestionsByModule(selectedModule)
  }, [selectedModule])

  function choose(id: string | null) {
    setSelectedModule(id)
    setKey((k) => k + 1)
    router.replace(id ? `/practice?module=${id}` : "/practice")
  }

  if (!selectedModule) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => choose("all")}
          className="flex flex-col gap-1 rounded border border-border bg-card p-4 text-left transition-colors hover:border-accent"
        >
          <span className="text-sm font-medium">All modules</span>
          <span className="text-xs text-muted-foreground">{allQuestions.length} questions, shuffled by module order</span>
        </button>
        {modules.map((m) => {
          const count = getQuestionsByModule(m.id).length
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => choose(m.id)}
              className="flex flex-col gap-1 rounded border border-border bg-card p-4 text-left transition-colors hover:border-accent"
            >
              <span className="text-sm font-medium">{m.shortTitle}</span>
              <span className="text-xs text-muted-foreground">{count} questions</span>
            </button>
          )
        })}
      </div>
    )
  }

  const moduleLabel =
    selectedModule === "all" ? "All modules" : modules.find((m) => m.id === selectedModule)?.shortTitle ?? "Module"

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => choose(null)}
        className={cn("w-fit font-mono text-xs text-muted-foreground hover:text-accent")}
      >
        ← Choose a different module
      </button>
      <QuizRunner
        key={key}
        questions={questions}
        mode="practice"
        moduleId={selectedModule === "all" ? undefined : selectedModule}
        title={moduleLabel}
        onExit={() => choose(null)}
      />
    </div>
  )
}
