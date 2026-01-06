"use client"
import { ChevronLeft, CheckCircle } from "lucide-react"
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
      {/* Sticky Header */}
      <div className="sticky top-0 border-b border-gray-200 bg-white px-8 py-6">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-slate-600 hover:text-emerald-900">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-4 rounded-lg bg-slate-50 border border-slate-200 p-4">
          <p className="text-xs font-medium text-slate-500 uppercase mb-3">Quick Summary</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-slate-500">Tractor Model</p>
              <p className="text-sm font-semibold text-slate-900 truncate">
                {extractionData.description.split("(")[0].trim()}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Total Amount</p>
              <p className="text-sm font-semibold text-slate-900">₹{extractionData.total_amount}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Risk Level</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${extractionData.risk_level === "LOW" ? "bg-emerald-600" : "bg-red-600"}`}
                />
                <p className="text-sm font-semibold text-slate-900">{extractionData.risk_level}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verdict Banner */}
      {isApproved && (
        <div className="m-6 flex items-start gap-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-700 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-700">Approved for Underwriting</p>
            <p className="text-sm text-emerald-600">Risk level is low. This application is ready for processing.</p>
          </div>
        </div>
      )}

      <div className="space-y-4 px-6 pb-8">
        <div onMouseEnter={() => onFieldHover?.("total")} onMouseLeave={() => onFieldHover?.(null)}>
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

      {/* Action Footer */}
      <div className="border-t border-gray-200 bg-white px-6 py-4 flex gap-3">
        <Button variant="outline" className="flex-1 border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
          Reject
        </Button>
        <Button className="flex-1 bg-emerald-900 text-white hover:bg-emerald-800">Push to LOS</Button>
      </div>
    </div>
  )
}
