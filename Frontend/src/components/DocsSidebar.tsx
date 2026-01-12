'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docsNavigation } from '@/lib/navigation'

export function DocsSidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="w-64 border-r h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
      <nav className="p-6 space-y-8">
        {docsNavigation.map((section) => (
          <div key={section.path}>
            <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`block text-sm py-1 px-2 rounded transition-colors ${
                        isActive
                          ? 'bg-brand-100 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
