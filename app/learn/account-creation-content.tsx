import React from 'react';

interface AccountCreationContentProps {
    fontSize?: string; // Optional prop for font size customization
}

const AccountCreationContent: React.FC<AccountCreationContentProps> = ({ fontSize }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center horizontally
            textAlign: 'center', // Center text
            padding: '20px', // Add some padding
        }}>
            {/* Title */}
            <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: fontSize || '24px' }}>
                Creating a Metamask Wallet & Adding Funds
            </h1>

            {/* Video */}
            <div style={{
                marginTop: '60px', // Adjust spacing
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
            }}>
                <video
                    controls
                    width="100%"
                    height="auto" // Adjust height to maintain aspect ratio
                    style={{ maxWidth: '800px', margin: '0 auto' }} // Center video
                    poster="/assets/images/thumbnail.svg" // Add the thumbnail image here
                >
                    <source src="/assets/images/FinalWalletTutorial.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Text to be added at the bottom of the video */}
                <p style={{
                    color: 'white',
                    marginTop: '20px', // Adjust spacing
                    padding: '10px', // Add padding for mobile
                    fontSize: '16px', // Adjust font size for mobile
                    wordWrap: 'break-word', // Allow text to break on small screens
                }}>
                    In order to access and use Innox platform, you have to sign up using the normal web 2.0 
                    method and using the new method called web 3.0. Once you sign up to the platform, you will
                    have to connect/create your wallet (we recommend Metamask) in order to use the main 
                    functionalities the platform offers content creators and fans.
                   
                    <br /> 
                    <br /> 

                    *Innox operates on the Polygon network and uses USDC as the main stable coin to purchase creator 
                    tokens. When you add funds to your wallet, make sure to select Polygon as your network and 
                    search for USDC (instructions on how to add funds: minute 1:19)
                </p>
            </div>
        </div>
    );
};

export default AccountCreationContent;

