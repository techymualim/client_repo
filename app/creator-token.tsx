/* eslint-disable react/no-unescaped-entities */
'use client'

import TabComponent from "@/components/ui/tab";
import { useState } from 'react';
import Image from "next/image";
import { Option } from "@/types/option";


const options = [
  {
    label: 'Token',
    value: 'token',
  },
  {
    label: 'Content',
    value: 'content',
  },
  {
    label: 'Giveaways',
    value: 'giveaways',
  },
  {
    label: 'Merch Shop',
    value: 'merch',
  },
]

export default function CreatorToken() {
  const [selectedTab, setSelectedTab] = useState<Option | null>(options[0]);
  return (
    <section className='container min-h-[fit-content] mb-24 section-mobile-3 px-0'>
      <h3 className='min-w-[282px] text-white text-center text-[30px] md:text-[36px] font-bold mb-16'>
      Custom In-Platform Currency
      </h3>
      <div className='flex flex-col md:flex-row md:justify-between w-full mr-10'>
        <div className='w-full md:w-[50%] flex md:mt-16 md:mr-20 md:ml-4 md:pt-[70px]'>
        <div className='flex flex-col text-center md:text-start px-6 md:px-0'>
              <p className='text-sm md:text-base font-large text-white mb-8 md:mb-24'>
              Our most valuable and exciting product which allows content creators to accelerate & increase their revenue while offering a unique and fun experience to their fanbase.
              Allowing your fans to access your exclusive offerings through the use of your custom digital currency. Create a more vibrant and engaging community
                
              </p>
              <p className='text-sm md:text-base font-large text-white'>
              Offer your fans exclusive content in order to see more of what goes in behind the scenes of your videos, bonus content, access to private community and more. 
              Your fans will pay a monthly subscription in order to access your exclusive content, either through your custom digital currency or through the use of fiat currency ($) (100% revenue split first 6 months)
              </p>
          </div>
        </div>
        <div className='w-full md:w-[40%] flex flex-col'>
          <TabComponent options={options} selected={selectedTab} setSelected={setSelectedTab}  />
          {selectedTab?.value === 'token' ? <Token /> : ''}
          {selectedTab?.value === 'content' ? <Content /> : ''}
          {selectedTab?.value === 'giveaways' ? <Giveaways /> : ''}
          {selectedTab?.value === 'merch' ? <MerchShop /> : ''}
        </div>
      </div>
    </section>
  );
}

const Token = () => {
  return (
    <div className="flex flex-col w-full h-[500px] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16">
      <p className="text-white text-sm">Offer your fans your own  currency! Full Ownsership & Personalization</p>
      <br />
      <br />
      <div className="w-full flex mt-6">
        <div className="w-[30%] flex flex-col justify-between">
          <div className="flex flex-col text-center self-end pr-6">
            <p className="text-white text-[18px] font-semibold mt-6">28,981</p>
            <p className="text-white text-sm">Units Sold</p>
          </div>
          <div className="flex flex-col text-center self-center">
            <p className="text-white text-[18px] font-semibold mt-6">1120</p>
            <p className="text-white text-sm">Holders</p>
          </div>
          <div className="flex flex-col text-center self-end">
            <p className="text-white text-[18px] font-semibold mt-6">$12,34</p>
            
            <p className="text-white text-sm">Unit Price</p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center">
          <Image 
            src={'/assets/images/example-token.svg'}
            className='block mx-6 w-[80%]'
            alt=''
            width={300}
            height={60}
          />
          <p className="text-white text-[18px] font-semibold mt-6">Benjamin Walker</p>
          <p className="text-white text-[18px] font-semibold">$BEWAL</p>
        </div>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="flex flex-col w-full h-[500px] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16">
      <p className="text-white text-sm">Provide your fans with early access & exclusive content.</p>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-col w-full md:w-[75%] ">
          <Image 
            src={'/assets/images/example-content.svg'}
            className='block w-[80%] mb-6 ml-10'
            alt=''
            width={300}
            height={60}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[18px] mb-3 ml-10">She ACTUALLY Shocked Me!</p>
            <p className="text-white text-sm mb-3 font-poppins ml-10">In this video, I go to the gym with a shock collar and literally "shock my muscles" as a prank. I also rizz up gym girls, meet some cool...</p>
            <small className="mb-3 text-white font-semibold ml-10">Read More</small>
            <div className="flex space-x-6">
              <small className="text-white ml-10 text-[10px] md:text-[80%]">2 days ago</small>
              <small className="text-white text-[10px] md:text-[80%] flex items-center">
                <Image 
                  src={'/assets/images/like.svg'}
                  className='block mx-3'
                  alt=''
                  width={10}
                  height={10}
                />
                1.8k Likes
              </small>
              <small className="text-white text-[10px] md:text-[80%] flex items-center">
                <Image 
                  src={'/assets/images/comment.svg'}
                  className='block mx-3'
                  alt=''
                  width={10}
                  height={10}
                />
                234 Comments
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Giveaways = () => {
  return (
    <div className="flex flex-col w-full h-[500px] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16">
      <p className="text-white text-sm">Create & Start your own giveaways</p>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-col items-center w-[75%]">
          <Image 
            src={'/assets/images/ps5.svg'}
            className='block w-[70%]'
            alt=''
            width={300}
            height={60}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[18px] mb-3 text-center">PS5 Giveaway </p>
            <p className="text-white text-sm mb-3 font-poppins text-center">Are you ready to elevate your gaming experience to a whole new level? We're thrilled to announce our biggest giveaway yet - the chance to win a brand-new PlayStation 5!</p>
            <div className="flex justify-around mt-6">
              <small className="text-white">$1 = 1 Entry</small>
              <small className="text-white flex">
                Giveaway ends: 28/08/2023
              </small>
            </div>
            <div className="flex justify-around mt-6">
              <small className="text-white">$1 in Currency = 2 Entries</small>
              <small className="text-white flex">
                Double your entries by using creators currency
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MerchShop = () => {
  return (
    <div className="flex flex-col w-full h-[500px] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16">
      <p className="text-white text-sm">Offer fans to buy your merch with your own currency.</p>
      <div className="w-full flex mt-6">
        <div className="flex flex-col items-center w-[50%]">
          <Image 
            src={'/assets/images/shoe.svg'}
            className='block w-[70%]'
            alt=''
            width={300}
            height={60}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[18px]">Red Storm Shoes</p>
            <p className="text-white text-sm mb-3">$64,79 or 12 $BDRAS</p>
            <small className="text-white">BUY</small>
          </div>
        </div>
        <div className="flex flex-col items-center w-[50%]">
          <Image 
            src={'/assets/images/hoodie.svg'}
            className='block w-[70%]'
            alt=''
            width={300}
            height={60}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[18px]">Hoodie</p>
            <p className="text-white text-sm mb-3">$24,99 or 3 $BDRAS</p>
            <small className="text-white">BUY</small>
          </div>
        </div>
      </div>
    </div>
  )
}
