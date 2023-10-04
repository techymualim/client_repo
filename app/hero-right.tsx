'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroRight() {
  return (
    <section className='flex items-center col-span-4 gap-10 mx-auto max-md:flex-col justify-self-end max-sm:col-span-full'>
      <div className='flex gap-y-8 md:flex-col'>
        {/* stats */}
        {data.map((_, idx) => (
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: idx * 0.4 }}
            key={_.label}
            className={cn('max-md:translate-x-0', _.className)}
          >
            <p className='text-xl font-bold text-center text-slate-700 '>
              {_.value}
              <br />
            </p>
            {_.caption}
            <p className='font-normal text-center text-slate-700'>{_.label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div className='relative w-80 h-80'>
        {animojis.map((_, idx) => (
          <motion.div key={_} className={cn('absolute ', _)}>
            <Image
              src={`/assets/images/new-hero/animoji-${idx}.svg`}
              alt=''
              width={100}
              height={100}
            />{' '}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const data = [
  { label: 'Creators so far', className: 'translate-x-4', value: '120+' },
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

const animojis = [
  'left-4 top-4',
  'right-16 top-1/4',
  'top-1/4 scale-90 left-16',
  'top-44 left-1/3',
  'top-36 scale-[0.7] left-16',
  'bottom-0 left-14',
  'right-0 top-1/3',
  'bottom-8 right-8 scale-125',
  'top-1/3 scale-110 -left-2',
  'left-28 scale-110',
  'bottom-12',
  'left-1/3 top-1/3 scale-75',
];
