import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// image import
import brand_armani from "../../assets/brand_armani.webp"
import brand_baring from "../../assets/brand_bering.webp"
import brand_boss from "../../assets/brand_boss.webp"
import brand_casio from "../../assets/brand_casio.webp"
import brand_citize from "../../assets/brand_citizen.webp"
import brand_ck from "../../assets/brand_ck.webp"
import brand_emporio_armani from "../../assets/brand_emporio_armani.webp"
import brand_ferragamo from "../../assets/brand_ferregammo.webp"
import brand_fossil from "../../assets/brand_fossil.webp"
import brand_furla from "../../assets/brand_furla.webp"
import brand_garmin from "../../assets/brand_garmin.webp"
import brand_gc from "../../assets/brand_gc.webp"
import brand_guess from "../../assets/brand_guess.webp"
import brand_longines from "../../assets/brand_longines.webp"
import brand_mk from "../../assets/brand_mk.webp"
import brand_movado from "../../assets/brand_movado.webp"
import brand_obaku from "../../assets/brand_obaku.webp"
import brand_rado from "../../assets/brand_rado.webp"
import brand_roamer from "../../assets/brand_roamer.webp"
import brand_seiko from "../../assets/brand_seiko.webp"
import brand_skagen from "../../assets/brand_skagen.webp"
import brand_timex from "../../assets/brand_timex.webp"
import brand_tissot from "../../assets/brand_tissot.webp"
import brand_versace from "../../assets/brand_versace.webp"

// css import
import './watchbrands.css'

const watches = [
    {
        id: 1,
        img: brand_armani,
        name: "Armani"
    },
    {
        id: 2,
        img: brand_baring,
        name: "Bering"
    },
    {
        id: 3,
        img: brand_boss,
        name: "Boss"
    },
    {
        id: 4,
        img: brand_casio,
        name: "Casio"
    },
    {
        id: 5,
        img: brand_citize,
        name: "Citizen"
    },
    {
        id: 6,
        img: brand_ck,
        name: "Calvin Klein"
    },
    {
        id: 7,
        img: brand_emporio_armani,
        name: "Emporio Armani"
    },
    {
        id: 8,
        img: brand_ferragamo,
        name: "Ferragamo"
    },
    {
        id: 9,
        img: brand_fossil,
        name: "Fossil"
    },
    {
        id: 10,
        img: brand_furla,
        name: "Furla"
    },
    {
        id: 11,
        img: brand_garmin,
        name: "Garmin"
    },
    {
        id: 12,
        img: brand_gc,
        name: "GC"
    },
    {
        id: 13,
        img: brand_guess,
        name: "Guess"
    },
    {
        id: 14,
        img: brand_longines,
        name: "Longines"
    },
    {
        id: 15,
        img: brand_mk,
        name: "Michael Kors"
    },
    {
        id: 16,
        img: brand_movado,
        name: "Movado"
    },
    {
        id: 17,
        img: brand_obaku,
        name: "Obaku"
    },
    {
        id: 18,
        img: brand_rado,
        name: "Rado"
    },
    {
        id: 19,
        img: brand_roamer,
        name: "Roamer"
    },
    {
        id: 20,
        img: brand_seiko,
        name: "Seiko"
    },
    {
        id: 21,
        img: brand_skagen,
        name: "Skagen"
    },
    {
        id: 22,
        img: brand_timex,
        name: "Timex"
    },
    {
        id: 23,
        img: brand_tissot,
        name: "Tissot"
    },
    {
        id: 24,
        img: brand_versace,
        name: "Versace"
    },
]

function WatchBrands() {
    return (
        <>
            <section className='my-[35px] py-[40px] bg-[#f0f0f0]'>
                <div className='container mx-auto px-[37px] md:px-[55px]'>
                    <h1 className='text-[4.2vw] md:text-[1.757vw] font-serif mb-[15px]'>Our Brands</h1>
                </div>
                <div className='pl-[37px] md:pl-[55px]'>
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1.6,
                                spaceBetween: 10,
                            },
                            375: {
                                slidesPerView: 1.9,
                                spaceBetween: 10,
                            },
                            425: {
                                slidesPerView: 2.3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2.8,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4.5,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        cssMode={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Mousewheel, Keyboard]}
                        className="mySwiper swiper5"
                    >
                        {watches.map((item) => (
                            <SwiperSlide className='swiper-slide5'>
                                <a href='...' className=''>
                                    <img src={item.img} alt="" className='bg-[#f0f0f0]' />
                                    <p className='pt-[12.65px] text-[16px] text-center font-semibold uppercase bg-[#f0f0f0]'>{item.name}</p>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default WatchBrands
