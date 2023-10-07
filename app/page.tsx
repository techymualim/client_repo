/* eslint-disable @next/next/no-img-element */
import CreatorToken from './creator-token';
import Creators from './creators';
import Hero from './hero';
import Timer from './timer';
import Working from './working';
import DirectFunding from './direct-funding';
import Image from 'next/image';
import Stars from '@/components/ui/stars';



export default function Home() {

  return (
    <>
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
