export function DocsInfoBanner() {
  return (
    <div className="bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-900/50 px-6 py-3">
      <p className="text-sm text-blue-900 dark:text-blue-100">
        <span className="font-medium">✓ Runnable Docs:</span> Forgebase includes a minimal runnable backend to validate the docs. Learn more in the{' '}
        <a
          href="/docs/runnable-core/overview"
          className="underline hover:text-blue-700 dark:hover:text-blue-200 font-medium"
        >
          Runnable Core
        </a>
        {' '}section.
      </p>
    </div>
  )
}
