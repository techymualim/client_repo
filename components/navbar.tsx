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
  return (
    <section>
      <nav className='container flex items-center  mt-8'>
        <Brand />
        <NavContent />
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

const NavContent = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className='flex items-center justify-center gap-10 font-medium grow whitespace-nowrap max-lg:hidden

'>
        {nav.map((_) => (
          <li key={_.name}>
            <div
              className={cn('capitalize relative', {
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
                  className='absolute w-full h-1 rounded-full -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent '
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
            <h3 className='capitalize'>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const nav = [
  { name: 'home', href: '/' },
  { name: 'how it works', href: '/#how-it-works' },
  { name: 'marketplace', href: '/marketplace' },
  { name: 'About Us ', href: '/about' },
  { name: 'learn ', href: '/learn' },
];

const Action = () => {
  return (
    <div className='flex items-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-all px-3 gap-2.5 rounded-lg'>
      <Image src={`/assets/images/mail.svg`} alt='' width={20} height={20} />
      <p className='text-xs font-semibold text-foreground'>Connect Wallet</p>
      <div className='w-0.5 ml-4 h-10 bg-primary/50' />
      <Image src={`/assets/images/user.svg`} alt='' width={20} height={20} />
    </div>
  );
};
