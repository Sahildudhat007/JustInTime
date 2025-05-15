import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay } from 'swiper/modules';

// image impport
import watch_pouch from "../../assets/images/watch_pouch.webp"
import watch_winder1 from "../../assets/images/watch_winder1.webp"
import watch_winder2 from "../../assets/images/watch_winder2.webp"
import watch_winder3 from "../../assets/images/watch_winder3.webp"
import watch_cases from "../../assets/images/watch_cases.webp"

function LookBook() {
    return (
        <>
            <section className='pt-5 pb-[45px]'>
                <div>
                    <h2 className='text-2xl pl-2.5 md:pl-[40.5px] lg:pl-0 lg:text-[1.757vw] mb-4 text-[#070108] font-serif'>The Accessories Lookbook</h2>
                </div>
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        375: {
                            slidesPerView: 1.1,
                            spaceBetween: 10,
                        },
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24.95,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24.95,
                        },
                        1440: {
                            slidesPerView: 3.3,
                            spaceBetween: 24.95,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper swiper3"
                >
                    <SwiperSlide className='swiper-slide3'>
                        <div className='relative'>
                            <img src={watch_pouch} alt="" className='rounded-lg' />
                            <div className='absolute bottom-[27px] left-[40px] block text-left'>
                                <h2 className='w-[75%] text-white font-serif text-xl my-[9px]'>Watch Pouch</h2>
                                <a href="#" className='py-3.5 px-[14.3px] text-white text-[12px] uppercase rounded-lg border border-white bg-[#e1e1e14d]'>Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide3'>
                        <div className='relative flex justify-start'>
                            <img src={watch_winder1} alt="" className='rounded-lg' />
                            <div className='absolute bottom-[27px] left-[40px] block text-left'>
                                <h2 className='w-[75%] text-white font-serif text-xl my-[9px]'>Watch Winder</h2>
                                <a href="#" className='py-3.5 px-[14.3px] text-white text-[12px] uppercase rounded-lg border border-white bg-[#e1e1e14d]'>Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide3'>
                        <div className='relative'>
                            <img src={watch_winder2} alt="" className='rounded-lg' />
                            <div className='absolute bottom-[27px] left-[40px] block text-left'>
                                <h2 className='w-[75%] text-white font-serif text-xl my-[9px]'>Watch Winder</h2>
                                <a href="#" className='py-3.5 px-[14.3px] text-white text-[12px] uppercase rounded-lg border border-white bg-[#e1e1e14d]'>Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide3'>
                        <div className='relative'>
                            <img src={watch_winder3} alt="" className='rounded-lg' />
                            <div className='absolute bottom-[27px] left-[40px] block text-left'>
                                <h2 className='w-[75%] text-white font-serif text-xl my-[9px]'>Watch Winder</h2>
                                <a href="#" className='py-3.5 px-[14.3px] text-white text-[12px] uppercase rounded-lg border border-white bg-[#e1e1e14d]'>Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide3'>
                        <div className='relative'>
                            <img src={watch_cases} alt="" className='rounded-lg' />
                            <div className='absolute bottom-[27px] left-[40px] block text-left'>
                                <h2 className='w-[75%] text-white font-serif text-xl my-[9px]'>6 Watch Case</h2>
                                <a href="#" className='py-3.5 px-[14.3px] text-white text-[12px] uppercase rounded-lg border border-white bg-[#e1e1e14d]'>Shop Now</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default LookBook