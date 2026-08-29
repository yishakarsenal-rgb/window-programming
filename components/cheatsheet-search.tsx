"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { CheatSheetEntry } from "@/lib/types"

export function CheatSheetSearch({ entries }: { entries: CheatSheetEntry[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    if (!query.trim()) return entries
    const q = query.trim().toLowerCase()
    return entries
      .map((entry) => ({
        ...entry,
        items: entry.items.filter(
          (item) => item.term.toLowerCase().includes(q) || item.detail.toLowerCase().includes(q),
        ),
      }))
      .filter((entry) => entry.items.length > 0)
  }, [entries, query])

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search syntax — e.g. ref, async, DataAdapter..."
          className="pl-9"
          aria-label="Search cheat sheet"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No matches. Try a different term.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((entry) => (
            <section key={entry.category} className="flex flex-col gap-3 rounded border border-border bg-card p-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-accent">{entry.category}</h2>
              <div className="flex flex-col divide-y divide-border">
                {entry.items.map((item) => (
                  <div key={item.term} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0">
                    <span className="text-sm font-medium">{item.term}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{item.detail}</span>
                    {item.code && (
                      <pre className="scrollbar-thin mt-1 overflow-x-auto rounded border border-border bg-secondary/40 p-2 font-mono text-[11px] leading-relaxed">
                        {item.code}
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
