import { redirect } from 'next/navigation'

export default function DocsPage() {
  // Redirect to the first documentation page
  redirect('/docs/philosophy/core-principles')
}
