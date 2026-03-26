
import "./globals.css"



import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Website Clone",
  description: "Cloned website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  )
}
