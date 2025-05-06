import React, { useRef, useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// css import
import "./watchoutinspo.css";

// image import
import outinspo1 from "../../assets/outinspo1.mp4";
import outinspo2 from "../../assets/outinspo2.mp4";
import outinspo3 from "../../assets/outinspo3.mp4";
import outinspo4 from "../../assets/outinspo4.mp4";
import outinspo5 from "../../assets/outinspo5.mp4";
import outinspo6 from "../../assets/outinspo6.mp4";
import outinspo7 from "../../assets/outinspo7.mp4";

function WatchOutinspo() {

    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const mediaItems = [
        {
            type: 'video',
            video: outinspo1,
        },
        {
            type: 'video',
            video: outinspo2,
        },
        {
            type: 'video',
            video: outinspo3,
        },
        {
            type: 'video',
            video: outinspo4,
        },
        {
            type: 'video',
            video: outinspo5,
        },
        {
            type: 'video',
            video: outinspo6,
        },
        {
            type: 'video',
            video: outinspo7,
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
            <section>
                <div className='text-center'>
                    <div className='w-[50vw] md:w-[25vw] overflow-hidden whitespace-nowrap m-auto flex'>
                        <h2 className='inline-flex text-3xl italic text-[#080101] mb-[18px]' style={{ animation: "marquee 7s linear infinite" }}>
                            <span className='pr-[7rem]'><strong>#WatchOutForInspo</strong></span>
                            <span><strong>#WatchOutForInspo</strong></span>
                        </h2>
                    </div>
                    <div className='w-[100%] md:w-[70%] lg:w-[70%] h-[80vh] mx-auto'>
                        <Swiper
                            modules={[Navigation]}
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
                                    slidesPerView: 1,
                                    spaceBetween: 1,
                                },
                                425: {
                                    slidesPerView: 2,
                                    spaceBetween: 1,
                                },
                                768: {
                                    slidesPerView: 3,
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
                            className="px-[30rem]"
                            style={{}}
                        >
                            {mediaItems.map((item, index) => (
                                <SwiperSlide key={index} className=''>
                                    <div
                                        className={`h-full transition-all duration-300 rounded-xl overflow-hidden shadow-lg bg-black ${index === activeIndex ? 'scale-90 h-[100px]' : 'scale-75 h-[250px]'}`}
                                    >
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            src={item.video}
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

export default WatchOutinspo