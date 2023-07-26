'use client';

import Image from 'next/image';
import Profile from './profile';
import Activity from './activity';
import { motion } from 'framer-motion';

export default function Page({
  params: { user },
}: {
  params: { user: string };
}) {
  const name = user.replaceAll('%20', ' ');

  return (
    <motion.section
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -500, opacity: 0 }}
    >
      <Image
        src={`/assets/images/profile/bg.svg`}
        alt=''
        className='object-cover w-full mt-10'
        width={1600}
        height={178}
      />
      <Profile name={name} />
      <Activity />
    </motion.section>
  );
}
