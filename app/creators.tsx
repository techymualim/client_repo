'use client'

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function CreatorCard(props: {
  _: { photo: string; caption: string; title: string; value: string };
}) {
  const pathname = usePathname();
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={props._.photo}
        alt=''
        className='mb-3 rounded-full'
        width={125}
        height={125}
      />
      <p className={`text-center mb-2 ${pathname === '/marketplace' ? 'text-black' : 'text-white'} text-[14px] font-medium leading-snug`}>
        {props._.caption}
      </p>
      <p className={`text-center mb-2 ${pathname === '/marketplace' ? 'text-black' : 'text-white'} text-[18px] font-bold capitalize leading-relaxed`}>
        {props._.title}
      </p>
      <p className='text-center mb-2 text-[#0175C9] text-[14px] font-bold leading-snug'>
        {props._.value}
      </p>
      <button className='underline text-center mb-2 text-slate-500 text-[12px] font-medium leading-snug'>
        View Token
      </button>
    </div>
  );
}

export default function Creators() {
  return (
    <section className='pb-24 min-h-[fit-content] md:pt-24'>
      <div className='flex flex-col mx-auto mb-12 w-fit'>
        <h3 className='min-w-[282px] text-white text-center text-[30px] md:text-[36px] font-bold mb-8'>
          Trending Creators
        </h3>

      </div>{' '}
      <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
        {data.map((_) => (
          <CreatorCard key={_.title} _={_}></CreatorCard>
        ))}
      </div>
      <div className='w-full flex justify-center mt-12'>
        <Button className='button-custom font-semibold'>
          <Link href="/marketplace">
              Access Marketplace
          </Link>
        </Button>
      </div>
    </section>
  );
}

const data = [
  {
    photo: '/assets/images/new-hero/new-animoji-1.svg',
    caption: '$LEOST',
    title: 'Leo Sterling',
    value: '54.2 MATIC',
  },

  {
    photo: '/assets/images/new-hero/new-animoji-2.svg',
    caption: '$HAJET',
    title: 'Harper Jetson',
    value: '12.1 MATIC',
  },
  {
    photo: '/assets/images/new-hero/new-animoji-3.svg',
    caption: '$AISHM',
    title: 'Aisha Mohammed',
    value: '59.23 MATIC',
  },
  {
    photo: '/assets/images/new-hero/new-animoji-4.svg',
    caption: '$MALJO',
    title: 'Malik Johnson',
    value: '12.34 MATIC',
  },
];
