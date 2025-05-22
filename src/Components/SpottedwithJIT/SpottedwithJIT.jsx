import React, { useRef, useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// image import
import spotted1 from "../../assets/video/spotted1.mp4";
import spotted2 from "../../assets/video/spotted2.mp4";
import spotted3 from "../../assets/video/spotted3.mp4";

// css import
import './spottedwithJIT.css';

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
                <div className='text-center'>
                    <h2 className='text-3xl mb-[18px] font-serif'>Spotted with JIT</h2>
                </div>

                <div className='xl:px-[50px]'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        centeredSlides
                        loop
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1.8,
                            },
                            425: {
                                slidesPerView: 2.1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 3,
                            },
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                        className=""
                    >
                        {mediaItems.map((slide, index) => (
                            <SwiperSlide key={index} className=''>
                                <div className={`flex items-center justify-center w-full h-full transition-all duration-300 rounded-xl overflow-hidden shadow-lg bg-black ${index === activeIndex ? 'scale-100 h-[500px]' : 'scale-75 h-full'}`}>
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
            </section>
        </>
    )
}

export default SpottedwithJIT