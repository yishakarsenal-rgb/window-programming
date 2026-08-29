import { modules } from "@/lib/data/modules"
import { NotesSearch } from "@/components/notes-search"

export default function NotesIndexPage() {
  const sortedModules = [...modules].sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{"// module notes"}</span>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">All Module Notes</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Search across every concept, keyword, and code sample, or browse module-by-module below.
        </p>
      </div>

      <NotesSearch modules={sortedModules} />
    </div>
  )
}
