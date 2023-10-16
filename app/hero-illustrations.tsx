'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroIllustrations() {
    return (
        <section className='w-full mt-6 duration-1000 animate-in slide-in-from-top-64'>
  <div className="flex flex-col md:flex-row">

    <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left">
      <Image
        src={'/assets/images/discover-creators.svg'}
        alt=''
        width={150}
        height={70}
        className="mx-auto md:mx-0"
      />
      <h5 className='text-[18px] font-semibold text-white capitalize mt-3'>
        Discover New Creators.
      </h5>
      <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>
        Help shape the path for creators.
      </p>
      <p className='text-sm md:text-base text-slate-500 capitalize mt-3 max-w-md md:max-xs'>
        Access exclusive content, giveaways,
        <br /> merch drops and more through
        <br />creators in-platform  currency
      </p>
    </div>

    <div className="w-full md:w-1/3 mt-4 md:mt-0">
      <Image
        src={'/assets/images/creators-illustration.svg'}
        alt=''
        className='w-[80%] mx-auto md:w-full'
        width={300}
        height={300}
      />
    </div>

    <div className="w-full md:w-1/3 mt-4 md:mt-0 flex">
      <div className="w-1/2 flex flex-col items-center justify-center text-center md:text-left">
        <p className='text-[36px] text-white font-bold'>120<span className='text-blue'>+</span></p>
        <p className='text-slate-500 text-sm md:text-base'>Creators Funded</p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center text-center md:text-left">
        <p className='text-[36px] text-white font-bold'>$1.7M<span className='text-blue'>+</span></p>
        <p className='text-slate-500 text-sm md:text-base'>Total Payout</p>
      </div>
    </div>
  </div>
</section>

    );
}

const data = [
    { label: 'Tokens Minted', className: 'translate-x-4', value: '30K' },
    {
        className: '-translate-x-1',
        value: '1120',
        label: 'Holders',
    },
    {
        className: '',
        value: '$12,34',
        
        label: 'Token Price',
    },
    {
        className: 'translate-x-10',
        value: '$13,421',
        caption: (
            <p className='text-center text-sky-800 text-[10px] font-semibold'>
                12 Assets Owned
            </p>
        ),
        label: 'Portfolio Value',
    },
];
