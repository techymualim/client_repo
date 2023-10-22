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
    <section id='how-it-works' className='scroll-m-20 min-h-[fit-content] mb-24 section-mobile'>
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <br />
      <br />
      <div className="flex justify-center text-white my-8">
  <div className="w-1/3 mx-4">
    <h2 className="text-2xl font-bold text-center">Our Purpose</h2>
    <br />
    <p className="mt-2 text-center max-w-full">We strive to create a fair and transparent ecosystem that benefits both creators and fans, and fosters creativity and innovation in the creator economy industry</p>
  </div>
  <div className="w-1/3 mx-4">
    <h2 className="text-2xl font-bold text-center">Our Mission</h2>
    <br />
    <p className="mt-2 text-center max-w-full">To empower content creators by providing a supportive platform that facilitates financial growth and enhances fan engagement through innovative products and systems.</p>
    <br />
    <br />
    <br />
  </div>
  <br />
  <br />
</div>

<br />
<br />
<br />
      <h3 className='min-w-[282px] text-white text-center text-[30px] md:text-[36px] font-bold mb-16'>
        How it works?
      </h3>
      <div className='flex justify-center gap-10'>
        <div className='my-8'>
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
    <div className='flex flex-col md:flex-row animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16 w-full px-6 md:px-0'>
      <div className='w-full md:w-[40%] flex flex-col items-end text-center md:text-start'>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%] mb-[10%] md:mb-[25%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Set up your digital wallet</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3 mb-3'>Create an account as a content creator by connecting your digital wallet</p>
          <a href='/learn?topic=account-creation' className='text-sm md:text-base font-bold text-blue-500 capitalize mt-6'>HOW TO CREATE WALLET?</a>
        </div>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Custom In-platform Digital Currency</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>Navigate to your profile page and create your own personalized in platform currency. Follow the steps and click the create button to deploy currency</p>
        </div>
      </div>
      <div className='w-[20%] hidden sm:flex justify-center'>
        <Image
          src={'/assets/images/works-creators.svg'}
          className='block mx-6 w-full md:w-[50%] h-[100%]'
          alt=''
          width={100}
          height={60}
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col items-start text-center md:text-start'>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%] mt-[10%] md:mt-[25%] mb-[10%] md:mb-[25%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Verify channel</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>Verify any of your social media channels. This will serve as proof that you are the legitimate content creator</p>
        </div>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>List in marketplace</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>Share your digital currency with your fans so they can purchase it & have access to exclusive offerings</p>
        </div>
      </div>
    </div>
  )
}

const UserContent = () => {
  return (
    <div className='flex flex-col md:flex-row animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16 w-full px-6 md:px-0'>
      <div className='w-full md:w-[40%] flex flex-col items-end text-center md:text-start'>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%] mb-[25%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Create an account</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>Create an account as a “user”.</p>
        </div>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Support your content creator</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3'>Start supporting your favorite content creators and access their exclusive offerings. You will see the digital currency you own by accesing your wallet.</p>
        </div>
      </div>
      <div className='w-[20%] hidden sm:flex justify-center'>
        <Image
          src={'/assets/images/works-users.svg'}
          className='block mx-6 w-[50%] h-[100%]'
          alt=''
          width={100}
          height={60}
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col items-start text-center md:text-start'>
        <div className='h-[50%] md:h-[25%] w-full md:w-[50%] mt-[25%] md:mt-[25%] mb-[25%] md:mb-[25%]'>
          <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize'>Connect wallet</p>
          <p className='text-sm md:text-base text-slate-500 capitalize mt-3 mb-3'>Connect your wallet to store your currency. Add funds if needed directly through the metamask app or using your credit card.</p>
          <a href='/learn?topic=account-creation' className='text-sm md:text-base font-bold text-blue-500 capitalize mt-6'>HOW TO CREATE WALLET & ADD FUNDS?</a>
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
        creator of the digital currency{' '}
      </>
    ),
  },
  {
    icon: '/assets/images/transition/brush.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Personalize Currency',
    node: (
      <>
        Navigate to your profile page and<br />
        create your own in-platform currency.
        Follow the steps and <span className='text-sky-600 '>click the create button
          to deploy currency</span>
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
        Start <span className='text-sky-600 '>purchasing</span> tokens from your favorite
        content creators & access exclusive offerings.
        You will see the tokens you own by accesing your metamask wallet
      </>
    ),
  },
];
