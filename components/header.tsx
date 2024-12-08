import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Your Name
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/about">About</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

