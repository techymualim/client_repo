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
  console.log('pathname', pathname)
  return (
    <section>
      <nav className={`container flex items-center mt-8 navbar-custom ${pathname !== '/' ? 'navbar-light' : ''}`}>
        <Brand pathname={pathname} />
        <NavContent pathname={pathname} />
        <Action />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        )}
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = ({pathname}:{pathname: string}) => {
  return (
    <>
      <ul className={`flex items-center justify-center gap-10 font-medium grow whitespace-nowrap max-lg:hidden ${pathname === '/' ? 'text-white' : ''}`}>
        {nav.map((_) => (
          <li key={_.name}>
            <div
              className={cn('relative', {
                'opacity-60': !(
                  (_.name !== 'home' && pathname.includes(_.href)) ||
                  (pathname === '/' && _.name === 'home')
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
              <Link className='' href={_.href}>
                {_.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className='container absolute inset-x-0 flex flex-col items-start font-medium lg:hidden'>
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.name}>
            <h3>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
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
      <p className='text-xs text-foreground font-semibold action-text'>Connect</p>
    </div>
  );
};
