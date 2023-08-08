import BlurryDiv from '@/components/ui/blurry-div';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroIllustrations from './hero-illustrations';

export default function Hero() {
  return (
    <section className='flex flex-col items-center py-10 mt-24 hero-custom section-mobile'>
      <div className='w-full relative duration-1000 animate-in slide-in-from-top-64'>
        <div className='flex items-center justify-center gap-4 mb-3'>
          <h1 className='sm:text-[30px] md:text-[36px] font-bold text-center'>
            <span className='text-white capitalize'>
              Invest and grow in your{' '}
            </span>
            <br />
            <span className='text-white capitalize'>
              favourite content creators
            </span>
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mb-3 sm:flex-row sm:items-center'>
          <Image
            src={'/assets/images/buy-sell.svg'}
            alt=''
            width={70}
            height={70}
          />
          <h3 className='text-[16px] font-medium text-center mt-6 mb-10 sm:text-left'>
            <span className='text-slate-500'>
              Welcome to the first marketplace that allows you to{' '}
            </span>
            <span className='text-white'>safely and securely</span> <br />
            <span className='text-slate-500'>
              {' '}
              invest in content creators through tokens and direct funding solutions.
            </span>
          </h3>
        </div>

        <div className='flex justify-center items-center gap-5 mb-20 mt-10'>
          <Button className='button-custom font-semibold'>
            <a
              href='https://dki9lqeawlk.typeform.com/to/BjOF4pL4'
              target='_blank'
              rel='noopener noreferrer'
            >
              Explore Creator
            </a>
          </Button>
          <Button outline className='font-semibold text-white'>
            <a
              href='https://dki9lqeawlk.typeform.com/to/LPzOnbOk'
              target='_blank'
              rel='noopener noreferrer'
            >
              Are you a Creator?
            </a>
          </Button>
        </div>

      </div>
      <HeroIllustrations />
      <BlurryDiv className='right-0 -top-24' />
      <BlurryDiv className='bottom-0 left-0' />
    </section>
  );
}

const stat = [
  { title: 'Creators', amount: '100k+' },
  { title: 'Total Users', amount: '300k+' },
  { title: 'Volume Traded', amount: '250+ ETH' },
];
