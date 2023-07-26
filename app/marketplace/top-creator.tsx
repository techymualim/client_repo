'use client';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import TopCreatorCards from './top-creator-cards';
export const useClient = () => {};


export default function TopCreator() {
  return (
    <section>
      <Tabs.Root defaultValue='All'>
        <Tabs.List className='bg-[#F8F8F8] w-fit gap-8 flex flex-wrap rounded-lg'>
          {categories.map((_) => (
            <Tabs.Trigger
              key={_}
              value={_}
              className='text-neutral-800 aria-selected:shadow-lg text-[15px] px-3 py-2 rounded-lg aria-selected:bg-primary aria-selected:text-white'
            >
              {_}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value='All'></Tabs.Content>
      </Tabs.Root>
      <Tabs.Root defaultValue='All' className='my-10'>
        <Tabs.List className='bg-[#F8F8F8] w-fit gap-1 flex flex-wrap rounded-lg'>
          {platforms.map((_) => (
            <Tabs.Trigger
              key={_.label}
              value={_.label}
              className='text-neutral-600 poppins-selected:shadow-lg text-[11px] px-3 py-2 rounded-lg aria-selected:bg-[#2D405A] aria-selected:text-white flex items-center gap-1'
            >
              {_.label}{' '}
              {_.icon && (
                <Image
                  src={`/assets/images/marketplace/platforms/${_.icon}`}
                  alt=''
                  className='rounded'
                  width={17}
                  height={17}
                />
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value='All'></Tabs.Content>
      </Tabs.Root>
      <TopCreatorCards />
    </section>
  );
}

const categories = ['All', 'Vlogs', 'Gaming', 'Comedy','Sports','More'];

const platforms = [
  {
    label: 'All',
  },
  {
    label: 'Kick',
    icon: 'kick.svg',
  },
  {
    label: 'Twitch',
    icon: 'twitch.webp',
  },
  {
    label: 'Youtube',
    icon: 'youtube.svg',
  },
  {
    label: 'Rumble',
    icon: 'rumble.svg',
  },
  {
    label: 'Tiktok',
    icon: 'tiktok.svg',
  },
];
