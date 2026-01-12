import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DocsSidebar } from '@/components/DocsSidebar'
import { DocsInfoBanner } from '@/components/DocsInfoBanner'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <DocsInfoBanner />
      <div className="flex flex-1">
        <DocsSidebar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
