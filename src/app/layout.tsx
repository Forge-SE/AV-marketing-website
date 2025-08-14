import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});



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
      <body
        className={`${manrope.className} antialiased`}
      >
        {children}
         <section className="grid grid-cols-1 md:grid-cols-3 w-full place-items-center p-10">
  <div className="flex flex-col justify-center items-start gap-2">
<Image src="/logo.png" alt="Afrovivo Logo" width={100 } height={200}/>
<h3 className="text-2xl font-semibold clash">Let’s Power the Future, Together
</h3>
</div>
<div className="flex flex-col justify-center items-start gap-2">
<span className="text-gray-800 font-medium text-sm clash">
  Accra, Ghana
</span>
<span className="text-gray-800 font-medium text-sm clash">
  info@afrovivo.com
</span>
<span className="text-gray-800 font-medium text-sm clash">
   +233 XXX XXX XXX
</span>
</div>
<div className="flex justify-center items-start gap-2">
<span className="text-gray-800 font-medium text-sm clash">
  <Link href="https://www.instagram.com/afrovivo_energy?igsh=cHFyNHNocHpzOTM3">
  Instagram
  </Link>

</span>
<span className="text-gray-800 font-medium text-sm clash">
  <Link href="https://www.linkedin.com/company/afrovivo-energy/">
    Linkedin
  </Link>

</span>
<span className="text-gray-800 font-medium text-sm clash">
  <Link href="">
  Twitter
  </Link>

</span>
</div>
          </section>
      
      </body>
    </html>
  );
}
