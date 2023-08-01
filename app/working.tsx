'use client';
import Muted from '@/components/ui/muted';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function Working() {
  const [isUser, setIsUser] = useState(false);
  return (
    <section id='how-it-works' className='scroll-m-20 h-screen'>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <p className='min-w-[282px] text-center text-slate-700 text-[25px] font-bold'>
        How it works?
      </p>
      <ul className='flex justify-center gap-10 my-4'>
        <div
          onClick={() => setIsUser(false)}
          className={cn('capitalize cursor-pointer text-sm pb-1 relative')}
        >
          {!isUser && (
            <div className='absolute w-full h-1 duration-500 rounded-full animate-in slide-in-from-right-20 -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent ' />
          )}
          <p className=''>For Creators</p>
        </div>
        <div
          onClick={() => setIsUser(true)}
          className={cn('capitalize cursor-pointer text-sm pb-1  relative')}
        >
          {' '}
          {isUser && (
            <div className='absolute w-full h-1 duration-500 rounded-full animate-in slide-in-from-left-20 -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent ' />
          )}
          <p className=''>For Users</p>
        </div>
      </ul>
      {/* transition grid */}
      <div className='flex flex-wrap justify-center gap-10 my-20'>
        {(!isUser ? data.slice(0, 4) : data.slice(4)).map((_) => (
          <div
            key={_.title}
            className={cn(
              'max-w-[17.5rem] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16'
            )}
          >
            <div className='flex gap-2'>
              <Image src={_.icon} alt='' width={38} height={30} />{' '}
              {_.transitionIcon && (
                <Image
                  src={_.transitionIcon}
                  className='block w-full mx-6 grow'
                  alt=''
                  width={220}
                  height={60}
                />
              )}
            </div>
            <div className=' text-slate-700 my-2.5 text-[15px] font-medium'>
              {_.title}
            </div>
            <Muted>{_.node}</Muted>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    icon: '/assets/images/transition/mail.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Set up your wallet',
    node: (
      <>
        Create an account as a “content creator” by{' '}
        <span className='text-sky-600 '>connecting your wallet</span>
        <br />
        <br />
        <span className='text-slate-500'><strong>How to create your wallet?</strong></span>

      </>
    ),
  },
  {
    icon: '/assets/images/transition/verify.svg',
    transitionIcon: '/assets/images/dash-down.svg',
    title: 'Verify channel ',
    node: (
      <>
        Verify any of your social media channels.{' '}
        <span className='text-slate-600 '>This will serve as proof that you are the legitimate </span>
        content creator of the token{' '}
      </>
    ),
  },
  {
    icon: '/assets/images/transition/brush.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Personalize Token',
    node: (
      <>
        Navigate to your profile page and<br /> 
        create your token.
        Follow the steps and <span className='text-sky-600 '>click the create button 
        to deploy token</span>
      </>
    ),
  },
  {
    icon: '/assets/images/transition/bag.svg',
    title: 'Start Minting your Token',
    node: (
      <>
        Share your token with your fans{' '}
        <span className='text-sky-600 '>so the minting phase can begin</span> and your fans 
        can start trading your token
      </>
    ),
  },
  {
    icon: '/assets/images/transition/verify.svg',
    transitionIcon: '/assets/images/dash-down.svg',
    title: 'Create an Account ',
    node: <>Create an account as a &quot;user&quot;.</>,
  },
  {
    icon: '/assets/images/transition/mail.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Create Wallet',
    node: (
      <>
        Connect your wallet to buy tokens.{' '}
        <span className='text-sky-600 '>Add funds</span> if needed directly through
        the metamask app or using your credit card.
      </>
    ),
  },

  {
    icon: '/assets/images/transition/bag.svg',
    title: 'Start Investing',
    node: (
      <>
        Start <span className='text-sky-600 '>investing</span> in your favorite
        content creators. 
        You will see the tokens you own by accesing your metamask wallet
      </>
    ),
  },
];
