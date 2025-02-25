import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#0A051A]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-indigo-500" />
          <span className="font-bold">Humanize.io</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            Features
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Pricing
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            Login
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Start for Free</Button>
        </div>
      </div>
    </header>
  )
}

