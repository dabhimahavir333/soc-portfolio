import "./globals.css"

export const metadata = {
  title: "SOC Dashboard",
  description: "Cybersecurity Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400">
        {children}
      </body>
    </html>
  )
}