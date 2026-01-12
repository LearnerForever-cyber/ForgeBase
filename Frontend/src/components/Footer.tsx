export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <p>Forgebase - Documentation-first backend reference system</p>
            <p className="text-xs mt-1">Validated in production via EduBro</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/forgebase" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://instagram.com/rajxth.mp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
