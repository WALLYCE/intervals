import './globals.css'
import type { Metadata } from 'next'
import Header from './header';
import { poppins } from './fonts';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'Intervals',
  description: 'Otimize o seu treino intervalado!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} min-h-screen`}>
        <Header />
        <main className='flex flex-col items-center w-full mt-6'>
          <div className="w-full max-w-screen-xl">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
