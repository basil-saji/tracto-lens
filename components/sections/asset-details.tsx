import { Circle } from "lucide-react"

interface AssetDetailsProps {
  data: any
}

export function AssetDetails({ data }: AssetDetailsProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 tracking-tight">Asset Details</h3>
        <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600" />
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Description</p>
        <p className="text-sm font-semibold text-slate-900">{data.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">HSN/SAC</p>
          <p className="text-sm font-mono text-slate-900">{data.hsnsac}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Quantity</p>
          <p className="text-sm font-mono text-slate-900">{data.quantity}</p>
        </div>
      </div>
    </div>
  )
}
