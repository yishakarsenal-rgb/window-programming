import { questions } from "@/lib/data/questions"
import type { ExamDefinition } from "@/lib/types"

const exam2023Ids = questions.filter((q) => q.examSource?.includes("2023")).map((q) => q.id)
const exam2025Ids = questions.filter((q) => q.examSource?.includes("2025")).map((q) => q.id)
const mixedIds = questions.map((q) => q.id)

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const exams: ExamDefinition[] = [
  {
    id: "exam-2023",
    title: "UUFWP/402 — 1st Semester Test, 2023",
    source: "Reconstructed from the 2023 past paper",
    durationMinutes: 30,
    questionIds: exam2023Ids,
  },
  {
    id: "exam-2025",
    title: "UUFWP/135 — 2nd Semester Test, 2025",
    source: "Reconstructed from the 2025 past paper",
    durationMinutes: 25,
    questionIds: exam2025Ids,
  },
  {
    id: "exam-mixed",
    title: "Full Mixed Mock Exam",
    source: "All questions across every module, shuffled",
    durationMinutes: 45,
    questionIds: shuffle(mixedIds),
  },
]

export function getExamById(id: string) {
  return exams.find((e) => e.id === id)
}
