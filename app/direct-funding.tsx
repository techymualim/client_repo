/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

export default function DirectFunding() {
    return (
        <section className='container min-h-[fit-content] mb-24 section-mobile-3 px-0'>
            <h3 className='min-w-[282px] text-white text-center text-[30px] md:text-[36px] font-bold mb-8'>
                Direct Funding
            </h3>
            <p className='text-sm text-[#BEC2C9] font-normal mb-8 text-center'>(coming soon)</p>
            <div className='flex flex-col md:flex-row gap-10 w-full justify-between'>
                <div className='w-full md:w-[100%] max-w-[650px] flex flex-col pt-6'>
                    <div className='flex flex-col text-center md:text-start mt-1 md:h-[350px] lg:h-[320px] xl:h-[280px] min-h-fit px-6 md:px-0'>
                        <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize mb-11'>Channel funding</p>
                        <p className='text-sm md:text-base font-medium text-white mb-4 mr-1'>
                            We believe in the <span className='text-[#0081DE] font-semibold'>power of collaboration</span> and
                            recognize the immense talent and potential of content creators across various platforms. By investing in a content creator's channel, <span className='text-[#0081DE] font-semibold'>you become an integral
                                part of their growth story. </span>
                        </p>

                        <p className='text-sm md:text-base font-medium text-white mb-8'>
                            Your investment provides the <span className='text-[#0081DE] font-semibold'>necessary resources
                                for creators to enhance</span> their production quality, expand their audience reach, and explore
                            new creative avenues.
                        </p>
                    </div>
                    <div className="flex justify-between md:justify-start mt-auto">
                        <Button className='font-semibold whitespace-no-wrap'>Apply as creator</Button>
                        <Button className='button-custom font-semibold md:mx-8 whitespace-no-wrap'>Apply as investor</Button>
                    </div>
                </div>
                <div className='w-full md:w-[100%] max-w-[650px] flex flex-col pt-6'>
                    <div className='flex flex-col text-center md:text-start mt-1 md:h-[350px] lg:h-[320px] xl:h-[280px] min-h-fit px-6 md:px-0'>
                        <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize mb-11'>Video Crowdfunding</p>
                        <p className='text-sm md:text-base font-medium text-white mb-4'>
                            Investors(fans) have the opportunity to <span className='text-[#0081DE] font-semibold'>crowdfund video
                                projects from talented creators in exchange for a share of the revenue</span> generated by the videos
                            over a limited period of time.
                        </p>
                        <p className='text-sm md:text-base font-medium text-white mb-8'>
                            You become an essential partner in the creation process.
                            <span className='text-[#0081DE] font-semibold'> Your financial contributions </span>
                            provide creators with the necessary resources to produce high-quality videos, unleash
                            their artistic potential, and <span className='text-[#0081DE] font-semibold'>captivate audiences </span>
                            around the world.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start mt-auto">
                        <Button className='font-semibold'>Learn more</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
