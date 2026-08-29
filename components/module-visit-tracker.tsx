"use client"

import { useEffect } from "react"
import { useProgress } from "@/hooks/use-progress"
import type { ModuleId } from "@/lib/types"

export function ModuleVisitTracker({ moduleId }: { moduleId: ModuleId }) {
  const { setLastVisitedModule } = useProgress()

  useEffect(() => {
    setLastVisitedModule(moduleId)
  }, [moduleId, setLastVisitedModule])

  return null
}
