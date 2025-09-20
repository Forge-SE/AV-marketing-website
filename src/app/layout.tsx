import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
// import Image from "next/image";
import "./globals.css";
import {Footer} from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next"
// import Link from "next/link";

// const manrope = Manrope({
//   variable: "--font-manrope",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Afrovivo Energy",
  description: "Powering Africa's future through innovative energy solutions.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={` antialiased `} >
        <Navbar/>
        {children}
         <Footer/>
      </body>
      
       
    </html>
  );
}
