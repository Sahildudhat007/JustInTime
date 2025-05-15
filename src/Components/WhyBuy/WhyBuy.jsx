import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// image import
import white_logo from "../../assets/icons/white_logo.svg";
import bnpl from "../../assets/images/bnpl.avif";
import after from "../../assets/images/after.png";
import watches from "../../assets/images/watches.avif";

// css import
import "./whybuy.css";

const sliderData = [
    {
        img: bnpl,
        title: "50+ International Brands",
        description:
            "We've got watches for everyone, featuring renowned brands that blend style, craftmanship and innovation.",
    },
    {
        img: after,
        title: "Authorized Service Centre",
        description:
            "Our expert technicians ensure your watch remains in perfect condition, providing maintainence, repairs and support whenever you need it.",
    },
    {
        img: watches,
        title: "Easy Pay Options",
        description:
            "Simplifying payments with availability of wide range of options to choose from, select what suits you the best.",
    },
];

function WhyBuy() {
    return (
        <>
            <section className='mb-[90px] pt-10 pb-12 bg-black'>
                <div className='flex flex-col items-center justify-center mb-[30px] gap-1'>
                    <h2 className='text-3xl text-white font-serif'>Why Buy from</h2>
                    <img src={white_logo} alt="" className='w-[159px]' />
                </div>
                <div>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            type: "progressbar",
                        }}
                        className='swiper1 max-w-[95%] lg:max-w-[79.63%] mx-auto bg-black'
                    >
                        {sliderData.map((item, index) => (
                            <SwiperSlide key={index} className='swiper-slide1 bg-black'>
                                <div className='why-body flex flex-col items-center justify-center text-center gap-[15px] w-[44%] mt-5 mx-auto bg-black'>
                                    <div className='flex flex-col justify-center items-center w-[50px] lg:w-[63px] h-[50px] lg:h-[63px]'>
                                        <img src={item.img} alt="" className='' />
                                    </div>
                                    <h3 className='text-2xl text-white'>{item.title}</h3>
                                    <p className='text-sm lg:text-[16px] text-white opacity-70'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default WhyBuy