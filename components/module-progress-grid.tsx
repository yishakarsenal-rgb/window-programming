"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Module } from "@/lib/types"
import { useProgress } from "@/hooks/use-progress"
import { getQuestionsByModule } from "@/lib/data/questions"

export function ModuleProgressGrid({ modules }: { modules: Module[] }) {
  const { hydrated, state } = useProgress()

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((mod) => {
        const total = getQuestionsByModule(mod.id).length
        const best = state.moduleQuizBest[mod.id]
        const pct = hydrated && best ? Math.round((best.correct / best.total) * 100) : null

        return (
          <Link
            key={mod.id}
            href={`/notes/${mod.id}`}
            className="group flex flex-col justify-between gap-3 rounded border border-border bg-card p-4 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(mod.order).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-medium leading-snug text-balance">{mod.shortTitle}</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{total} questions</span>
              <span className={pct !== null ? "font-mono text-foreground" : "font-mono"}>
                {pct !== null ? `${pct}% best` : "Not started"}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
