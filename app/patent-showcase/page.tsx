/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react';
import Stars from '@/components/ui/stars';
import { Subtitle, Paragraph, List } from '@/components/ui/text-components';
import Image from 'next/image';

const PatentShowcase = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='background-custom' />
            <Stars />
            <section className='container container-custom flex flex-col min-h-[0] py-10 md:py-16 md:pt-8 mt-24'>
                <div className="mx-auto px-6 md:px-24 text-white">
                    <h1 className="text-[30px] md:text-[36px] font-bold mb-4">Innox Brief Patent Showcase</h1>
                    <div className='flex items-end gap-3'>
                        <Subtitle text={'Patent Title: '} />
                        <Subtitle regular text={'Empowering Content Creators and Fans Through Custom ERC-20 Tokens'} />
                    </div>
                    <div className='flex items-end gap-3'>
                        <Subtitle text={'Inventor: '} />
                        <Subtitle regular text={'David Varo Alonso'} />
                    </div>
                    <div className='flex items-end gap-3'>
                        <Subtitle text={'Grant Date: '} />
                        <Subtitle regular text={'27/07/2023'} />
                    </div>
                    <Subtitle text={'Abstract:'} />
                    <Paragraph text={'This patent introduces an innovative approach to content engagement, enabling content creators to mint their own unique ERC-20 tokens on Innox. These tokens serve as exclusive gateways, granting fans access to personalized content, giveaways, and merchandise offered by creators. By fostering a direct connection between creators and fans, this patent revolutionizes the dynamics of digital content interaction.'} />
                    <Subtitle text={'Detailed Description: '} />
                    <Paragraph text={'Our patent addresses the need for enhanced content engagement by introducing a groundbreaking marketplace concept. Content creators are empowered to create and deploy their own ERC-20 tokens, each representing their distinct brand and content offerings. Fans acquire these tokens, entitling them to access exclusive experiences, including:'} />
                    <div className='flex items-start gap-3'>
                        -<Paragraph underline text={'Exclusive Content:'} />
                        <Paragraph text={'Gain entry to premium content such as behind-the-scenes videos, early releases, and member-only updates.'} />
                    </div>
                    <div className='flex items-start gap-3'>
                        -<Paragraph underline text={'Giveaways:'} />
                        <Paragraph text={'Participate in exclusive giveaways and contests organized by content creators.'} />
                    </div>
                    <div className='flex items-start gap-3'>
                        -<Paragraph underline text={'Merchandise:'} />
                        <Paragraph text={'Use creator-specific tokens to purchase limited-edition merchandise and products.'} />
                    </div>
                    <Subtitle text={'Patent Drawing (Simplified):'} />
                    <Paragraph underline text={'Figure 1: ERC-20 Token Creation & Minting Process'} />
                    <Paragraph text={'- Represents content creators minting their unique tokens.'} />
                    <div className='w-full overflow-hidden md:max-h-[800px] flex items-center justify-center'>
                        <Image src={'/assets/images/patent-showcase/desktop.svg'} alt='Minting Process' className='w-[80%] h-auto hidden md:block' height={500} width={1000} />
                    </div>
                    <Image src={'/assets/images/patent-showcase/mobile.svg'} alt='Minting Process' className='w-full h-auto block md:hidden' height={200} width={400} />
                    <Paragraph underline text={'Figure 2: ERC-20 Token Ecosystem'} />
                    <Paragraph text={'- Showcases the exclusive content, giveaways, and merchandise accessible using these tokens.'} />
                    <Subtitle text={'Brief Claims:'} />
                    <Paragraph text={'1. A method for content engagement, comprising enabling content creators to mint unique ERC-20 tokens, granting fans access to exclusive content and experiences through these tokens.'} />
                    <Paragraph text={'2. The method of claim 1, wherein said exclusive content comprises behind-the-scenes videos, early releases, and member-only updates.'} />
                    <Paragraph text={'3. The method of claim 1, further comprising facilitating fan participation in exclusive giveaways and contests organized by content creators.'} />
                    <Paragraph text={'4. The method of claim 1, additionally providing fans with the ability to purchase limited-edition merchandise and products using creator-specific tokens.'} />
                    <Paragraph text={'5. A marketplace that allows the creation & deployment of ERC-20 tokens to the general public with the intention of trading and/or utilizing them for exclusive offerings by the token owner. '} />
                </div>
            </section>
        </>
    );
};

export default PatentShowcase;

