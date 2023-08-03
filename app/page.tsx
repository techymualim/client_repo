import CreatorToken from './creator-token';
import Creators from './creators';
import Hero from './hero';
import Timer from './timer';
import Working from './working';
import Image from 'next/image';

export default function Home() {
  const starImage1 = '/assets/images/star.svg';
  const starImage2 = '/assets/images/star2.svg';
  const starImage3 = '/assets/images/star3.svg';

  const numberOfStars = 30;
  const stars = Array.from({ length: numberOfStars }).map((_, index) => {
    const randomSize = Math.floor(Math.random() * (15 - 5 + 1)) + 20;
    const randomStarImage = [starImage1, starImage2, starImage3][Math.floor(Math.random() * 3)];

    const sizeMultiplier = randomStarImage === starImage1 ? 4 : 1;

    return (
      <Image
        key={index}
        src={randomStarImage}
        className='absolute -z-2'
        style={{
          top: `${Math.random() * 500}%`,
          left: `${Math.random() * 100}vw`,
          transform: `rotate(${Math.random() * 360}deg)`,
          width: `${randomSize * sizeMultiplier}px`,
          height: `${randomSize * sizeMultiplier}px`,
        }}
        alt="Star"
        width={20}
        height={20}
      />
    );
  });

  return (
    <>
      <div className='background-custom' />
      {stars}
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
