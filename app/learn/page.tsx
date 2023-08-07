'use client';

import React, { useState, useEffect } from 'react';
import Stars from '@/components/ui/stars';
import Accordion from './accordion';
import Image from 'next/image';
import BlockchainContent from './blockchain-content';
import TokensContent from './tokens-content';
import CreatorContent from './creator-content';
import FAQSContent from './faqs-content';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams()
 
  const topic = searchParams.get('topic')?.toLowerCase() === 'creator tokens' ? 'creator-tokens' : searchParams.get('topic')?.toLowerCase()

  const [activeSection, setActiveSection] = useState<string | null>(topic || null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <>
      <div className='background-custom' />
      <Stars quantity={10} />
      <section className='container container-custom flex flex-col min-h-[0] py-8 md:py-16 md:pt-8'>
        <div className='w-full flex flex-col justify-center items-center mb-6'>
          <h1 className='text-[40px] md:text-[46px] font-extrabold text-center text-white'>Innox</h1>
          <Image 
            src='/assets/images/learn.svg'
            alt='learn text'
            className='w-[60px] md:w-[80px] relative bottom-4 left-7'
            width={80}
            height={80}
          />
        </div>
        <div className='w-full h-full flex flex-col md:flex-row'>
          <div className='w-full md:h-full md:min-h-screen md:w-[30%] md:sticky md:top-0'>
              <Accordion activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className='w-full md:w-[70%] mb-[100vh] mt-8 md:mt-0'>
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
