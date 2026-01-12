import { notFound } from 'next/navigation'
import { getMarkdownContent } from '@/lib/markdown'
import 'highlight.js/styles/github-dark.css'

export default async function DocPage({
  params,
}: {
  params: { section: string; slug: string }
}) {
  const content = await getMarkdownContent(params.section, params.slug)

  if (!content) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-8 py-12">
      <div 
        className="prose prose-gray dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
          prose-li:text-gray-700 dark:prose-li:text-gray-300
          prose-code:text-brand-600 dark:prose-code:text-brand-400
          prose-pre:bg-gray-900 dark:prose-pre:bg-black
          prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </article>
  )
}

// Generate static params for all documentation pages
export async function generateStaticParams() {
  // Define all possible doc routes
  const routes = [
    // Philosophy
    { section: 'philosophy', slug: 'core-principles' },
    { section: 'philosophy', slug: 'forgebase-approach' },
    { section: 'philosophy', slug: 'problem-we-solve' },
    { section: 'philosophy', slug: 'opinionated-decisions' },
    { section: 'philosophy', slug: 'tradeoffs' },
    // Architecture
    { section: 'architecture', slug: 'overview' },
    { section: 'architecture', slug: 'components' },
    { section: 'architecture', slug: 'data-flow' },
    { section: 'architecture', slug: 'design-decisions' },
    { section: 'architecture', slug: 'security' },
    { section: 'architecture', slug: 'failure-model' },
    { section: 'architecture', slug: 'extensibility' },
    // Core
    { section: 'core', slug: 'overview' },
    { section: 'core', slug: 'project-shape' },
    { section: 'core', slug: 'contracts' },
    // Modules
    { section: 'modules', slug: 'auth' },
    { section: 'modules', slug: 'realtime' },
    { section: 'modules', slug: 'offline' },
    // Examples
    { section: 'examples', slug: 'overview' },
    { section: 'examples', slug: 'backend-reference' },
    { section: 'examples', slug: 'basic-backend' },
    { section: 'examples', slug: 'realtime' },
    { section: 'examples', slug: 'offline-first' },
    // Guides
    { section: 'guides', slug: 'overview' },
    { section: 'guides', slug: 'setup' },
    { section: 'guides', slug: 'architecture' },
    { section: 'guides', slug: 'backend' },
    { section: 'guides', slug: 'conventions' },
    { section: 'guides', slug: 'customization' },
    { section: 'guides', slug: 'security' },
    { section: 'guides', slug: 'realtime' },
    { section: 'guides', slug: 'offline' },
    { section: 'guides', slug: 'deployment' },
    { section: 'guides', slug: 'operations' },
    { section: 'guides', slug: 'validation' },
// Generate static params for all documentation pages
export async function generateStaticParams() {
  // Define all possible doc routes
  const routes = [
    // Philosophy
    { section: 'philosophy', slug: 'core-principles' },
    { section: 'philosophy', slug: 'forgebase-approach' },
    { section: 'philosophy', slug: 'problem-we-solve' },
    { section: 'philosophy', slug: 'opinionated-decisions' },
    { section: 'philosophy', slug: 'tradeoffs' },
    // Architecture
    { section: 'architecture', slug: 'overview' },
    { section: 'architecture', slug: 'components' },
    { section: 'architecture', slug: 'data-flow' },
    { section: 'architecture', slug: 'design-decisions' },
    { section: 'architecture', slug: 'security' },
    { section: 'architecture', slug: 'failure-model' },
    { section: 'architecture', slug: 'extensibility' },
    // Guides
    { section: 'guides', slug: 'overview' },
    { section: 'guides', slug: 'setup' },
    { section: 'guides', slug: 'architecture' },
    { section: 'guides', slug: 'backend' },
    { section: 'guides', slug: 'conventions' },
    { section: 'guides', slug: 'customization' },
    { section: 'guides', slug: 'security' },
    { section: 'guides', slug: 'realtime' },
    { section: 'guides', slug: 'offline' },
    { section: 'guides', slug: 'deployment' },
    { section: 'guides', slug: 'operations' },
    { section: 'guides', slug: 'validation' },
    { section: 'guides', slug: 'execution' },
    // Runnable Core (formerly Core)
    { section: 'runnable-core', slug: 'overview' },
    { section: 'runnable-core', slug: 'project-shape' },
    { section: 'runnable-core', slug: 'contracts' },
    // Modules (Core Modules)
    { section: 'modules', slug: 'auth' },
    { section: 'modules', slug: 'realtime' },
    { section: 'modules', slug: 'offline' },
    // Examples
    { section: 'examples', slug: 'overview' },
    { section: 'examples', slug: 'backend-reference' },
    { section: 'examples', slug: 'basic-backend' },
    { section: 'examples', slug: 'realtime' },
    { section: 'examples', slug: 'offline-first' },
    // Legacy support
    { section: 'core', slug: 'overview' },
    { section: 'core', slug: 'project-shape' },
    { section: 'core', slug: 'contracts' },
    { section: 'validation', slug: 'edubro' },
  ]

  return routes
}
