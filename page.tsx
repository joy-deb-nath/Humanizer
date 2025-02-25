import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { TextProcessor } from "@/components/text-processor/text-processor"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A051A] text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="container mx-auto px-4 py-8 text-center">
          <div className="container mx-auto px-4">
            <TextProcessor />
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  )
}

