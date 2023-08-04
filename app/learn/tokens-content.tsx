import React from 'react';
import Info from './info';

const TokensContent: React.FC = () => {
  return (
    <>
      {totalContent.map((el, index) => (
        <Info key={`${index}` + el.id} item={el} index={index} />
      ))}
    </>
  );
};

export default TokensContent;

const tokens1 = {
  id: 'tokens-1',
  info: [
    { type: 'title', content: "What are tokens in the blockchain ecosystem?" },
    { type: 'paragraph', content: "In the blockchain ecosystem, tokens are digital assets that represent value and are built on top of existing blockchain platforms. These tokens can be used to represent various assets, rights, or functionalities and can be transferred and exchanged within the blockchain network. Tokens have become an essential component in the world of blockchain technology, enabling a wide range of use cases beyond simple cryptocurrency transactions. Here are the main types of tokens in the blockchain ecosystem:" },
    { type: 'underlined', content: "Cryptocurrencies" },
    { type: 'paragraph', content: "Cryptocurrencies are the most well-known type of tokens. They serve as digital money or native currencies on their respective blockchain networks." },
    { type: 'paragraph', content: "Examples: Bitcoin (BTC) on the Bitcoin network, Ether (ETH) on the Ethereum network." },
    { type: 'underlined', content: "Utility Tokens" },
    { type: 'paragraph', content: "Utility tokens are designed to provide access to specific products, services, or functionalities within a blockchain ecosystem. Holders of utility tokens can use them to pay for services, access platform features, or participate in specific activities." },
    { type: 'paragraph', content: "Examples: Basic Attention Token (BAT) used in the Brave browser, Golem (GNT) used in the Golem network for distributed computing." },
    { type: 'underlined', content: "Security Tokens" },
    { type: 'paragraph', content: "Security tokens represent ownership in real-world assets, similar to traditional financial securities. These tokens are subject to securities regulations and may represent shares in a company, ownership of real estate, or other forms of traditional financial instruments." },
    { type: 'paragraph', content: "Examples: Some security tokens may represent shares of a company, real estate properties, or other financial assets." },
    { type: 'underlined', content: "Non-Fungible Tokens (NFTs)" },
    { type: 'paragraph', content: "Non-fungible tokens are unique digital assets that cannot be replaced or exchanged on a one-to-one basis like cryptocurrencies. NFTs are often used to represent ownership of digital art, collectibles, virtual real estate, or any other unique digital item." },
    { type: 'paragraph', content: "Examples: CryptoKitties, Decentraland parcels, digital art sold as NFTs." },
    { type: 'underlined', content: "Governance Tokens" },
    { type: 'paragraph', content: "Governance tokens give holders the right to participate in the decision-making process of a blockchain network or platform. Holders can vote on protocol upgrades, changes, or other important decisions that impact the future of the blockchain." },
    { type: 'paragraph', content: "Examples: MakerDAO's MKR, Compound's COMP." },
    { type: 'paragraph', content: "Tokens are usually created and distributed through Initial Coin Offerings (ICOs) or Initial Token Offerings (ITOs). During these crowdfunding events, projects issue tokens to raise funds for their development and to incentivize early adopters." },
  ]
};

const tokens2 = {
  id: 'tokens-2',
  info: [
    { type: 'title', content: "Cryptocurrencies vs Tokens" },
    { type: 'paragraph', content: "Tokens and cryptocurrencies like Bitcoin and Ethereum have fundamental differences in their nature, purpose, and underlying technology. Here are the key differences between tokens and cryptocurrencies." },
    { type: 'underlined', content: "Native vs. Built on a Platform" },
    { type: 'list', content: ["Cryptocurrencies like Bitcoin and Ethereum are native to their respective blockchain networks. They have their own independent blockchains and operate as the primary means of value exchange within those networks.", "Tokens, on the other hand, are built on existing blockchain platforms. They do not have their own independent blockchains but are instead created and operate on top of other blockchain networks like Ethereum."] },
    { type: 'underlined', content: "Functionality" },
    { type: 'list', content: ["Cryptocurrencies typically serve as a medium of exchange, similar to traditional currencies. They are used for value transfer, enabling users to send and receive digital assets directly on their respective blockchain networks.", "Tokens, especially utility tokens, have specific functionalities within a particular blockchain ecosystem. They can represent assets, access to services, voting rights, or even ownership of physical assets. Their use cases go beyond simple value transfer, offering a wide range of possibilities depending on the project's design."] },
    { type: 'underlined', content: "Consensus and Security" },
    { type: 'list', content: ["Cryptocurrencies like Bitcoin and Ethereum utilize robust consensus mechanisms (Proof of Work and Proof of Stake, respectively) to secure their native blockchains. These mechanisms ensure that transactions are verified and added to the blockchain in a secure and trustless manner.", "Tokens leverage the consensus and security mechanisms of the platform they are built upon. For example, tokens on the Ethereum network benefit from Ethereum's security through smart contracts, which handle the token's functionality and transactions."] },
    { type: 'underlined', content: "Independence and Interoperability" },
    { type: 'list', content: ["Cryptocurrencies are standalone entities with their own blockchains, and they can operate independently of other networks.", "Tokens, being built on top of a platform, rely on that platform's infrastructure and cannot operate independently. However, this also means that tokens can easily interact and interoperate with other tokens and smart contracts within the same platform's ecosystem."] },
    { type: 'underlined', content: "Creation and Distribution" },
    { type: 'list', content: ["Cryptocurrencies like Bitcoin are typically mined through a process that involves computational work (Proof of Work) or staking (Proof of Stake) to validate transactions and create new coins.", "Tokens are usually created through smart contracts on existing blockchain platforms. The creation and distribution of tokens can be managed according to specific rules and parameters defined by the smart contract."] },
  ]
};

