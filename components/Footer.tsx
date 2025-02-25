import Link from "next/link"
import { Brain, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0A051A]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-indigo-500" />
          <span className="font-bold">Humanize.io</span>
        </div>
        <div className="text-sm text-gray-500">© 2025 Humanize.io. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </Link>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
            <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
            <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  )
}

