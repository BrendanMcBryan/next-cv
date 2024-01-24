import type { Metadata } from 'next'


import { montserrat } from '@/app/ui/fonts';
import './globals.css'



export const metadata: Metadata = {
  title: 'brendan mcbryan',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <html lang="en">
      {/* <StickMenu show={showSidebar} setter={setShowSidebar} /> */}
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
