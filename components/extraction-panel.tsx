"use client"
import { ChevronLeft, CheckCircle, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { extractionData } from "@/lib/mock-data"
import { DealerValidation } from "@/components/sections/dealer-validation"
import { AssetDetails } from "@/components/sections/asset-details"
import { Financials } from "@/components/sections/financials"
import { CustomerProfile } from "@/components/sections/customer-profile"

interface ExtractionPanelProps {
  onBack: () => void
  onFieldHover?: (field: string | null) => void
}

export function ExtractionPanel({ onBack, onFieldHover }: ExtractionPanelProps) {
  const isApproved = extractionData.risk_level === "LOW"

  return (
    <div className="flex w-1/2 flex-col overflow-y-auto bg-white">
      {/* Approval Banner */}
      {isApproved && (
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3">
          <div className="flex-shrink-0">
            <CheckCircle className="h-5 w-5 text-emerald-700" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-emerald-900">LOW RISK</p>
            <p className="text-xs text-emerald-700">Ready for underwriting</p>
          </div>
        </div>
      )}

      <Button variant="ghost" onClick={onBack} className="mb-4 w-fit self-start text-slate-600 hover:text-emerald-900">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="rounded-lg bg-slate-50/50 border border-slate-200 p-4 mx-6">
        <p className="text-xs font-medium text-slate-500 uppercase mb-3 tracking-wider">Quick Summary</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="min-w-0 flex flex-col justify-start">
            <p className="text-xs text-slate-500 mb-2">Tractor Model</p>
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-mono font-semibold text-slate-900 truncate">
                {extractionData.description.split("(")[0].trim()}
              </p>
              <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600 flex-shrink-0" />
            </div>
          </div>

          <div className="min-w-0 flex flex-col justify-start">
            <p className="text-xs text-slate-500 mb-2">Total Amount</p>
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-mono font-semibold text-emerald-700">₹{extractionData.total_amount}</p>
              <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600 flex-shrink-0" />
            </div>
          </div>

          <div className="min-w-0 flex flex-col justify-start">
            <p className="text-xs text-slate-500 mb-2">Risk Level</p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block h-2 w-2 rounded-full flex-shrink-0 ${extractionData.risk_level === "LOW" ? "bg-emerald-600" : "bg-red-600"}`}
                />
                <p className="text-sm font-semibold text-slate-900">{extractionData.risk_level}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-6 py-6 pb-8">
        <div onMouseEnter={() => onFieldHover?.("dealer")} onMouseLeave={() => onFieldHover?.(null)}>
          <DealerValidation data={extractionData} />
        </div>
        <div onMouseEnter={() => onFieldHover?.("asset")} onMouseLeave={() => onFieldHover?.(null)}>
          <AssetDetails data={extractionData} />
        </div>
        <div onMouseEnter={() => onFieldHover?.("financials")} onMouseLeave={() => onFieldHover?.(null)}>
          <Financials data={extractionData} />
        </div>
        <div onMouseEnter={() => onFieldHover?.("customer")} onMouseLeave={() => onFieldHover?.(null)}>
          <CustomerProfile data={extractionData} />
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white px-6 py-4 flex gap-3">
        <Button
          variant="outline"
          className="flex-1 border-red-300 text-red-600 hover:bg-red-50 bg-transparent font-semibold"
        >
          Reject
        </Button>
        <Button className="flex-1 bg-emerald-900 text-white hover:bg-emerald-800 font-semibold shadow-md">
          Push to LOS
        </Button>
      </div>
    </div>
  )
}
