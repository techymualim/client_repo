import React, { useState } from 'react';
import Image from 'next/image';
import InfoText from '@/components/ui/info-text';

const FAQSContent: React.FC = () => {
  const [showContentId, setShowContentId] = useState<number | null>(null)
  const handleSelected = (id: number) => {
    if (id === showContentId) { setShowContentId(null) }
    else { setShowContentId(id) }
  }
  return (
    <div className='px-6'>
      {
        totalContent.map(item => (
          <div key={item.id} className='mb-3 flex flex-col'>
            <button
              className={`text-start flex items-center w-full md:w-[70%] p-3 bg-opacity-10 bg-white text-white rounded-lg border-2 border-gray-400`}
              onClick={() => handleSelected(item.id)}
            >
              <span className={`flex items-center justify-center w-[10%] md:w-[5%] transform transition-transform ${item.id === showContentId ? 'rotate-90' : 'rotate-270'}`}>
                <Image
                  src='/assets/images/arrow2.svg'
                  alt='arrow icon'
                  className='w-[30px]'
                  width={30}
                  height={30}
                />
              </span>
              <span className='w-[90%] md:w-[95%] text-sm md:text-base'>
                {item.question}
              </span>
            </button>
            {
              item.id === showContentId &&
              <div
                className={`text-white px-6
                  mt-8 mb-2 flex flex-col overflow-hidden transition-max-height w-full md:w-[70%] 
                  ${item.id === showContentId ? '' : 'max-h-0'}
                `}
              >
                {
                item.answer.map((item, index) => (
                    <InfoText key={`${index}` + item.type} type={item.type} content={item.content} />
                ))
            }
              </div>
            }

          </div>
        ))
      }
    </div>
  );
};

export default FAQSContent;

