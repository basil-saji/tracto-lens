"use client"
import { useState } from "react"
import { DocumentViewer } from "@/components/document-viewer"
import { ExtractionPanel } from "@/components/extraction-panel"

interface WorkbenchViewProps {
  onBack: () => void
}

export function WorkbenchView({ onBack }: WorkbenchViewProps) {
  const [highlightedField, setHighlightedField] = useState<string | null>(null)

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <DocumentViewer highlightedField={highlightedField} />
      <ExtractionPanel onBack={onBack} onFieldHover={setHighlightedField} />
    </div>
  )
}
