import React, { useRef } from 'react';

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import css
import './hero.css';

// image import
import desk_img1 from "../../assets/desk_img1.webp"
import mobile_img1 from "../../assets/mobile_img1.png"
import desk_vedio1 from "../../assets/desk_video1.mp4"
import mobile_vedio1 from "../../assets/mobile_video1.mp4"
import desk_vedio2 from "../../assets/desk_video2.mp4"
import mobile_vedio2 from "../../assets/mobile_video2.mp4"

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
                        <img src={desk_img1} alt="Slide 1" className='w-full h-full object-cover hidden md:block' />
                        <img src={mobile_img1} alt="Slide 1" className='w-full h-full object-cover block md:hidden' />
                        <div className='absolute bottom-36 left-10 md:left-44'>
                            <button className='text-sm md:text-base bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-sm'>SHOPE NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-screen'>
                        <video src={desk_vedio1} autoPlay loop muted playsInline className='hidden md:block'></video>
                        <video src={mobile_vedio1} autoPlay loop muted playsInline className='block md:hidden'></video>
                        <div className='absolute bottom-40 left-8 md:left-24 text-white text-left'>
                            <h1 className='text-2xl md:text-5xl font-serif leading-tight'>Watches That <br /> Define You</h1>
                            <button className='bg-white text-black mt-4 px-4 py-2 rounded-md text-sm md:text-base'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen'>
                        <video src={desk_vedio2} autoPlay loop muted playsInline className='w-full h-full object-cover hidden md:block'></video>
                        <video src={mobile_vedio2} autoPlay loop muted playsInline className='w-full h-full object-cover block md:hidden'></video>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero