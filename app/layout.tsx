import Navbar from '@/components/navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from './footer';
import AnimatePresence from '@/context/animate-presence';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});

export const metadata = {
  title: 'Innox',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${poppins.variable}`}>
        <Navbar /> <AnimatePresence>{children}</AnimatePresence>
        <div className='bg-[#f8f8f8]'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
