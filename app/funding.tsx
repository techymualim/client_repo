import BlurryDiv from '@/components/ui/blurry-div';
import Div1 from './div1';
import Div2 from './div2';

export default function Funding() {
  return (
    <section className='max-w-5xl mx-auto'>
      <BlurryDiv className='top-0 -right-20' />
      <BlurryDiv className='bottom-0 -left-20' />
      <div className='text-center'>
        <span className='text-slate-700 text-[25px] font-bold'>
          Direct Funding 
        </span>
        <span className='text-slate-700 text-[25px] font-bold'> for creators</span>
        <br />
        <span className='text-sm text-gray-400 font-normal'>(coming soon)</span>
      </div>
      {/* first div */}
      <Div1 />
      <Div2 />
    </section>
  );
}
