import InfoText from '@/components/ui/info-text';
import React from 'react';
import Image from 'next/image';
import Info from './info';


const AccountCreationContent: React.FC = () => {
    
    return (
        <>
            {totalContent.map((el, index) => (
                <Info key={`${index}` + el.id} item={el} index={index}/>
            ))}
        </>
    );
};

export default AccountCreationContent;

const account1 = {
    id: 'account-1',
    info: [
    { type: 'title', content: 'Creating a Metamask Wallet & Adding Funds' },
    { type: 'underlined', content: 'Installing Metamask on your browser ' },
    { type: 'mixed', content: [
        {text: '1. Go to', weight: 'regular'},
        {text: 'Metamask.com', weight: 'bold'},
        {text: 'and download the browser extension', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '2. Click the', weight: 'regular'},
        {text: '“download”', weight: 'bold'},
        {text: 'button located on the top right part of the page', weight: 'regular'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/1.svg'
    },
    { type: 'mixed', content: [
        {text: '3. Choose your device ', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '4. Click', weight: 'regular'},
        {text: '"Install metamask for Chrome"', weight: 'bold'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/2.svg'
    },
    { type: 'underlined', content: 'Adding Metamask to Google Chrome' },
    { type: 'mixed', content: [
        {text: '1. When you click “install MetaMask for Chrome” on the previous step, it should take you to the web store of your current browser.', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '(Ex. Chrome Web store if  you are using Google Chrome)', weight: 'bold'},
    ]},
    { type: 'mixed', content: [
        {text: '2. Click', weight: 'regular'},
        {text: '"Install metamask for Chrome"', weight: 'bold'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/3.svg'
    },
    { type: 'mixed', content: [
        {text: '3. Click', weight: 'regular'},
        {text: '"Add Extension"', weight: 'bold'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/4.svg'
    },
    { type: 'underlined', content: 'Creating your MetaMask Wallet ' },
    { type: 'mixed', content: [
        {text: '1. When you’ve completed the previous step and added the MetaMask extension to your browser you will be taken to a new page where you can create your new wallet.', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '2. Click', weight: 'regular'},
        {text: '"Create a new wallet"', weight: 'bold'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/5.svg'
    },
    { type: 'mixed', content: [
        {text: '3. Create a password you will remember.', weight: 'regular'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/6.svg'
    },
    { type: 'mixed', content: [
        {text: '4. Secure your wallet with a recovery phrase.', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '*Optional but recommended', weight: 'bold'},
    ]},
    { type: 'mixed', content: [
        {text: '(Make sure to save the recovery phrase in your device)', weight: 'bold'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/7.svg'
    },
    { type: 'mixed', content: [
        {text: '5. Write down the Secret Recovery Phrase.', weight: 'regular'},
    ]},
    { type: 'mixed', content: [
        {text: '6. Confirm the Recovery Phrase by writing the missing words.', weight: 'regular'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/8.svg'
    },
    { type: 'mixed', content: [
        {text: '7. Click', weight: 'regular'},
        {text: '"Confirm"', weight: 'bold'},
    ]},
    { type: 'mixed', content: [
        {text: '8. Wallet will be successfully created (you can access your wallet directly through the browser extension icon on the top right side of your chrome browser or by visiting metamask.com)', weight: 'regular'},
    ]},
    {
        type: 'image', content: '/assets/images/account-creation/9.svg'
    },
    
]};

const account2 = {
    id: 'account-2',
    info: [
        { type: 'underlined', content: 'Adding Funds to your Wallet.' },
        { type: 'mixed', content: [
            {text: 'Innox platform operates on the', weight: 'regular'},
            {text: 'polygon network.', weight: 'bold'},
            {text: 'Therefore in order to purchase tokens you will need to add', weight: 'regular'},
            {text: 'POLYGON MATIC', weight: 'bold'},
            {text: 'to your metamask account.', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '1. Open your MetaMask wallet directly trought the browser extension or by visiting MetaMask.com. ', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '2. Go to your account', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '3. Click the', weight: 'regular'},
            {text: '“Buy”', weight: 'bold'},
            {text: 'button.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/10.svg'
        },
        { type: 'mixed', content: [
            {text: '4. Select a payment method to be able to add funds to your wallet (Credit or debit recommended)', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/11.svg'
        },
        { type: 'mixed', content: [
            {text: '5. Click the', weight: 'regular'},
            {text: '“Connect Wallet”', weight: 'bold'},
            {text: 'button at the bottom in case your wallet is not connected yet.', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '6. Change the network to', weight: 'regular'},
            {text: 'Polygon Matic', weight: 'bold'},
            {text: 'by clicking the big rectangle where it says “Ethereum” in big letters. (See image below)', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/12.svg'
        },
        { type: 'mixed', content: [
            {text: '7. Type in', weight: 'regular'},
            {text: '"MATIC"', weight: 'bold'},
            {text: 'in the search bar at the top of the pop up.', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '8. Select', weight: 'regular'},
            {text: '"MATIC"', weight: 'bold'},
            {text: 'with the right label in grey', weight: 'regular'},
            {text: '"POLYGON"', weight: 'bold'},
            {text: '(See image below)', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/13.svg'
        },
        { type: 'mixed', content: [
            {text: '9. Once the correct network has been chosen make sure to go back to the initial page from steps 5 & 6. ', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '10. Input amount of money you want to add to your wallet.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/14.svg'
        },
        { type: 'mixed', content: [
            {text: '11. You will see a couple of options from trusted third party payment providers on the right side.', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: 'a. Choose the best option that appears to continue to add funds. (Moonpay is recommended)', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '12. We have chosen MoonPay, but you can use whichever one you’d like.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/15.svg'
        },
        { type: 'mixed', content: [
            {text: '13. After choosing your payment provider it will take you to their respective sign up pages. (Moonpay in our case)', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '14. Sign up or sign in to Moonpay in order to proceed with the payment.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/16.svg'
        },
        { type: 'mixed', content: [
            {text: '15. Enter Basic Details.', weight: 'regular'},
        ]},
        { type: 'mixed', content: [
            {text: '16. Enter Payment Information.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/17.svg'
        },
        { type: 'mixed', content: [
            {text: '17. Click', weight: 'regular'},
            {text: '"Continue"', weight: 'bold'},
        ]},
        { type: 'mixed', content: [
            {text: '18. Wait for your Wallet Balance to update.', weight: 'regular'},
        ]},
        {
            type: 'image', content: '/assets/images/account-creation/18.svg'
        },   
]};

const totalContent = [account1, account2]
