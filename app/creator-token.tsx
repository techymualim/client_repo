import { CreatorCard } from './creators';

export default function CreatorToken() {
  return (
    <section className='container p-2 md:px-8 xl:px-40'>
      <p className='text-slate-700 mb-10 text-[25px] font-bold text-center'>
        Creator Tokens
        <br />
      <br />
      
      </p>{' '}
      <p className='pb-6 font-bold text-slate-700'>Trending Creators</p>
      <div className='grid grid-cols-1 gap-10 pb-24 md:gap-24 md:grid-cols-2'>
        <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
          {creators.map((_) => (
            <CreatorCard key={_.title} _={_}></CreatorCard>
          ))}
        </div>
        <div className='grid grid-cols-1 gap-x-20 '>
          {data.map((_) => (
            <div key={_.label}>
              <p className='text-sm font-medium text-slate-700'>
                {_.label}
                <br />
              </p>
              <span className='text-xs font-medium text-slate-700/60'>
                <br />
                {_.desc}
                <br />
                <br />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const creators = [
  {
    photo: '/assets/images/new-hero/animoji-1.svg',
    caption: '$LEOST',
    title: 'Leo Sterling',
    value: '54.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-2.svg',
    caption: '$HAJET',
    title: 'Harper Jetson',
    value: '12.1 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-3.svg',
    caption: '$AISHM',
    title: 'Aish Mohammed',
    value: '59.23 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-21.svg',
    caption: '$MALJO',
    title: 'Malik John',
    value: '12.34 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-15.svg',
    caption: '$ETHSU',
    title: 'Ethan Sull',
    value: '124.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-16.svg',
    caption: '$SOPAN',
    title: 'Sophia Ander',
    value: '42 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-17.svg',
    caption: '$BEWAL',
    title: 'Ben Walke',
    value: '24 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-18.svg',
    caption: '$OLPRI',
    title: 'Oliver Price',
    value: '12.24 MATIC',
  },
];

const data = [
  {
    label: 'Invest',
    desc: "With our marketplace, you can invest in the tokens of your beloved content creators. By purchasing their tokens, you contribute to their growth, and as their popularity soars, so does the value of the tokens. It's a win-win situation where you can both support your idols and potentially reap the rewards of their success.",
  },
  {
    label: 'Trade',
    desc: 'Our platform also enables you to trade creator tokens with our built in decentralize exchange, Uniswap. Explore a vibrant marketplace where you can buy, sell, and exchange tokens, creating an exciting ecosystem around your favorite creators. Stay tuned for new token listings and engage in thrilling trading experiences.',
  },
];
