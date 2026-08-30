"use client";

import { useCallback, useEffect, useState } from "react";
import type { ModuleId } from "@/lib/types";

const STORAGE_KEY = "winprog-progress-v1";

interface ProgressState {
  answeredCorrect: Record<string, boolean>;
  moduleQuizBest: Record<string, { correct: number; total: number }>;
  examScores: {
    examId: string;
    correct: number;
    total: number;
    date: string;
  }[];
  flashcardsKnown: Record<string, boolean>;
  lastVisitedModule?: ModuleId;
}

const EMPTY_STATE: ProgressState = {
  answeredCorrect: {},
  moduleQuizBest: {},
  examScores: [],
  flashcardsKnown: {},
};

function load(): ProgressState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {
    return EMPTY_STATE;
  }
}

function save(state: ProgressState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(load());
    setHydrated(true);
  }, []);

  const recordAnswer = useCallback((questionId: string, correct: boolean) => {
    setState((prev) => {
      const next = {
        ...prev,
        answeredCorrect: { ...prev.answeredCorrect, [questionId]: correct },
      };
      save(next);
      return next;
    });
  }, []);

  const recordModuleQuiz = useCallback(
    (moduleId: string, correct: number, total: number) => {
      setState((prev) => {
        const existing = prev.moduleQuizBest[moduleId];
        const better =
          !existing || correct / total > existing.correct / existing.total;
        const next = {
          ...prev,
          moduleQuizBest: better
            ? { ...prev.moduleQuizBest, [moduleId]: { correct, total } }
            : prev.moduleQuizBest,
        };
        save(next);
        return next;
      });
    },
    [],
  );

  const recordExamScore = useCallback(
    (examId: string, correct: number, total: number) => {
      setState((prev) => {
        const next = {
          ...prev,
          examScores: [
            ...prev.examScores,
            { examId, correct, total, date: new Date().toISOString() },
          ].slice(-10),
        };
        save(next);
        return next;
      });
    },
    [],
  );

  const toggleFlashcardKnown = useCallback((cardId: string, known: boolean) => {
    setState((prev) => {
      const next = {
        ...prev,
        flashcardsKnown: { ...prev.flashcardsKnown, [cardId]: known },
      };
      save(next);
      return next;
    });
  }, []);

  const setLastVisitedModule = useCallback((moduleId: ModuleId) => {
    setState((prev) => {
      const next = { ...prev, lastVisitedModule: moduleId };
      save(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    save(EMPTY_STATE);
    setState(EMPTY_STATE);
  }, []);

  return {
    hydrated,
    state,
    recordAnswer,
    recordModuleQuiz,
    recordExamScore,
    toggleFlashcardKnown,
    setLastVisitedModule,
    resetProgress,
  };
}
