import React, { useState } from 'react';

// image import
import gifting_banner_desk from "../../assets/giting_banner_desk.webp";
import gifting_banner_mobile from "../../assets/gifting_banner_mobile.webp";
import watch_her from "../../assets/watch_her.webp";
import watch_her_mobile from "../../assets/watch_her_mobile.avif";
import watch_him from "../../assets/watch_him.webp";
import watch_him_mobile from "../../assets/watch_him_mobile.jpg";
import watch_advisor from "../../assets/watch_advisor.webp";
import mask_group from "../../assets/mask_group.webp";
import mask_group_mobile from "../../assets/mask_group_mobile.avif";

// react icon
import { MdArrowOutward } from "react-icons/md";

// component import
import OurCollections from '../../Components/OurCollections/OurCollections';
import WatchBrands from '../../Components/WatchBrands/WatchBrands';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

function Gifting() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Gifting" />
            </div>
            <section>
                <div>
                    <div className='relative w-full h-full'>
                        <img src={gifting_banner_desk} alt="" className='hidden md:block' />
                        <img src={gifting_banner_mobile} alt="" className='block md:hidden' />
                        <div className='absolute left-[10vw] bottom-[3vw]'>
                            <h1 className='text-white text-[9.3vw] md:text-[3.66vw] leading-[10.5vw] md:leading-[4vw] w-[80%] font-serif'>Festive Gifts</h1>
                        </div>
                    </div>
                    <div className='block lg:hidden'>
                        <Breadcrumb goBackLink="Home" pageTitle="Gifting" />
                    </div>
                </div>

                <div className='container mx-auto px-0 md:px-[9px] xl:px-[55px] pt-[60px] xl:pt-[70px] pb-[30px] xl:pb-[35px]'>
                    <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[18.5%] gap-y-[70px] md:gap-y-0'>
                        <div>
                            <a href="#">
                                <div className='relative w-full h-full'>
                                    <img src={watch_her} alt="" className='hidden md:block' />
                                    <img src={watch_her_mobile} alt="" className='block md:hidden pr-[74px] md:pr-0' />
                                    <div className='absolute -bottom-6 md:bottom-3 right-5 md:-right-10 bg-black rounded-lg'>
                                        <p className='text-[5.607vw] md:text-[2.196vw] text-white px-5 my-7 font-serif flex items-center'>Watches For Her
                                            <MdArrowOutward className='ml-1' />
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className='pl-[74px] md:pl-0'>
                                <div className='relative w-full h-full'>
                                    <img src={watch_him} alt="" className='hidden md:block' />
                                    <img src={watch_him_mobile} alt="" className='block md:hidden pl-[74px] md:pl-0' />
                                    <div className='absolute -bottom-6 md:bottom-3 left-5 md:-left-10 bg-black rounded-lg'>
                                        <p className='text-[5.607vw] md:text-[2.196vw] text-white px-5 my-7 font-serif flex items-center'>Watches For Him
                                            <MdArrowOutward className='ml-1' />
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto md:px-[55px] py-[30px] md:py-[35px]'>
                    <h2 className='text-[4.2vw] md:text-[1.757vw] font-serif mb-[18px]'>Right Way To Find The Right Gift</h2>
                    <div className='flex flex-wrap items-center border border-[#CBCBCB]'>
                        <div className='w-full md:w-[58.9%]'>
                            <img src={watch_advisor} alt="" className='' />
                        </div>
                        <div className='w-full md:w-[40%] pb-[15px] md:pb-0 flex items-center text-center justify-center'>
                            <div>
                                <div>
                                    <span></span>
                                    <p className='text-2xl md:text-[1.757vw] leading-[30px] font-serif px-[70px]'>Explore Our Watch Advisor</p>
                                    <span></span>
                                </div>
                                <p className='text-sm text-[#4A4A4A] w-[75%] lg:w-[290px] mx-auto mt-2'>4 - Steps to find the right watch for yourself</p>
                                <button className='px-[5.5%] lg:px-[23px] py-[3.16%] lg:py-[13px] mt-2.5 lg:mt-10 text-sm text-[#060D36] border border-[#CBCBCB] rounded-md'>EXPLORE WATCH ADVISOR</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <OurCollections />
                    <WatchBrands />
                </div>

                <div className='container mx-auto px-[22px] xl:px-[130px] py-[35px] flex justify-center'>
                    <div className='flex items-center relative'>
                        <img src={mask_group} alt="" className='hidden md:block' />
                        <img src={mask_group_mobile} alt="" className='block md:hidden' />
                        <div className='px-[3.807vw] absolute'>
                            <h2 className='text-white text-[5.607vw] md:text-[2.927vw] xl:text-[1.757vw] font-serif'>Find Our Watch Boutiques</h2>
                            <p className='text-white my-[13px] text-[3.271vw] md:text-[1.707vw] xl:text-[1.025vw] opacity-70'>Visit our stores in 12 cities across India for an exclusive watch experience!</p>
                            <a href="..." className='text-white py-[1.81%] px-[1.41%] bg-[#363535] border border-white rounded-lg uppercase'>Locate Now</a>
                        </div>
                    </div>
                </div>

                <div className='py-[1%] px-[10%]'>
                    <p className='my-4 opacity-70 text-xs md:text-lg'>
                        Finding the perfect gift often comes down to thoughtfulness and utility, and a watch gift stands out as the ideal blend of both. Whether you're shopping for a loved one, a friend, or a colleague, gifts watches offer a timeless appeal, literally and figuratively. They transcend trends, making them an enduring choice for all occasions—birthdays, anniversaries, promotions, or festive celebrations. The options available today, such as Casio's Enticer Men's Chronograph Stainless Steel Watch A832 or Fossil's Men's Green Chronograph Stainless Steel Watch BQ2492, ensure something for every style and personality. A sleek chronograph watch is perfect for someone who values precision and functionality. At the same time, a classic analogue timepiece like the Guess Men's Green Dial Analog Stainless Steel Watch GW0265G8 adds sophistication to any outfit.
                    </p>
                    {isExpanded && (
                        <>
                            <p className='my-4 opacity-70 text-xs md:text-lg'>
                                The charm of gifting watches lies in their versatility. From the minimalist designs of Casio Vintage Unisex Digital Stainless Steel Watch D181 to the bold statement of the Fossil Male Green Analog Stainless Steel Watch BQ2493, these timepieces cater to diverse tastes. The Casio Vintage Rose Gold Digital Unisex Stainless Steel Watch D128 makes a chic yet practical gift for those who appreciate a modern twist. Watches also carry a symbolic message, signifying the value of time and your shared moments, making them a deeply personal gift.
                            </p>
                            <h2 className='my-[19px] text-xl opacity-70'>FAQs : </h2>
                            <ol className='my-4 pl-10 list-decimal'>
                                <li>
                                    <p className='my-[1em]'>
                                        <strong className='text-[#6F6F6F] text-xs md:text-lg'>Why are watches a good gift?</strong> <br />
                                        <span className='opacity-70 text-xs md:text-lg'>Watches combine practicality, style, and emotional value, making them ideal for any occasion.</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='my-[1em]'>
                                        <strong className='text-[#6F6F6F] text-xs md:text-lg'>Can I gift a watch for formal events?</strong> <br />
                                        <span className='opacity-70 text-xs md:text-lg'>Absolutely! A classy chronograph or analogue watch is perfect for formal occasions.</span>
                                    </p>
                                </li>
                                <li>
                                    <p className='my-[1em]'>
                                        <strong className='text-[#6F6F6F] text-xs md:text-lg'>What's the best budget-friendly watch gift?</strong> <br />
                                        <span className='opacity-70 text-xs md:text-lg'>Casio's Enticer or Vintage series offers stylish options under ₹6,000.</span>
                                    </p>
                                </li>
                            </ol>
                        </>
                    )}
                    <p
                        onClick={toggleReadMore}
                        className='text-[2.8vw] md:text-[1.8vw] lg:text-[1.025vw] uppercase cursor-pointer underline text-[#070101]'>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Gifting