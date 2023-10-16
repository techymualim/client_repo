/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

export default function DirectFunding() {
    return (
        <section className='container min-h-[fit-content] mb-24 section-mobile-3 px-0'>
            <h3 className='min-w-[282px] text-white text-center text-[30px] md:text-[36px] font-bold mb-8'>
                Supporting Creator's Journey
            </h3>
           
            <div className='flex flex-col md:flex-row gap-10 w-full justify-between'>
                <div className='w-full md:w-[100%] max-w-[650px] flex flex-col pt-6'>
                    <div className='flex flex-col text-center md:text-start mt-1 md:h-[350px] lg:h-[320px] xl:h-[280px] min-h-fit px-6 md:px-0'>
                        <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize mb-11'>Innox Billboard</p>
                        <p className='text-sm md:text-base font-medium text-white mb-1 mr-1'>
                        The Innox Billboard is your gateway to increased visibility, 
                        brand promotion, and audience engagement. It's a prime 
                        digital real estate positioned prominently on our homepage, 
                        offering creators a unique opportunity to showcase their 
                        profiles and grow their brands.
                        </p>

                        
                    </div>
                    <div className="flex justify-between md:justify-start mt-1">
                        <a href="https://dki9lqeawlk.typeform.com/to/CNMtjEUq" target="_blank" rel="noopener noreferrer" className='font-semibold whitespace-no-wrap'>
                            <Button className='font-semibold whitespace-no-wrap'>Apply</Button>
                        </a>
                        
                    </div>

                </div>
                <div className='w-full md:w-[100%] max-w-[650px] flex flex-col pt-6'>
                    <div className='flex flex-col text-center md:text-start mt-1 md:h-[350px] lg:h-[320px] xl:h-[280px] min-h-fit px-6 md:px-0'>
                        <p className=' text-white text-[15px] md:text-[18px] font-semibold capitalize mb-11'>Innox Marketplace</p>
                        <p className='text-sm md:text-base font-medium text-white mb-4'>
                        The Innox Marketplace is your portal to an expansive and vibrant digital landscape, where 
                        creators are prominently showcased based on their unique categories. 
                        It further allows creators to showcase their profiles & gain brand visibility. 
                        </p>
                        
                    </div>

                </div>
            </div>
        </section>
    );
}
