import '../globals.css'
import type { Metadata } from 'next'
import localFont from'next/font/local'
import Footer from "@/app/components/Footer";

const eiko = localFont({
  src: [
    {
      path: './../fonts/eiko/PPEiko-Thin.woff',
      weight: '100',
      style: 'normal'
    },
  ],
  variable: '--font-eiko'
})

const favorit = localFont({
  src: [
    {
      path: './../fonts/favoritpro/FavoritPro-Light.woff',
      weight: '300',
      style: 'normal'
    },
  ],
  variable: '--font-favorit'
})

const favoritmono = localFont({
  src: [
    {
      path: './../fonts/favoritmono/FavoritMonoStd-Regular.woff',
      weight: '400',
      style: 'normal'
    },
  ],
  variable: '--font-favoritmono'
})

const montreal = localFont({
  src: [
    {
      path: './../fonts/montreal/PPNeueMontreal-Regular.woff',
      weight: '450',
      style: 'normal'
    },
  ],
  variable: '--font-montreal'
})

export const metadata: Metadata = {
  title: 'Alex Luowan',
  description: 'INTERACTION/PRODUCT DESIGNER',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${eiko.variable} ${favorit.variable} ${favoritmono.variable} ${montreal.variable} text-black`}>{children}<Footer></Footer></body>

      </html>
  )
}
