import { cheatSheet } from "@/lib/data/cheatsheet";
import { CheatSheetSearch } from "@/components/cheatsheet-search";

export default function CheatSheetPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Cheat Sheet
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every keyword, syntax pattern and code snippet across all nine modules
          — condensed to one page for last-minute review.
        </p>
      </div>

      <CheatSheetSearch entries={cheatSheet} />
    </div>
  );
}
