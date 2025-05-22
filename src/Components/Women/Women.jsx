import React from 'react';

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
import womenWatch1 from "../../assets/images/womenWatch1.webp";
import womenWatch2 from "../../assets/images/womenWatch2.webp";
import womenWatch3 from "../../assets/images/womenWatch3.webp";
import womenWatch4 from "../../assets/images/womenWatch4.webp";
import womenWatch5 from "../../assets/images/womenWatch5.webp";
import womenWatch6 from "../../assets/images/womenWatch6.webp";
import womenWatch7 from "../../assets/images/womenWatch7.webp";
import womenWatch8 from "../../assets/images/womenWatch8.webp";
import womenWatch9 from "../../assets/images/womenWatch9.webp";
import womenWatch10 from "../../assets/images/womenWatch10.webp";

const womenWatchData = [
    {
        id: 1,
        img: womenWatch1,
        name: 'Briston',
        text: 'Clubmaster Classic Women Quartz Black Dial Chronograph Nato Watch 13140.SA.T.1.NK',
        price: "36,995",
        link: '...',
    },
    {
        id: 2,
        img: womenWatch2,
        name: 'Coach',
        text: 'Chelsea Women Quartz Purple Dial Analog Stainless Steel Watch 14504353',
        price: "22,130",
        link: '...',
    },
    {
        id: 3,
        img: womenWatch3,
        name: 'Versace',
        text: 'Women Quartz Green Dial Analog Stainless Steel Watch VE9CA0324',
        price: "68,670",
        link: '...',
    },
    {
        id: 4,
        img: womenWatch4,
        name: 'Tissot',
        text: 'PRX Women Quartz Nude Dial Analog Stainless Steel Watch T1370103350600',
        price: "47,500",
        link: '...',
    },
    {
        id: 5,
        img: womenWatch5,
        name: 'Briston',
        text: 'Clubmaster Chic Women Quartz Olive Green Dial Analog Nato Watch 21536.SA.UG.26.NOL',
        price: "22,995",
        link: '...',
    },
    {
        id: 6,
        img: womenWatch6,
        name: 'Briston',
        text: 'Clubmaster Chic Women Quartz Olive Green Dial Analog Nato Watch 21536.PRA.UG.26.NOL',
        price: "25,995",
        link: '...',
    },
    {
        id: 7,
        img: womenWatch7,
        name: 'Briston',
        text: 'Clubmaster Chic Women Quartz White Dial Analog Nato Watch 17536.SA.T.2.NT',
        price: "22,495",
        link: '...',
    },
    {
        id: 8,
        img: womenWatch8,
        name: 'Calvin Klein',
        text: 'Essentials Women Quartz Gold Dial Analog Stainless Steel Watch 25200195',
        price: "12,600",
        link: '...',
    },
    {
        id: 9,
        img: womenWatch9,
        name: 'GC',
        text: 'Specials Women Quartz Green Dial Analog Stainless Steel Watch Z34002L9MF',
        price: "45,995",
        link: '...',
    },
    {
        id: 10,
        img: womenWatch10,
        name: 'Guess',
        text: 'Bejeweled Women Quartz Champagne Dial Analog Recycled Steel Watch GW0668L2',
        price: "15,495",
        link: '...',
    },
];

function Women() {
    return (
        <>
            <section className='mb-[90px]'>
                <div>
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
                            {womenWatchData.map((trending) => (
                                <SwiperSlide key={trending.id}>
                                    <a href={trending.link}>
                                        <div className='group'>
                                            <div className='relative overflow-hidden rounded-lg'>
                                                <img src={trending.img} alt="" className='rounded-lg w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105' />
                                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                                    <img src={wishlist} alt="" />
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

export default Women