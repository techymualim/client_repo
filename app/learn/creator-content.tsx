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
    { type: 'paragraph', content: "Our platform also enables you to swap creator tokens through Uniswap. Explore a vibrant marketplace where you can buy and exchange tokens, creating an exciting ecosystem around your favorite creators. Stay tuned for new token listings and engage in thrilling trading experiences." },
    { type: 'underlined', content: "Minting Tokens" },
    { type: 'paragraph', content: "There will be an initial phase in which the content creator will deploy and intitial supply of tokens at a set price in order for their fans to mint them (this is how fans will aquire tokens). This will allow the content creator to greatly benefit from its tokens, as well as the token holders who bought it at a low price to acquire a greate amount of tokens for a fair price." },
    { type: 'underlined', content: "Example of minting phase:" },
    { type: 'paragraph', content: "A creator can choose to supply and intial amount of tokens of 25,000 Tokens at a price of $5 per token. Once the creator deploys the tokens, the fans can start minting and acquiring tokens in order to use them to access exclusive offerings by creators" },
    
    { type: 'underlined', content: "Trading Tokens" },
    { type: 'paragraph', content: "The trading phase will occur after all tokens have been minted or when the creators token reaches a set trading volume. This will allow the price of the token to not be manipulated and move steadily. Token holders will be able to sell/swap the creator token using uniswaps interface." },
    
    
    { type: 'underlined', content: "Utility of Tokens" },
    { type: 'paragraph', content: "It allows the creator to make additional income without having to invest time or money into its token." },
    { type: 'paragraph', content: "Tokens can be use for giveaways (Ex. 10 tokens equal 10 entries for a merch item, iphone or other type of item being given away." },
    { type: 'paragraph', content: "Creators can set up a simple merch store on their profile section in order for their fans/token holders to purchase merchendise through tokens" },
    { type: 'paragraph', content: "Token holders can access exclusive/early content published by the creator on their profile page"}
  ]
};

const creator2 = {
  id: 'creator-2',
  info: [
    { type: 'title', content: "What do you need to do to have your token on our marketplace and start earning?" },
    { type: 'paragraph', content: "Sign up as a creator, and input the name and symbol of your token so we can process the information and create the token or fill out this form: " },
    { type: 'link', content: "https://dki9lqeawlk.typeform.com/to/B4nRvlBP" },
  ]
};

const totalContent = [creator1, creator2]
