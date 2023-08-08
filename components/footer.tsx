'use client';

import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={`bg-[#f8f8f8] mt-36 py-24 ${pathname !== '/marketplace' ? 'footer-custom' : ''} ${pathname === '/learn' || pathname === '/marketplace' ? 'hidden' : ''}`}>
      <div className='w-full flex justify-center pb-0'>
        <Brand pathname={pathname} imageSize={60} textSize={'40px'} />
      </div>
      <div className='w-full flex justify-center gap-2 p-6'>
        {Array.from(Array(4).keys()).map((_) => (
          <Link href={'/'} key={_}>
            <Image
              src={`/assets/images/${_ + 1}.svg`}
              alt='   '
              width={80}
              height={80}
            />
          </Link>
        ))}
      </div>
      <section className={'container flex flex-wrap justify-between gap-10 px-3'}>
        {/* middle part */}
        <div className='w-full flex flex-wrap'>
          {data.map((_) => (
            <div key={_.title} className={`${_.title === 'Learn / FAQS' ? 'w-full' : 'w-[50%]'} md:w-[25%] mb-6 md:mb-0`}>
              <p className={`pb-1 ${pathname !== '/marketplace' ? 'text-white' : 'text-neutral-800'} text-[20px] font-bold capitalize leading-relaxed`}>
                {_.title}
              </p>
              {_.sub.map((__) => (
                <Link
                  className={`${pathname !== '/marketplace' ? 'text-neutral-500' : 'text-neutral-800'} py-1.5 block text-[14px] font-normal leading-snug capitalize`}
                  href={_.title === 'Learn / FAQS' ? `/learn?topic=${__}` : __}
                  key={__}
                >
                  {__}
                </Link>
              ))}
            </div>
          ))}
          <div className='w-full md:w-[25%] mb-6 md:mb-0'>
            <p className={`pb-1 ${pathname !== '/marketplace' ? 'text-white' : 'text-neutral-800'} text-[20px] font-bold capitalize leading-relaxed`}>
              Subscribe
            </p>{' '}
            <p
              className={`${pathname !== '/marketplace' ? 'text-neutral-500' : 'text-neutral-800'} py-1.5 block text-[14px] font-normal leading-snug mb-6`}
            >
              Signup for our newsletter to get the latest news in your inbox.
            </p>
            <form className='flex items-stretch overflow-hidden rounded-lg w-full '>
              <div className="relative flex items-center w-full">
                <input
                  type='email'
                  placeholder='Enter your email'
                  className={`h-12 pl-3 outline-none w-full border border-white rounded-full ${pathname !== '/marketplace' ? 'bg-white' : 'bg-black'} bg-opacity-20`}
                />
                <button className='flex items-center justify-center h-9 px-2 bg-secondary rounded-full absolute right-2 text-white'>
                  SEND
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

const data = [
  {
    title: 'Resources',
    sub: ['Help & Support', "Terms & Services", 'Security', 'Privacy Policy'],
  },
  {
    title: 'Company ',
    sub: ['About Us', 'Contact Us', 'Our Blog', 'Discover'],
  },
  {
    title: 'Learn / FAQS',
    sub: ['Blockchain', 'Tokens', 'Creator Tokens', 'FAQs'],
  },


];
