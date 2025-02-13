
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Prom Proposal 2.0',
  description: 'Will you go to prom with me... again?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="mt-16 text-center text-gray-500 relative z-10">
        <p>The best sequels always have better special effects and more heart</p>
        <Link href="/" className="block mt-4 text-indigo-500 hover:text-indigo-700 transition-colors">
          &larr; Back to Home/Top
        </Link>
      </footer>
      </body>
    </html>
  )
}