const tokens3 = {
  id: 'tokens-3',
  info: [
    { type: 'title', content: "What role does the ERC-20 standard play in token development on Ethereum?" },
    { type: 'paragraph', content: "The ERC-20 standard plays a critical role in token development on the Ethereum blockchain. ERC stands for 'Ethereum Request for Comments,' and ERC-20 is the specific standard used for creating fungible tokens on the Ethereum network. Fungible tokens are interchangeable and have identical values, similar to traditional currencies. " },
    { type: 'underlined', content: "Interoperability" },
    { type: 'paragraph', content: "The ERC-20 standard provides a common set of rules and interfaces that all compliant tokens on the Ethereum network follow. This standardization ensures that tokens developed using ERC-20 are compatible with various Ethereum wallets, exchanges, and other smart contracts, enabling seamless interaction and interoperability between different tokens and decentralized applications (DApps)." },
    { type: 'underlined', content: "Easy Token Creation" },
    { type: 'paragraph', content: "The ERC-20 standard simplifies the process of creating new tokens on the Ethereum network. By adhering to the standard, developers can save time and effort in token development, as they do not need to create custom token functionalities from scratch. Instead, they can use the existing ERC-20 functions and interfaces, which are widely understood and supported within the Ethereum ecosystem." },
    { type: 'underlined', content: "Standardized Functions" },
    { type: 'paragraph', content: "ERC-20 defines a set of six mandatory and three optional functions that tokens must implement to be considered ERC-20 compliant. These functions include transferring tokens, checking an account's balance, and approving token transfers on behalf of another account. By using the same function names and interfaces, ERC-20 tokens can interact with Ethereum smart contracts and wallets without compatibility issues." },
    { type: 'underlined', content: "Wallet and Exchange Support" },
    { type: 'paragraph', content: "Since ERC-20 tokens follow the same interface, they can be easily managed and stored in Ethereum-compatible wallets. Additionally, most cryptocurrency exchanges support ERC-20 tokens, making it easier for token developers to list their tokens on popular trading platforms, increasing their liquidity and accessibility." },
    { type: 'underlined', content: "Token Community and Liquidity" },
    { type: 'paragraph', content: "The standardization of ERC-20 tokens has fostered a strong community of developers, users, and supporters around Ethereum-based tokens. This community contributes to the liquidity and adoption of ERC-20 tokens, making them more attractive for investors and users." },
  ]
};

const tokens4 = {
  id: 'tokens-4',
  info: [
    { type: 'title', content: "How are tokens stored and managed in blockchain wallets?" },
    { type: 'paragraph', content: "Tokens are stored and managed in blockchain wallets using specific wallet implementations that support the standards and protocols of the blockchain platform on which the tokens are built." },
    { type: 'underlined', content: "Support for Token Standards" },
    { type: 'paragraph', content: "Blockchain wallets that support token management must be compatible with the specific token standards used on the blockchain platform. For example, on the Ethereum blockchain, wallets need to support the ERC-20 standard for managing Ethereum-based tokens. Similarly, for non-fungible tokens (NFTs), wallets must be compatible with the ERC-721 or ERC-1155 standards." },
    { type: 'underlined', content: "Wallet Types" },
    { type: 'paragraph', content: "There are different types of blockchain wallets, including software wallets (online, desktop, or mobile), hardware wallets, and paper wallets. Each wallet type has its advantages and security considerations." },
    { type: 'underlined', content: "Address and Private Keys" },
    { type: 'paragraph', content: "To manage tokens, users need a wallet address and its associated private key. The wallet address is a public identifier on the blockchain used to send and receive tokens. The private key is a secret code that allows the wallet owner to access and control the tokens associated with the wallet address." },
    { type: 'underlined', content: "Token Reception" },
    { type: 'paragraph', content: "When a user receives tokens, the sender sends them to the user's wallet address. Once the transaction is confirmed on the blockchain, the tokens become visible in the user's wallet." },
    { type: 'underlined', content: "Token Balance and Visibility" },
    { type: 'paragraph', content: "Blockchain wallets display the token balance associated with the wallet address. Users can easily see the quantity of each token they own and view their transaction history related to those tokens." },
    { type: 'underlined', content: "Sending Tokens" },
    { type: 'paragraph', content: "To send tokens to another user, the wallet owner initiates a transaction, specifying the recipient's address, the number of tokens to send, and any additional information required by the token standard (e.g., transaction fee). The wallet signs the transaction with the user's private key, and once confirmed by the blockchain network, the tokens are transferred to the recipient's wallet address." },
    { type: 'underlined', content: "Security" },
    { type: 'paragraph', content: "Token management in blockchain wallets involves securing the private key. Wallet owners must protect their private keys from unauthorized access and potential loss. Hardware wallets are known for their enhanced security since the private keys are stored in a dedicated hardware device that is not connected to the internet." },
  ]
};

const totalContent = [tokens1, tokens2, tokens3, tokens4]
