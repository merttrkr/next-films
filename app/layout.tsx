import { Inter } from "@next/font/google";

import '@/styles/reset.css'
import '@/styles/global.css'

const InterFontFamily = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={InterFontFamily.className}>
      <body className='container'>{children}</body>
    </html>
  )
}
