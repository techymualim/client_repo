'use client';
import Muted from '@/components/ui/muted';
import ToggleSwitch from '@/components/ui/toggle-switch';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function Working() {
  const [isUser, setIsUser] = useState(false);

  const toggleOptions = [
    { label: 'For Creators', value: 'creators' },
    { label: 'For Users', value: 'users' },
  ];

  const handleToggle = (selectedOption: string) => {
    if (selectedOption === 'creators') setIsUser(false)
    if (selectedOption === 'users') setIsUser(true)
  };

  return (
    <section id='how-it-works' className='scroll-m-20 h-screen min-h-[fit-content] mb-24'>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <p className='min-w-[282px] text-white text-center text-[36px] font-bold'>
        How it works?
      </p>
      <div className='flex justify-center gap-10 my-4'>
        <div className='mt-6'>
          <ToggleSwitch options={toggleOptions} onSelect={handleToggle} />
        </div>
      </div>
      {/* transition grid */}
      <div
        className='flex flex-wrap justify-center gap-10 my-12 w-full'
      >
        {
          !isUser && <CreatorContent />
        }
        {
          isUser && <UserContent />
        }
      </div>
    </section>
  );
}

const CreatorContent = () => {
  return (
    <div className='flex animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16 w-full'>
      <div className='w-[40%] flex flex-col items-end'>
        <div className='h-[25%] w-[50%] mb-[25%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Set up your wallet</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Create an account as a “content creator” by connecting your wallet</p>
        </div>
        <div className='h-[25%] w-[50%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Personalize Token</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Navigate to your profile page and create your token. Follow the steps and click the create button to deploy token</p>
        </div>
      </div>
      <div className='w-[20%] flex justify-center'>
        <Image
          src={'/assets/images/works-creators.svg'}
          className='block mx-6 w-[50%] h-[100%]'
          alt=''
          width={100}
          height={60}
        />
      </div>
      <div className='w-[40%] flex flex-col items-start'>
        <div className='h-[25%] w-[50%] mt-[25%] mb-[25%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Verify channel</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Verify any of your social media channels. This will serve as proof that you are the legitimate content creator of the token</p>
        </div>
        <div className='h-[25%] w-[50%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>List in marketplace</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Share your token with your fans so the minting phase can begin and your fans can start trading your token and accessing exclusive offerings</p>
        </div>
      </div>
    </div>
  )
}

const UserContent = () => {
  return (
    <div className='flex animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16 w-full'>
      <div className='w-[40%] flex flex-col items-end'>
        <div className='h-[25%] w-[50%] mb-[25%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Create an account</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Create an account as a “user”.</p>
        </div>
        <div className='h-[25%] w-[50%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Support your content creator</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Start investing in your favorite content creators and access their exclusive offerings. You will see the tokens you own by accesing your metamask wallet.</p>
        </div>
      </div>
      <div className='w-[20%] flex justify-center'>
        <Image
          src={'/assets/images/works-users.svg'}
          className='block mx-6 w-[50%] h-[100%]'
          alt=''
          width={100}
          height={60}
        />
      </div>
      <div className='w-[40%] flex flex-col items-start'>
        <div className='h-[25%] w-[70%] mt-[25%] mb-[25%]'>
          <p className=' text-white text-[18px] font-semibold capitalize'>Connect wallet</p>
          <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>Connect your wallet to buy tokens. Add funds if needed directly through the metamask app or using your credit card.</p>
        </div>
      </div>
    </div>
  )
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
