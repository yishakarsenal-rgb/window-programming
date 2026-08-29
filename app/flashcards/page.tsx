import { modules } from "@/lib/data/modules"
import { FlashcardsClient } from "@/components/flashcards-client"

export default function FlashcardsPage() {
  const sortedModules = [...modules].sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{"// flashcards"}</span>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Flashcards</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Click a card to flip it. Mark cards you know to skip them next round.
        </p>
      </div>

      <FlashcardsClient modules={sortedModules} />
    </div>
  )
}
