import React, { useRef, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// image import
import spotted1 from "../../assets/spotted1.mp4"
import spotted2 from "../../assets/spotted2.mp4"
import spotted3 from "../../assets/spotted3.mp4"

// css import
import './spottedwithJIT.css'

function SpottedwithJIT() {

    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const mediaItems = [
        {
            type: 'video',
            src: spotted1,
            title: 'Ananya Pandey for Just In Time',
        },
        {
            type: 'video',
            src: spotted2,
            title: 'G-SHOCK X SHUBMAN GILL',
        },
        {
            type: 'video',
            src: spotted3,
            title: "Just In Time X Shah Rukh Khan's Jawan"
        },
        {
            type: 'video',
            src: spotted1,
            title: 'Ananya Pandey for Just In Time',
        },
        {
            type: 'video',
            src: spotted2,
            title: 'G-SHOCK X SHUBMAN GILL',
        },
        {
            type: 'video',
            src: spotted3,
            title: "Just In Time X Shah Rukh Khan's Jawan"
        },
    ];

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setActiveIndex(newIndex);

        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === newIndex) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }

    useEffect(() => {
        videoRefs.current[0]?.play().catch(() => { });
    }, []);

    return (
        <>
            <section className='mb-[90px]'>
                <div>
                    <div className='text-center'>
                        <h2 className='text-3xl mb-[18px] font-serif'>Spotted with JIT</h2>
                    </div>
                    <div className=''>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            centeredSlides
                            loop
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                375: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 1,
                                },
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 1,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 1,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 1,
                                },
                            }}
                            onSlideChange={handleSlideChange}
                            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                            className=""
                        >
                            {mediaItems.map((slide, index) => (
                                <SwiperSlide key={index} className=''>
                                    <div
                                        className={`flex items-center justify-center h-full transition-all duration-300 rounded-xl overflow-hidden shadow-lg bg-black ${index === activeIndex ? 'scale-100 h-[500px]' : 'scale-75 h-[250px]'}`}
                                    >
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            src={slide.src}
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpottedwithJIT