import BlurryDiv from '@/components/ui/blurry-div';
import Muted from '@/components/ui/muted';
import Image from 'next/image';
import HeroRight from './hero-right';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='grid items-center grid-cols-7 py-24 '>
      <BlurryDiv className='right-0 -top-24' />
      <BlurryDiv className='bottom-0 left-0' />
      <div className='relative col-span-3 space-y-10 duration-1000 animate-in slide-in-from-left-32 fade-in-0 max-md:col-span-full lg:pl-10 '>
        <h1 className='max-w-[344px]  text-[40px] font-bold'>
          <span className='text-slate-700 '>
            Invest and grow
            <br />
            your{' '}
          </span>
          <span className='text-slate-700 '>
            favourite <br />
          </span>
          <span className='text-sky-600 '> content creators</span>
        </h1>
        <Image
          className='absolute duration-1000 w-52 h-52 max-md:hidden -right-24 top-6 animate-in slide-in-from-left-4 slide-in-from-top-2'
          src={`/assets/images/arrow.svg`}
          alt=''
          width={200}
          height={200}
        />
        <h3 className='max-w-[373px] text-[15px] font-medium'>
          <span className='text-slate-700 '>
            Welcome to the first marketplace that allows you to{' '}
          </span>
          <span className='text-sky-600 '>safely and securely invest </span> in content creators
          <span className='text-slate-700 '>
            {' '}
            through tokens and direct funding solutions.
          </span>
        </h3>
        <div className='flex items-center gap-5'>
          <Button>Start Investing</Button>
          <Button outline>
            <a
              href='https://dki9lqeawlk.typeform.com/to/BjOF4pL4'
              target='_blank'
              rel='noopener noreferrer'
            >
              Are you a creator?
            </a>
          </Button>
        </div>

        {/* stat section */}
        {/* <div className='flex gap-10'>
          {stat.map((el) => (
            <div key={el.title}>
              <p className=' text-secondary text-xl md:text-[25px] font-bold whitespace-nowrap'>
                {el.amount}
              </p>
              <Muted>{el.title}</Muted>
            </div>
          ))}
        </div> */}
      </div>
      <HeroRight />
    </section>
  );
}

const stat = [
  { title: 'Creators', amount: '100k+' },
  { title: 'Total Users', amount: '300k+' },
  { title: 'Volume Traded', amount: '250+ ETH' },
];
