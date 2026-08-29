import { cn } from "@/lib/utils"

export function CodeBlock({
  content,
  label,
  className,
}: {
  content: string
  label?: string
  lang?: string
  className?: string
}) {
  return (
    <div className={cn("overflow-hidden rounded border border-border bg-card", className)}>
      {label && (
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive/70" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
          <span className="h-2 w-2 rounded-full bg-success/70" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">{label}</span>
        </div>
      )}
      <pre className="scrollbar-thin overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-foreground/90">{content}</code>
      </pre>
    </div>
  )
}
