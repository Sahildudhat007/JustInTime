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
import menWatch1 from "../../assets/images/menWatch1.webp";
import menWatch2 from "../../assets/images/menWatch2.webp";
import menWatch3 from "../../assets/images/menWatch3.webp";
import menWatch4 from "../../assets/images/menWatch4.webp";
import menWatch5 from "../../assets/images/menWatch5.webp";
import menWatch6 from "../../assets/images/menWatch6.webp";
import menWatch7 from "../../assets/images/menWatch7.webp";
import menWatch8 from "../../assets/images/menWatch8.webp";
import menWatch9 from "../../assets/images/menWatch9.webp";
import menWatch10 from "../../assets/images/menWatch10.webp";

const menWatchData = [
    {
        id: 1,
        img: menWatch1,
        name: 'Tessot',
        text: 'Supersport NBA Special Edition Men Quartz Black Dial Chronograph Leather Watch T1256173706700',
        price: "45,500",
        link: '...',
    },
    {
        id: 2,
        img: menWatch2,
        name: 'Movado',
        text: 'Bold Men Quartz Blue Dial Chronograph Leather Watch 3600630',
        price: "52,125",
        link: '...',
    },
    {
        id: 3,
        img: menWatch3,
        name: 'Briston',
        text: 'Clubmaster Iconic Men Automatic White Dial Analog leather Watch 18740.SA.TI.2.LVBR',
        price: "61,495",
        link: '...',
    },
    {
        id: 4,
        img: menWatch4,
        name: 'Coach',
        text: 'Charter Men Automatic Black Dial Analog Stainless Steel Watch 14602712',
        price: "26,250",
        link: '...',
    },
    {
        id: 5,
        img: menWatch5,
        name: 'Roamer',
        text: 'Montalbano Men Automatic Silver Dial Analog Stainless Steel Watch 996983 47 15 20',
        price: "84,950",
        link: '...',
    },
    {
        id: 6,
        img: menWatch6,
        name: 'Briston',
        text: 'Clubmaster Sport Men Quartz Ice Blue Dial Chronograph Nato Watch 20142.SA.TS.25.NIB',
        price: "39,995",
        link: '...',
    },
    {
        id: 7,
        img: menWatch7,
        name: 'Briston',
        text: 'Clubmaster Sport Men Quartz Matt Black Dial Chronograph Nato Watch 18142.PBAM.BS.4.NB',
        price: "43,495",
        link: '...',
    },
    {
        id: 8,
        img: menWatch8,
        name: 'Briston',
        text: 'Clubmaster Iconic Men Automatic Black Dial Analog leather Watch 18740.SA.TI.1.LVC',
        price: "61,495",
        link: '...',
    },
    {
        id: 9,
        img: menWatch9,
        name: 'Briston',
        text: 'Clubmaster Sport Men Quartz Matt Black Dial Chronograph Nato Watch 18142.PBAM.TSS.5.NK',
        price: "43,495",
        link: '...',
    },
    {
        id: 10,
        img: menWatch10,
        name: 'Briston',
        text: 'Clubmaster Classic Men Quartz Black Dial Chronograph Nato Watch 17142.SA.TS.1.NK',
        price: "39,995",
        link: '...',
    },
];

function Men() {
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
                            {menWatchData.map((trending) => (
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

export default Men