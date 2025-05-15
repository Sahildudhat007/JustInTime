import React, { useRef } from 'react';

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import css
import './hero.css';

// image import
import desk_img1 from "../../assets/images/desk_img1.webp";
import mobile_img1 from "../../assets/images/mobile_img1.png";
import desk_video1 from "../../assets/video/desk_video1.mp4";
import mobile_video1 from "../../assets/video/mobile_video1.mp4";
import desk_video2 from "../../assets/video/desk_video2.mp4";
import mobile_video2 from "../../assets/video/mobile_video2.mp4";
import desk_video3 from "../../assets/video/desk_video3.mp4";
import mobile_video3 from "../../assets/video/mobile_video3.mp4";

function Hero() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 10 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <>
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='relative w-full h-screen'>
                            <div className='block md:hidden w-full h-full object-cover'>
                                <img src={mobile_img1} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='hidden md:block w-full h-full object-cover'>
                                <img src={desk_img1} alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute bottom-36 left-10 md:left-44'>
                                <button className='text-sm md:text-base bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-sm'>SHOPE NOW</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative w-full h-screen'>
                            <div className='block md:hidden w-full h-full'>
                                <video src={mobile_video1} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                            <div className='hidden md:block w-full h-full'>
                                <video src={desk_video1} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                            <div className='absolute bottom-40 left-8 md:left-24 text-white text-left'>
                                <h1 className='text-2xl md:text-5xl font-serif leading-tight'>Watches That <br /> Define You</h1>
                                <button className='bg-white text-black mt-4 px-4 py-2 rounded-md text-sm md:text-base'>Shop Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-screen'>
                            <div className='block md:hidden w-full h-full'>
                                <video src={mobile_video2} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                            <div className='hidden md:block w-full h-full'>
                                <video src={desk_video2} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-screen'>
                            <div className='block md:hidden w-full h-full'>
                                <video src={mobile_video3} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                            <div className='hidden md:block w-full h-full'>
                                <video src={desk_video3} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Hero