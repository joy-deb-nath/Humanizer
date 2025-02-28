'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"
import { AuthButton } from "./auth/AuthButton"
import { WordUsageDisplay } from "./word-usage/WordUsageDisplay"

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-indigo-500" />
          <span className="font-bold text-foreground">Humanize.io</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <WordUsageDisplay showText={true} />
          <AuthButton />
        </div>
      </div>
    </header>
  )
}
