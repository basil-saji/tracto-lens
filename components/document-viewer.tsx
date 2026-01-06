"use client"

import { useState } from "react"
import { ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocumentViewerProps {
  highlightedField?: string | null
}

export function DocumentViewer({ highlightedField }: DocumentViewerProps) {
  const [zoom, setZoom] = useState(100)

  return (
    <div className="flex w-1/2 flex-col items-center justify-center bg-slate-100 p-8">
      {/* Document Placeholder with highlight on hover */}
      <div
        className="flex items-center justify-center rounded-lg bg-white shadow-lg relative"
        style={{
          width: `${Math.min(400, 400 * (zoom / 100))}px`,
          height: `${Math.min(550, 550 * (zoom / 100))}px`,
          transform: `scale(${zoom / 100})`,
          transformOrigin: "center",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-slate-300 p-6 text-center">
          <div className="text-4xl text-slate-300">📄</div>
          <p className="mt-4 text-sm text-slate-400">Tractor Loan Invoice</p>
          <p className="mt-2 text-xs text-slate-300">SBFC/2025-26/0452</p>
        </div>

        {highlightedField && (
          <div className="absolute inset-4 border-2 border-yellow-400 rounded bg-yellow-50/20 pointer-events-none animate-pulse" />
        )}
      </div>

      <div className="mt-8 flex gap-3 rounded-full bg-white/80 backdrop-blur-md px-4 py-3 shadow-lg border border-white/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setZoom(Math.min(zoom + 20, 200))}
          className="hover:bg-slate-100"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setZoom(Math.max(zoom - 20, 50))}
          className="hover:bg-slate-100"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setZoom(100)} className="hover:bg-slate-100">
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
