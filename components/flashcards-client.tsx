"use client"

import { useMemo, useState } from "react"
import { Check, ChevronLeft, ChevronRight, RotateCw, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { flashcards, getFlashcardsByModule } from "@/lib/data/flashcards"
import { useProgress } from "@/hooks/use-progress"
import type { Module } from "@/lib/types"
import { cn } from "@/lib/utils"

export function FlashcardsClient({ modules }: { modules: Module[] }) {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [order, setOrder] = useState<number[]>([])
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const { hydrated, state, toggleFlashcardKnown } = useProgress()

  const deck = useMemo(() => {
    if (!selectedModule) return []
    if (selectedModule === "all") return flashcards
    return getFlashcardsByModule(selectedModule)
  }, [selectedModule])

  const orderedDeck = order.length === deck.length ? order.map((i) => deck[i]) : deck
  const card = orderedDeck[pos]

  function startDeck(id: string) {
    const target = id === "all" ? flashcards : getFlashcardsByModule(id)
    setSelectedModule(id)
    setOrder(target.map((_, i) => i))
    setPos(0)
    setFlipped(false)
  }

  function shuffleDeck() {
    const shuffled = [...order]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setOrder(shuffled)
    setPos(0)
    setFlipped(false)
  }

  function go(delta: number) {
    setPos((p) => Math.min(Math.max(p + delta, 0), orderedDeck.length - 1))
    setFlipped(false)
  }

  if (!selectedModule) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => startDeck("all")}
          className="flex flex-col gap-1 rounded border border-border bg-card p-4 text-left transition-colors hover:border-accent"
        >
          <span className="text-sm font-medium">All modules</span>
          <span className="text-xs text-muted-foreground">{flashcards.length} cards</span>
        </button>
        {modules.map((m) => {
          const count = getFlashcardsByModule(m.id).length
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => startDeck(m.id)}
              className="flex flex-col gap-1 rounded border border-border bg-card p-4 text-left transition-colors hover:border-accent"
            >
              <span className="text-sm font-medium">{m.shortTitle}</span>
              <span className="text-xs text-muted-foreground">{count} cards</span>
            </button>
          )
        })}
      </div>
    )
  }

  if (!card) return null

  const known = hydrated && state.flashcardsKnown[card.id]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setSelectedModule(null)}
          className="font-mono text-xs text-muted-foreground hover:text-accent"
        >
          ← Choose a different deck
        </button>
        <span className="font-mono text-xs text-muted-foreground">
          {pos + 1} / {orderedDeck.length}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className={cn(
          "flex min-h-[280px] flex-col items-center justify-center gap-4 rounded border p-8 text-center transition-colors",
          known ? "border-success/60 bg-success/5" : "border-border bg-card hover:border-accent",
        )}
      >
        {!flipped ? (
          <>
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Term</span>
            <span className="text-2xl font-semibold text-balance">{card.term}</span>
            <span className="mt-2 text-xs text-muted-foreground">Click to reveal definition</span>
          </>
        ) : (
          <div className="flex w-full flex-col items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Definition</span>
            <p className="max-w-md text-sm leading-relaxed text-balance">{card.definition}</p>
            {card.code && <CodeBlock content={card.code} className="w-full max-w-md text-left" />}
          </div>
        )}
      </button>

      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => go(-1)} disabled={pos === 0} aria-label="Previous card">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => go(1)} disabled={pos === orderedDeck.length - 1} aria-label="Next card">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={shuffleDeck} aria-label="Shuffle deck">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setFlipped((f) => !f)} aria-label="Flip card">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant={known ? "default" : "outline"}
          onClick={() => toggleFlashcardKnown(card.id, !known)}
          className={known ? "bg-success text-success-foreground hover:bg-success/90" : ""}
        >
          <Check className="h-4 w-4" />
          {known ? "Known" : "Mark as known"}
        </Button>
      </div>
    </div>
  )
}
