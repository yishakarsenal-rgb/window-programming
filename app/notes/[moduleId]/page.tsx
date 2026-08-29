import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ListChecks } from "lucide-react"
import { modules } from "@/lib/data/modules"
import { getQuestionsByModule } from "@/lib/data/questions"
import { Button } from "@/components/ui/button"
import { NoteSectionBlock } from "@/components/note-section"
import { ModuleVisitTracker } from "@/components/module-visit-tracker"

export function generateStaticParams() {
  return modules.map((m) => ({ moduleId: m.id }))
}

export default async function ModuleNotesPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params
  const sortedModules = [...modules].sort((a, b) => a.order - b.order)
  const currentIndex = sortedModules.findIndex((m) => m.id === moduleId)
  const mod = sortedModules[currentIndex]

  if (!mod) notFound()

  const prev = currentIndex > 0 ? sortedModules[currentIndex - 1] : null
  const next = currentIndex < sortedModules.length - 1 ? sortedModules[currentIndex + 1] : null
  const questionCount = getQuestionsByModule(mod.id).length

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <ModuleVisitTracker moduleId={mod.id} />

      <div className="flex flex-col gap-4">
        <Link href="/notes" className="flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" />
          All modules
        </Link>
        <div className="flex flex-col gap-2 border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Module {String(mod.order).padStart(2, "0")} / {String(sortedModules.length).padStart(2, "0")}
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">{mod.title}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
          <Button
            size="sm"
            className="mt-2 w-fit"
            render={<Link href={`/practice?module=${mod.id}`} />}
            nativeButton={false}
          >
            <ListChecks className="h-4 w-4" />
            Practice {questionCount} questions on this module
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        {mod.sections.map((section, i) => (
          <NoteSectionBlock key={i} section={section} index={i} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/notes/${prev.id}`}
            className="flex flex-col gap-1 rounded border border-border px-4 py-3 text-left transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="h-3 w-3" /> Previous
            </span>
            <span className="text-sm font-medium">{prev.shortTitle}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/notes/${next.id}`}
            className="flex flex-col items-end gap-1 rounded border border-border px-4 py-3 text-right transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              Next <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium">{next.shortTitle}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
