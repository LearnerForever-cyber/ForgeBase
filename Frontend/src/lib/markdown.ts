import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

// Path to the parent Forgebase repo folders
const CONTENT_ROOT = path.join(process.cwd(), '..')

// Map URL paths to actual folder names in the repo
const folderMap: Record<string, string> = {
  'philosophy': 'Philosophy',
  'architecture': 'Architecture',
  'core': 'Core',
  'runnable-core': 'Core', // New section name, same folder
  'modules': 'Modules',
  'examples': 'Examples',
  'guides': 'Guides',
  'validation': 'Validation',
}

// Map URL slugs to actual file names
const fileMap: Record<string, string> = {
  'core-principles': 'Core-Principles.md',
  'forgebase-approach': 'Forgebase Approach.md',
  'problem-we-solve': 'Problem we solve.md',
  'opinionated-decisions': 'Opinionated Decisions.md',
  'tradeoffs': 'Tradeoffs.md',
  'overview': 'Overview.md',
  'components': 'Components.md',
  'data-flow': 'Data-Flow.md',
  'design-decisions': 'Design Decisions.md',
  'security': 'Security.md',
  'failure-model': 'Failure Model.md',
  'extensibility': 'Extensibility.md',
  'project-shape': 'Project Shape.md',
  'contracts': 'Contracts.md',
  'auth': 'Auth.md',
  'realtime': 'Realtime.md',
  'offline': 'Offline.md',
  'backend-reference': 'Backend-Reference.md',
  'basic-backend': 'Basic-Backend/README.md',
  'offline-first': 'Offline-First/Sync-Strategy.md',
  'setup': 'Setup.md',
  'backend': 'Backend.md',
  'conventions': 'Conventions.md',
  'customization': 'Customization.md',
  'deployment': 'Deployment.md',
  'operations': 'Operations.md',
  'validation': 'Validation.md',
  'execution': 'Execution.md',
  'edubro': 'Edubro.md',
}

export async function getMarkdownContent(section: string, slug: string) {
  try {
    // Get the actual folder name
    const folderName = folderMap[section]
    if (!folderName) {
      return null
    }

    // Get the actual file name
    let fileName = fileMap[slug]
    
    // Special case: if slug is same as section, look for README
    if (slug === section || slug === 'overview') {
      fileName = 'README.md'
    }

    if (!fileName) {
      return null
    }

    // Build the full path
    const filePath = path.join(CONTENT_ROOT, folderName, fileName)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null
    }

    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Parse frontmatter
    const { data, content } = matter(fileContents)

    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content)

    const htmlContent = processedContent.toString()

    return {
      title: data.title || slug,
      content: htmlContent,
      frontmatter: data,
    }
  } catch (error) {
    console.error('Error loading markdown:', error)
    return null
  }
}
