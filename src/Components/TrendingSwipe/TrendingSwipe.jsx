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
import wishlist from "../../assets/wishlist.png";
import trending1 from "../../assets/trending1.webp";
import trending2 from "../../assets/trending2.webp";
import trending3 from "../../assets/trending3.webp";
import trending4 from "../../assets/trending4.webp";
import trending5 from "../../assets/trending5.webp";
import trending6 from "../../assets/trending6.webp";
import trending7 from "../../assets/trending7.webp";
import trending8 from "../../assets/trending8.webp";
import trending9 from "../../assets/trending9.webp";
import trending10 from "../../assets/trending10.webp";
import trending11 from "../../assets/trending11.webp";
import trending12 from "../../assets/trending12.webp";

const trendingData = [
    {
        id: 1,
        img: trending1,
        name: 'Calvin Klein',
        text: 'Women Quartz Green Dial Analog Stainless Steel Watch 25100068',
        price: "16,800",
        link: '...',
    },
    {
        id: 2,
        img: trending2,
        name: 'Fossil',
        text: 'Fenmore Couple Quartz Blue Dial Multi- Function Stainless Steel Watch BQ2900SET',
        price: "26,995",
        link: '...',
    },
    {
        id: 3,
        img: trending3,
        name: 'Casio',
        text: 'G - Shock Men Quartz Grey Dial Analog - Digital Resin Watch GR - B300 - 8A2DR G1570',
        price: "22,995",
        link: '...',
    },
    {
        id: 4,
        img: trending4,
        name: 'Seiko',
        text: 'Dress Men Quartz Blue Dial Chronograph Stainless Steel Watch SSB453P1',
        price: "35,000",
        link: '...',
    },
    {
        id: 5,
        img: trending5,
        name: 'Guess',
        text: 'Dress Men Quartz Grey Dial Multi - Function Leather Watch GW0793G3',
        price: "15,995",
        link: '...',
    },
    {
        id: 6,
        img: trending6,
        name: 'Seiko',
        text: '5 Sports Men Automatic Black Dial Analog Stainless Steel Watch SRPK89K1',
        price: "35,000",
        link: '...',
    },
    {
        id: 7,
        img: trending7,
        name: 'Guess',
        text: 'Men Quartz Blue Dial Chronograph Stainless Steel Watch GW0703G3',
        price: "18,995",
        link: '...',
    },
    {
        id: 8,
        img: trending8,
        name: 'Britime',
        text: 'Aquatica Men Automatic Blue Dial Multi - Function Leather Watch 274 - L10506',
        price: "28,495",
        link: '...',
    },
    {
        id: 9,
        img: trending9,
        name: 'Britime',
        text: 'Orbit Men Automatic Silver Dial Multi - Function Leather Watch 574 - L30306',
        price: "29,995",
        link: '...',
    },
    {
        id: 10,
        img: trending10,
        name: 'Emporio Armani',
        text: 'Men Quartz Cream Dial Chronograph Stainless Steel Watch AR11606',
        price: "27,995",
        link: '...',
    },
    {
        id: 11,
        img: trending11,
        name: 'Emporio Armani',
        text: 'Men Quartz Green Dial Analog Stainless Steel Watch AR11338',
        price: "22,995",
        link: '...',
    },
    {
        id: 12,
        img: trending12,
        name: 'Michael Kors',
        text: 'Men Quartz Blue Dial Analog Stainless Steel Watch MK9169',
        price: "19,796",
        link: '...',
    },
];

function TrendingSwipe() {
    return (
        <>
            <section className='mb-[90px]'>
                <div className='py-[50px]'>
                    <div className='px-[36px] lg:px-[50px] xl:px-[141px] mb-6 flex items-center justify-between'>
                        <h2 className='md:text-[18px] lg:text-[1.757vw] mb-1.5 font-serif'>Trending Timepieces</h2>
                        <a href="#" className='text-[16px] underline'>view all</a>
                    </div>
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
                                    slidesPerView: 1.5,
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
                            {trendingData.map((trending) => (
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
                                                <div className='flex items-center justify-between'>
                                                    <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-semibold'>{trending.name}</p>
                                                    <div className='text-sm'>BESTSELLER</div>
                                                </div>
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

export default TrendingSwipe