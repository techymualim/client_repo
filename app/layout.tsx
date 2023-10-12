import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar';
import './globals.css';
import Footer from '@/components/footer';
import AnimatePresence from '@/context/animate-presence';
import React from 'react';
import { usePathname } from 'next/navigation';


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="font-poppins-regular">
        <style>
          {`
          .star {
            transform-origin: center bottom;
            z-index: -4;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(${Math.random() * 20 - 10}deg);
            }
            50% {
              transform: translateY(-20px) rotate(${Math.random() * 20 - 10}deg);
            }
          }
        `}
        </style>
        <div className='background-custom' />
        <Navbar />
        <AnimatePresence>
          {children}
        </AnimatePresence>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
