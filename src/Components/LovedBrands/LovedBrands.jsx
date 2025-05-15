import React from 'react';

// image import
import add1 from "../../assets/video/add1.mp4";
import add2 from "../../assets/video/add2.mp4";
import add3 from "../../assets/video/add3.mp4";
import add4 from "../../assets/video/add4.mp4";
import add5 from "../../assets/video/add5.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// component import
import Collections from '../Collections/Collections';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// css import
import "./lovedBrands.css";

const brandData = [
    {
        id: 1,
        name: 'SEIKO',
        price: 'Starting From Rs.17,500',
        video: add1,
        link: '...',
    },
    {
        id: 2,
        name: 'TISSOT',
        price: 'Starting From Rs.24,500',
        video: add2,
        link: '...',
    },
    {
        id: 3,
        name: 'CITIZEN',
        price: 'Starting From Rs.8,900',
        video: add3,
        link: '...',
    },
    {
        id: 4,
        name: 'MK',
        price: 'Starting From Rs.11,995',
        video: add4,
        link: '...',
    },
    {
        id: 5,
        name: 'GUESS',
        price: 'Starting From Rs.8,995',
        video: add5,
        link: '...',
    },
];

function LovedBrands() {
    return (
        <>
            <section className='bg-[#060d36] mb-[90px]'>
                <div className='py-[50px]'>
                    <div className='pl-9 md:pl-[139px] mb-6'>
                        <h2 className='text-white text-2xl md:text-[32px] mb-1.5 font-serif'>Most Loved Brands</h2>
                        <p className='text-white opacity-70 text-sm'>Explore all the latest & trending watch collections.</p>
                    </div>
                    <div className='pl-9 pr-[17px] md:pl-[139px]'>
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
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                425: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 24.95,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24.95,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 24.95,
                                },
                            }}
                        >
                            {brandData.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <a href={brand.link} className=''>
                                        <div className='bg-[#060d36]'>
                                            <video src={brand.video} autoPlay muted loop className='rounded-t-md'></video>
                                        </div>
                                        <div className='bg-white flex justify-between overflow-hidden items-center px-4 py-[11px]'>
                                            <h3 className='text-[18px] relative before:contant-[""] before:w-[7px] before:h-14 before:bg-[#C1271B] before:absolute before:-right-5 before:-bottom-3 before:py-0 before:rotate-12'>
                                                {brand.name}
                                            </h3>
                                            <p className='text-sm opacity-70'>{brand.price}</p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <Collections />
            </section>
        </>
    )
}

export default LovedBrands