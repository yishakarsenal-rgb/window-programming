import { CodeBlock } from "@/components/code-block"
import type { NoteSection } from "@/lib/types"

export function NoteSectionBlock({ section, index }: { section: NoteSection; index: number }) {
  return (
    <section className="flex flex-col gap-3 border-b border-border py-6 first:pt-0 last:border-b-0">
      <h2 className="flex items-baseline gap-2 text-lg font-semibold tracking-tight">
        <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
        {section.heading}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="flex flex-col gap-2">
          {section.bullets.map((b, i) => {
            const [head, ...rest] = b.split(" — ")
            return (
              <li key={i} className="flex gap-2 text-sm leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  {rest.length > 0 ? (
                    <>
                      <span className="font-medium text-foreground">{head}</span>
                      <span className="text-muted-foreground"> — {rest.join(" — ")}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">{b}</span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      )}

      {section.table && (
        <div className="scrollbar-thin overflow-x-auto rounded border border-border">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-left font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-b-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 align-top text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.code && (
        <CodeBlock content={section.code.content} label={section.code.label} lang={section.code.lang} />
      )}
    </section>
  )
}
