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
import { Option } from "@/types/option";
import AccountCreationContent from './account-creation-content';
import { Helmet } from 'react-helmet-async';
import Head from 'next/head';

export default function Page() {
  const searchParams = useSearchParams()

  const topic = searchParams.get('topic')?.toLowerCase()
  const section = options.find(item => item.value === topic)
  const [activeSection, setActiveSection] = useState<Option | null>(section || null);
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

  <Head>
        <title>Learn - Innox App</title>
        <meta
          name="description"
          content="Explore Innox and learn about content creation, blockchain, tokens, creator tokens, and FAQs. Get insights into the world of content creation and tokenization."
        />
      </Head>

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
              options={options}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          <div className='w-full md:w-[70%] mb-[100vh] mt-8 md:mt-0'>
            {activeSection?.value === 'account-creation' && <AccountCreationContent />}
            {activeSection?.value === 'blockchain' && <BlockchainContent />}
            {activeSection?.value === 'tokens' && <TokensContent />}
            {activeSection?.value === 'creator-tokens' && <CreatorContent />}
            {activeSection?.value === 'faqs' && <FAQSContent />}
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
    label: 'My Account',
    value: 'account-creation',
  },
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
