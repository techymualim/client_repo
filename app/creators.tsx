import Image from 'next/image';

export function CreatorCard(props: {
  _: { photo: string; caption: string; title: string; value: string };
}) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={props._.photo}
        alt=''
        className='mb-3 rounded-full'
        width={85}
        height={85}
      />
      <p className='text-center mb-2 text-black text-[11px] font-medium leading-snug'>
        {props._.caption}
      </p>
      <p className='text-center mb-1 text-zinc-800 text-[12px] font-bold capitalize leading-relaxed'>
        {props._.title}
      </p>
      <p className='text-center text-sky-600 text-[12px] font-bold leading-snug'>
        {props._.value}
      </p>
      <button className='text-center mt-1 text-sky-600 text-[9px] font-medium leading-snug'>
        View Token
      </button>
    </div>
  );
}

export default function Creators() {
  return (
    <section>
      <div className='flex flex-col mx-auto mt-20 mb-10 w-fit '>
        <div className='text-center text-sky-950 text-[25px] font-bold capitalize leading-10'>
          Trending Creators
          <br />
          <br />
    
        </div>
        
      </div>{' '}
      <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
        {data.map((_) => (
          <CreatorCard key={_.title} _={_}></CreatorCard>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    photo: '/assets/images/new-hero/animoji-15.svg',
    caption: '$ETHSU',
    title: 'Ethan Sullivan',
    value: '124.2 MATIC',
  },

  {
    photo: '/assets/images/new-hero/animoji-16.svg',
    caption: '$SOPAN',
    title: 'Sophia Anderson',
    value: '42 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-17.svg',
    caption: '$BEWAL',
    title: 'Benjamin Walke',
    value: '24 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-18.svg',
    caption: '$OLPRI',
    title: 'Oliver Price',
    value: '12.24 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-19.svg',
    caption: '$LUCAR',
    title: 'Lucas Carter',
    value: '21.34  MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-20.svg',
    caption: '$ALERE',
    title: 'Alexander Reed',
    value: '123.34 MATIC',
  },
  
];
