import CreatorToken from './creator-token';
import Creators from './creators';
import Funding from './funding';
import Hero from './hero';
import Timer from './timer';
import Working from './working';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='background-custom' />
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
        <Creators />
      </main>
    </>
  );
}
