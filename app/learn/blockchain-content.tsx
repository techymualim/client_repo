import InfoText from '@/components/ui/info-text';
import React from 'react';
import Image from 'next/image';
import Info from './info';

const BlockchainContent: React.FC = () => {
    return (
        <>
            {totalContent.map((el, index) => (
                <Info key={`${index}` + el.id} item={el} index={index}/>
            ))}
        </>
    );
};

export default BlockchainContent;

const blockchain1 = {
    id: 'blockchain-1',
    info: [
    { type: 'title', content: 'What is blockchain technology?' },
    { type: 'paragraph', content: 'Blockchain technology is a decentralized and distributed ledger system that allows multiple parties to maintain a secure, transparent, and immutable record of transactions or data. It was originally introduced as the underlying technology for the cryptocurrency Bitcoin but has since found applications in various industries beyond digital currencies.' },
    { type: 'paragraph', content: 'At its core, a blockchain is a chain of blocks, where each block contains a list of transactions or data. These blocks are linked together using cryptographic techniques, forming a continuous chain. Each block typically includes a reference (hash) to the previous block, which ensures the integrity and immutability of the entire chain.' },
    { type: 'subtitle', content: 'How it works' },
    { type: 'underlined', content: 'Decentralization' },
    { type: 'paragraph', content: 'Unlike traditional centralized systems, blockchain operates in a decentralized manner. Instead of a single entity or authority controlling the entire network, blockchain relies on a network of nodes (computers) that participate in the validation and verification of transactions.' },
    { type: 'underlined', content: 'Transaction Validation' },
    { type: 'paragraph', content: 'When a user initiates a transaction, it is broadcast to all nodes in the network. These nodes verify the validity of the transaction using pre-defined consensus mechanisms, ensuring that the transaction meets the required criteria (e.g., digital signature, available funds).' },
    { type: 'underlined', content: 'Block Formation' },
    { type: 'paragraph', content: 'Valid transactions are grouped together into a block. Before adding a block to the blockchain, the network must reach consensus on its validity. This process varies depending on the blockchain protocol (e.g., Proof of Work, Proof of Stake, etc.).' },
    { type: 'underlined', content: 'Consensus Mechanisms' },
    { type: 'paragraph', content: 'Consensus mechanisms are the rules and algorithms used to agree on the validity of transactions and reach agreement on the next block to be added to the chain. This process ensures that all nodes in the network have a consistent view of the blockchain.' },
    { type: 'underlined', content: 'Mining (in Proof of Work)' },
    { type: 'paragraph', content: 'In some blockchain networks (e.g., Bitcoin), mining is used to compete for the right to add a block to the chain. Miners use computational power to solve complex mathematical puzzles, and the first miner to solve it gets to add the next block and is rewarded with cryptocurrency.' },
    { type: 'underlined', content: 'Immutability' },
    { type: 'paragraph', content: 'Once a block is added to the blockchain, it becomes nearly impossible to alter the contents of that block without altering all subsequent blocks. This immutability ensures the security and integrity of the data recorded on the blockchain.' },
    { type: 'underlined', content: 'Transparency' },
    { type: 'paragraph', content: 'All transactions recorded on the blockchain are visible to all participants in the network. This transparency fosters trust and accountability as anyone can verify the history of transactions. Security: The use of cryptographic techniques, consensus mechanisms, and decentralization makes blockchain highly secure against tampering and fraudulent activities.' },
]};

