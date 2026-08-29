export type ModuleId =
  | "fundamentals"
  | "csharp-syntax"
  | "oop"
  | "delegates-events"
  | "winforms-controls"
  | "exception-validation"
  | "file-database"
  | "wpf-databinding"
  | "async-tasks"

export interface Module {
  id: ModuleId
  order: number
  title: string
  shortTitle: string
  description: string
  sections: NoteSection[]
}

export interface NoteSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  code?: { label?: string; lang?: string; content: string }
  table?: { headers: string[]; rows: string[][] }
}

export type QuestionType = "mcq" | "truefalse" | "fillblank"

export interface Question {
  id: string
  moduleId: ModuleId
  type: QuestionType
  prompt: string
  code?: string
  options?: string[]
  correctAnswer: string
  explanation: string
  examSource?: string
  difficulty: "easy" | "medium" | "hard"
}

export interface Flashcard {
  id: string
  moduleId: ModuleId
  term: string
  definition: string
  code?: string
}

export interface CheatSheetEntry {
  category: string
  items: { term: string; detail: string; code?: string }[]
}

export interface ExamDefinition {
  id: string
  title: string
  source: string
  durationMinutes: number
  questionIds: string[]
}
