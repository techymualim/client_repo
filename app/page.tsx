/* eslint-disable @next/next/no-img-element */

import CreatorToken from './creator-token';
import Creators from './creators';
import Hero from './hero';
import Timer from './timer';
import Working from './working';
import DirectFunding from './direct-funding';
import Image from 'next/image';
import Stars from '@/components/ui/stars';
import { Helmet } from 'react-helmet-async';
import Head from 'next/head';



export default function Home() {

  return (
    <>
     <Head>
    <meta charSet='utf-8' />
    <title> Innox App </title>
    <meta name='keywords' content='content platform, content creators, own coin, fans, 
    exclusive offerings, invest in growth, creator economy, Web3,
     blockchain, cryptocurrency, NFT, social media, tipping, 
     monetization, community, engagement, empowerment, independence, artist, 
     musician, gamer, YouTuber, streamer, influencer, podcaster, writer, journalist, 
     developer, entrepreneur, early access to new content, behind-the-scenes content, 
     live streams, meet-and-greets, merchandise, NFTs, voting rights, access to a private
      community, discounts on merchandise, opportunity to earn dividends, invest in content creators, 
      creator tokens, social tokens'/>
    <meta name='description' content='Welcome to the first content platform that allows content creators to have their own
coin that can be used by fans to access exclusive offerings and invest in your growth.' />
  </Head>
      <Stars />
      <Image
        src={'/assets/images/background-lines.svg'}
        className='absolute top-[-10%] mx-6 w-[100%] h-[auto] z-negative'
        alt='lines illustration'
        width={800}
        height={400}
      />
      <main className='container [&>*]:relative container-custom'>
        <Hero />
        <Timer />
        <Working />
        <CreatorToken />
        <DirectFunding />
        <Creators />
      </main>
    </>
  );
}