const blockchain2 = {
    id: 'blockchain-2',
    info:[
    { type: 'title', content: 'Blockchain vs Traditional Databases' },
    { type: 'paragraph', content: 'Blockchain and traditional databases are both technologies used to store and manage data, but they have fundamental differences in their architecture, principles, and use cases. Here are the key differences between blockchain and traditional databases:' },
    { type: 'underlined', content: 'Data structure and organization' },
    { type: 'list', content: ['Traditional databases: In a typical relational database, data is stored in tables with rows and columns. Each row represents a record, and each column represents a specific attribute or field of the record. The database is centralized and managed by a single entity, such as a company or organization.', 'Blockchain: Data in a blockchain is organized in blocks, which are linked together in a chronological order, forming a chain of blocks. Each block contains a set of transactions, and these transactions are verified and added to the chain through a consensus mechanism. Blockchain is a decentralized and distributed system, meaning the data is replicated across multiple nodes (computers) participating in the network, and no single entity has full control over the data.'] },
    { type: 'underlined', content: 'Decentralization' },
    { type: 'list', content: ['Traditional databases: Centralized databases are managed and controlled by a central authority, making them vulnerable to single points of failure and potential data manipulation.', 'Blockchain: Blockchain is designed to be decentralized, where multiple nodes in the network hold a copy of the entire blockchain and participate in the validation and verification of new transactions. This decentralization enhances security, transparency, and resilience, as there is no central point of control or failure.'] },
    { type: 'underlined', content: 'Consensus mechanism' },
    { type: 'list', content: ['Traditional databases: In centralized databases, data integrity is ensured through the use of access controls and user permissions, but there is no inherent mechanism for achieving consensus among multiple parties.', 'Blockchain: Consensus mechanisms like Proof of Work (PoW) or Proof of Stake (PoS) are employed to validate and agree on the validity of new transactions before they are added to the blockchain. This process ensures that all nodes in the network reach a consensus on the state of the blockchain, making it secure and tamper-resistant.'] },
    { type: 'underlined', content: 'Immutability and security:' },
    { type: 'list', content: ['Traditional databases: Data in traditional databases can be modified, deleted, or updated by authorized users, making them susceptible to data manipulation or unauthorized changes.', 'Blockchain: Once data is added to a blockchain, it becomes extremely difficult to alter or delete it. Each block contains a cryptographic hash of the previous block, creating a chain of interconnected blocks that makes it nearly impossible to change historical records without altering subsequent blocks. This immutability and cryptographic security enhance the trustworthiness of the data stored in the blockchain.'] },
]};

const blockchain3 = {
    id: 'blockchain-3',
    info:[
        { type: 'title', content: 'What are the key components of a blockchain network?' },
        { type: 'paragraph', content: 'A blockchain network consists of several key components that work together to ensure the integrity, security, and functionality of the system. Here are the main components of a typical blockchain network' },
        { type: 'underlined', content: 'Nodes' },
        { type: 'paragraph', content: 'Nodes are individual computers or devices that participate in the blockchain network. Each node maintains a copy of the entire blockchain and communicates with other nodes to validate and relay transactions. Nodes can be classified into different types based on their roles, such as full nodes, mining nodes, and lightweight nodes.' },
        { type: 'underlined', content: 'Blockchain' },
        { type: 'paragraph', content: 'The blockchain is a distributed ledger that records all the transactions in chronological order. It consists of a chain of blocks, where each block contains a batch of verified and timestamped transactions. The blocks are linked together using cryptographic hashes, creating an immutable and tamper-resistant record of the transaction history.' },
        { type: 'underlined', content: 'Transactions' },
        { type: 'paragraph', content: "Transactions are the fundamental units of data in a blockchain network. They represent the transfer of assets, information, or other values between participants. Before being added to the blockchain, transactions must go through a validation process to ensure they meet the network's rules and consensus mechanism." },
        { type: 'underlined', content: 'Consensus Mechanisms' },
        { type: 'paragraph', content: 'Consensus mechanisms are the rules and algorithms used to agree on the validity of transactions and reach agreement on the next block to be added to the chain. This process ensures that all nodes in the network have a consistent view of the blockchain.' },
        { type: 'underlined', content: 'Smart Contracts' },
        { type: 'paragraph', content: 'Smart contracts are self-executing contracts with predefined rules and conditions. They facilitate automated and trustless interactions between parties on the blockchain. Smart contracts are typically associated with platforms like Ethereum, which allows developers to create decentralized applications (DApps) using their scripting language (Solidity).' },
        { type: 'underlined', content: 'Wallets' },
        { type: 'paragraph', content: 'Wallets are software applications that allow users to store, send, and receive cryptocurrencies or other digital assets on the blockchain. Wallets can be either software-based (online or offline) or hardware-based (physical devices).' },
        { type: 'underlined', content: 'Governance' },
        { type: 'paragraph', content: "In some blockchain networks, there might be a governance model that enables participants to propose and vote on protocol upgrades, changes, or other important decisions related to the blockchain's operation and rules." },
        { type: 'underlined', content: 'Security measures' },
        { type: 'paragraph', content: 'Blockchain networks implement various security measures to protect against attacks, fraud, and unauthorized access. These measures can include cryptographic algorithms, hashing functions, digital signatures, and more.' },
]};

