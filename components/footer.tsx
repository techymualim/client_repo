'use client';

import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className='pb-[200px]'>
      <div className={`bg-[#f8f8f8] mt-36 py-24 ${pathname !== '/marketplace' ? 'footer-custom' : ''} ${pathname === '/learn' || pathname === '/marketplace' ? 'hidden' : ''}`}>
        <div className='w-full flex justify-center pb-0'>
          <Brand pathname={pathname} imageSize={60} textSize={'40px'} />
        </div>
        <div className='w-full flex justify-center gap-2 p-6'>
          {socialLinks.map((item) => (
            <Link href={item.href} key={item.href} target='_blank' rel='noreferrer'>
              <Image
                src={item.image}
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
            {data.map((item) => (
              <div key={item.title} className={`${item.title === 'Learn / FAQS' ? 'w-full' : 'w-[50%]'} md:w-[25%] mb-6 md:mb-0`}>
                <p className={`pb-1 ${pathname !== '/marketplace' ? 'text-white' : 'text-neutral-800'} text-[20px] font-bold capitalize leading-relaxed`}>
                  {item.title}
                </p>
                {item.sub.map((el) => (
                  <Link
                    className={`${pathname !== '/marketplace' ? 'text-neutral-500' : 'text-neutral-800'} py-1.5 block text-[14px] font-normal leading-snug capitalize`}
                    href={el.link}
                    key={el.name}
                  >
                    {el.name}
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
    </div>
  );
}

const data = [
  {
    title: 'Resources',
    sub: [
      {name: 'Help & Support', link: '/help-and-support'}, 
      {name: 'Terms of Service', link: '/terms-of-service'}, 
      {name: 'Privacy Policy', link: '/privacy-policy'},
      {name: 'Patent Showcase', link: '/patent-showcase'}, ]
  },
  {
    title: 'Company ',
    sub: [
      {name: 'About Us', link: '/about'}, 
      {name: 'Contact Us', link: ''}, 
    ],
  },
  {
    title: 'Learn / FAQS',
    sub: [
      {name: 'Blockchain', link: '/learn?topic=blockchain'}, 
      {name: 'Tokens', link: '/learn?topic=tokens'}, 
      {name: 'Creator Tokens', link: '/learn?topic=creator-tokens'}, 
      {name: 'FAQs', link: '/learn?topic=faqs'}],
  },
];

const socialLinks = [
  {
    image: '/assets/images/5.svg',
    href: 'https://www.linkedin.com/in/david-varo-alonso/'
  },
  {
    image: '/assets/images/4.svg',
    href: 'https://twitter.com/InnoxApp'
  },
]
