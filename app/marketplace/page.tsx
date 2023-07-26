import Hero from './hero';
import TopCreator from './top-creator';
import TrendingInComedy from './trending-in-comedy';
import TrendingInGaming from './trending-in-gaming';
import TrendingInLifeStyle from './trending-in-lifestyle';
import NewCreators from './Newcreators';

export default function Page() {
  return (
    <section className='container'>
      <Hero />
      <TopCreator />
      <TrendingInGaming />
      <TrendingInLifeStyle />
      <TrendingInComedy />
      < NewCreators />

    </section>
  );
}
