import React from 'react';

// image import
import gift_desck from "../../assets/video/gift_desck.mp4";

function GiftAdvice() {
    return (
        <>
            <section className='w-full max-w-[120rem] mx-auto px-5 md:px-[55px] pb-10 md:pb-[100px]'>
                <div className='md:flex w-full'>
                    <div className='w-full lg:w-[58.9%]'>
                        <div className='flex justify-center'>
                            <video className='w-full md:w-[305px] h-auto' muted autoPlay loop>
                                <source src={gift_desck} />
                            </video>
                        </div>
                    </div>

                    <div className='w-full lg:w-[40%] md:border border-[#CBCBCB] flex justify-center items-center'>
                        <div className='w-full'>
                            <div className='text-center'>
                                <p className='text-2xl lg:text-[1.757vw] md:w-70% font-serif relative mt-[22.490px] md:px-[70px] before:content-[""] before:absolute before:w-[18.42%] before:h-[1px] before:top-8 before:left-0 before:bg-[#E53E38] after:content-[""] after:absolute after:w-[18.42%] after:h-[1px] after:top-8 after:right-0 after:bg-[#E53E38]'>Need Gifting Advice? Let Us Guide You</p>
                                <p className='text-sm text-[#4A4A4A] w-[75%] lg:w-[290px] mx-auto mt-2'>Shop for someone special or yourself using our Watch Advisor. Try it out now.</p>
                                <div className='mb-5'>
                                    <a href="#" >
                                        <button className='text-xs px-[5.5%] py-[3.16%] mt-2.5 lg:mt-10 border border-[#CBCBCB] rounded-sm'>EXPLORE WATCH ADVISOR</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GiftAdvice