const blockchain4 = {
    id: 'blockchain-4',
    info:[
        { type: 'title', content: 'How are verified and added to the blockchain?' },
        { type: 'paragraph', content: "Transactions are verified and added to the blockchain through a process called consensus. Consensus is the mechanism by which all nodes in the blockchain network agree on the validity and order of transactions to be added to the blockchain. The specific consensus mechanism used depends on the blockchain network, and different blockchains may employ different approaches to achieve consensus. Let's look at the two most common consensus mechanisms:" },
        { type: 'underlined', content: "Proof of Work (PoW)" },
        { type: 'paragraph', content: "In a Proof of Work-based blockchain, such as Bitcoin, nodes known as miners compete to solve complex mathematical puzzles. These puzzles require significant computational effort, and the first miner to find the solution broadcasts it to the rest of the network." },
        { type: 'paragraph', content: "Other nodes in the network then verify the validity of the proposed block (which contains a batch of transactions) and the solution to the puzzle. They do this by confirming that the transactions follow the rules of the network, the signatures are valid, and the block's hash matches the solution to the puzzle." },
        { type: 'paragraph', content: "If the majority of nodes agree that the proposed block and its solution are valid, the block is added to the blockchain. The miner who found the solution is rewarded with newly minted cryptocurrency (known as the block reward) and transaction fees from the included transactions." },
        { type: 'underlined', content: "Proof of Stake (PoS)" },
        { type: 'paragraph', content: "In a Proof of Stake-based blockchain, like Ethereum's planned transition to Ethereum 2.0, validators (or nodes) are chosen to create new blocks and verify transactions based on the amount of cryptocurrency they hold and are willing to 'stake' as collateral." },
        { type: 'paragraph', content: "Validators take turns proposing new blocks, and other nodes (validators) in the network verify the validity of the proposed block and the transactions within it. They do this by checking that the transactions follow the rules and that the validator has the right to create the block (based on their stake and the consensus protocol)." },
        { type: 'paragraph', content: "If the majority of nodes reach a consensus that the proposed block and its transactions are valid, the block is added to the blockchain. Validators may receive transaction fees as a reward for processing transactions, but there is no block reward in most PoS-based blockchains." },
        { type: 'paragraph', content: "Both PoW and PoS are designed to ensure the security and immutability of the blockchain. PoW relies on computational work to secure the network, while PoS relies on the economic stake of participants. Other consensus mechanisms, like Delegated Proof of Stake (DPoS) and Practical Byzantine Fault Tolerance (PBFT), also exist and are used in various blockchain networks." },
        { type: 'paragraph', content: "Once a block is added to the blockchain, the transactions it contains are considered confirmed and immutable. They become part of the historical record and cannot be altered or removed without compromising the entire chain's security and consensus. This process of verifying and adding new blocks to the blockchain continues, creating a continuous and tamper-resistant ledger of transactions." },
]};

