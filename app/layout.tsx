import '@/app/src/globalStyles/globals.css'
import { Inter } from 'next/font/google'
import SideBar from "@/app/src/components/sideBar/SideBar";
import Header from "@/app/src/components/header/Header";
import styles from '@/app/src/globalStyles/layout.module.css';
import Footer from "@/app/src/components/footer/Footer";
import StoreProvider from "@/app/src/components/providers/StoreProvider";

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

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className={styles.contentWrapper}>
          <SideBar />
          <StoreProvider>{children}</ StoreProvider>
        </div>
        <Footer />
      </body>
    </html>
  )
}
