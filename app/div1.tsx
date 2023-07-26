import Muted from '@/components/ui/muted';
import Image from 'next/image';

export default function Div1() {
  return (
    <div className='grid grid-cols-12 my-20'>
      <div className='space-y-5 col-span-full md:col-span-5'>
        <Image
          src={`/assets/images/transition/money.svg`}
          alt=''
          width={50}
          height={50}
        />
        <p className=' text-slate-700 text-[20px] font-medium'>
          Channel Funding{' '}
        </p>
        <Muted className='text-[12px] font-medium'>
          <span>We believe in the </span>
          <span className='text-sky-600'>power of collaboration</span>
          <span>
            {' '}
            and recognize the immense talent and potential of content creators
            across various platforms.
            <br /> <br />
            By investing in a content creators channel,{' '}
          </span>
          <span className='text-sky-600'>
            you become an integral part of their growth story.
          </span>
          <span>
            {' '}
            <br />
            <br />
            Your investment provides the{' '}
          </span>
          <span className='text-sky-600'>
            necessary resources for creators to enhance
          </span>
          <span>
            {' '}
            their production quality, expand their audience reach, and explore
            new creative avenues.{' '}
          </span>
        </Muted>
        <button className='px-6 py-2 text-sm font-medium text-white transition-all rounded-lg hover:shadow-lg bg-primary to-secondary'>
          Apply
        </button>
      </div>
      <div className='flex justify-center -space-x-12 col-span-full md:col-span-7'>
        <Image
          src={`/assets/images/card.svg`}
          alt=''
          width={340}
          height={340}
        />
        <Image
          src={`/assets/images/funding.svg`}
          alt=''
          className='translate-y-16'
          width={160}
          height={300}
        />
      </div>
    </div>
  );
}
