import { Scan, Shield, TrendingUp } from "lucide-react"
import { UploadZone } from "@/components/upload-zone"

interface LandingViewProps {
  onAnalyze: () => void
}

export function LandingView({ onAnalyze }: LandingViewProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight text-emerald-900">
          Automate Tractor Loan Underwriting.
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-slate-500">
          Eliminate manual data entry. Extract dealer quotations, validate GSTIN, and assess risk in real-time.
        </p>

        {/* Upload Component */}
        <div className="mb-16 w-full max-w-2xl">
          <UploadZone onAnalyze={onAnalyze} />
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Handwriting Recognition */}
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Scan className="h-5 w-5 text-emerald-900 flex-shrink-0" />
              <h3 className="font-semibold text-slate-900 text-sm">Handwriting Recognition</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intelligent Script Analysis. Converts messy dealer handwriting into structured data.
            </p>
          </div>

          {/* Fraud Check */}
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="h-5 w-5 text-emerald-900 flex-shrink-0" />
              <h3 className="font-semibold text-slate-900 text-sm">Fraud Check</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vendor Integrity Shield. Cross-references terminating vendor lists and bank-grade blacklists.
            </p>
          </div>

          {/* Price Benchmarking */}
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-5 w-5 text-emerald-900 flex-shrink-0" />
              <h3 className="font-semibold text-slate-900 text-sm">Price Benchmarking</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              LTV Safeguard. Real-time MSRP verification against regional disbursement data.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
