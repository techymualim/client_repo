import CreatorToken from './creator-token';
import Creators from './creators';
import Footer from './footer';
import Funding from './funding';
import Hero from './hero';
import Timer from './timer';
import Working from './working';

export default function Home() {
  return (
    <main className='container [&>*]:relative'>
      <Hero />
      <Timer />
      <Working />
      <br />
      <br />
      <br />
      <CreatorToken />
      <br />
      <br />
      <Funding />
      <br />
      
      <Creators />
    </main>
  );
}
