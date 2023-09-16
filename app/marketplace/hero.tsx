'use client';
import { useCountdown } from '@/hooks/countdown';
import Image from 'next/image';

export default function Hero() {
  const [days, hours, minutes, seconds] = useCountdown('September, 15, 2023');
  const date = [
    { label: 'days', value: days },
    { label: 'hours', value: hours },
    { label: 'mins', value: minutes },
    { label: 'secs', value: seconds },
  ];
  return (
    <div className='relative my-10 text-white '>
      <Image
        src={`/assets/images/marketplace/bg.svg`}
        alt=''
        className='absolute inset-0 object-cover w-full h-full rounded-2xl -z-10'
        width={1600}
        height={300}
      />
      <div className='flex justify-between gap-5 p-6 md:py-10 md:items-end max-md:flex-col md:px-14'>
        <div className='space-y-2'>
          <Image
            src={`/assets/images/marketplace/dp.svg`}
            alt=''
            width={110}
            height={110}
          />
          <h1 className='font-bold'>$BSHEP</h1>{' '}
          <p className='text-xs'>Brady Shepherd</p>
          <div className='flex items-center gap-3'>
            <p className='text-xs'>20,000 Tokens</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4'
              height='4'
              viewBox='0 0 4 4'
              fill='none'
            >
              <circle cx='2' cy='2' r='2' fill='#CBCBCB' />
            </svg>
            <p className='text-xs'>$5 Mint Price</p>
          </div>
          <div className='flex gap-5 !mt-4'>
            {date.map((_) => (
              <div
                key={_.label}
                className='flex flex-col items-center px-2 py-1 min-w-[2.4rem] font-bold rounded bg-white/20'
              >
                <p className='text-[10px] '>{_.value}</p>
                <p className='text-[8px]'>{_.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-5 '>
          {rightSideAction.map((_) => (
            <button
              className='grid px-3 text-xs transition-all rounded-md h-9 hover:bg-white/30 bg-white/20 place-content-center'
              key={_.toString()}
            >
              {_}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const rightSideAction = [
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='19'
    height='19'
    viewBox='0 0 19 19'
    key='alarm'
    fill='none'
  >
    <g clip-path='url(#clip0_106_1928)'>
      <path
        d='M9.5 19C10.1299 19 10.734 18.7498 11.1794 18.3044C11.6248 17.859 11.875 17.2549 11.875 16.625H7.125C7.125 17.2549 7.37522 17.859 7.82062 18.3044C8.26602 18.7498 8.87011 19 9.5 19ZM10.6816 1.30506C10.6981 1.13995 10.6799 0.973189 10.6281 0.815545C10.5763 0.6579 10.492 0.51287 10.3806 0.389808C10.2693 0.266745 10.1334 0.168382 9.98173 0.101063C9.83005 0.0337437 9.66595 -0.0010376 9.5 -0.0010376C9.33405 -0.0010376 9.16995 0.0337437 9.01827 0.101063C8.86659 0.168382 8.7307 0.266745 8.61938 0.389808C8.50805 0.51287 8.42375 0.6579 8.37191 0.815545C8.32008 0.973189 8.30186 1.13995 8.31844 1.30506C6.97623 1.57807 5.76961 2.30655 4.90291 3.36716C4.0362 4.42776 3.56267 5.75531 3.5625 7.125C3.5625 8.42888 2.96875 14.25 1.1875 15.4375H17.8125C16.0312 14.25 15.4375 8.42888 15.4375 7.125C15.4375 4.25125 13.395 1.8525 10.6816 1.30506Z'
        fill='#F8F8F8'
      />
    </g>
    <defs>
      <clipPath id='clip0_106_1928'>
        <rect width='19' height='19' fill='white' />
      </clipPath>
    </defs>
  </svg>,
  'Creator Profile',
  'Mint Token',
];
