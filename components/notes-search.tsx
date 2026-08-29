"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { Module } from "@/lib/types"

interface SearchHit {
  moduleId: string
  moduleTitle: string
  heading: string
  snippet: string
}

function buildIndex(modules: Module[]): SearchHit[] {
  const hits: SearchHit[] = []
  for (const mod of modules) {
    for (const section of mod.sections) {
      const parts: string[] = []
      if (section.paragraphs) parts.push(...section.paragraphs)
      if (section.bullets) parts.push(...section.bullets)
      if (section.table) parts.push(...section.table.rows.map((r) => r.join(" ")))
      hits.push({
        moduleId: mod.id,
        moduleTitle: mod.shortTitle,
        heading: section.heading,
        snippet: parts.join(" ").slice(0, 220),
      })
    }
  }
  return hits
}

export function NotesSearch({ modules }: { modules: Module[] }) {
  const [query, setQuery] = useState("")
  const index = useMemo(() => buildIndex(modules), [modules])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return index.filter((hit) => hit.heading.toLowerCase().includes(q) || hit.snippet.toLowerCase().includes(q)).slice(0, 12)
  }, [query, index])

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes — e.g. delegate, DataSet, boxing, MDI..."
          className="pl-9"
          aria-label="Search module notes"
        />
      </div>

      {query.trim() ? (
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {results.length} result{results.length === 1 ? "" : "s"}
          </p>
          {results.length === 0 ? (
            <p className="text-sm text-muted-foreground">No matches. Try a different term.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {results.map((hit, i) => (
                <li key={i}>
                  <Link
                    href={`/notes/${hit.moduleId}`}
                    className="flex flex-col gap-1 rounded border border-border bg-card p-4 transition-colors hover:border-accent"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent">
                        {hit.moduleTitle}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">{hit.heading}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{hit.snippet}...</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.id}
              href={`/notes/${mod.id}`}
              className="group flex flex-col gap-2 rounded border border-border bg-card p-4 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{String(mod.order).padStart(2, "0")}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="text-sm font-medium leading-snug text-balance">{mod.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{mod.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
