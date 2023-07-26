'use client';
import { Heading } from '@/components/ui/heading';
import { CreatorCard } from '../creators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function NewContentCreators() {
  return (
    <section>
      <Heading showAll className='pb-8 pt-14'>
        New Content Creators
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
    photo: '/assets/images/new-hero/animoji-33.svg',
    caption: '$BENAN',
    title: 'Benjamin Anderson',
    value: '31.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-34.svg',
    caption: '$ALEJO',
    title: 'Alexander Johnson',
    value: '21 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-35.svg',
    caption: '$CHRWI',
    title: 'Christopher Williams',
    value: '48.2 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-36.svg',
    caption: '$WILRO',
    title: 'William Roberts ',
    value: '12.24 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-37.svg',
    caption: '$NICSM',
    title: 'Nicholas Smith ',
    value: '21.34  MATIC',
  },

  {
    photo: '/assets/images/new-hero/animoji-38.svg',
    caption: '$SOPMA',
    title: 'Sophia Martinez',
    value: '83.34 MATIC',
  },
  {
    photo: '/assets/images/new-hero/animoji-39.svg',
    caption: '$VICLE',
    title: 'Victoria Lee',
    value: '99.5 MATIC',
  },
  
];
