import type { Metadata } from "next";

import "./globals.css";


import {Poppins} from 'next/font/google';
import Header from "@/components/header";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        
        {children}
        
        </body>
    </html>
  );
}
