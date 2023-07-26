'use client';
import { Heading } from '@/components/ui/heading';
import { CreatorCard } from '../creators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function TrendingInLifeStyle() {
  return (
    <section>
      <Heading showAll className='pb-8 pt-14'>
        Trending in Lifestyle
      </Heading>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        grabCursor
      >
        {[7, 14].map((val, idx, arr) => (
          <>
            <SwiperSlide key={val} className='pb-20'>
              <div className='flex flex-wrap justify-center gap-8 md:justify-between'>
                {data.slice(arr[idx - 1] ? arr[idx - 1] : 0, val).map((_) => (
                  <CreatorCard key={_.title} _={_}></CreatorCard>
                ))}
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}

const data = [
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
    photo: '/assets/images/new-hero/animoji-32.svg',
    caption: '$MAYJO',
    title: 'Maya Johnson ',
    value: '12.12 MATIC',
  },

  {
    photo: '/assets/images/new-hero/animoji-0.svg',
    caption: '$ADAFR',
    title: 'Adrian Frost',
    value: '34.1 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-31.svg',
    caption: '$ARPAT',
    title: 'Arjun Patel',
    value: '61.5 MATIC',
  },
  
  
];
