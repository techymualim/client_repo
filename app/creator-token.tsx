'use client'

import TabComponent from "@/components/ui/tab";
import { useState } from 'react';
import Image from "next/image";

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
  const [selectedTab, setSelectedTab] = useState(options[0]);
  return (
    <section className='container p-2 md:px-8 xl:px-40 h-screen mb-12 section-mobile-3'>
      <p className='min-w-[282px] text-white text-center text-[36px] font-bold'>
        Creator Tokens 
      </p>
      <div className='flex flex-col md:flex-row gap-10 pb-24 w-full'>
        <div className='w-full md:w-[50%] flex pt-6 md:pt-24'>
          <div className='flex flex-col text-center md:text-start'>
              <p className='text-sm font-medium text-white'>
                Unlock an exceptional opportunity to <span className='text-[#0081DE] font-semibold'>support and grow your cherished content
                creators</span> through the revolutionary creator tokens. 
                By strategically investing in these tokens, you can benefit from an increase in the 
                token’s price, gain exclusive privileges, access to early and premium content, limited-edition 
                merchandise drops, exhilarating giveaway opportunities, and seamless insider communication 
                within our vibrant community of valued holders.
              </p>
              <p className='text-sm font-medium text-white mt-6'>
                Discover a world where <span className='text-[#0081DE] font-semibold'>creativity meets investment</span>, where you can actively participate in the 
                success of your favorite content creators while reaping unparalleled benefits. 
                Don't miss out on this exciting chance to connect on a deeper level with the creators you adore. 
                Join the movement and witness the transformative potential of Creator Tokens as we usher in a new era 
                of support for artistic brilliance.
              </p>
          </div>
        </div>
        <div className='w-full md:w-[50%] flex flex-wrap justify-center gap-8 md:justify-between'>
          <TabComponent options={options} selected={selectedTab} setSelected={setSelectedTab}  />
          {selectedTab.value === 'token' ? <Token /> : ''}
          {selectedTab.value === 'content' ? <Content /> : ''}
          {selectedTab.value === 'giveaways' ? <Giveaways /> : ''}
          {selectedTab.value === 'merch' ? <MerchShop /> : ''}
        </div>
      </div>
    </section>
  );
}

const Token = () => {
  return (
    <div className="flex flex-col w-full h-[500px] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16">
      <p className="text-white">Offer your fans your own token! Full Ownsership & Personalization</p>
      <div className="w-full flex mt-6">
        <div className="w-[40%] flex flex-col justify-between">
          <div className="flex flex-col text-center self-end pr-6">
            <p className="text-white text-[18px] font-semibold mt-6">28,981</p>
            <p className="text-white text-[16px]">Tokens Minted</p>
          </div>
          <div className="flex flex-col text-center self-center">
            <p className="text-white text-[18px] font-semibold mt-6">1120</p>
            <p className="text-white text-[16px]">Holders</p>
          </div>
          <div className="flex flex-col text-center self-end">
            <p className="text-white text-[18px] font-semibold mt-6">$12,34</p>
            <small className="text-[#CAABFF] text-[8px]">16,97 MATIC</small>
            <p className="text-white text-[16px]">Token Price</p>
          </div>
        </div>
        <div className="w-[60%] flex flex-col items-center">
          <Image 
            src={'/assets/images/example-token.svg'}
            className='block mx-6 w-[100%]'
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
      <p className="text-white">Provide your token holders with early access & exclusive content.</p>
      <div className="w-full flex justify-center mt-6">
        <div className="flex flex-col w-[75%]">
          <Image 
            src={'/assets/images/example-content.svg'}
            className='block w-[100%]'
            alt=''
            width={300}
            height={60}
          />
          <div className="flex flex-col">
            <p className="text-white font-semibold text-[18px] mb-3">Buying the world's most expensive yatch!</p>
            <p className="text-white text-sm mb-3 font-poppins">We set sail on an opulent adventure like no other as we delve into the realm of extravagance and luxury. Join us as we take you on.....</p>
            <small className="mb-3 text-white font-semibold">Read More</small>
            <div className="flex space-x-6">
              <small className="text-white">2 days ago</small>
              <small className="text-white flex">
                <Image 
                  src={'/assets/images/like.svg'}
                  className='block mx-3'
                  alt=''
                  width={10}
                  height={10}
                />
                1.8k Likes
              </small>
              <small className="text-white flex">
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
      <p className="text-white">Create & Start your own giveaways</p>
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
              <small className="text-white">$1 in Tokens = 2 Entries</small>
              <small className="text-white flex">
                Double your entries by using tokens
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
      <p className="text-white">Offer fans to buy your merch with tokens.</p>
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
            <p className="text-white text-sm mb-3">$64,79 or 12 tokens</p>
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
            <p className="text-white text-sm mb-3">$24,99 or 3 tokens</p>
            <small className="text-white">BUY</small>
          </div>
        </div>
      </div>
    </div>
  )
}
