import { Bitcount_Single, Boldonse, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbarSection/navbar";
import Footer from "@/components/footer";

const bitcountSingle = Bitcount_Single({
  subsets: ['latin'],
  weight: 'variable', // Allows any weight from 100-900
  variable: '--font-bitcount-single',
  display: 'swap',
})

const boldonse = Boldonse({
  subsets: ['latin'],
  weight: '400',          // Matches your .boldonse-regular requirement
  variable: '--font-boldonse', // Create a CSS variable
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // This creates the CSS variable
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  title: "RN Infotech",
  description: "Computer reparing shop and refurbhish laptop selling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${bitcountSingle.variable} ${boldonse.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
