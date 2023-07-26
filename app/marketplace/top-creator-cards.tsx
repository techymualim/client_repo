import { Heading } from '@/components/ui/heading';
import Image from 'next/image';
import Link from 'next/link';

export default function TopCreatorCards() {
  return (
    <section>
      <Heading>Top Creators </Heading>
      <div className='flex flex-wrap justify-between gap-10'>
        {data.map((_) => (
          <div
            key={_.name}
            className='flex items-center min-w-[370px] gap-3 p-5 bg-white rounded-full drop-shadow-md transition-all hover:drop-shadow-lg w-fit cursor-pointer'
            onClick={() =>
              _.name === 'Brady Shepherd' && window.location.replace(`/profile/${_.name}`)
            }
          >
            <div className='relative'>
              <Image
                src={`/assets/images/marketplace/${_.image}`}
                alt=''
                width={75}
                height={75}
              />
              <Image
                className='absolute bottom-0 right-0'
                src={`/assets/images/marketplace/tick.svg`}
                alt=''
                width={18}
                height={18}
              />
            </div>
            <div>
              <p className='text-lg font-bold leading-7 text-neutral-800'>
                {_.name}
              </p>
              <p className='text-sm font-bold leading-snug text-gray-500 capitalize'>
                {_.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  { image: 'Brady.svg', name: 'Brady Shepherd', value: '6.79 MATIC' },
  { image: 'Windsor.svg', name: 'Windsor Lane', value: '120.7 MATIC' },
  { image: 'Andy.svg', name: 'Andy Hurlbutt', value: '25.2 MATIC' },
  { image: 'Lucas.svg', name: 'Lucas Sky', value: '14.2 MATIC' },
  { image: 'Crispin.svg', name: 'Crispin Berry', value: '21.2 MATIC' },
  { image: 'Harper.svg', name: 'Harper Wilcher', value: '4.2 MATIC' },
];
