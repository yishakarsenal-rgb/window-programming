import { Suspense } from "react"
import { modules } from "@/lib/data/modules"
import { PracticeClient } from "@/components/practice-client"

export default function PracticePage() {
  const sortedModules = [...modules].sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{"// practice quiz"}</span>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Practice Quiz</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Untimed, module-by-module practice with instant explanations after each answer.
        </p>
      </div>

      <Suspense>
        <PracticeClient modules={sortedModules} />
      </Suspense>
    </div>
  )
}