const blockchain5 = {
    id: 'blockchain-5',
    info:[
        { type: 'title', content: "Security of Blockchain transactions" },
        { type: 'paragraph', content: "The security of blockchain transactions is one of the key features that sets blockchain technology apart from traditional databases. Blockchain offers a high level of security due to its decentralized nature, cryptographic techniques, and consensus mechanisms. Here are some of the security aspects that contribute to the robustness of blockchain transactions:" },
        { type: 'underlined', content: "Decentralization" },
        { type: 'paragraph', content: "Blockchain operates as a distributed ledger, meaning the data is replicated and stored across multiple nodes in the network. There is no central point of control, making it difficult for malicious actors to attack a single point of failure. Decentralization enhances the system's resilience against attacks and ensures that data remains accessible even if some nodes go offline or are compromised." },
        { type: 'underlined', content: "Cryptography" },
        { type: 'paragraph', content: "Blockchain uses cryptographic techniques to secure transactions and data. Each transaction is digitally signed by the sender using their private key, and the signature is verified by other nodes using the sender's public key. This ensures that only the legitimate owner of a private key can initiate and authorize transactions." },
        { type: 'underlined', content: "Immutable Ledger" },
        { type: 'paragraph', content: "Once a transaction is added to a block and included in the blockchain, it becomes nearly impossible to alter or delete it. Each block contains a cryptographic hash of the previous block, creating a chain of blocks, and any change to a transaction in a previous block would require re-computing all subsequent blocks' hashes. This property of immutability makes the blockchain resistant to tampering and ensures the integrity of the transaction history." },
        { type: 'underlined', content: "Consensus Mechanisms" },
        { type: 'paragraph', content: "Consensus mechanisms, like Proof of Work (PoW) and Proof of Stake (PoS), ensure that all nodes in the network agree on the validity of transactions before they are added to the blockchain. This prevents double-spending and ensures that only legitimate transactions are recorded. Consensus mechanisms also provide protection against Sybil attacks, where an attacker attempts to control the network by creating a large number of fake identities (nodes)." },
        { type: 'underlined', content: "Transparency and Auditability" },
        { type: 'paragraph', content: "Blockchain transactions are transparent and publicly visible, meaning anyone can inspect the entire transaction history. This transparency enhances accountability and makes it easier to trace the flow of funds or assets. It also promotes auditability and can be valuable in industries where accountability and compliance are critical." },
        { type: 'underlined', content: "Security against 51% Attacks" },
        { type: 'paragraph', content: "In PoW-based blockchains, achieving a 51% majority of the network's computing power is necessary to launch a successful attack. This would require an enormous amount of computational resources, making such attacks economically infeasible in well-established and secure blockchain networks." },
        { type: 'underlined', content: "Continuous Block Production" },
        { type: 'paragraph', content: "The continuous production of new blocks in the blockchain, driven by the consensus mechanism, makes it difficult for attackers to manipulate past transactions retroactively. Attackers would need to outpace the legitimate nodes' block production speed to alter the chain, which becomes increasingly difficult as the chain grows." },
]};

const blockchain6 = {
    id: 'blockchain-6',
    info:[
        { type: 'title', content: "Type of Blockchains" },
        { type: 'paragraph', content: "Blockchain technology can be categorized into several types based on various characteristics and features. Here are some of the main types of blockchains:" },
        { type: 'underlined', content: "Public Blockchains" },
        { type: 'list', content: ["Public blockchains are open and permissionless, allowing anyone to join the network, participate in the consensus process, and access the data stored on the blockchain."] },
        { type: 'paragraph', content: "Examples: Bitcoin, Ethereum, Litecoin, etc." },
        { type: 'underlined', content: "Private Blockchains" },
        { type: 'list', content: ["Private blockchains are restricted and permissioned, meaning only selected entities or participants can join the network and access the blockchain's data and functionality.", "Private blockchains are often used within organizations or consortiums for internal use cases." ] },
        { type: 'paragraph', content: "Examples: Hyperledger Fabric, Corda, Quorum, etc." },
        { type: 'underlined', content: "Hybrid Blockchains" },
        { type: 'list', content: ["Hybrid blockchains combine elements of both public and private blockchains, providing a flexible approach for various use cases.", "In a hybrid blockchain, some parts of the data may be public and accessible to anyone, while other data may be kept private and accessible only to specific participants." ] },
        { type: 'paragraph', content: "Examples: Dragonchain, Ardor, etc." },
        { type: 'underlined', content: "Smart Contract Platforms" },
        { type: 'list', content: ["Smart contract platforms are blockchains that support programmable, self-executing contracts known as smart contracts.", "These platforms enable the creation of decentralized applications (DApps) and automated interactions between participants." ] },
        { type: 'paragraph', content: "Examples: Ethereum, EOS, Cardano, etc." },
        { type: 'underlined', content: "Sidechains" },
        { type: 'list', content: ["Sidechains are separate blockchains connected to the main blockchain (mainchain) that enable the transfer of assets and data between them.", "Sidechains can be used to address scalability and performance issues while retaining interoperability with the mainchain." ] },
        { type: 'paragraph', content: "Examples: RSK, Liquid, etc." },
]};

