'use client'
/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from 'react';
import Stars from '@/components/ui/stars';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';




export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
 <Head>
    <meta charSet='utf-8' />
    <title> About us - Transforming the Digital Investment Landscape </title>
    <meta name='keywords' content='content platform, content creators, own coin, fans, 
    exclusive offerings, invest in growth, creator economy, Web3,
     blockchain, cryptocurrency, NFT, social media, tipping, 
     monetization, community, engagement, empowerment, independence, artist, 
     musician, gamer, YouTuber, streamer, influencer, podcaster, writer, journalist, 
     developer, entrepreneur, early access to new content, behind-the-scenes content, 
     live streams, meet-and-greets, merchandise, NFTs, voting rights, access to a private
      community, discounts on merchandise, opportunity to earn dividends, invest in content creators, 
      creator tokens, social tokens'/>
    <meta name='description' content='"Welcome to Innox! Explore our platform that transforms the relationship between content creators and fans into a captivating experience. Learn about creator tokens and our mission to revolutionize the digital investment landscape.' />
  </Head>
    
      <div className='background-custom' />
      <Stars />
      <section className='container container-custom flex flex-col min-h-screen place-content-center py-10 mt-24 mb-32'>
        <div className='w-full flex flex-col md:flex-row gap-14'>
          {/* Left Column */}
          <div className='w-full md:w-[50%]'>
            <h1 className='text-[24px] md:text-[36px] text-center md:text-start font-bold mb-14 mt-20 text-white'>Transforming the Digital Investment Landscape</h1>
            <p className='text-base mb-14 leading-relaxed text-white' style={{ marginBottom: '1.4em' }}>
            Welcome to Innox! Discover the enchanting world where a new era of connection unfolds! We are delighted to present a pioneering platform that transforms the relationship between content creators and their devoted fans into a captivating experience. Creator tokens possess exciting new properties: they are unique, tradable, and usable in many ways. Whether you want to support your favorite creators, gift tokens to each other, swap them for other creators, access exclusive content and giveaways, the possibilities are limitless.

            </p>
            <p className='text-base mb-14 leading-relaxed text-white' style={{ marginBottom: '1.4em' }}>
              Our unwavering dedication lies in building state-of-the-art tools that empower users to engage in free and seamless activities through creator tokens. We strive to provide creators with the means to launch their own token, pushing the boundaries of innovation. Additionally we support creators through the process in order to make their adaptation of this new technology as smooth and simple as possible.
            </p>
            <p className='text-base leading-relaxed text-white' style={{ marginBottom: '1.4em' }}>
              By embracing these cutting-edge technologies and fostering an environment of innovation and collaboration, we aim to shape a future where creator tokens revolutionize the way we engage with digital content. At Innox, we are committed to building the infrastructure that empowers creators & their fans to participate in a thriving and interconnected ecosystem of creator tokens.
            </p>
          </div>

          {/* Right Column (Image) */}
          <br />
          <div className="flex justify-end w-full md:w-[40%] mt-10">
            <img src="/assets/images/finalus.svg" alt="About Us" className="w-88 h-auto" />
          </div>
        </div>

        {/* Additional Paragraphs */}
        <div className="my-10 md:my-5 text-base leading-relaxed text-white" style={{ lineHeight: '1.4', marginBottom: '1.4em' }}>
          <p>
            As trailblazers in the token space, we take immense pride in being the first marketplace that allows fans to support their favorite creators through creator tokens. Our platform provides a secure and vibrant environment where creators, fans, and investors converge to explore, engage with, and support the visionary talents shaping the content creation landscape.
          </p>
          <br />
          <p>
            Join us on this remarkable journey as we embark in a new era of investment, growth, and collaboration. Together, we will unlock unprecedented opportunities for creators, redefine the relationship between fans and content creators, and revolutionize the way the world values and supports creative endeavors.
          </p>
          <br />
          <p>
            Experience the transformative power of creator tokens in the open digital economy with Innox.
          </p>
        </div>

        {/* New Section: The story behind Innox */}
        <div className="my-40 text-base leading-relaxed">
          <div className="flex flex-col justify-center items-center md:mb-20"> {/* Center the title */}
            <h1 className='text-[24px] md:text-[36px] text-center md:text-start font-bold text-white capitalize'>The story behind Innox</h1><br />
            <Image
              src='/assets/images/underline.svg'
              alt='underline effect'
              className='relative left-20 -top-4 w-[150px]'
              width={150}
              height={10}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start"> {/* Separate the image and paragraphs */}
            {/* Left Column (Image) */}
            <div className='w-full md:w-[50%] flex flex-col items-center justify-center'>
              <img src="/assets/images/varo2.svg" alt="The story behind Innox" className="w-70 h-auto relative bottom-20" />
              <div className='w-full flex justify-center gap-6 relative bottom-10 md:bottom-20'>
                <Link href={'https://www.linkedin.com/in/david-varo-alonso/'} target='_blank' rel='noreferrer'>
                  <Image
                    src='/assets/images/linkedin-outlined.svg'
                    alt='linkedin link'
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={'https://twitter.com/InnoxApp'} target='_blank' rel='noreferrer'>
                  <Image
                    src='/assets/images/twitter-outlined.svg'
                    alt='twitter-link'
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            {/* Right Column */}
            <div className='text-white w-full md:w-[50%]'>
              <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              The concept behind Innox originated in 2021 during David’s brainstorming sessions for potential business ventures. From a young age, David desired to be an entrepreneur with the goal of living life on his own terms and exert full control over his endeavors. After many ventures during the years, one of them including a digital marketing agency which he closed on April 2023 & an educatinal platform that offered courses to poeple in LaTam with limited resources, Zinbed, David decided to embark on a complex yet captivating idea that would disrupt the entertainment and creator economy industry. 

              </p>
              <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              Having been an long-term consumer of YouTube videos since the age of 12, David spent his middle and high school years immersed in binge-watching various content creators. He observed the journeys of numerous creators, witnessing both their rise to fame and their setbacks. Over the course of this journey, one recurring thought emerged: the potential of investing in a content creator during their early days, when their subscriber count was under 50k. Imagine the prospect of witnessing their meteoric rise to a channel with millions of devoted followers. Such an investment would not have solely rewarded the supporters who believed in the creators journey, but also introduced an additional avenue of income for the content creator, all made possible through the ingenious utilization of tokens.

              </p>
              <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              Captivated by the immense potential and mutual benefits for creators and fans, David began meticulously planning and devising strategies to make this concept accessible and applicable to creators and users of diverse backgrounds and demographics. In July 2023, the website  was launched, marking the birth of the first sights of the revolutionary platform scheduled to be live by the end of August/September.
              </p>
              <p>
                Today, we take great pride in being the pioneers of this innovative and disruptive platform. Our primary objective is to revolutionize the entertainment landscape and provide unwavering support to creators throughout their journey.
              </p>
            </div>
          </div>
        </div>

        {/* New Section: Trusted by VC's such as */}
        <div className="my-30 pb-32 text-base leading-relaxed">
          <div className="flex justify-center"> {/* Center the title */}
            <h1 className='text-[24px] md:text-[36px] text-center md:text-start font-bold text-white mb-12'>Trusted by VC’s & top creators such as:</h1><br />
          </div>
          <div className="w-full flex justify-center items-center "> {/* Center the images and paragraphs */}
            <div className=''>
              <img src="/assets/images/vcs.svg" alt="Trusted by VC's" className="w-70 h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
