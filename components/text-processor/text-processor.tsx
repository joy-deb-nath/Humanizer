"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Check, ClipboardCopy, FileText, RotateCcw, Copy, X } from "lucide-react"

export function TextProcessor() {
  const [wordCount, setWordCount] = useState({ input: 0, output: 0 })
  const [isInputActive, setIsInputActive] = useState(false)

  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWordCount((prev) => ({
      ...prev,
      input: countWords(e.target.value),
    }))
    setIsInputActive(true)
  }

  const handleInputFocus = () => {
    setIsInputActive(true)
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() === "") {
      setIsInputActive(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl rounded-3xl border border-gray-800/50 bg-[#0A0A0A]/50 p-6 backdrop-blur-sm">
      {/* Text Areas */}
      <div className="mb-6 grid gap-6 md:grid-cols-2">
        {/* Input Section */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Textarea
              placeholder="Enter your text here..."
              className="min-h-[400px] resize-none rounded-2xl border-gray-800 bg-[#1A1A1A] p-4 text-gray-200 placeholder:text-gray-600 focus:border-blue-600 focus:ring-0"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            {(!isInputActive || wordCount.input === 0) && (
              <div className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-lg border-gray-800 bg-[#1A1A1A] text-gray-300 hover:bg-[#252525] pointer-events-auto"
                  onClick={() => setIsInputActive(true)}
                >
                  <FileText className="h-4 w-4" />
                  Try A Sample
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-lg border-gray-800 bg-[#1A1A1A] text-gray-300 hover:bg-[#252525] pointer-events-auto"
                  onClick={() => setIsInputActive(true)}
                >
                  <ClipboardCopy className="h-4 w-4" />
                  Paste Text
                </Button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="text-sm text-indigo-500 hover:text-indigo-400">
                Check for AI
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {wordCount.input} Words
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-400">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button className="bg-indigo-600 text-sm hover:bg-indigo-700">Humanize</Button>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col gap-4">
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#1A1A1A] p-4">
            <div className="mb-4 h-16 w-16 rounded-2xl bg-indigo-600/20 p-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humanizeAI%20UI%20Design%2002.jpg-1daEDDuGpF6S3e6pKxPWsoYcfmEddw.jpeg"
                alt=""
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-200">Humanize Result</h3>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {wordCount.output} Words
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-400">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-400">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl border border-gray-800 bg-[#1A1A1A] p-6">
        {/* Left side - Main result */}
        <div className="flex flex-col items-center justify-center text-center h-full">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 mb-3">
            <Check className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-lg text-gray-300">The output content is most likely human-written.</p>
        </div>

        {/* Right side - Detailed results */}
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-sm text-gray-400">Checking result:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "GPTZero", status: true },
              { name: "Copyleaks", status: true },
              { name: "ZeroGPT", status: true },
              { name: "Crossplag", status: true },
              { name: "Sapling", status: true },
              { name: "Writer", status: true },
            ].map((detector) => (
              <div
                key={detector.name}
                className="flex items-center gap-2 rounded-full border border-gray-800 bg-[#252525] px-3 py-1.5"
              >
                <div className="h-4 w-4 rounded-full bg-gray-700" />
                <span className="text-sm text-gray-300">{detector.name}</span>
                <Check className="h-4 w-4 text-green-500" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-green-500">Human-written</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-4 w-4 rounded-full border-2 border-gray-600" />
              <span className="text-gray-400">50% Human-written</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <X className="h-4 w-4 text-red-500" />
              <span className="text-red-500">AI-generated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

