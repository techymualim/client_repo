/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect } from 'react';
import Stars from '@/components/ui/stars';
import { Subtitle, Paragraph, List } from '@/components/ui/text-components';
import Head from 'next/head';
// import { Helmet } from 'react-helmet-async';



const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
               <Head>
    <meta charSet='utf-8' />
    <title>Terms of Service | Innox App</title>
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
    <meta name='description' content='Innox is a marketplace that enables creators to create thier own tokens and list them for sale to their fans ("Buyers"). Users can buy directly from our platform and utilize this tokens to access the creators exclusive offerings' />
  </Head>
            <div className='background-custom' />
            <Stars />
            <section className='container container-custom flex flex-col min-h-[0] py-10 md:py-16 md:pt-8 mt-24'>
                <div className="mx-auto px-6 md:px-24 text-white">
                    <h1 className="text-[30px] md:text-[36px] font-bold mb-4">Terms of Service for Innox Marketplace</h1>
                    <Subtitle blue text={'Effective Date: Sept. 26th 2023'} />
                    <Paragraph text={'Welcome to Innox Marketplace ("we," "our," or "us"). By accessing or using our website and services, you ("you" or "user") agree to be bound by the following Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our platform.'} />
                    
                    {/* section 1 */}
                    <Subtitle text={'1. Service Description'} />
                    <Paragraph text={'Innox is a marketplace that enables creators to create thier own tokens and list them for sale to their fans ("Buyers"). Users can buy directly from our platform and utilize this tokens to access the creators exclusive offerings.'} />
                    
                    {/* section 2 */}
                    <Subtitle text={'2. Accessing the Service'} />
                    <Paragraph text={'Like much of web3, your blockchain address functions as your identity on Innox. Accordingly, you will need a blockchain address and a third-party wallet to access the Service. Your account on the Service (“Account”) will be associated with your blockchain address; however, if you want to add some flair to your Innox persona, you can add additional information, such as a profile picture, to your Account.'} />
                    <Paragraph text={'Your Account on Innox  will be associated with your linked blockchain address and display the tokens for that blockchain address (and, if applicable, any content associated with such tokens). By using your wallet in connection with the Service, you agree that you are using that wallet under the terms and conditions of the applicable provider of the wallet. Wallets are not operated by, maintained by, or affiliated with Innox, and Innox does not have custody or control over the contents of your wallet and has no ability to retrieve or transfer its contents. Innox accepts no responsibility for, or liability to you, in connection with your use of a wallet and makes no representations or warranties regarding how the Service will operate with any specific wallet. You are solely responsible for keeping your wallet secure and you should never share your wallet credentials or seed phrase with anyone. If you discover an issue related to your wallet, please contact your wallet provider. Likewise, you are solely responsible for your Account and any associated wallet and we are not liable for any acts or omissions by you in connection with your Account or as a result of your Account or wallet being compromised. You agree to immediately notify us if you discover or otherwise suspect any security issues related to the Service or your Account.'} />
                    <Paragraph text={'You also represent and warrant that you will comply with all applicable laws (e.g., local, state, federal and other laws)in connection with using the Service. In order to comply with our legal obligations and keep our users and platform safe, we may need to restrict, suspend, or terminate your access to the Service. You acknowledge that Innox is under no obligation to disclose the details of its decision to take such action with you.'} />
                    <Paragraph text={'Without limiting the foregoing, by using the Service, you represent and warrant that: (a) you are not located in, ordinarily resident in, or organized under the laws of any jurisdiction that is subject to a comprehensive U.S. Government embargo ("Embargoed Jurisdiction"); (b) you are not subject to any sanctions administered by an agency of the U.S. Government, any other government, or the United Nations (collectively, “Sanctions”); (c) you are not owned or controlled, directly or indirectly, by any person that is subject to Sanctions, or that is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction; (d) none of your officers, managers, directors, shareholders or authorized representatives is subject to Sanctions, or is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction, or is owned or controlled, directly or indirectly, by any person that is subject to Sanctions or that is located in, ordinarily resident in, or organized under the laws of, any Embargoed Jurisdiction; (e) you have not transacted and will not transact with any person or entity falling into any of (a)-(d); (f) you have not transacted and will not transact for the benefit of any person or entity falling into any of (a)-(d). You further covenant that the foregoing shall be true during the entire period of this agreement. If you access or use the Service outside the United States, you are solely responsible for ensuring that your access and use of the Service in such country, territory or jurisdiction does not violate any applicable laws.'} />
                    <Paragraph text={'Innox may require you to provide additional information and documents in certain circumstances, such as at the request of any government authority, as any applicable law or regulation dictates, to provide you with a requested service, or to investigate a potential violation of these Terms. In such cases, Innox, in its sole discretion, may disable your Account and block your ability to access the Service until such additional information and documents are processed by Innox. If you do not provide complete and accurate information in response to such a request, Innox may refuse to restore your access to the Service.'} />
                    <Paragraph text={'Your access and use of the Service may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance, or repair of the Service, geographic restrictions, potential violation of these Terms, or other actions that Innox, in its sole discretion, may elect to take. You understand that Innox, in its sole discretion, may disable your Account and/or reassign your username or associated url.'} />
                    <Paragraph text={'We require all users to be at least 18 years old. If you are at least 13 years old but under 18 years old, you may only use Innox through a parent or guardian’s Account and with their approval and oversight. That account holder is responsible for your actions using the Account. It is prohibited to use our Service if you are under 13 years old.'} />
                    
                    <Subtitle blue text={'Ownership'} />
                    <Paragraph text={'The Service, including its “look and feel” (e.g., text, graphics, images, logos, page headers, button icons, urls, and scripts), proprietary content, information and other materials, and all content and other materials contained therein, including, without limitation, the Innox logo and all designs, text, graphics, pictures, data, software, sound files, other files, and the selection and arrangement thereof are the proprietary property of Innox or our affiliates, licensors, or users, as applicable, and you agree not to take any action(s) inconsistent with such ownership interests. We and our affiliates, licensors, and users, as applicable, reserve all rights in connection with the Service and its content, including, without limitation, the exclusive right to create derivative works.'} />
                    <Paragraph text={"Innox’s name, logo, trademarks, and any Innox product or service names, designs, logos, and slogans are the intellectual property of Innox or our affiliates or licensors and may not be copied, imitated or used, in whole or in part, without our prior written permission in each instance. You may not use any metatags or other “hidden text” utilizing “Innox” or any other name, trademark or product or service name of Innox or our affiliates or licensors without our prior written permission. In addition, the “look and feel” of the Service constitutes the service mark, trademark or trade dress of Innox and may not be copied, imitated or used, in whole or in part, without our prior written permission."} />
                    <Paragraph text={'All other third-party trademarks, registered trademarks, and product names mentioned on the Service or contained in the content linked to or associated with any token displayed on the Service are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable intellectual property rights holder. Reference to any products, services, processes or other information by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship, or recommendation by Innox.'} />
                    <Paragraph bold text={'Innox does not have ownership, custody, or control of creator tokens or the smart contracts deployed by third parties. Creators of these tokens or smart contracts are solely responsible for their operation and functionality.'} />
                    
                    {/* section 3 */}
                    <Subtitle text={'3. User Accounts'} />
                    
                    <Subtitle mbSm blue text={'a. Account Creation'} />
                    <Paragraph text={'In order to access and utilize specific features and functionalities offered on Innox, users may be required to create an account. Account creation involves creating or login in to your blockchain wallet (i.e Metamask) You agree to provide accurate, current, and complete information during the registration process.'} />
                    
                    <Subtitle mbSm blue text={'b. Account Credentials and Security'} />
                    <Paragraph text={' As a registered user, you are responsible for maintaining the confidentiality of your account credentials, such as your username and password. You agree not to share your account information with any third party and to take reasonable measures to safeguard your account against unauthorized access. If you suspect any unauthorized use of your account or any security breach, you must notify us immediately.'} />
                    
                    <Subtitle mbSm blue text={'c. Usage Responsibility'} />
                    <Paragraph text={'You are solely responsible for all activities conducted under your account, whether authorized by you or not. Any actions taken while logged into your account will be considered as having been performed by you. Therefore, it is essential to keep your account information secure and to log out of your account after each session, especially when using shared or public devices.'} />
                    
                    <Subtitle mbSm blue text={'d. Age Restriction'} />
                    <Paragraph text={'By creating an account and using Innox, you affirm that you are at least the age of majority in your jurisdiction or possess the necessary legal consent to use the platform. If you are a minor or do not have the required legal consent, you are prohibited from using our platform.'} />
                    
                    <Subtitle mbSm blue text={'e. Account Termination'} />
                    <Paragraph text={'We reserve the right to terminate or suspend your account, with or without cause or notice, at our discretion. Reasons for termination may include but are not limited to violations of these Terms, engaging in fraudulent activities, or any other actions that may harm the platform or its users.'} />
                    
                    <Subtitle mbSm blue text={'f. Data Accuracy and Updates'} />
                    <Paragraph text={'It is your responsibility to ensure that your account information remains accurate and up-to-date. If there are any changes to your account details, you must promptly update your information on the platform.'} />
                    
                    <Subtitle mbSm blue text={'g. Account Transfer'} />
                    <Paragraph text={'You may not transfer, sell, or assign your account or any rights associated with it to any other individual or entity.'} />
                    
                    <Subtitle mbSm blue text={'h. Account Deletion'} />
                    <Paragraph text={'If you wish to terminate your account with Innox, you may do so by following the account deletion process provided on the platform. Please note that account deletion may result in the permanent loss of data and content associated with your account.'} />
                    
                    <Paragraph text={'By creating an account on Innox, you acknowledge and agree to abide by these account-related terms and conditions. We reserve the right to amend these terms at any time, and any such changes will be communicated to you through appropriate means.'} />
                    
                    {/* section 4 */}
                    <Subtitle text={'4. Creator Tokens'} />
                    <Subtitle mbSm blue text={'a. Tokenization of Content, Creations, or Services'} />
                    <Paragraph text={'On Innox, creators have the opportunity to tokenize their digital content, creative works, or services as tokens. Tokenization in this context refers to the process of using tokens to access exclusive offerings by creators.'} />
                    
                    <Subtitle mbSm blue text={'b. Full Creator Control'} />
                    <Paragraph text={'Creators retain full control over the creation and management of their tokens. They can choose the name, symbol, image and supply of tokens they wish to supply.'} />
                    
                    <Subtitle mbSm blue text={'c. Token Issuance and Supply'} />
                    <Paragraph text={'Creators are responsible for issuing the initial supply of their tokens on Innox. They can set the total supply of tokens and decide whether to create a fixed supply or implement mechanisms for token minting or burning over time.'} />
                    
                    <Subtitle mbSm blue text={'d. Pricing and Sales'} />
                    <Paragraph text={'Creators have the freedom to set the initial price of their tokens during the token sale or distribution. They may also adjust token prices as they see fit based on market demand or other factors. Buyers can purchase creator tokens using supported cryptocurrencies or fiat payment methods available on the platform.'} />
                    
                    <Subtitle mbSm blue text={'e. Buyer Access and Ownership'} />
                    <Paragraph text={'Upon purchase, buyers gain access to the creator tokens they acquire. These tokens allow fans to buy exclusive offerings by creators.'} />
                    
                    <Subtitle mbSm blue text={'f. Applicable Fees'} />
                    <Paragraph text={' Transactions involving creator tokens may be subject to certain fees, including but not limited to transaction fees and gas fees associated with blockchain operations. These fees contribute to the proper functioning and security of the platform.'} />
                    
                    <Subtitle mbSm blue text={'g. Token Interoperability'} />
                    <Paragraph text={'The ERC-20 standard allows for interoperability between various Ethereum-based platforms and wallets. Creators and buyers can interact with their tokens beyond the Innox platform, facilitating seamless token transfers and trades.'} />
                    
                    <Subtitle mbSm blue text={'h. Smart Contracts'} />
                    <Paragraph text={'To ensure transparency and security, creator tokens are governed by smart contracts deployed on the Polygon blockchain. These smart contracts dictate token behavior, issuance rules, and any predefined functionalities, ensuring that token transactions occur as intended by the creator.'} />
                    
                    <Subtitle mbSm blue text={'i. Token Information and Metadata'} />
                    <Paragraph text={"Creators are encouraged to provide accurate and relevant information about their tokens, including token descriptions, usage guidelines, and any additional metadata that enhances the token's utility and value."} />

                    <Subtitle mbSm blue text={'j. Compliance and Legality'} />
                    <Paragraph text={'Creators must comply with all applicable laws and regulations when issuing and selling their tokens on Innox. They are responsible for ensuring that their tokenization activities do not violate intellectual property rights or any other legal obligations.'} />

                    <Subtitle mbSm blue text={'k. Token Performance and Marketplace'} />
                    <Paragraph text={'The performance of creator tokens in the marketplace is subject to market forces and demand. Innox does not guarantee any specific outcomes or returns on investments related to the buying, holding, or selling of creator tokens.'} />
                    
                    <Paragraph text={'By tokenizing their content, creations, or services on Innox, creators agree to follow these guidelines and acknowledge that the success and performance of their tokens depend on market dynamics and user engagement.'} />
                    
                    {/* section 5 */}
                    <Subtitle text={'5. User Obligations'} />

                    <Subtitle mbSm blue text={'a. Compliance with Laws and Regulations'} />
                    <Paragraph text={'All users of Innox must adhere to the laws, regulations, and rules applicable in their respective jurisdictions. Users are responsible for ensuring that their use of the platform and participation in any activities related to creator tokens are lawful and do not violate any legal requirements.'} />

                    <Subtitle mbSm blue text={'b. Intellectual Property Compliance for Creators'} />
                    <Paragraph text={'Creators on Innox must warrant that the tokens they create and offer for sale do not infringe upon the intellectual property rights of any third parties. Creators should verify that they have the necessary rights, licenses, or permissions to tokenize and distribute the content, creations, or services represented by their tokens.'} />

                    <Subtitle mbSm blue text={'c. Prohibition of Harmful Activities'} />
                    <Paragraph text={'Users are strictly prohibited from engaging in any harmful, malicious, or abusive activities on the Innox platform. This includes but is not limited to:'} />
                    <List content={[
                        "Harassing, threatening, or defaming other users or creators.",
                        "Attempting to gain unauthorized access to other users' accounts or data.",
                        "Engaging in any form of fraudulent behavior or deceptive practices.",
                        "Uploading or distributing harmful content, such as viruses or malware.",
                        "Manipulating the price of a token (both for users and creators)",
                    ]} />

                    <Subtitle mbSm blue text={'d. Content and Token Guidelines'} />
                    <Paragraph text={'Users must adhere to the content guidelines established by Innox. Content or tokens that promote violence, discrimination, hate speech, adult content, or any other forms of inappropriate or prohibited materials are strictly forbidden. Innox reserves the right to remove or block any content or tokens that violate these guidelines.'} />

                    <Subtitle mbSm blue text={'e. Respectful Communication'} />
                    <Paragraph text={'In interactions with other users, creators, or Innox staff, all users are expected to maintain a respectful and professional demeanor. Harassment, threats, or any form of abusive language or behavior will not be tolerated.'} />

                    <Subtitle mbSm blue text={'f. Reporting Violations'} />
                    <Paragraph text={'Innox encourages users to report any violations of these Terms of Service or suspicious activities observed on the platform. Reports can be submitted through the designated reporting channels provided on the website.'} />

                    <Subtitle mbSm blue text={'g. Consequences of Violations'} />
                    <Paragraph text={'Innox reserves the right to take appropriate actions against users who breach these obligations, which may include but are not limited to:'} />
                    <List content={[
                        "Issuing warnings or temporary suspensions.",
                        "Permanent suspension or termination of user accounts.",
                        "Removal of content or tokens that violate the Terms of Service.",
                        "Legal action for serious violations or illegal activities.",
                        "$5,000 fee for impersonation of creator.",
                    ]} />

                    <Subtitle mbSm blue text={'h. Third-Party Rights and Lawsuits'} />
                    <Paragraph text={'Users agree not to hold Innox liable for any claims, disputes, or legal actions arising from their use of the platform, their interactions with other users or creators, or the content and tokens they create.'} />
                    
                    {/* section 6 */}
                    <Subtitle text={'6. Ownership and Intellectual Property'} />
                    <Paragraph text={'All content, logos, designs, and text provided on Innox are our intellectual property or that of our licensors. Users must not use, reproduce, or distribute these materials without explicit permission.'} />
                    
                    {/* section 7 */}
                    <Subtitle text={'7. Disclaimer of Warranties'} />
                    <Paragraph text={'a. Our platform is provided on an "as-is" and "as-available" basis, without warranties of any kind.'} />
                    <Paragraph text={'b. We do not guarantee the accuracy, reliability, or completeness of the information provided on our platform.'} />

                    {/* section 8 */}
                    <Subtitle text={'8. Limitation of Liability'} />
                    <Paragraph text={'a. In no event shall Innox, its affiliates, employees, or partners be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use our platform or services.'} />
                    <Paragraph text={'b. You agree that any transactions conducted on the platform are at your own risk, and we are not responsible for any financial losses resulting from such transactions.'} />

                    {/* section 9 */}
                    <Subtitle text={'9. Indemnification'} />
                    <Paragraph text={'You agree to indemnify and hold Innox, its affiliates, employees, and partners harmless from any claims, damages, or losses resulting from your use of the platform, violation of these Terms, or infringement of third-party rights.'} />

                    {/* section 10 */}
                    <Subtitle text={'10. Termination'} />
                    <Paragraph text={'We reserve the right to terminate user accounts or restrict access to our platform at our discretion, with or without cause or notice.'} />

                    {/* section 11 */}
                    <Subtitle text={'11. Changes to Terms'} />
                    <Paragraph text={'We may modify or update these Terms from time to time. Any changes will be effective immediately upon posting, and we will notify users of significant changes through appropriate channels.'} />

                    {/* section 12 */}
                    <Subtitle text={'12. Governing Law'} />
                    <Paragraph text={'These Terms shall be governed by and construed in accordance with the laws of [Your Country/Jurisdiction].'} />

                    {/* section 13 */}
                    <Subtitle text={'13. Contact Information'} />
                    <Paragraph text={'If you have any questions, concerns, or feedback regarding our Terms of Service or services, please contact us at info@innoxapp.com'} />

                </div>
            </section>
        </>
    );
};

export default TermsOfService;

