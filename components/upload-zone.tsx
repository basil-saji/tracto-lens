"use client"

import type React from "react"

import { useState, useRef } from "react"
import { UploadCloud, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadZoneProps {
  onAnalyze: () => void
}

export function UploadZone({ onAnalyze }: UploadZoneProps) {
  const [state, setState] = useState<"idle" | "processing" | "success">("idle")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      return
    }

    setState("processing")
    // Simulate API call with processing state
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setState("success")
    // Brief pause to show success state before transitioning
    await new Promise((resolve) => setTimeout(resolve, 600))
    setState("idle")
    setSelectedFile(null)
    onAnalyze()
  }

  return (
    <div className="relative">
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.gif"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div
        onClick={() => !selectedFile && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="glass rounded-2xl p-12 text-center border border-white/40 shadow-lg shadow-emerald-500/10 transition-all duration-300 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Icon with pulse animation on processing */}
          <div className="relative">
            {state === "processing" && <div className="absolute inset-0 rounded-full animate-pulse-glow" />}
            {state === "success" ? (
              <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-emerald-700" />
              </div>
            ) : (
              <UploadCloud
                className={`h-16 w-16 transition-colors duration-300 ${
                  state === "processing" ? "text-emerald-600" : "text-slate-400"
                }`}
              />
            )}
          </div>

          {state === "processing" && (
            <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 animate-progress" />
            </div>
          )}

          <div>
            <h2 className="mb-2 text-xl font-semibold text-foreground tracking-tight">
              {state === "success" ? "Upload Complete" : selectedFile ? "File Selected" : "Upload Your Invoice"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {state === "processing"
                ? "Analyzing document and extracting data..."
                : state === "success"
                  ? "Processing complete. Loading workbench..."
                  : selectedFile
                    ? `${selectedFile.name} selected`
                    : "Drag and drop your tractor loan invoice here, or click to select"}
            </p>
          </div>

          <Button
            onClick={handleUpload}
            disabled={state !== "idle" || !selectedFile}
            className="mt-4 gap-2 bg-emerald-900 text-white hover:bg-emerald-800 disabled:opacity-50"
          >
            {state === "processing" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing
              </>
            ) : state === "success" ? (
              <>
                <CheckCircle className="h-4 w-4" />
                Complete
              </>
            ) : (
              <>
                <UploadCloud className="h-4 w-4" />
                Upload Invoice
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
