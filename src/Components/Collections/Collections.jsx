import React from 'react';

// image import
import collection0 from "../../assets/images/collection0.webp";
import collection1 from "../../assets/images/collection1.webp";
import collection2 from "../../assets/images/collection2.webp";
import collection3 from "../../assets/images/collection3.webp";
import collection4 from "../../assets/images/collection4.webp";
import collection5 from "../../assets/images/collection5.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// css import
import "./lovedBrands.css";

const collectionData = [
    {
        id: 1,
        img: collection0,
        link: "...",
    },
    {
        id: 2,
        img: collection1,
        link: "...",
    },
    {
        id: 3,
        img: collection2,
        link: "...",
    },
    {
        id: 4,
        img: collection3,
        link: "...",
    },
    {
        id: 5,
        img: collection4,
        link: "...",
    },
    {
        id: 6,
        img: collection5,
        link: "...",
    },
];

function Collections() {
    return (
        <>
            <section>
                <div className='pb-[50px]'>
                    <div className='pl-9 md:pl-[50px] xl:pl-[139px] mb-6'>
                        <h2 className='text-white text-2xl md:text-[32px] mb-1.5 font-serif'>Trending Collections</h2>
                    </div>
                    <div className='pl-9 md:pl-[50px] pr-[17px] xl:pl-[139px]'>
                        <Swiper
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            modules={[Mousewheel, Keyboard]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 5,
                                },
                                375: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 10,
                                },
                                425: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.8,
                                    spaceBetween: 24.95,
                                },
                                1024: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 44.52,
                                },
                                1440: {
                                    slidesPerView: 4.3,
                                    spaceBetween: 44.52,
                                },
                            }}
                        >
                            {collectionData.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <a href={brand.link} className='bg-[#060d36]'>
                                        <img src={brand.img} autoPlay muted loop className='rounded-md'></img>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collections