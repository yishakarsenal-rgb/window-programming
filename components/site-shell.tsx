"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, TerminalSquare } from "lucide-react"
import { SiteNavLinks } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2 px-2">
      <TerminalSquare className="h-5 w-5 text-accent" strokeWidth={2} />
      <div className="flex flex-col leading-none">
        <span className="font-mono text-sm font-semibold tracking-tight text-foreground">winprog//</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">exam prep</span>
      </div>
    </Link>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-6 border-r border-sidebar-border bg-sidebar px-4 py-6 md:flex">
        <Brand />
        <SiteNavLinks />
        <div className="mt-auto rounded border border-sidebar-border bg-secondary/40 p-3">
          <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
            {"// Window Programming"}
            <br />
            {"// & Event-Driven C#"}
          </p>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
          <Brand />
          <Sheet open={open} onOpenChange={setOpen}>
            <Button variant="outline" size="icon" onClick={() => setOpen(true)} aria-label="Open navigation menu">
              <Menu className="h-4 w-4" />
            </Button>
            <SheetContent side="left" className="w-72 bg-sidebar px-4 py-6">
              <SheetHeader className="mb-4 px-0">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Brand />
              </SheetHeader>
              <SiteNavLinks onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
