import React from 'react';
import Info from './info';

const CreatorContent: React.FC = () => {
  return (
    <>
      {totalContent.map((el, index) => (
        <Info key={`${index}` + el.id} item={el} index={index} />
      ))}
    </>
  );
};

export default CreatorContent;

const creator1 = {
  id: 'creator-1',
  info: [
    { type: 'title', content: "What are creator tokens?" },
    { type: 'paragraph', content: "Creator tokens are a revolutionary concept that empowers content creators and their communities. These tokens represent a direct connection between creators and their fans, allowing you to become a part of their journey and share in their success." },
    { type: 'subtitle', content: "How it works" },
    { type: 'underlined', content: "Invest" },
    { type: 'paragraph', content: "With our marketplace, you can invest in the tokens of your beloved content creators. By purchasing their tokens, you contribute to their growth, and as their popularity soars, so does the value of the tokens. It's a win-win situation where you can both support your idols and potentially reap the rewards of their success." },
    { type: 'underlined', content: "Trade" },
    { type: 'paragraph', content: "Our platform also enables you to trade creator tokens with our built in decentralize exchange, Uniswap. Explore a vibrant marketplace where you can buy, sell, and exchange tokens, creating an exciting ecosystem around your favorite creators. Stay tuned for new token listings and engage in thrilling trading experiences." },
    { type: 'subtitle', content: "Minting Tokens" },
    { type: 'paragraph', content: "There will be an initial phase in which the content creator will have a pre-sale/minting of some of its tokens at a lower price for fans to sell it at higher prices during the trading phase. This will allow the content creator to greatly benefit from its tokens, as well as the token holders who bought it at a low price to make a profit." },
    { type: 'underlined', content: "Example of minting phase:" },
    { type: 'paragraph', content: "20,000 Tokens at a reduced price of $5 per token --) $100,000 in profit 85/15 between creator and Innox." },
    
    { type: 'subtitle', content: "Trading Tokens" },
    { type: 'paragraph', content: "The trading phase will occur after the mint phase has been completed. Fans will be able to buy and sell their tokens at market price and start trading the creators token. Based on the trading volume activity(Supply and demand) the price will increase or decrease." },
    { type: 'paragraph', content: "The creator will get 3.5% of the what their fans trade over time. This will be deposited into the creators wallet in order them to withdraw it." },
    
    { type: 'subtitle', content: "Utility of Tokens" },
    { type: 'paragraph', content: "It allows the creator to make additional income without having to invest time or money into its token." },
    { type: 'paragraph', content: "Fans will be part of the content creators journey while at the same time having the chance to make money out of their investment in the token." },
    { type: 'paragraph', content: "Tokens can be use for giveaways (Ex. 10 tokens equal 10 entries for a merch, iphone or other type of item being given away." },
    { type: 'paragraph', content: "Implementation of tokens in merch website in order for fans to buy merch using tokens." },
    { type: 'paragraph', content: "Token holders have access to limited videos, exclusive content/merch drops, etc."}
  ]
};

const creator2 = {
  id: 'creator-2',
  info: [
    { type: 'title', content: "What do you need to do to have you token on our marketplace and start earning?" },
    { type: 'paragraph', content: "Sign up as a creator, and input the name and symbol of your token so we can process the information and create the token or fill out this form: " },
    { type: 'link', content: "https://dki9lqeawlk.typeform.com/to/B4nRvlBP" },
  ]
};

const totalContent = [creator1, creator2]