const blockchain7 = {
    id: 'blockchain-7',
    info:[
        { type: 'title', content: "Smart Contracts & its functionalities" },
        { type: 'paragraph', content: "A smart contract is a self-executing computer program that operates on a blockchain network. It is a crucial feature of blockchain technology, enabling the automation and execution of predefined terms and conditions without the need for intermediaries. Smart contracts are typically written in programming languages like Solidity (for Ethereum) and deployed on the blockchain, where they can be executed automatically when specific conditions are met." },
        { type: 'underlined', content: "Self-Executing" },
        { type: 'paragraph', content: "Once a smart contract is deployed on the blockchain, it operates as a self-executing program. When the specified conditions within the contract are met, the code is automatically executed, and the contract's actions are carried out." },
        { type: 'underlined', content: "Decentralization " },
        { type: 'paragraph', content: "Smart contracts run on blockchain networks, which are decentralized and distributed ledgers. This means that the code and logic of the smart contract are distributed across multiple nodes (computers) on the network, ensuring transparency and preventing single points of failure." },
        { type: 'underlined', content: "No Intermediaries" },
        { type: 'paragraph', content: "Traditional contracts often require intermediaries (e.g., lawyers, notaries, financial institutions) to enforce the terms. Smart contracts eliminate the need for intermediaries since the execution and enforcement are handled directly by the blockchain." },
        { type: 'underlined', content: "Immutable" },
        { type: 'paragraph', content: "Once a smart contract is deployed on the blockchain, its code and conditions cannot be altered. This immutability ensures that the terms of the contract remain tamper-proof and secure." },
        { type: 'underlined', content: "Triggering Events" },
        { type: 'paragraph', content: "Smart contracts are activated by specific events or conditions, often referred to as 'triggers'. These triggers can be predefined actions (e.g., time-based triggers) or external inputs, such as receiving a specific amount of cryptocurrency." },
        { type: 'underlined', content: "Digital Assets and Tokens" },
        { type: 'paragraph', content: "Smart contracts can be used to create and manage digital assets and tokens. For example, an Ethereum-based smart contract can create ERC-20 tokens, representing digital assets on the Ethereum blockchain." },
        { type: 'underlined', content: "Multi-Step Processes" },
        { type: 'paragraph', content: "Smart contracts can involve complex multi-step processes. For instance, in a decentralized exchange, a smart contract may handle the order matching, token transfers, and settlement in a single automated process." },
        { type: 'underlined', content: "Verification and Transparency" },
        { type: 'paragraph', content: "The logic and code of a smart contract are open and visible on the blockchain. Anyone can inspect the smart contract's code, ensuring transparency and verifying its functionality." },
        { type: 'underlined', content: "Cost-Efficient" },
        { type: 'paragraph', content: "Smart contracts eliminate the need for third-party intermediaries, reducing transaction costs and enhancing the efficiency of contract execution." },
        { type: 'underlined', content: "Use Cases" },
        { type: 'paragraph', content: "Smart contracts have numerous use cases, including decentralized finance (DeFi) applications, supply chain management, voting systems, crowdfunding, insurance, and more." },
]};

const totalContent = [blockchain1, blockchain2, blockchain3, blockchain4, blockchain5, blockchain6, blockchain7]
