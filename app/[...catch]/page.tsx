import React from 'react';

export default function Page() {
  return (
    <section className='container grid min-h-screen place-content-center mt-32 mb-32'>
      <div className='grid grid-cols-2 gap-14'>
        {/* Left Column */}
        <div>
          <h1 className='text-3xl font-semibold mb-14'>Transforming the Digital Investment Landscape</h1>
          <p className='text-base mb-14 leading-relaxed' style={{ marginBottom: '1.4em' }}>
            Welcome to Innox Marketplace, where we are thrilled to introduce a revolutionary digital asset. Creator tokens possess exciting new properties: they are unique, tradable, and usable across various applications. Similar to physical goods, you have complete freedom to do whatever you wish with them! Whether you want to support your favorite creators, gift tokens to fans worldwide, or trade them on an open marketplace, the possibilities are limitless. And the best part? Creator tokens are equipped with the full programmability of digital assets.
          </p>
          <p className='text-base mb-14 leading-relaxed' style={{ marginBottom: '1.4em' }}>
            Our unwavering dedication lies in building state-of-the-art tools that empower consumers to engage in free and seamless trading of creator tokens. We strive to provide creators with the means to launch groundbreaking digital works, pushing the boundaries of innovation. Additionally, we support developers in constructing immersive and integrated marketplaces, fostering vibrant ecosystems for these valuable assets.
          </p>
          <p className='text-base leading-relaxed' style={{ marginBottom: '1.4em' }}>
            By embracing these cutting-edge technologies and fostering an environment of innovation and collaboration, we aim to shape a future where creator tokens revolutionize the way we engage with digital content. At Innox, we are committed to building the infrastructure that empowers creators, investors, and enthusiasts to participate in a thriving and interconnected ecosystem of digital assets.
          </p>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-end">
          <img src="/assets/images/finalus.svg" alt="About Us" className="w-88 h-auto" />
        </div>
      </div>

      {/* Additional Paragraphs */}
      <div className="my-5 text-base leading-relaxed" style={{ lineHeight: '1.4', marginBottom: '1.4em' }}>
        <p>
          As trailblazers in the creator token space, we take immense pride in being the first marketplace for investing in content creators. Our platform provides a secure and vibrant environment where creators, fans, and investors converge to explore, engage with, and support the visionary talents shaping the content creation landscape.
        </p>
        <br/>
        <p>
          Join us on this remarkable journey as we usher in a new era of investment, growth, and collaboration. Together, we will unlock unprecedented opportunities for creators, redefine the relationship between fans and content creators, and revolutionize the way the world values and supports creative endeavors.
        </p>
        <br/>
        <p>
          Experience the transformative power of creator tokens in the open digital economy with Innox.
        </p>
      </div>

      {/* New Section: The story behind Innox */}
      <div className="my-40 text-base leading-relaxed">
        <div className="flex justify-center"> {/* Center the title */}
          <h1 className='text-3xl font-semibold mb-20'>The story behind Innox</h1><br />
        
        </div>
        <div className="grid grid-cols-2 gap-8 items-start"> {/* Separate the image and paragraphs */}
          {/* Left Column (Image) */}
          <div>
            <img src="/assets/images/varo.svg" alt="The story behind Innox" className="w-70 h-auto" />
            
          </div>
          {/* Right Column */}
          <div>
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              The concept behind Innox originated in 2021 during David’s brainstorming sessions for potential business ventures. From a young age, David desired to live life on his own terms and exert full control over his endeavors. However, it was not until early 2023 that he made the decision to pursue a complex yet captivating idea that would disrupt the entertainment and creator economy industry.
            </p>
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              Having been an avid consumer of YouTube videos since the age of 12, David spent his middle and high school years immersed in binge-watching various content creators. He observed the journeys of numerous creators, witnessing both their rise to fame and their setbacks. Throughout this time, he often thought about the opportunity of having invested in a creator with less than 50k subscribers, only to see them grow into a channel with millions of dedicated followers. Such an investment would have not only benefited the fans who invested in the token but also provided an additional income stream for the content creator through the utilization of tokens.
            </p>
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              Captivated by the immense potential and mutual benefits for creators and fans, David began meticulously planning and devising strategies to make this concept accessible and applicable to creators and users of diverse backgrounds and demographics. In July 2023, the beta version of Innox was launched, marking the birth of the first marketplace for creator tokens.
            </p>
            <p>
              Today, we take great pride in being the pioneers of this innovative and disruptive platform. Our primary objective is to revolutionize the entertainment landscape and provide unwavering support to creators throughout their journey.
            </p>
          </div>
        </div>
      </div>

          {/* New Section: Trusted by VC's such as */}
      <div className="my-30 text-base leading-relaxed">
        <div className="flex justify-center"> {/* Center the title */}
          <h1 className='text-3xl font-semibold mb-14'>Trusted by VCs such as</h1><br />
        </div>
        <div className="grid grid-cols-2 gap-8 items-center justify-center"> {/* Center the images and paragraphs */}
          {/* Left Column (Image) */}
          <div>
            <img src="/assets/images/vcs.png" alt="Trusted by VC's" className="w-70 h-auto" />
          </div>
          {/* Right Column */}
          <div>
            {/* Add paragraphs about being trusted by VC's */}
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              {/* Your text about being trusted by VC's */}
            </p>
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              {/* You can add more paragraphs here */}
            </p>
            <p className="mb-6" style={{ marginBottom: '1.4em' }}>
              {/* Add more content as needed */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
