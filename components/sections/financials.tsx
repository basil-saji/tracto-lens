import { Circle } from "lucide-react"

interface FinancialsProps {
  data: any
}

export function Financials({ data }: FinancialsProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 tracking-tight">Financial Breakdown</h3>
        <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600" />
      </div>

      <div className="overflow-hidden rounded border border-slate-200">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-200">
            <tr className="bg-slate-50/50">
              <td className="px-3 py-2.5 text-slate-600">Unit Price</td>
              <td className="px-3 py-2.5 text-right font-mono font-medium text-slate-900">₹{data.unit_price}</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 text-slate-600">Taxable Value</td>
              <td className="px-3 py-2.5 text-right font-mono font-medium text-slate-900">₹{data.taxable_value}</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="px-3 py-2.5 text-slate-600">CGST ({data.cgst_rate})</td>
              <td className="px-3 py-2.5 text-right font-mono font-medium text-slate-900">₹{data.cgst_amount}</td>
            </tr>
            <tr>
              <td className="px-3 py-2.5 text-slate-600">SGST ({data.sgst_rate})</td>
              <td className="px-3 py-2.5 text-right font-mono font-medium text-slate-900">₹{data.sgst_amount}</td>
            </tr>
            <tr className="border-t-2 border-slate-300 bg-emerald-50">
              <td className="px-3 py-3 text-sm font-semibold text-slate-900">Total Amount</td>
              <td className="px-3 py-3 text-right text-base font-mono font-bold text-emerald-900">
                ₹{data.total_amount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
