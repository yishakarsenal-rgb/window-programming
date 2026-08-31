import { ArrowRight, BookOpen, Layers, ListChecks, Timer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { modules } from "@/lib/data/modules";
import { questions } from "@/lib/data/questions";
import { DashboardStats } from "@/components/dashboard-stats";
import { ModuleProgressGrid } from "@/components/module-progress-grid";

export default function DashboardPage() {
  const totalQuestions = questions.length;
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 md:py-12">
      <section className="flex flex-col gap-4 border-b border-border pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-accent"></span>
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Window Programming — Exam Prep
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Nine modules of structured notes, an 81-question bank pulled from real
          past exams, timed mock tests, and flashcards — everything needed to
          walk into the exam room ready.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button render={<Link href="/exam" />} nativeButton={false}>
            <Timer className="h-4 w-4" />
            Take a timed exam
          </Button>
          <Button
            variant="outline"
            render={<Link href="/practice" />}
            nativeButton={false}
          >
            <ListChecks className="h-4 w-4" />
            Practice by module
          </Button>
          <Button
            variant="outline"
            render={<Link href="/flashcards" />}
            nativeButton={false}
          >
            <Layers className="h-4 w-4" />
            Review flashcards
          </Button>
        </div>
      </section>

      <DashboardStats
        totalQuestions={totalQuestions}
        totalModules={sortedModules.length}
      />

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Modules
          </h2>
          <Link
            href="/notes"
            className="flex items-center gap-1 text-sm text-accent hover:underline"
          >
            View all notes
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <ModuleProgressGrid modules={sortedModules} />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          href="/notes"
          className="group flex flex-col gap-3 rounded border border-border bg-card p-5 transition-colors hover:border-accent"
        >
          <BookOpen className="h-5 w-5 text-accent" strokeWidth={2} />
          <h3 className="font-medium">Module Notes</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Full written notes for every module — concepts, tables, and
            annotated code samples.
          </p>
        </Link>
        <Link
          href="/exam"
          className="group flex flex-col gap-3 rounded border border-border bg-card p-5 transition-colors hover:border-accent"
        >
          <Timer className="h-5 w-5 text-accent" strokeWidth={2} />
          <h3 className="font-medium">Timed Exam Simulator</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Sit reconstructed 2023 &amp; 2025 past papers, or a shuffled mixed
            mock, against the clock.
          </p>
        </Link>
        <Link
          href="/cheatsheet"
          className="group flex flex-col gap-3 rounded border border-border bg-card p-5 transition-colors hover:border-accent"
        >
          <Layers className="h-5 w-5 text-accent" strokeWidth={2} />
          <h3 className="font-medium">Cheat Sheet</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            One page of syntax, keywords, and code snippets for last-minute
            review.
          </p>
        </Link>
      </section>
    </div>
  );
}
