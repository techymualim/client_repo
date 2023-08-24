'use client';

import { cn } from '@/lib/utils';
import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Brand from './ui/brand';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className='z-20 pt-8'>
      <nav className={`container flex justify-between items-center navbar-custom`}>
        <Brand pathname={pathname} />
        <NavContent pathname={pathname} />
        <Action />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className={`cursor-pointer lg:hidden text-foreground text-white`}
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className={`cursor-pointer lg:hidden text-foreground text-white`}
          />
        )}
      </nav>

      {isMenuOpen && <NavContentMob pathname={pathname} setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = ({pathname}:{pathname: string}) => {
  return (
    <>
      <ul className={`flex items-center justify-center gap-10 font-medium grow whitespace-nowrap max-lg:hidden text-white`}>
        {nav.map((_) => (
          <li key={_.name}>
            <div
              className={cn('relative', {
                'opacity-60': !(
                  (pathname.includes(_.href))
                ),
              })}
            >
              {(_.name !== 'home' && pathname.includes(_.href)) ||
              (pathname === '/' && _.name === 'home') ? (
                <motion.div
                  layoutId='navbar'
                  className='absolute left-1/3 w-4 h-1 rounded-full -bottom-1 bg-primary/100'
                />
              ) : null}
              <Link className='font-poppins-regular' href={_.href}>
                {_.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen, pathname }: { setIsMenuOpen: Function; pathname: string }) => {
  return (
    <div>
      <ul className={`rounded-lg py-12 z-30 container absolute inset-x-0 flex flex-col items-start font-medium lg:hidden text-white bg-[#00050a]`}>
        {nav.map((_) => (
          <li className='py-6' onClick={() => setIsMenuOpen(false)} key={_.name}>
            <h3>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

const nav = [
  { name: 'Home', href: '/' },
  { name: 'How it works', href: '/#how-it-works' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'About us ', href: '/about' },
  { name: 'Learn ', href: '/learn' },
];

const Action = () => {
  return (
    <div className='flex items-center bg-white cursor-pointer hover:bg-primary/10 transition-all px-5 gap-2.5 rounded-lg h-8'>
      <Image src={`/assets/images/wallet.svg`} alt='' width={25} height={25} />
      <p className='text-xs text-foreground font-semibold action-text'>Sign up for free</p>
    </div>
  );
};
