import React from 'react';
import Image from 'next/image';

const FAQSContent: React.FC = () => {
  return (
    <div className='px-6'>
      {
        totalContent.map(item => (
          <div key={item} className='mb-3'>
            <button
              className={`flex items-center w-full p-3 bg-opacity-10 bg-white text-white rounded-lg border-2 border-gray-400`}
              onClick={() => null}
            >
              <span className={`transform transition-transform rotate-270`}>
                <Image
                  src='/assets/images/arrow2.svg'
                  alt='arrow icon'
                  width={30}
                  height={30}
                />
              </span>
              {item}
            </button>

            <div
              className={`flex flex-col overflow-hidden transition-max-height max-h-0`}
            >
              
            </div>

          </div>
        ))
      }
    </div>
  );
};

export default FAQSContent;

const totalContent = [
  "How do I create my own token?",
  "How to exchange create tokens",
  "What can I use creator tokens for?",
  "How to create a wallet with metamask",
  "Where can I see the number of tokens I own/bought?",
  "As a creator, how do I upload exclusive content?",
  "How does the giveaways and merch shop work?",
  "How can my fans access my exclusive offerings?",
  "Can my fans pay with fiat currency instead of tokens?",
  "What is the process of creators tokens like?",
  "How can fans buy tokens and utilize them?",
  "Am I liable for any loss fans result from trading my token?",
  "How can I get verified?",
  "How to add funds to my wallet?",
  "How to withdraw funds",
  "Are my tokens safe from being price manipulated?"
];






