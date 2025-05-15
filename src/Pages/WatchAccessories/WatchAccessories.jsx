import React, { useState } from 'react';

// image import
import festive_desk from "../../assets/festive_desk.webp";
import festive_mobile from "../../assets/festive_mobile.webp";
import watch from "../../assets/watch.webp";
import watch_1 from "../../assets/watch_1.png";

// component import
import AllAccessories from '../../Components/AllAccessories/AllAccessories';
import WatchWinder from "../../Components/WatchWinder/WatchWinder";
import WatchCase from '../../Components/WatchCase/WatchCase';
import LookBook from '../../Components/LookBook/LookBook';
import Reading from '../../Components/Reading/Reading';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

function WatchAccessories() {

    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="Watch Accessories" />
            </div>
            <section className=''>
                <div className=''>
                    <div className='relative w-full h-full flex items-end md:items-center'>
                        <img src={festive_desk} alt="" className='hidden md:block w-full' />
                        <img src={festive_mobile} alt="" className='block md:hidden w-full' />
                        <div className='absolute ml-10 mb-10 md:ml-24'>
                            <h1 className='text-white text-[9.3vw] md:text-[3.66vw] font-serif    leading-[10.5vw] md:leading-[4vw]'>Watch <br />Accessories</h1>
                        </div>
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <Breadcrumb goBackLink="Home" pageTitle="Watch Accessories" />
                </div>
                <div>
                    <div className='container mx-auto pt-[2.928vw] px-[6.149vw] pb-[3.66vw]'>
                        <div>
                            <h3 className='text-2xl lg:text-[1.757vw] font-serif mb-3'>Our Category</h3>
                        </div>
                        <div className=''>
                            <div className='flex items-center justify-between md:justify-start gap-[1.464vw]'>
                                {/* All Accessories */}
                                <button onClick={() => setActiveCategory("all")} className='flex flex-col'>
                                    <div className={`rounded-full w-[88px] h-[88px] flex justify-center items-center ${activeCategory === "all" ? "border border-[#CC8D4B]" : "hover:border border-transparent"}`}>
                                        <div className='bg-[#FAF1E7] w-[78px] h-[78px] flex justify-center items-center rounded-full mx-auto my-[5px]'>
                                            <span className=''>All</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-sm mt-[5px]'>All Accessories</p>
                                    </div>
                                </button>

                                {/* Watch Winder */}
                                <button onClick={() => setActiveCategory("watchWinder")} className='flex flex-col'>
                                    <div className={`hover:border rounded-full w-[88px] h-[88px] flex justify-center items-center ${activeCategory === "watchWinder" ? "border border-[#CC8D4B]" : "hover:border border-transparent"}`}>
                                        <div className='bg-[#FAF1E7] w-[78px] h-[78px] flex justify-center items-center rounded-full mx-auto my-[5px]'>
                                            <img src={watch} alt="" />
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-sm mt-[5px]'>Watch Winder</p>
                                    </div>
                                </button>

                                {/* Watch Case */}
                                <button onClick={() => setActiveCategory("watchCase")} className='flex flex-col'>
                                    <div className={`hover:border border-[#CC8D4B] rounded-full w-[88px] h-[88px] flex justify-center items-center ${activeCategory === "watchCase" ? "border border-[#CC8D4B]" : "hover:border border-transparent"}`}>
                                        <div className='bg-[#FAF1E7] w-[78px] h-[78px] flex justify-center items-center rounded-full mx-auto my-[5px]'>
                                            <img src={watch_1} alt="" />
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-sm mt-[5px]'>Watch Case</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:px-2.5 lg:px-[50px] xl:px-20'>
                    {activeCategory === "all" && <AllAccessories />}
                    {activeCategory === "watchWinder" && <WatchWinder />}
                    {activeCategory === "watchCase" && <WatchCase />}
                    <LookBook />
                </div>
                <Reading />
            </section>
        </>
    )
}

export default WatchAccessories