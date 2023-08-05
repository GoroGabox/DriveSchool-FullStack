import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AuthProvider } from '../context/AuthContext'
import { ShoppingProvider } from '../context/ShoppingContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Al Volante',
  description: 'Escuela de conductores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ShoppingProvider>
            <NavBar/>
            {children}
            <Footer/>
          </ShoppingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
