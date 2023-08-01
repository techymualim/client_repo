import CreatorToken from './creator-token';
import Creators from './creators';
import Funding from './funding';
import Hero from './hero';
import Timer from './timer';
import Working from './working';

export default function Home() {
  return (
    <>
      <div className='background-custom' />
      <main className='container [&>*]:relative container-custom'>
        <Hero />
        <Timer />
        <Working />
        <CreatorToken />
        <Funding />  
        <Creators />
      </main>
    </>
  );
}
