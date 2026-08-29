import { exams } from "@/lib/data/exams"
import { ExamClient } from "@/components/exam-client"

export default function ExamPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">{"// timed exam"}</span>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Timed Exam Simulator</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Sit a reconstructed past paper under exam conditions — a countdown clock runs and the exam auto-submits
          when time expires.
        </p>
      </div>

      <ExamClient exams={exams} />
    </div>
  )
}
