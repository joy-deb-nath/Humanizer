import { ReactNode } from "react"
import { Header } from "@/components/Header"

export const metadata = {
  title: "Pricing | Humanize.io",
  description: "Choose the right plan for your text humanization needs.",
}

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
