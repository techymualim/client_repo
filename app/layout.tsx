'use client'

import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/navbar';
import './globals.css';
import Footer from '@/components/footer';
import AnimatePresence from '@/context/animate-presence';
import React,{useEffect} from 'react';
import { usePathname } from 'next/navigation';
import Hotjar from '@hotjar/browser';
import Head from 'next/head';


import { hotjar } from 'react-hotjar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    hotjar.initialize(3612664, 6)
  }, [])
  return (
    <html lang='en'>
      <Head>
      <script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3612664,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
      </Head>
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
