export function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Why Humanize AI With
        <br />
        Humanize.io
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-[#1A1527] p-8">
          <div className="mb-6 text-4xl font-bold text-indigo-500">100%</div>
          <h3 className="mb-4 text-xl font-bold">Bypass AI With High Success Rates</h3>
          <p className="text-gray-400">
            Say goodbye to detection worries! Our AI Humanizer boasts an impressive 99% success rate of bypassing even
            the most advanced AI detectors including GPTZero, Originality 3.0, and Turnitin.
          </p>
        </div>
        <div className="rounded-xl bg-[#1A1527] p-8">
          <div className="mb-6">
            <div className="h-8 w-48 rounded bg-indigo-600/20" />
            <div className="mt-2 h-4 w-32 rounded bg-indigo-600/20" />
          </div>
          <h3 className="mb-4 text-xl font-bold">Advanced Humanize AI Technology</h3>
          <p className="text-gray-400">
            Humanize.io goes beyond mere word replacement, effectively mimicking real human writing styles. The result?
            Text that is engaging, authentic, and highly readable—just like a professional writer crafted it.
          </p>
        </div>
      </div>
    </section>
  )
}

