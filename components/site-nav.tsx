"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, LayoutDashboard, Layers, ListChecks, SquareTerminal, Timer } from "lucide-react"
import { cn } from "@/lib/utils"

export const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/notes", label: "Module Notes", icon: BookOpen },
  { href: "/practice", label: "Practice Quiz", icon: ListChecks },
  { href: "/exam", label: "Timed Exam", icon: Timer },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/cheatsheet", label: "Cheat Sheet", icon: SquareTerminal },
]

export function SiteNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors",
              active
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
