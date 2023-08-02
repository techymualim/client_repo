import Navbar from '@/components/navbar';
import './globals.css';
import Footer from './footer';
import AnimatePresence from '@/context/animate-presence';
import React, { Children } from 'react';

export const metadata = {
  title: 'Innox',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang='en'>
      <body className="font-poppins-regular">
        <Navbar /> 
        <AnimatePresence>{children}</AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
