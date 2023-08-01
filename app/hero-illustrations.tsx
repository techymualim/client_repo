'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroIllustrations() {
    return (
        <section className='w-full mt-6'>
            <motion.div className='flex w-full'>

                <div style={{ width: '33.3333%' }} className="flex flex-col justify-center">
                    <Image
                        src={'/assets/images/discover-creators.svg'}
                        alt=''
                        width={150}
                        height={70}
                    />
                    <h5 className='text-[18px] font-semibold text-white capitalize mt-3'>
                        Discover New Creators.
                    </h5>
                    <p className='text-[15px] text-slate-500 capitalize mt-3'>
                        Help shape the path for creators.
                    </p>
                    <p className='text-[15px] text-slate-500 capitalize mt-3 max-w-xs'>
                        Access exclusive content, giveaways,
                        merch drops and more throught
                        creator tokens
                    </p>
                </div>

                <div style={{ width: '33.3333%' }} className="">
                    <Image
                        src={'/assets/images/creators-illustration.svg'}
                        alt=''
                        className='w-full'
                        width={300}
                        height={300}
                    />
                </div>

                <div style={{ width: '33.3333%' }} className="flex justify-center">
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <p className='text-[36px] text-white font-bold'>30K<span className='text-blue'>+</span></p>
                        <p className='text-slate-500 text-[15px]'>Tokens Minted</p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <p className='text-[36px] text-white font-bold'>1120<span className='text-blue'>+</span></p>
                        <p className='text-slate-500 text-[15px]'>Holders</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

const data = [
    { label: 'Tokens Minted', className: 'translate-x-4', value: '30K' },
    {
        className: '-translate-x-1',
        value: '1120',
        label: 'Holders',
    },
    {
        className: '',
        value: '$12,34',
        caption: (
            <p className=' text-center text-violet-600 text-[10px] font-semibold'>
                16,97 MATIC
            </p>
        ),
        label: 'Token Price',
    },
    {
        className: 'translate-x-10',
        value: '$13,421',
        caption: (
            <p className='text-center text-sky-800 text-[10px] font-semibold'>
                12 Assets Owned
            </p>
        ),
        label: 'Portfolio Value',
    },
];
