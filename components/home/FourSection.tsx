import { ClipboardPaste, PlusCircle, Sparkles } from "lucide-react";
import { Code } from "lucide-react";

export default function FourSection() {
  return (
    <div className="mt-16 py-8 border-t-2 border-border dark:border-border bg-secondary dark:bg-secondary rounded-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="p-4 border rounded-none bg-background dark:bg-background  flex flex-col items-center">
          <PlusCircle className="h-10 w-10 mb-3 stroke-[2.5] text-primary" />
          <h3 className="text-xl font-bold mb-2">Create Elements</h3>
          <p className="text-sm text-foreground-muted dark:text-foreground-muted">
            Add XML tags and nest them to create complex hierarchies easily
          </p>
        </div>

        <div className="p-4 border rounded-none bg-background dark:bg-background  flex flex-col items-center">
          <Sparkles className="h-10 w-10 mb-3 stroke-[2.5] text-primary" />
          <h3 className="text-xl font-bold mb-2">Format Automatically</h3>
          <p className="text-sm text-foreground-muted dark:text-foreground-muted">
            Let the tool handle indentation, nesting, and proper XML formatting
          </p>
        </div>

        <div className="p-4 border rounded-none bg-background dark:bg-background  flex flex-col items-center">
          <ClipboardPaste className="h-10 w-10 mb-3 stroke-[2.5] text-primary" />
          <h3 className="text-xl font-bold mb-2">Import XML</h3>
          <p className="text-sm text-foreground-muted dark:text-foreground-muted">
            Paste an existing XML prompt and edit it visually in seconds
          </p>
        </div>

        <div className="p-4 border rounded-none bg-background dark:bg-background  flex flex-col items-center">
          <Code className="h-10 w-10 mb-3 stroke-[2.5] text-primary" />
          <h3 className="text-xl font-bold mb-2">Copy & Use</h3>
          <p className="text-sm text-foreground-muted dark:text-foreground-muted">
            Copy perfectly structured XML prompts for use in your AI
            applications
          </p>
        </div>
      </div>
    </div>
  );
}
