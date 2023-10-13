import Hero from './hero';
import TopCreator from './top-creator';
import TrendingInComedy from './trending-in-comedy';
import TrendingInGaming from './trending-in-gaming';
import TrendingInLifeStyle from './trending-in-lifestyle';
import NewCreators from './Newcreators';
import Stars from '@/components/ui/stars';
import Timer from '../timer';


export default function Page() {
  return (
    <>
      <div className='background-custom' />
      <section className='container [&>*]:relative container-custom'>
      {/*<Hero />
      <TopCreator />
      <TrendingInGaming />
      <TrendingInLifeStyle />
      <TrendingInComedy />
  < NewCreators />*/}
    <div className='flex justify-center items-center h-[400px]'>
      <Timer />
    </div>

    </section>
    </>
    
  );
}
