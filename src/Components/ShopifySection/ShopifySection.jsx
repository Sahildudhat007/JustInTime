import React from 'react';

// image import
import JIT_Lux_Logo from "../../assets/JIT_Luxe_logo.webp";
import rado_luxe from "../../assets/rado_luxe.webp";
import longinese_luxe from "../../assets/longinese_luxe.webp";
import ferragamo from "../../assets/ferragamo.webp";

function ShopifySection() {
    return (
        <>
            <section className='bg-[#060d36]'>
                <div className='container mx-auto pt-10 md:pt-[30px] md:px-[60px] px-[37px] xl:pr-[115px] pb-[50px] md:pb-[60px] lg:pb-[61px] xl:pl-[97px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[62%] lg:w-[29%]'>
                            <img src={JIT_Lux_Logo} alt="" className='w-full h-auto object-cover' />
                        </div>
                        <p className='text-white w-full ld:w-[42%] mb-[38px] text-center opacity-[0.7]'>Seize every second with our luxurious offerings of select timepieces from the brands that you would be proud to own.</p>
                    </div>
                    <div className='md:flex md:flex-nowrap space-y-9 md:gap-[20px] xl:gap-[46px]'>
                        <div className='relative'>
                            <a href="...">
                                <img src={rado_luxe} alt="" className='w-full h-auto rounded-lg' />
                            </a>
                            <a href="...">
                                <div className='relative -mt-[35px] -mr-[35px] md:mr-0'>
                                    <div className='w-[75.4%] mx-auto bg-[#2A2E45] rounded-lg'>
                                        <div className='m-auto w-full py-[25px] pr-[17px] pl-[25px]'>
                                            <p className='text-2xl md:text-[1.757vw] text-white mb-2.5 font-serif'>The World of <br />Rado</p>
                                            <p className='text-sm text-white opacity-70 underline uppercase'>View Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='relative'>
                            <a href="...">
                                <img src={longinese_luxe} alt="" className='w-full h-auto rounded-lg' />
                            </a>
                            <a href="...">
                                <div className='relative -mt-[35px] -ml-[34px] md:ml-0'>
                                    <div className='w-[75.4%] mx-auto bg-[#2A2E45] rounded-lg'>
                                        <div className='m-auto w-full py-[25px] pr-[17px] pl-[25px]'>
                                            <p className='text-2xl md:text-[1.757vw] text-white mb-2.5 font-serif'>All About <br />Longines</p>
                                            <p className='text-sm text-white opacity-70 underline uppercase'>View Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='relative'>
                            <a href="...">
                                <img src={ferragamo} alt="" className='w-full h-auto rounded-lg' />
                            </a>
                            <a href="...">
                                <div className='relative -mt-[35px] -mr-[35px] md:mr-0'>
                                    <div className='w-[75.4%] mx-auto bg-[#2A2E45] rounded-lg'>
                                        <div className='m-auto w-full py-[25px] pr-[17px] pl-[25px]'>
                                            <p className='text-2xl md:text-[1.757vw] text-white mb-2.5 font-serif'>Ferragamo <br />Flair</p>
                                            <p className='text-sm text-white opacity-70 underline uppercase'>View Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopifySection