import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import JournalData from './journalData';
import Journal from './Journal';

// image import
import journal_desk from "../../assets/images/journal_desk.webp";
import journal_mobile from "../../assets/images/journal_mobile.webp";
import brand_journal from "../../assets/images/brand_journal.webp";
import gifting_journal from "../../assets/images/gifting_journal.webp";
import collection_journal from "../../assets/images/collection_journal.webp";
import watch_glossary from "../../assets/images/watch_glossary.webp";
import know_your_brand from "../../assets/images/know_you_watch.webp";

// css import
import './watchjournal.css'

const journalData = [
    {
        id: 1,
        img: brand_journal,
        title: "Brand Journal",
        text: "Browse through our various reviews and brand articles",
        link: "...",
    },
    {
        id: 2,
        img: gifting_journal,
        title: "Gifting Journal",
        text: "A wide selection of watches for special occasions",
        link: "...",
    },
    {
        id: 3,
        img: collection_journal,
        title: "Collection Journal",
        text: "Explore our selected articles for upcoming collection",
        link: "...",
    },
    {
        id: 4,
        img: watch_glossary,
        title: "Watch Glossary",
        text: "Essential watch terminology guide",
        link: "...",
    },
    {
        id: 5,
        img: know_your_brand,
        title: "Know Your Brand",
        text: "Discover Timeless Excellence",
        link: "...",
    },
]

function WatchJournal() {
    return (
        <>
            <div>
                <Breadcrumb goBackLink="Home" pageTitle="Watch Journal" />
            </div>

            <section>
                <div className='relative w-full h-full'>
                    <img src={journal_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={journal_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[3vw] p-2.5 md:p-0'>
                        <p className='text-[9.3vw] md:text-[3.66vw] font-serif text-white leading-9 lg:leading-12'>The Watch <br /> Journal</p>
                        <p className='text-[3.33vw] md:text-[1.4vw] my-[17px] text-white uppercase opacity-70'>Explore our curated blog articles </p>
                    </div>
                </div>

                <div className='bg-black h-[422px] lg:pl-[7%] xl:pl-[9%]'>
                    <Swiper
                        cssMode={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Mousewheel, Keyboard]}
                        breakpoints={{
                            375: {
                                slidesPerView: 1.2,
                            },
                            425: {
                                slidesPerView: 1.3,
                            },
                            768: {
                                slidesPerView: 2.3,
                            },
                            1024: {
                                slidesPerView: 3.2,
                            },
                            1140: {
                                slidesPerView: 3.7,
                            }
                        }}
                        className="journal_swiper"
                    >
                        {journalData.map((data) => (
                            <SwiperSlide key={data.id} className='swiper_journal w-[377px] md:min-w-[29vw] xl:min-w-[26.667vw] h-[274px] relative'>
                                <div className='absolute w-[260px] h-[210px]'>
                                    <img src={data.img} alt="" className='w-full h-full' />
                                </div>
                                <div className='w-[200px] lg:w-[172px] xl:w-[232px] h-[140px] lg:h-[130px] xl:h-[150px] bg-[#E5E5E5] absolute bottom-[13%] left-[42%] xl:left-[39%] flex flex-col items-center justify-center text-left rounded-[10px] z-10'>
                                    <div className='ml-[9%]'>
                                        <p className='lg:text-xl xl:text-2xl font-serif text-[#080101] my-1.5'>{data.title}</p>
                                        <p className='my-1.5'></p>
                                        <p className='text-xs xl:text-sm text-[#080101]'>{data.text}</p>
                                        <a href="#">
                                            <p className='text-sm lg:text-[13px] xl:text-sm text-[#080101] my-1.5 underline'>Read More</p>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='py-12 hidden md:block'>
                    <div className='md:ml-[2%] md:my-5 w-[80%]'>
                        <div className='relative w-[90%] m-auto'>
                            <div className='cm'>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                            </div>
                            <div className='cm'>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                            </div>
                            <div className='cm'>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                            </div>
                            <div className='cm'>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                                <div className="mm"></div>
                            </div>
                            <div className='cm'></div>
                        </div>
                    </div>
                </div>

                <div className='my-6'></div>

                <div className='container mx-auto md:px-7 lg:px-20 pb-[165px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[10px] gap-y-[40px]'>
                    {JournalData.map((value) => (
                        <Journal
                            key={value.id}
                            img={value.img}
                            tag1={value.tag1}
                            tag2={value.tag2}
                            tag3={value.tag3}
                            tag4={value.tag4}
                            title={value.title}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default WatchJournal