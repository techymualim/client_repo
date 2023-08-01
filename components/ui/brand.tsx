import Image from 'next/image';
import Link from 'next/link';

export default function Brand({pathname}:{pathname: string}) {
  return (
    <Link href={'/'} className={`flex items-center gap-3 ${pathname === '/' ? 'text-white' : ''}`}>
      <Image
        src={'/assets/images/logo.svg'}
        alt='logo'
        width={35}
        height={35}
      />
      <p className='text-xl font-extrabold'>Innox</p>
    </Link>
  );
}
