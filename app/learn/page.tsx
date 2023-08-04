'use client';

import React, { useState } from 'react';
import stars from '@/components/ui/stars';
import Accordion from './accordion';
import Image from 'next/image';
import BlockchainContent from './blockchain-content';
import TokensContent from './tokens-content';
import CreatorContent from './creator-content';
import FAQSContent from './faqs-content';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <div className='background-custom' />
      {stars}
      <section className='container container-custom flex flex-col min-h-screen py-8 md:py-16 md:pt-8'>
        <div className='w-full flex flex-col justify-center items-center mb-6'>
          <h1 className='sm:text-[40px] md:text-[46px] font-extrabold text-center text-white'>Innox</h1>
          <Image 
            src='/assets/images/learn.svg'
            alt='learn text'
            className='w-[40px] md:w-[80px] relative bottom-4 left-7'
            width={80}
            height={80}
          />
        </div>
        <div className='w-full flex flex-col md:flex-row'>
          <div className='w-full md:w-[40%]'>
            <Accordion activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className='w-full md:w-[60%]'>
              {activeSection === 'blockchain' && <BlockchainContent />}
              {activeSection === 'tokens' &&<TokensContent />}
              {activeSection === 'creator-tokens' &&<CreatorContent />}
              {activeSection === 'faqs' &&<FAQSContent />}
          </div>
        </div>
      </section>
    </>
  );
}
