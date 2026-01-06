import { Circle } from "lucide-react"

interface CustomerProfileProps {
  data: any
}

export function CustomerProfile({ data }: CustomerProfileProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 tracking-tight">Customer Profile</h3>
        <Circle className="h-2 w-2 text-emerald-600 animate-pulse-glow fill-emerald-600" />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Name</p>
          <p className="text-sm font-semibold text-slate-900">{data.customer_name}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Address</p>
          <p className="text-sm text-slate-900">{data.customer_address}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Phone</p>
          <p className="text-sm font-mono text-slate-900">{data.customer_phone}</p>
        </div>
      </div>
    </div>
  )
}
