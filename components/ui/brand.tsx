import Image from 'next/image';
import Link from 'next/link';

export default function Brand(
  {pathname, imageSize, textSize}
  :{
    pathname: string
    imageSize?: number
    textSize?: string | number
  }) {
  return (
    <Link href={'/'} className={`flex items-center gap-3 ${pathname !== '/marketplace' ? 'text-white' : ''}`}>
      <Image
        src={'/assets/images/logo.svg'}
        alt='logo'
        width={imageSize ? imageSize : 35}
        height={imageSize ? imageSize : 35}
      />
      <p className='text-xl font-extrabold' style={{ fontSize: textSize }}>Innox</p>
    </Link>
  );
}
