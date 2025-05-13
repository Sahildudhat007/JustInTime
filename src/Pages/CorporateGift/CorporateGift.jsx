import React, { useState } from 'react';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Contact from '../Contact/Contact';

// image import
import corporategift_desk from "../../assets/corporategift_desk.webp";
import corporategift_mobile from "../../assets/corporategift_mobile.webp";
import embossing from "../../assets/embossing.avif";
import embossing_1 from "../../assets/embossing_1.webp";
import embossing_2 from "../../assets/embossing_2.webp";
import embossing_3 from "../../assets/embossing_3.webp";
import gift_card from "../../assets/gift_card.webp";

function CorporateGift() {

    const [openContact, setOpenContact] = useState(false);

    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Corporate Gifting" />
            </div>
            <section className=''>
                <div className='relative'>
                    <img src={corporategift_desk} alt="" className='hidden md:block w-full h-auto' />
                    <img src={corporategift_mobile} alt="" className='block md:hidden w-full h-auto' />
                    <div className='absolute bottom-[5px] md:bottom-[3vw] left-[10vw]'>
                        <h1 className='text-white md:w-[80%] text-[9.3vw] md:text-[3.66vw] leading-[10.5vw] md:leading-[4vw] mt-[31px] font-serif'>Gift Exquisite Timepieces - Corporate Gifting</h1>
                    </div>
                </div>

                <div className='px-[35px] xl:px-[230px] py-[30px] xl:py-[35px]'>
                    <h2 className='font-serif text-[5.607vw] md:text-[3.659vw] xl:text-[1.757vw] my-[18px]'>Redefining Art Of Gifting.</h2>
                    <p className='text-[3.271vw] md:text-[1.951vw] xl:text-[1.171vw] leading-[4.673vw] md:leading-[2.951vw] xl:leading-[1.757vw] my-3.5'>Corporate gifting has now become an inevitable part of the corporate culture. No doubt a meaningful corporate gift is one of the best ways to build a good rapport with the affiliates of the company or boost employee morale. Today Just In Time, India's Leading Chain of Global Watch Brands brings to you a mélange of international watches from around the world be it a Japanese watch or a Swiss or Italian we have it all. From innovative designs and quality to personalized services.</p>

                    {/* contact us */}
                    <button onClick={() => setOpenContact(true)} className='py-[4.2%] md:py-[2%] xl:py-[1.5%] bg-black text-white w-[29%] md:w-[15.5%] xl:w-[16%] rounded-md flex justify-center items-center text-[2.804vw] md:text-[1.463vw] xl:text-[1.025vw] cursor-pointer'>CONTACT US</button>
                    {/* popup */}
                    {openContact && (
                        <div className='fixed inset-0 bg-[#0000008e] bg-opacity-50 flex items-center justify-center z-50'>
                            <div className='relative w-[90%] md:w-[38%] h-[90%] overflow-y-auto rounded-[10pt] bg-white' style={{ scrollbarWidth: "none" }}>
                                <div className='flex items-center justify-between mt-[5%] px-[6%]'>
                                    <h2 className='text-[9.346vw] md:text-[2.928vw] text-[#363535] font-serif'>Contact Us</h2>
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

                <div className='md:px-[32px] xl:px-[200px] py-[30px] xl:py-[35px]'>
                    <div className='py-[2.8%] bg-[#F0E7DA] md:rounded-[10px]'>
                        <div className='px-[5%]'>
                            <div>
                                <h2 className='text-[#363535] text-[5.607vw] md:text-[2.927vw] lg:text-[1.757vw] font-serif'>Customisations</h2>
                                <p className='py-3.5 text-[#363535] opacity-[0.7]'>Apart from the world class brands we can also customise watches for you. One can customise in the following ways:</p>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-[3vw] md:gap-[7vw] xl:gap-[4vw]'>
                                <div className='text-center'>
                                    <div className='rounded-full p-[5px] mx-auto w-[28.972vw] md:w-[15vw] xl:w-[10.469vw] h-[28.972vw] md:h-[15vw] xl:h-[10.542vw] border border-dashed flex justify-center'>
                                        <img src={embossing} alt="" className='rounded-full' />
                                    </div>
                                    <p className='w-[90%] mx-auto text-sm md:text-[1.707vw] xl:text-[1.171vw] text-[#363535] text-center mt-[15px]'>Engraving on back Cover</p>
                                </div>
                                <div className='text-center'>
                                    <div className='rounded-full p-[5px] mx-auto w-[28.972vw] md:w-[15vw] xl:w-[10.469vw] h-[28.972vw] md:h-[15vw] xl:h-[10.542vw] border border-dashed'>
                                        <img src={embossing_1} alt="" className='rounded-full' />
                                    </div>
                                    <p className='w-[90%] mx-auto text-sm md:text-[1.707vw] xl:text-[1.171vw] text-[#363535] text-center mt-[15px]'>Special Packaging Options available</p>
                                </div>
                                <div className='text-center'>
                                    <div className='rounded-full p-[5px] mx-auto w-[28.972vw] md:w-[15vw] xl:w-[10.469vw] h-[28.972vw] md:h-[15vw] xl:h-[10.542vw] border border-dashed'>
                                        <img src={embossing_2} alt="" className='rounded-full' />
                                    </div>
                                    <p className='w-[90%] mx-auto text-sm md:text-[1.707vw] xl:text-[1.171vw] text-[#363535] text-center mt-[15px]'>Embossing On Strap</p>
                                </div>
                                <div className='text-center'>
                                    <div className='rounded-full p-[5px] mx-auto w-[28.972vw] md:w-[15vw] xl:w-[10.469vw] h-[28.972vw] md:h-[15vw] xl:h-[10.542vw] border border-dashed'>
                                        <img src={embossing_3} alt="" className='rounded-full' />
                                    </div>
                                    <p className='w-[90%] mx-auto text-sm md:text-[1.707vw] xl:text-[1.171vw] text-[#363535] text-center mt-[15px]'>Your Brand's Logo on Dial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-[35px] xl:px-[230px] py-[30px] xl:py-[35px]'>
                    <div className='flex flex-wrap md:flex-nowrap items-center gap-[3.660vw] w-full'>
                        <div className='flex-[48%]'>
                            <h2 className='text-[5.607vw] md:text-[3.659vw] xl:text-[1.757vw] my-[18px] font-serif'>Gift A Card</h2>
                            <p className='my-3.5 text-[3.271vw] md:text-[1.951vw] xl:text-[1.171vw] text-[#363535]'>Haven't selected a watch for gift yet? We've got you covered. Gift your clients or employees with our customized gift card. We ensure you to find the perfect gift for every occasion with a diverse choice of 40+ global brands in our portfolio, all accessible under one card.</p>
                            <p className='my-3.5 text-[3.271vw] md:text-[1.951vw] xl:text-[1.171vw] text-[#363535]'>For further details please write to us on: <span><a href="#" className='text-blue-700 underline'> customercare@justintime.in </a></span> or contact us on whatsapp</p>
                        </div>
                        <div className='flex-[52%]'>
                            <img src={gift_card} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CorporateGift