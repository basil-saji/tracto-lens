import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-emerald-900">TractoLens</h1>
        <Button variant="ghost" className="text-slate-600 hover:text-emerald-900">
          <LogIn className="mr-2 h-4 w-4" />
          Enterprise Login
        </Button>
      </div>
    </nav>
  )
}
