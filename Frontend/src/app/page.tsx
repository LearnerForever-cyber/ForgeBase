import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6">FORGEBASE</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A documentation-first backend reference system and starter kit
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Learn how to design backend systems correctly. 
              Reference implementations validated in production via EduBro.
            </p>
          </div>
        </section>

        {/* What Forgebase Is */}
        <section className="border-b py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What Forgebase Is</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Forgebase is a <strong>documentation-first backend reference system</strong> and starter kit.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A collection of battle-tested backend patterns</li>
                <li>Architecture documentation before code</li>
                <li>Reference implementations you can study and adapt</li>
                <li>Guidance on auth, realtime, offline-first, and failure handling</li>
                <li>Production-validated via EduBro platform</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Forgebase Is NOT */}
        <section className="border-b py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What Forgebase Is NOT</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>NOT a SaaS platform</li>
                <li>NOT a framework you must adopt</li>
                <li>NOT a startup or commercial product</li>
                <li>NOT a magic solution — you still need to think</li>
                <li>NOT trying to replace your existing tools</li>
              </ul>
              <p className="mt-6">
                Forgebase is an <strong>engineering artifact</strong> designed to teach correct backend design.
              </p>
            </div>
          </div>
        </section>

        {/* Folder Structure */}
        <section className="border-b py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Repository Structure</h2>
            <div className="bg-gray-900 dark:bg-black text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`Forgebase/
├── Philosophy/        # Core beliefs and approach
├── Architecture/      # System design and patterns
├── Core/             # Backend primitives and contracts
├── Modules/          # Auth, Realtime, Offline modules
├── Examples/         # Reference implementations
├── Guides/           # How-to guides
└── Validation/       # Production validation (EduBro)`}</pre>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="border-b py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Core Design Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Documentation-First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Architecture decisions are documented before implementation
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Security-First Defaults</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Trust boundaries and auth designed from the start
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Failure-Aware Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Every system path considers what happens when it fails
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Contract-Driven APIs</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Clear interfaces between components and services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="border-b py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Who Forgebase Is For</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Student backend engineers learning system design</li>
                <li>Indie hackers building serious systems</li>
                <li>Early-stage teams who want correct foundations</li>
                <li>Hackathon teams needing production-ready patterns</li>
                <li>Full-stack developers leveling up backend thinking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="border-b py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">How to Use Forgebase</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clone the repository</h3>
                  <p className="text-gray-600 dark:text-gray-400">Get the entire reference system locally</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Read the documentation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Start with Philosophy, then Architecture</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Study the examples</h3>
                  <p className="text-gray-600 dark:text-gray-400">See how patterns work in real implementations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adapt to your project</h3>
                  <p className="text-gray-600 dark:text-gray-400">Take what you need, leave what you don't</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Start with the documentation to understand how to build backend systems correctly.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/docs/philosophy/core-principles"
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium transition-colors"
              >
                Read the Docs
              </Link>
              <a
                href="https://github.com/forgebase"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
