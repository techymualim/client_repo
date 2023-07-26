import React from 'react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import Image from 'next/image';
import Link from 'next/link';

const data = ['Created-July 11th 2023', 'Chain-Polygon', 'Category-Pranks'];

const socials = ['youtube', 'soundcloud', 'instagram', 'tiktok'];

const stats = [
  { value: '20,000', label: 'Tokens Available for Mint' },
  { value: '118', label: 'Holders' },
  { value: '$13,823', label: 'Trading Volume' },
];

export default function Profile({ name }: { name: string }) {
  return (
    <section className='container'>
      <Image
        src={`/assets/images/marketplace/bd.svg`}
        alt=''
        className='mb-6 -mt-20'
        width={150}
        height={150}
      />
      <div className='space-y-2'>
        {/* profile details */}
        <div className='flex items-center gap-3 '>
          <Heading className='mb-0 text-2xl'> {name}</Heading>
          <div className='w-3 rounded-full aspect-square bg-primary' />
          <p className='text-xl font-normal text-slate-700'>
            $BSHEP
            <br />
          </p>
          <div className='flex items-center gap-5 ml-auto'>
            {socials.map((platform) => (
              <Link href={getSocialLink(platform)} key={platform} target='_blank'>
                <Image
                  src={`/assets/images/profile/socials/${platform}.svg`}
                  alt=''
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
        <p className='text-sm font-normal text-slate-700'>
          CEO of Wholesome Pranks
        </p>
        <div className='flex items-center'>
          <p className='text-slate-700 text-[32px] font-medium'>$5,00</p>
          <div className='ml-6'>
            <Button sm outline className='scale-80 bg-transparent to-transparent'>
              Mint
            </Button>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          {data.map((_, idx, arr) => (
            <>
              <div key={_} className='text-sm text-slate-700'>
                <span className='font-normal '>{_.split('-')[0]} </span>
                <span className='font-bold '>
                  {_.split('-')[1]}
                  <br />
                </span>
              </div>
              {idx < arr.length - 1 && (
                <div className='w-2 rounded-full h-min aspect-square bg-primary' />
              )}
            </>
          ))}
        </div>
        <div className='flex items-center py-6 gap-14 text-slate-700'>
          {stats.map((_) => (
            <div key={_.label}>
              <p className='text-xl font-bold text-center '>{_.value}</p>
              <p className='text-base font-normal text-center'>{_.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSocialLink(platform: string): string {
  const socialLinks: { [key: string]: string } = {
    youtube: 'https://www.youtube.com/@bradyshepherd',
    soundcloud: 'https://soundcloud.com/brady-shepherd-828077888',
    instagram: 'https://www.instagram.com/bradyshepherdd/',
    tiktok: 'https://www.tiktok.com/@itzbrady22'
  };

  return socialLinks[platform] || '#';
}

