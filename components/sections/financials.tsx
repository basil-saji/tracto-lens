interface FinancialsProps {
  data: any
}

export function Financials({ data }: FinancialsProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-semibold text-slate-900">Financials</h3>
      <div className="overflow-hidden rounded border border-gray-200">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-gray-50">
              <td className="px-3 py-2 text-slate-600">Unit Price</td>
              <td className="px-3 py-2 text-right font-medium text-slate-900 font-mono">₹{data.unit_price}</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-slate-600">Taxable Value</td>
              <td className="px-3 py-2 text-right font-medium text-slate-900 font-mono">₹{data.taxable_value}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-3 py-2 text-slate-600">CGST ({data.cgst_rate})</td>
              <td className="px-3 py-2 text-right font-medium text-slate-900 font-mono">₹{data.cgst_amount}</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-slate-600">SGST ({data.sgst_rate})</td>
              <td className="px-3 py-2 text-right font-medium text-slate-900 font-mono">₹{data.sgst_amount}</td>
            </tr>
            <tr className="border-t-2 border-gray-300 bg-slate-50">
              <td className="px-3 py-3 text-sm font-semibold text-slate-900">Total Amount</td>
              <td className="px-3 py-3 text-right text-lg font-semibold text-slate-900 font-mono">
                ₹{data.total_amount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
