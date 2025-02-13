
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
      </body>
    </html>
  )
}