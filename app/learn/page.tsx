'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Accordion from './accordion';
import Image from 'next/image';
import BlockchainContent from './blockchain-content';
import TokensContent from './tokens-content';
import CreatorContent from './creator-content';
import FAQSContent from './faqs-content';
import { useSearchParams } from 'next/navigation';
import TabContents from './tab-contents';
import Stars from '@/components/ui/stars';

export default function Page() {
  const searchParams = useSearchParams()

  const topic = searchParams.get('topic')?.toLowerCase()
  const [activeSection, setActiveSection] = useState<string | null>(topic || null);
  const [starsVisible, setStarsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setStarsVisible(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const memoizedStars = useMemo(() => {
    if (starsVisible) {
      return <Stars quantity={10} />;
    }
    return null;
  }, [starsVisible]);

  return (
    <>
      <div className='background-custom' />
      {memoizedStars}
      <section className='container container-custom flex flex-col min-h-[0] py-10 md:py-16 md:pt-8 mt-24'>
        <div className='w-full flex flex-col justify-center items-center mb-16'>
          <h1 className='text-[50px] md:text-[56px] font-extrabold text-center text-white'>Innox</h1>
          <Image
            src='/assets/images/learn.svg'
            alt='learn text'
            className='w-[60px] md:w-[100px] relative bottom-4 left-7'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full h-full flex flex-col md:flex-row'>
          <div className='w-full md:h-full md:min-h-screen md:w-[30%] md:sticky md:top-0'>
            <Accordion
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          <div className='w-full md:w-[70%] mb-[100vh] mt-8 md:mt-0'>
            {activeSection === 'blockchain' && <BlockchainContent />}
            {activeSection === 'tokens' && <TokensContent />}
            {activeSection === 'creator-tokens' && <CreatorContent />}
            {activeSection === 'faqs' && <FAQSContent />}
          </div>
        </div>
      </section>
      <div className='fixed py-3 w-full bg-[#00050A] bottom-0 block md:hidden'>
        <TabContents
          options={options}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </>
  );
}

const options = [
  {
    label: 'Blockchain',
    value: 'blockchain',
  },
  {
    label: 'Tokens',
    value: 'tokens',
  },
  {
    label: 'Creator Tokens',
    value: 'creator-tokens',
  },
  {
    label: 'FAQs',
    value: 'faqs',
  },
]
