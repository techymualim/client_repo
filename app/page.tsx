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
        <title>Monetize Your Fanbase | Innox App</title>
        <meta name='keywords' content='content platform, content creators, own coin, fans, exclusive offerings, invest in growth, creator economy, Web3, blockchain, cryptocurrency, NFTs, social media, tipping, monetization, community, engagement, empowerment, independence, artist, musician, gamer, YouTuber, streamer, influencer, podcaster, writer, journalist, developer, entrepreneur, early access to new content, behind-the-scenes content, live streams, meet-and-greets, merchandise, NFTs, voting rights, access to a private community, discounts on merchandise, opportunity to earn dividends, invest in content creators, creator tokens, social tokens, friend.tech, custom currency, subscription for content creators, giveaways, merchshop' />
        <meta name='description' content='Discover innovative ways to turn your fan base into a lucrative source of income while fostering a lively and interactive community environment.' />
        <script>
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3612664,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </script>
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
