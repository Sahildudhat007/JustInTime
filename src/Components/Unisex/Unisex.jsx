import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// image import
import wishlist from "../../assets/images/wishlist.png";
import unisexWatch1 from "../../assets/images/unisexWatch1.webp";
import unisexWatch2 from "../../assets/images/unisexWatch2.webp";
import unisexWatch3 from "../../assets/images/unisexWatch3.webp";
import unisexWatch4 from "../../assets/images/unisexWatch4.webp";
import unisexWatch5 from "../../assets/images/unisexWatch5.webp";
import unisexWatch6 from "../../assets/images/unisexWatch6.webp";
import unisexWatch7 from "../../assets/images/unisexWatch7.webp";
import unisexWatch8 from "../../assets/images/unisexWatch8.webp";
import unisexWatch9 from "../../assets/images/unisexWatch9.webp";
import unisexWatch10 from "../../assets/images/unisexWatch10.webp";

const unisexWatchData = [
    {
        id: 1,
        img: unisexWatch1,
        name: 'Rado',
        text: 'Diastar Unisex Automatic Black Dial Analog Original X Tej Chauhan Special Edition Watch R12165155',
        price: "203,400",
        link: '...',
    },
    {
        id: 2,
        img: unisexWatch2,
        name: 'Rado',
        text: 'True Square Thinline Unisex Quartz Black Dial Analog Ceramic Watch R27054162',
        price: "188,400",
        link: '...',
    },
    {
        id: 3,
        img: unisexWatch3,
        name: 'Rado',
        text: 'True Square Thinline Unisex Quartz Black Dial Analog Ceramic Watch R27054152',
        price: "188,400",
        link: '...',
    },
    {
        id: 4,
        img: unisexWatch4,
        name: 'Rado',
        text: 'Centrix Unisex Automatic Brown Mother Of Pearl Dial Analog Ceramic Watch R30028902',
        price: "310,200",
        link: '...',
    },
    {
        id: 5,
        img: unisexWatch5,
        name: 'Rado',
        text: 'True Round Unisex Automatic Black Dial Analog Ceramic Watch R27107172',
        price: "243,800",
        link: '...',
    },
    {
        id: 6,
        img: unisexWatch6,
        name: 'Rado',
        text: 'True Round Unisex Automatic White Dial Analog Ceramic Watch R27115012',
        price: "243,800",
        link: '...',
    },
    {
        id: 7,
        img: unisexWatch7,
        name: 'Movado',
        text: 'Bold Quest Unisex Automatic Blue Dial Analog Stainless Steel Watch 3600940',
        price: "79,605",
        link: '...',
    },
    {
        id: 8,
        img: unisexWatch8,
        name: 'Rado',
        text: 'True Square X Kunihiko Morinaga Special Edition Unisex Automatic Grey Dial Analog Ceramic Watch R27086172',
        price: "265,900",
        link: '...',
    },
    {
        id: 9,
        img: unisexWatch9,
        name: 'Fossil',
        text: 'His and Hers Couple Quartz Green Dial Multi- Function Stainless Steel Watch BQ2754SET',
        price: "26,995",
        link: '...',
    },
    {
        id: 10,
        img: unisexWatch10,
        name: 'Fossil',
        text: 'His and Her Couple Quartz Black Dial Multi - Function Stainless Steel Watch BQ2645SET',
        price: "26,995",
        link: '...',
    },
];

function Unisex() {
    return (
        <>
            <section className='mb-[90px]'>
                <div className=''>
                    <div className='pl-[36px] lg:pl-[50px] xl:pl-[141px]'>
                        <Swiper
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            modules={[Mousewheel, Keyboard]}
                            className="mySwiper"
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
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 24.95,
                                },
                                1024: {
                                    slidesPerView: 3.4,
                                    spaceBetween: 24.95,
                                },
                                1440: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 24.95,
                                },
                            }}
                        >
                            {unisexWatchData.map((trending) => (
                                <SwiperSlide key={trending.id}>
                                    <a href={trending.link}>
                                        <div className='group'>
                                            <div className='relative overflow-hidden rounded-lg'>
                                                <img src={trending.img} alt="" className='rounded-lg w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105' />
                                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                                    <img src={wishlist} alt="" className='' />
                                                </div>
                                            </div>
                                            <div className='p-4 pt-[18px] group'>
                                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-semibold text-left'>{trending.name}</p>
                                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{trending.text}</h3>
                                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {trending.price}</p>
                                            </div>
                                        </div>
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

export default Unisex