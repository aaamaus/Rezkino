import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ['200', '400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>header</div>
        <div>
          <div>sideBar</div>
          {children}
        </div>
      </body>
    </html>
  )
}
