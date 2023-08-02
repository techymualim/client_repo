'use client';

import { useCountdown } from '@/hooks/countdown';

export default function Timer() {
  const [days, hours, minutes, seconds] = useCountdown('August, 15, 2023');

  return (
    <section className='mb-24'>
      <div className=' text-white text-[18px] text-center font-semibold capitalize'>
        Marketplace Available in:
      </div>
      <div className='flex justify-center gap-2 mt-7 md:gap-8'>
        <div>
          <p className='text-3xl font-bold text-sky-600'>{days}</p>
          <span className='text-xs font-medium text-slate-200 text-opacity-60'>
            Days
          </span>
        </div>{' '}
        <p className='text-3xl font-bold text-sky-600'>:</p>
        <div>
          <p className='text-3xl font-bold text-sky-600'>{hours}</p>
          <span className='text-xs font-medium text-slate-200 text-opacity-60'>
            Hours
          </span>
        </div>{' '}
        <p className='text-3xl font-bold text-sky-600'>:</p>
        <div>
          <p className='text-3xl font-bold text-sky-600'>{minutes}</p>
          <span className='text-xs font-medium text-slate-200 text-opacity-60'>
            Minutes
          </span>
        </div>{' '}
        <p className='text-3xl font-bold text-sky-600'>:</p>
        <div>
          <p className='text-3xl font-bold text-sky-600'>{seconds}</p>
          <span className='text-xs font-medium text-slate-200 text-opacity-60'>
            Seconds
          </span>
        </div>
      </div>
    </section>
  );
}
