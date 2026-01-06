"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Circle } from "lucide-react"

interface DealerValidationProps {
  data: any
}

export function DealerValidation({ data }: DealerValidationProps) {
  const [showSourceModal, setShowSourceModal] = useState(false)

  const getDealerStatus = () => {
    if (data.is_dealer_blacklisted) {
      return {
        label: "Flagged: Terminated Vendor",
        color: "bg-red-50 text-red-700 border-red-200",
        icon: AlertCircle,
        reason: "Terminated by HDFC Bank, Oct 2025",
      }
    }
    return {
      label: "Clean Record",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: CheckCircle,
      reason: null,
    }
  }

  const status = getDealerStatus()
  const StatusIcon = status.icon

  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900 tracking-tight">Dealer Identity</h3>
          <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Dealer Name</p>
            <p className="text-sm font-semibold text-slate-900">{data.dealer_name}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">GSTIN</p>
            <div className="flex items-center gap-2">
              <p className="text-sm font-mono text-slate-900">{data.gstin}</p>
              {!data.is_dealer_blacklisted && (
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                  Verified
                </Badge>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Invoice No</p>
            <p className="text-sm font-mono text-slate-900">{data.invoice_no}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Date</p>
            <p className="text-sm font-mono text-slate-900">{data.date}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StatusIcon className="h-4 w-4" />
            <Badge className={`${status.color} border text-xs`}>{status.label}</Badge>
          </div>
          {status.reason && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSourceModal(true)}
              className="text-xs text-slate-600 hover:text-slate-900 h-auto py-1"
            >
              View Source
            </Button>
          )}
        </div>
      </div>

      {showSourceModal && status.reason && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full mx-4 border border-slate-200">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">Flag Details</h3>
                <p className="text-sm text-slate-600 mt-1">{status.reason}</p>
              </div>
            </div>
            <Button
              onClick={() => setShowSourceModal(false)}
              className="w-full bg-emerald-900 text-white hover:bg-emerald-800"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
