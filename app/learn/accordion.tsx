import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Accordion = ({ activeSection, setActiveSection }: { activeSection: string | null; setActiveSection: React.Dispatch<React.SetStateAction<string | null>> }) => {

    const toggleSection = (sectionId: string) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    return (
        <div className="space-y-4 text-white z-20 hidden md:block">
            <div className='flex items-center mb-6 space-x-3'>
                <Image
                    src='/assets/images/contents-icon.svg'
                    alt='contents icon'
                    width={30}
                    height={30}
                />
                <h1 className='text-center md:text-start font-bold text-white'>
                    Table of Contents
                </h1>
            </div>
            {sections.map((section) => (
                <div key={section.id}>
                    <button
                        className={`flex items-center p-3 pr-6 ${activeSection === section.id ? 'bg-opacity-10 bg-white text-white rounded-lg border-2 border-blue-500 w-[fit-content]' : ''}`}
                        onClick={() => toggleSection(section.id)}
                    >
                        <span className={`transform transition-transform ${activeSection === section.id ? 'rotate-90' : 'rotate-270'}`}>
                            <Image
                                src='/assets/images/arrow2.svg'
                                alt='arrow icon'
                                width={30}
                                height={30}
                            />
                        </span>
                        {section.title}
                    </button>
                    <div
                        className={`flex flex-col overflow-hidden transition-max-height ${activeSection === section.id ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        {section?.content?.map(item => (
                            <a key={item.id} href={'#' + item.id} className="py-2 pr-4 pl-10 text-sm">{item.value}</a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

const blockchainContent = [
    { id: 'blockchain-1', value: 'What is blockchain technology?' },
    { id: 'blockchain-2', value: 'Blockchain vs traditional databases?' },
    { id: 'blockchain-3', value: 'Key components of a blockchain network?' },
    { id: 'blockchain-4', value: 'Verification of transactions' },
    { id: 'blockchain-5', value: 'Security of blockchain transactions' },
    { id: 'blockchain-6', value: 'Type of Blockchains' },
    { id: 'blockchain-7', value: 'Smart Contracts & Functionalities' },
]

const tokensContent = [
    { id: 'tokens-1', value: 'What are tokens?' },
    { id: 'tokens-2', value: 'Tokens vs Cryptocurrencies' },
    { id: 'tokens-3', value: 'The role of tokens' },
    { id: 'tokens-4', value: 'Storing tokens on your wallet' },
]

const creatorContent = [
    { id: 'creator-1', value: 'What are creator tokens?' },
    { id: 'creator-2', value: 'What do you need to do to have your token on our marketplace and start earning?' },
]

const sections = [
    { id: 'blockchain', title: 'Blockchain', content: blockchainContent },
    { id: 'tokens', title: 'Tokens', content: tokensContent },
    { id: 'creator-tokens', title: 'Creator Tokens', content: creatorContent },
    { id: 'faqs', title: 'FAQs' },
];
