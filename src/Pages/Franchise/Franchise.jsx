import React, { useState } from 'react';

// components import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Contact from '../Contact/Contact';

// image import
import desk_franchise from "../../assets/images/desk_franchise.webp";
import mobile_franchise from "../../assets/images/mobile_franchise.webp";
import boutique_desk from "../../assets/images/boutique_desk.webp";
import boutique_mobile from "../../assets/images/boutique_mobile.avif";

function Franchise() {

    const [openContact, setOpenContact] = useState(false);

    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Franchise" />
            </div>
            <section>
                <div className='relative'>
                    <img src={desk_franchise} alt="" className='hidden md:block w-full h-auto' />
                    <img src={mobile_franchise} alt="" className='block md:hidden w-full h-auto' />
                    <div className='absolute left-[38px] md:left-[10.176vw] top-[52.57vw] md:top-[10.908vw]'>
                        <p className='text-white text-[40px] md:text-[3.66vw] font-serif'>Sell With Us</p>
                    </div>
                </div>
                <div className='px-[35px] xl:px-[231px] pt-[43px] xl:pt-[51px] pb-[61px] xl:pb-[72px]'>
                    <h2 className='text-2xl md:text-[3.659vw] leading-[7vw] md:leading-[3.927vw] xl:leading-[2.196vw] xl:text-[1.757vw] font-serif w-full md:w-[55vw] xl:w-[25.695vw] mb-[31px] xl:mb-[18px]'>An Opportunity To Own & Run Premium Watch Store</h2>

                    {/* contact us */}
                    <button onClick={() => setOpenContact(true)} className='py-[2%] xl:py-[1.5%] text-white text-[2.271vw] md:text-[1.6vw] xl:text-[1.025vw] bg-black w-[104px] md:w-[15%] xl:w-[16%] h-[45px] rounded-[5px] flex justify-center items-center cursor-pointer'>CONTACT US</button>
                    {/* popup */}
                    {openContact && (
                        <div className='fixed inset-0 bg-[#0000008e] bg-opacity-50 flex items-center justify-center z-50'>
                            <div className='relative w-[90%] md:w-[38%] h-[90%] overflow-y-auto rounded-[10pt] bg-white' style={{ scrollbarWidth: "none" }}>
                                <div className='flex items-center justify-between mt-[5%] px-[6%]'>
                                    <h2 className='text-[9.346vw] md:text-[2.928vw] text-[#363535] font-serif'>Sell with us</h2>
                                    <button onClick={() => setOpenContact(false)} className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="close">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <Contact />
                            </div>
                        </div>
                    )}
                </div>
                <div className='md:px-[35px] xl:px-[16.911vw]'>
                    <div className='bg-black md:rounded-[10px]'>
                        <p className='pt-[30px] md:pt-[2.269vw] pb-[2.269vw] md:pb-[2.269vw] ml-[5.564vw] text-2xl md:text-[2.196vw] text-white font-serif'>Reason To Partner With Us</p>
                        <div className='mx-[38px] md:mx-[5.564vw] pb-[3.66vw] grid grid-cols-1 md:grid-cols-2'>
                            <div className='flex items-center justify-start py-[21px] md:py-0 md:pr-[1.757vw] md:pb-[1.757vw] border-r border-b border-[#363636]'>
                                <div className='font-serif font-semibold text-white text-xl md:text-2xl opacity-[0.34]'>01</div>
                                <div className='ml-[42px] md:ml-[2.196vw]'>
                                    <p className='text-[16px] md:text-[1.464vw] text-[#E2A362] mb-[0.586vw] opacity-[1] font-serif font-semibold'>15+ Cities 75+ Stores</p>
                                    <p className='text-white opacity-[0.7]'>Across India & Growing.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start py-[21px] md:py-0 md:pr-[1.757vw] md:pb-[1.757vw] border-r border-b border-[#363636]'>
                                <div className='md:pl-10 font-serif font-semibold text-white text-xl md:text-2xl opacity-[0.34]'>02</div>
                                <div className='ml-[42px] md:ml-[2.196vw]'>
                                    <p className='text-[16px] md:text-[1.464vw] text-[#E2A362] mb-[0.586vw] opacity-[1] font-serif font-semibold'>10000+ Unique Watch Styles</p>
                                    <p className='text-white opacity-[0.7]'>Across all brands.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start py-[21px] md:py-0 md:pr-[1.757vw] md:pb-[1.757vw] border-r border-b border-[#363636]'>
                                <div className='font-serif font-semibold text-white text-xl md:text-2xl opacity-[0.34]'>03</div>
                                <div className='ml-[42px] md:ml-[2.196vw]'>
                                    <p className='text-[16px] md:text-[1.464vw] text-[#E2A362] mb-[0.586vw] opacity-[1] font-serif font-semibold'>50+ International</p>
                                    <p className='text-white opacity-[0.7]'>Watch Brands</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start py-[21px] md:py-0 md:pr-[1.757vw] md:pb-[1.757vw] border-r border-b border-[#363636]'>
                                <div className='md:pl-10 font-serif font-semibold text-white text-xl md:text-2xl opacity-[0.34]'>04</div>
                                <div className='ml-[42px] md:ml-[2.196vw]'>
                                    <p className='text-[16px] md:text-[1.464vw] text-[#E2A362] mb-[0.586vw] opacity-[1] font-serif font-semibold'>25+ years</p>
                                    <p className='text-white opacity-[0.7]'>Of Strong Relationship With All Watch Brands.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start py-[21px] md:py-0 md:pr-[1.757vw] md:pb-[1.757vw] border-r border-[#363636]'>
                                <div className='font-serif font-semibold text-white text-xl md:text-2xl opacity-[0.34]'>05</div>
                                <div className='ml-[42px] md:ml-[2.196vw]'>
                                    <p className='text-[16px] md:text-[1.464vw] text-[#E2A362] mb-[0.586vw] opacity-[1] font-serif font-semibold'>1 Out Of 5 Customers</p>
                                    <p className='text-white opacity-[0.7]'>Visit In Our Stores Again.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-[14.019vw] lg:py-[5.857vw] px-[6.308vw] lg:px-[16.911vw]'>
                    <div className='relative'>
                        <img src={boutique_desk} alt="" className='hidden lg:block' />
                        <img src={boutique_mobile} alt="" className='block lg:hidden w-full' />
                        <div className='absolute top-0 lg:top-[20%] left-[10%] lg:left-[17%] w-[80%] lg:w-[45%] mt-[43px] lg:mt-0'>
                            <h3 className='text-[5.607vw] lg:text-[1.757vw] font-serif text-white opacity-[1]'>Find Our Watch Boutiques</h3>
                            <p className='text-[3.271vw] lg:text-[1.171vw] text-white opacity-[0.7]'>Visit our stores in 15+ cities across India to experience the world of watches in person</p>
                            <button className='mt-[1.684vw] lg:mt-[1.684vw] px-[3.972vw] lg:px-[1.611vw] py-[2.57vw] lg:py-[0.878vw] bg-white w-[31vw] lg:w-[10.883vw] h-[9.346vw] lg:h-[2.928vw] text-[3.271vw] lg:text-[1.025vw] text-[#080101] rounded-lg flex justify-center items-center uppercase'>Locate Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Franchise