"use client"

import { useState } from "react"
import { Scan, Shield, TrendingUp } from "lucide-react"
import { UploadZone } from "@/components/upload-zone"

interface LandingViewProps {
  onAnalyze: () => void
}

export function LandingView({ onAnalyze }: LandingViewProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-6 max-w-4xl text-6xl font-bold tracking-tight text-foreground leading-tight">
          Tractor Lending, Accelerated.
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          Extract dealer quotations, validate vendor integrity, and assess risk in seconds. Enterprise-grade AI for
          tractor loan underwriting.
        </p>

        {/* Upload Component */}
        <div className="mb-24 w-full max-w-2xl">
          <UploadZone onAnalyze={onAnalyze} />
        </div>

        <div className="w-full max-w-5xl">
          <p className="mb-8 text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Powered by Advanced AI
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Handwriting Recognition */}
            <div
              onMouseEnter={() => setActiveCard("handwriting")}
              onMouseLeave={() => setActiveCard(null)}
              className="group glass rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                  <Scan className="h-6 w-6 text-emerald-900" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground tracking-tight">Intelligent Script Analysis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Normalizes chaotic handwritten dealer quotes into structured digital records with 99% accuracy.
              </p>
            </div>

            {/* Fraud Check */}
            <div
              onMouseEnter={() => setActiveCard("fraud")}
              onMouseLeave={() => setActiveCard(null)}
              className="group glass rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                  <Shield className="h-6 w-6 text-emerald-900" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground tracking-tight">Vendor Integrity Shield</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cross-references terminating vendor lists and bank-grade negative databases to prevent fraud.
              </p>
            </div>

            {/* Price Benchmarking */}
            <div
              onMouseEnter={() => setActiveCard("pricing")}
              onMouseLeave={() => setActiveCard(null)}
              className="group glass rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-emerald-900" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground tracking-tight">LTV Safeguard</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time price benchmarking against regional MSRP data to ensure valuation accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
