'use client';
import { Heading } from '@/components/ui/heading';
import { CreatorCard } from '../creators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function TrendingInComedy() {
  return (
    <section>
      <Heading showAll className='pb-8 pt-14'>
        Trending in Comedy
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
    photo: '/assets/images/new-hero/animoji-24.svg',
    caption: '$OLPRI',
    title: 'Oliver Price',
    value: '12.24 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-18.svg',
    caption: '$LUCAR',
    title: 'Lucas Carter',
    value: '21.34  MATIC',
  },

  {
    photo: '/assets/images/new-hero/animoji-19.svg',
    caption: '$ALERE',
    title: 'Alexander Reed',
    value: '123.34 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-20.svg',
    caption: '$HENMI',
    title: 'Henry Mitchell',
    value: '69.5 MATIC',
  },
  
];