const totalContent = [
  {
    id: 0,
    question: "How do I create my own tokens?",
    answer: [
      { 
        type: 'number-list', 
        content: [
          "Connect your wallet to the Innox platform and sign up as a content creator.",
          "Verify your content creator status by submitting a screenshot of your YouTube channel dashboard or other social media page.",
          "Access your profile page within the 'tokens' section.",
          "Click the 'create token' button within the designated area.",
          "Provide the required information.",
          "Click 'deploy' to finalize.",
          "Share the token with your followers to enable them to start minting."
        ] },
  ]},
  {
    id: 1,
    question: "How to exchange creator tokens?",
    answer: [
      { 
        type: 'number-list', 
        content: [
          "Tokens will be available for trading after the mining phase has finished",
          "Once the minting phase ends, the trading phase will begin and you will be able to swap your token using uniswaps UI",
        ] },
        {
          type: 'link',
          content: 'https://app.uniswap.org/#/swap'
        }
  ]
  },
  {
    id: 2,
    question: "What can I use creator tokens for?",
    answer: [{
      type: 'paragraph',
      content: "Creator Tokens offer access to exclusive content, participation in creator giveaways, and the ability to purchase merchandise items from creators."
    }]
  },
  {
    id: 3,
    question: "How to create a wallet using metamask?",
    answer: [{
      type: 'paragraph',
      content: "You will need to download the metamask extension on your browser in order to connect to Innox platform. "
    },
    {
      type: 'subtitle',
      content: "Download Metamask extension"
    },
    {
      type: 'link',
      content: "https://support.metamask.io/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask"
    },
    {
      type: 'subtitle',
      content: "Creating an account with Metamask"
    },
    {
      type: 'link',
      content: "https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet"
    }
  ]
  },
  {
    id: 4,
    question: "Where can I see the number of tokens I own/bought on metamask wallet?",
    answer: [{
      type: 'paragraph',
      content: "To view the quantity of tokens you own or have purchased in your Metamask wallet:"
    },
    { 
      type: 'number-list', 
      content: [
        "Open your Metamask wallet extension or app.",
        'Go to the "Assets" or "Tokens" tab.',
        "Look for the specific token you want to check in the list.",
        "The balance or quantity of that token will be displayed next to it.",
      ] },
      {
        type: 'paragraph',
        content: "This will show you the number of tokens you currently hold in your Metamask wallet for that particular token."
      },]
  },
  {
    id: 5,
    question: "As a creator, how do I upload exclusive content?",
    answer: [{
      type: 'paragraph',
      content: 'Access your profile, then:'
    },
    {
      type: 'number-list',
      content: ['Go to the "Content" tab.', 'Select "Upload Content."', 'Provide video/image details.', 'Click "Upload" to finish.']
    }
  ]
  },
  {
    id: 6,
    question: "How do the giveaways and merch shop work?",
    answer: [{
      type: 'underlined',
      content: 'Giveaways:'
    },
    {
      type: 'number-list',
      content: ['Visit the giveaway tab.', ' Click "Create Giveaway."', 'Follow instructions and input giveaway details.', 'Click "Create Giveaway" and share with fans.']
    },
    {
      type: 'underlined',
      content: 'Merch Shop:'
    },
    {
      type: 'number-list',
      content: ['Go to the "Merch" tab.', 'Select "Add Product."', 'Fill product information.', 'Create the product.']
    }
  ]
  },
  {
    id: 7,
    question: "How can my fans access exclusive offerings?",
    answer: [{
      type: 'paragraph',
      content: "Fans can access your exclusive offerings through tokens or normal fiat currency. Fans will need to navigate to the tokens tab and mint the necessary tokens to access and participate in the offerings of the creator."
    },
    {
      type: 'paragraph',
      content: "*Accessing through fiat currency will cost double the amount."
    }
  ]
  },
  {
    id: 8,
    question: "Can my fans pay with fiat currency instead of tokens?",
    answer: [{
      type: 'paragraph',
      content: "A dialogue box will emerge, offering the option to input credit card details or utilize PayPal for payment."
    }]
  },
  {
    id: 9,
    question: "How can fans buy tokens and utilize them?",
    answer: [{
      type: 'paragraph',
      content: "Fans should access the 'Tokens' tab on the creator's profile and mint their desired number of tokens. These tokens will then be sent to their Metamask wallet."
    },
    {
      type: 'paragraph',
      content: "For participating in giveaways or accessing content, their Metamask wallet will prompt automatically. It will inquire whether they'd like to spend the necessary token amount to access the exclusive offering."
    }]
  },
  {
    id: 10,
    question: "Am I liable for any loss fans result from trading my token?",
    answer: [{
      type: 'paragraph',
      content: "No, you are not liable for any losses that fans may incur from trading your token. When fans trade your token, they are engaging in financial transactions based on their own decisions and risk assessments. As the creator, you provide the token as a means of engagement and access, but you are not responsible for the trading choices or financial outcomes of individual fans. It's important for fans to exercise due diligence and make informed decisions when purchasing any tokens, as investment and trading carry inherent risks."
    }]
  },
  {
    id: 11,
    question: "Profile Verification.",
    answer: [{
      type: 'paragraph',
      content: "To achieve verification:"
    },
    {
      type: 'number-list',
      content: ['Click "Customize Profile."', 'Purchase the blue check verification.', 'Complete the payment process.', 'Await verification to reflect on your profile.']
    }]
  },
  {
    id: 12,
    question: "How to add funds to my wallet?",
    answer: [{
      type: 'paragraph',
      content: 'Make sure you buy “Matic Polygon” in order to buy creator tokens'
    },
    {
      type: 'paragraph',
      content: 'You can do it directly through moonpay offered by metamask or by:'
    },
    {
      type: 'number-list',
      content: [
        'Open your Metamask wallet."', 
        'Click on the network selection button at the top of the wallet interface and choose "Polygon" or "Matic" network.', 
        'Go to a reputable cryptocurrency exchange that supports MATIC and allows withdrawals to the Polygon network.', 
        'Create an account or log in to your exchange account.',
        'Deposit funds (e.g., USD, BTC, ETH) into your exchange account.',
        'Buy MATIC using the deposited funds.',
        "Once you have MATIC in your exchange account, initiate a withdrawal to your Metamask wallet's Polygon address. Make sure to select the Polygon network for the withdrawal.",
        'In your Metamask wallet, navigate to the "Polygon" network and click on "Assets" or "Tokens."',
        'Click on "Add Token" or "Custom Token."',
        'Paste the MATIC contract address: 0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.',
        'The token details (symbol and decimal places) should auto-populate. Click "Next" or "Add Token" to confirm.',
        'Your Metamask wallet will now display your MATIC balance.',
      ]
    }]
  },
  {
    id: 13,
    question: "How to withdraw funds?",
    answer: [{
      type: 'paragraph',
      content: 'To withdraw funds from Metamask:'
    },
    {
      type: 'number-list',
      content: [
        'Open your Metamask wallet."', 
        'Click on the token or cryptocurrency you want to withdraw.', 
        'Select "Send" or "Transfer."', 
        "Enter the recipient's wallet address.",
        'Input the amount you wish to withdraw.',
        'Set the appropriate gas fee (transaction fee).',
        "Confirm the transaction and follow any additional prompts.",
      ]
    },
    {
      type: 'paragraph',
      content: 'Ensure you have the correct recipient address and have enough balance to cover the gas fee. Double-check all details before confirming the withdrawal.'
    },]
  }
];







