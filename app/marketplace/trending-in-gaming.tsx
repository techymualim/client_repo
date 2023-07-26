'use client';
import { Heading } from '@/components/ui/heading';
import { CreatorCard } from '../creators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function TrendingInGaming() {
  return (
    <section>
      <Heading showAll className='pb-8 pt-14'>
        Trending in Gaming
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
    photo: '/assets/images/new-hero/animoji-10.svg',
    caption: '$AVENW',
    title: 'Ava Ravenwood',
    value: '14.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-25.svg',
    caption: '$ETHST',
    title: 'Ethan Steele',
    value: '24.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-26.svg',
    caption: '$LUGRAL',
    title: 'Lucas Grayson',
    value: '4.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-27.svg',
    caption: '$DYLNI',
    title: 'Dylan Knight',
    value: '2.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-28.svg',
    caption: '$OWERS',
    title: 'Owen Rivers',
    value: '124.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-29.svg',
    caption: '$MAHAW',
    title: 'Max Hawthorne',
    value: '34.5 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-30.svg',
    caption: '$HAPJE',
    title: 'Harper Jetson',
    value: '64.2 MATIC',
  },
  
];
