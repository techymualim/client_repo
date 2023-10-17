/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react';
import Stars from '@/components/ui/stars';
import { Subtitle, Paragraph, List } from '@/components/ui/text-components';
import { Helmet } from 'react-helmet-async';
import Head from 'next/head';


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  
    return (
        <>
               <Head>
    <meta charSet='utf-8' />
    <title>Privacy Policy | Innox App </title>
    <meta name='keywords' content='content platform, content creators, own coin, fans,
exclusive offerings, invest in growth, creator economy, Web3,
blockchain, cryptocurrency, NFT, social media, tipping,
monetization, community, engagement, empowerment, independence, artist,
musician, gamer, YouTuber, streamer, influencer, podcaster, writer, journalist,
developer, entrepreneur, early access to new content, behind-the-scenes content,
live streams, meet-and-greets, merchandise, NFTs, voting rights, access to a private
community, discounts on merchandise, opportunity to earn dividends, invest in content creators,
creator tokens, social tokens, friend.tech, custom currency, subscription for content creators, giveaways, merchshop
'/>
    <meta name='description' content='When you use our Platform to create ERC-20 tokens, we may collect information you provide during the sign-up, token creation, and account management processes. This may include your name, email address, username, linked social media accounts, and other information relevant to your account and token creation activities.' />
  </Head>
            <div className='background-custom' />
            <Stars />
            <section className='container container-custom flex flex-col min-h-[0] py-10 md:py-16 md:pt-8 mt-24'>
                <div className="mx-auto px-6 md:px-24 text-white">
                    <h1 className="text-[30px] md:text-[36px] font-bold mb-4">Privacy Policy</h1>
                    <Subtitle blue text={'Last Updated: August 8, 2023'} />
                    <Paragraph text={'Welcome to Innox Marketplace ("we," "us," "our," or the "Platform"). This Privacy Policy is intended to inform you about how we collect, use, and disclose information related to your use of the Platform. We are committed to safeguarding your privacy and ensuring the security of your personal information.'} />
                    <Paragraph text={'By accessing or using our Platform, you agree to the terms and conditions outlined in this Privacy Policy. If you do not agree to these terms, please refrain from using our Platform.'} />

                    {/* section 1 */}
                    <Subtitle text={'1. Types of Information We Collect:'} />

                    <Subtitle blue mbSm text={'a. Information You Provide:'} />
                    <Paragraph text={'When you use our Platform to create ERC-20 tokens, we may collect information you provide during the sign-up, token creation, and account management processes. This may include your name, email address, username, linked social media accounts, and other information relevant to your account and token creation activities.'} />

                    <Subtitle blue mbSm text={'b. Token Creation Information:'} />
                    <Paragraph text={'We collect data related to your ERC-20 token creation activities, such as token details, metadata, images, and other content you upload.'} />

                    <Subtitle blue mbSm text={'c. User Preferences:'} />
                    <Paragraph text={'Our Platform allows you to set preferences related to token creation, exclusive content access, and notifications. These preferences may be associated with your account and used to enhance your user experience.'} />

                    <Subtitle blue mbSm text={'d. Feedback and Communication:'} />
                    <Paragraph text={'If you provide us with feedback, contact us, or engage in communication with us, we may collect your name, email address, and any other information included in your message.'} />

                    <Subtitle blue mbSm text={'e. Blockchain Wallet Address:'} />
                    <Paragraph text={'To access certain aspects of our Platform, you are required to use a blockchain wallet address. While we do not consider a blockchain wallet address alone as identifying information, it may become associated with you based on your usage of our Platform.'} />

                    {/* section 2 */}
                    <Subtitle text={'2. Automatically Collected Information:'} />

                    <Subtitle blue mbSm text={'a. Usage Data:'} />
                    <Paragraph text={"We automatically collect information about your interactions with the Platform, such as browser type, IP address, device ID, actions, clickstream data, and date/time stamps. This data helps us improve the Platform's functionality and user experience."} />

                    <Subtitle blue mbSm text={'b. Cookies and Tracking Technologies:'} />
                    <Paragraph text={'We use cookies, pixel tags, and similar tracking technologies to analyze user behavior, personalize content, and improve our services. You can adjust your browser settings to manage or disable these technologies, but this may impact your ability to fully utilize the Platform.'} />

                    {/* section 3 */}
                    <Subtitle text={'3. Use of Information:'} />

                    <Paragraph text={"We process your information to operate, improve, and personalize the Platform, as well as to communicate with you, prevent fraud, enforce our terms, and comply with legal obligations. Specifically, we use your information to:"} />
                    <List content={[
                        "Facilitate ERC-20 token creation and management.",
                        "Provide access to exclusive content, giveaways, and rewards.",
                        "Enhance and personalize your user experience on the Platform.",
                        "Communicate important updates, newsletters, and promotional materials.",
                        "Investigate and prevent potential violations of our terms and policies.",
                        "Comply with applicable laws and respond to legal requests.",
                    ]} />

                    {/* section 4 */}
                    <Subtitle text={'4. Sharing of Information:'} />
                    <Paragraph text={"We may share your information with third-party service providers, affiliates, and other companies in line with this Privacy Policy. We may also disclose your information when required by law, to protect our legal rights, or in connection with corporate restructuring or business transactions."} />

                    {/* section 5 */}
                    <Subtitle text={'5. Security Measures:'} />
                    <Paragraph text={"We implement physical, technical, and administrative security measures to protect your information from unauthorized access, loss, or alteration. While we strive to safeguard your data, no security system is completely foolproof, and we cannot guarantee absolute security."} />

                    {/* section 6 */}
                    <Subtitle text={'6. Your Choices and Rights:'} />

                    <Subtitle blue mbSm text={'a. Access and Correction:'} />
                    <Paragraph text={"You can access, edit, or delete certain information through your account settings on the Platform."} />

                    <Subtitle blue mbSm text={'b. Withdraw Consent:'} />
                    <Paragraph text={"You have the right to withdraw your consent for the processing of your information at any time."} />

                    <Subtitle blue mbSm text={'c. Rights under Applicable Laws:'} />
                    <Paragraph text={"Depending on your jurisdiction, you may have rights to access, rectify, erase, restrict, or port your personal data, as well as the right to object to processing."} />

                    <Subtitle blue mbSm text={'d. California Privacy Rights:'} />
                    <Paragraph text={"If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to request access to and deletion of your personal information."} />
                    
                    {/* section 7 */}
                    <Subtitle text={'7. Third-Party Links:'} />
                    <Paragraph text={"Our Platform may contain links to third-party websites. This Privacy Policy applies only to our Platform, and we are not responsible for the privacy practices or content of third-party sites. We encourage you to review the privacy policies of those sites."} />
                    
                    {/* section 8 */}
                    <Subtitle text={'8. Changes to Privacy Policy:'} />
                    <Paragraph text={"We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The effective date will be indicated at the beginning of the policy. Your continued use of the Platform after any changes signifies your acceptance of the updated Privacy Policy."} />
                    
                    {/* section 9 */}
                    <Subtitle text={'9. Contact Us:'} />
                    <Paragraph text={"If you have questions, concerns, or requests related to your privacy or this Privacy Policy, please contact us at [insert contact information]."} />
                    <Paragraph text={"By using our Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein."} />
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;

