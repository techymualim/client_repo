import Hero from './hero';
import TopCreator from './top-creator';
import TrendingInComedy from './trending-in-comedy';
import TrendingInGaming from './trending-in-gaming';
import TrendingInLifeStyle from './trending-in-lifestyle';
import NewCreators from './Newcreators';
import Stars from '@/components/ui/stars';
import Timer from '../timer';
import { Helmet } from 'react-helmet';

export default function Page() {
  return (
    <>
    <Helmet>
    <meta charSet='utf-8' />
    <title> Marketplace - Innox App </title>
    <meta name='keywords' content='content platform, content creators, own coin, fans, 
    exclusive offerings, invest in growth, creator economy, Web3,
     blockchain, cryptocurrency, NFT, social media, tipping, 
     monetization, community, engagement, empowerment, independence, artist, 
     musician, gamer, YouTuber, streamer, influencer, podcaster, writer, journalist, 
     developer, entrepreneur, early access to new content, behind-the-scenes content, 
     live streams, meet-and-greets, merchandise, NFTs, voting rights, access to a private
      community, discounts on merchandise, opportunity to earn dividends, invest in content creators, 
      creator tokens, social tokens'/>
    <meta name='description' content='Welcome to the first content cretor marketplace. Explore all types of creators, categories and purchase their tokens.' />
  </Helmet>
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
