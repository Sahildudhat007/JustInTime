import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// css import
import './ourcollections.css';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// react icon
import { MdArrowOutward } from "react-icons/md";

// image import
import our_collactiona1 from "../../assets/images/our_collactions1.webp";
import our_collactiona2 from "../../assets/images/our_collactions2.webp";
import our_collactiona3 from "../../assets/images/our_collactions3.webp";
import our_collactiona4 from "../../assets/images/our_collactions4.webp";

function OurCollections() {
    return (
        <>
            <section className='py-[35px]'>
                <div className='px-[37px] lg:px-[55px] mx-auto'>
                    <h2 className='text-[4.2vw] md:text-[1.757vw] font-serif mb-[18px]'>Our Curated Collections</h2>
                </div>
                <div className='pl-[37px] lg:pl-[55px] mx-auto'>
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            375: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            425: {
                                slidesPerView: 1.2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1.6,
                                spaceBetween: 24.95,
                            },
                            1024: {
                                slidesPerView: 2.4,
                                spaceBetween: 24.95,
                            },
                            1440: {
                                slidesPerView: 2.4,
                                spaceBetween: 24.95,
                            },
                        }}
                        cssMode={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <a href='...' className='relative w-full h-full'>
                                    <img src={our_collactiona1} alt="" className='w-full h-full' />
                                    <div className='bg-[#212121] w-[207px] md:w-[250px] h-[100px] md:h-[135px] rounded-lg flex justify-center items-center absolute right-0 bottom-0'>
                                        <p className='text-white text-[5.647vw] md:text-[2.2vw] font-serif text-left flex'>Swiss <br /> Automatic
                                            <span className='ml-5'><MdArrowOutward /></span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <a href='...' className='relative w-full h-full'>
                                    <img src={our_collactiona2} alt="" className='w-full h-full' />
                                    <div className='bg-[#212121] w-[207px] md:w-[250px] h-[100px] md:h-[135px] rounded-lg flex justify-center items-center absolute right-0 bottom-0'>
                                        <p className='text-white text-[5.647vw] md:text-[2.2vw] font-serif text-left flex'>Chronograph
                                            <span className='ml-5'><MdArrowOutward /></span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <a href='...' className='relative w-full h-full'>
                                    <img src={our_collactiona3} alt="" className='w-full h-full' />
                                    <div className='bg-[#212121] w-[207px] md:w-[250px] h-[100px] md:h-[135px] rounded-lg flex justify-center items-center absolute right-0 bottom-0'>
                                        <p className='text-white text-[5.647vw] md:text-[2.2vw] font-serif text-left flex'>Minimal <br /> Inspired
                                            <span className='ml-5'><MdArrowOutward /></span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <a href='...' className='relative w-full h-full'>
                                    <img src={our_collactiona4} alt="" className='w-full h-full' />
                                    <div className='bg-[#212121] w-[207px] md:w-[250px] h-[100px] md:h-[135px] rounded-lg flex justify-center items-center absolute right-0 bottom-0'>
                                        <p className='text-white text-[5.647vw] md:text-[2.2vw] font-serif text-left flex'>Vintage
                                            <span className='ml-5'><MdArrowOutward /></span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default OurCollections