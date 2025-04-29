import React from 'react'

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './templates.css';

import { Mousewheel, Keyboard } from 'swiper/modules';

//  import components
import TempData from './TempData'
import TempItem from './TempItem';

function Templates() {
    return (
        <>
            <section className='mb-[60px] py-10 '>
                <div className='container mx-auto'>
                    <div className='mb-6 flex justify-between px-[37px] md:px-[55px]'>
                        <h1 className='text-[4.2vw] md:text-[1.757vw] font-serif'>Shop By Brand</h1>
                        <a href="..." className='uppercase underline text-xs md:text-[16px]'>View All</a>
                    </div>
                    <div className=''>
                        <Swiper
                            cssMode={true}
                            slidesPerView={4.5}
                            mousewheel={true}
                            keyboard={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.6,
                                    spaceBetween: 4,
                                },
                                375: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 20,
                                },
                                425: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.8,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 5,
                                },
                                1440: {
                                    slidesPerView: 5,
                                    spaceBetween: 5,
                                },
                            }}
                            modules={[Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            {TempData.map((cvalue, ind) => (
                                <SwiperSlide key={ind}>
                                    <TempItem
                                        id={cvalue.id}
                                        img={cvalue.img}
                                        name={cvalue.name}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Templates