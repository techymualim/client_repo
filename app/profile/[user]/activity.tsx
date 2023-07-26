'use client';
import * as Tabs from '@radix-ui/react-tabs';
import * as Progress from '@radix-ui/react-progress';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Stepper from './stepper';

export default function Activity() {
  const [value, setValue] = useState('Main Activity');

  return (
    <section className='container'>
      <Tabs.Root
        onValueChange={(v) => setValue(v)}
        defaultValue='Main Activity'
      >
        <Tabs.List className='flex items-center gap-12 pt-8 pb-12 '>
          {['Main Activity', 'Trading Activity'].map((_) => (
            <Tabs.Trigger
              value={_}
              key={_}
              className='text-slate-700 relative group text-[15px] font-medium opacity-60 aria-selected:opacity-100'
            >
              {_}
              {value === _ && (
                <motion.div
                  layoutId='underline'
                  className='absolute w-full h-1 rounded-full -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent'
                />
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value={'Main Activity'}></Tabs.Content>
      </Tabs.Root>{' '}
      <div className='flex justify-between items-center text-slate-700 text-[13px]'>
        <p className='font-bold '>25% minted</p>
        <p className='font-normal '>2,590/20,000</p>
      </div>
      <Progress.Root className='w-full h-2 my-2 overflow-hidden rounded-full bg-zinc-300'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            width: ['0%', '25%'],
            opacity: 1,
            transition: { delay: 1, duration: 0.7 },
          }}
          className='w-full h-full rounded-full bg-primary'
        >
          <Progress.Indicator />
        </motion.div>
      </Progress.Root>
      <Stepper />
    </section>
  );
}
