import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

// components import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

// react icon
import { MdLocalPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaComments } from "react-icons/fa";

// image import
import service_img from "../../assets/images/service_img.webp";
import service_img2 from "../../assets/images/service_img2.webp";
import jit from "../../assets/images/jit.webp";
import mask_group_1 from "../../assets/images/mask_group_1.webp";
import mask_group_2 from "../../assets/images/mask_group_2.avif";
import mask_group_3 from "../../assets/images/mask_group_3.webp";
import mask_group_4 from "../../assets/images/mask_group_4.webp";
import mask_group_5 from "../../assets/images/mask_group_5.avif";
import favicon from "../../assets/icons/favicon.png";
import service_center1 from "../../assets/images/service_center1.webp";
import service_center2 from "../../assets/images/service_center2.webp";
import service_center3 from "../../assets/images/service_center3.webp";
import service_center4 from "../../assets/images/service_center4.webp";
import service_center5 from "../../assets/images/service_center5.webp";
import service_center6 from "../../assets/images/service_center6.webp";
import service_center7 from "../../assets/images/service_center7.webp";
import service_center8 from "../../assets/images/service_center8.webp";
import service_center9 from "../../assets/images/service_center9.webp";
import service_center10 from "../../assets/images/service_center10.webp";
import service_center11 from "../../assets/images/service_center11.png";
import service_center12 from "../../assets/images/service_center12.webp";
import service_center13 from "../../assets/images/service_center13.webp";
import service_center14 from "../../assets/images/service_center14.webp";
import service_center15 from "../../assets/images/service_center15.png";
import service_center16 from "../../assets/images/service_center16.webp";
import service_center17 from "../../assets/images/service_center17.png";
import service1 from "../../assets/images/service1.avif";
import service2 from "../../assets/images/service2.avif";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.avif";
import whatsapp_image1 from "../../assets/images/whatsapp_Image1.webp";

// css import
import './watchservicing.css'

const mask = [
    {
        id: 1,
        img: mask_group_1,
        name: "BATTERY CHANGE",
    },
    {
        id: 2,
        img: mask_group_2,
        name: "MOVEMENT SERVICE",
    },
    {
        id: 3,
        img: mask_group_3,
        name: "PARTS CHANGE",
    },
    {
        id: 4,
        img: mask_group_4,
        name: "WATCH POLISHING",
    },
    {
        id: 5,
        img: mask_group_5,
        name: "ULTRASONIC CLEANING",
    },
]

const brandLogo = [
    service_center1, service_center2, service_center3, service_center4, service_center5, service_center6, service_center7, service_center8, service_center9, service_center10, service_center11, service_center12, service_center13, service_center14, service_center15, service_center16, service_center17
]

const watchJournal = [
    {
        id: 1,
        btn1: "Featured",
        btn2: "Watch Care",
        name: 'Watch Boxes 101: The 7 Essential Features For...',
        date: 'February 25, 2025',
        read: "Read More",
        link: '...',
    },
    {
        id: 2,
        btn1: "Featured",
        btn2: "Styling",
        name: "Top Silver Dial Men's Watches: Effortless Styl...",
        date: "February 13, 2025",
        read: "Read More",
        link: '...',
    },
    {
        id: 3,
        btn1: "Featured",
        btn2: "Styling",
        name: 'Dial Design and Decoration: Exploring the Arti...',
        date: 'February 12, 2025',
        read: "Read More",
        link: '...',
    },
    {
        id: 4,
        btn1: "Featured",
        btn2: "Luxury",
        btn3: "Styling",
        name: 'Mechanical Masterpieces: 5 Of The Finest Ladie...',
        date: 'February 12, 2025',
        read: "Read More",
        link: '...',
    },
];


function WatchServicing() {
    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Watch Servicing" />
            </div>
            <section className=''>
                <div className='relative w-full h-full flex justify-center items-center'>
                    <img src={service_img} alt="" className='w-full h-[420px] object-cover hidden md:block' />
                    <img src={service_img2} alt="" className='w-full h-[420px] object-cover block md:hidden' />
                    <div className='absolute flex justify-center items-center container mx-auto'>
                        <div className='py-16 mx-auto w-full md:w-[80%] lg:w-[calc(100%-278px)] text-center items-center'>
                            <p className='pb-[9px] flex justify-center'>
                                <img src={jit} alt="" />
                            </p>
                            <p className='text-[18px] md:text-[1.318vw] text-white font-semibold'>Welcome to Just In Time's</p>
                            <h2 className='w-full grid grid-cols-[1fr_auto_1fr] text-center mb-[15px] gap-x-[27px]'>
                                <span className='flex items-center'>
                                    <span className='w-full h-0.5 bg-[#ff0000]'></span>
                                </span>
                                <span className='text-[46px] md:text-[3.66vw] text-white font-medium'>Service Zone</span>
                                <span className='flex items-center'>
                                    <span className='w-full h-0.5 bg-[#ff0000]'></span>
                                </span>
                            </h2>
                            <button className='bg-white text-xs min-w-[99px] h-[45px] rounded-md'>START NOW</button>
                        </div>
                    </div>
                </div>

                <div className='my-[50px]'>
                    <div className='max-w-[942px] mx-auto pt-2.5 px-[9px] md:px-0 pb-3'>
                        <ul className='md:flex md:flex-wrap grid grid-cols-2 gap-4 md:gap-x-[51px] gap-y-[17px] md:gap-y-[35px] justify-center'>
                            {mask.map((item) => (
                                <li key={item.id} className='relative'>
                                    <img src={item.img} alt="" className='md:w-[197px] md:h-[197px]' />
                                    <div className='absolute left-0 bottom-[15px] w-full'>
                                        <div>&nbsp;</div>
                                        <h3 className='text-white px-[11px] line-clamp-1 md:line-clamp-none'>{item.name}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='my-[50px] pt-10 pb-[70px]'>
                    <div className='py-[45px] bg-[#F7F7F7]'>
                        <div className='w-full md:max-w-[120rem] mx-auto px-3 md:px-20'>
                            <h2 className='text-[5.607vw] md:text-[2.196vw] flex items-center text-center justify-center font-serif my-[23px]'>
                                <span className='pr-[15px]'>
                                    <img src={favicon} alt="" />
                                </span>
                                Authorized Service Center
                                <span className='pl-[15px]'>
                                    <img src={favicon} alt="" className='rotate-y-180' />
                                </span>
                            </h2>
                        </div>
                        <div className='overflow-hidden px-7'>
                            <div className='marquee-track1'>
                                {[...brandLogo, ...brandLogo].map((src, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center px-[25px]"
                                    >
                                        <a href="#">
                                            <img
                                                src={src}
                                                alt={`Offer ${index + 1}`}
                                                className="w-[120px]"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-[50px]'>
                    <div className='pb-[35px]'>
                        <div className='max-w-[120rem] mx-auto px-5 md:px-10 lg:px-20'>
                            <h2 className='text-2xl md:text-[2.196vw] font-serif pb-2.5 mb-[15px] border-b-2 border-[#C1271B]'>Benefits of Our Services</h2>
                        </div>
                        <div className='max-w-[120rem] mx-auto px-5 md:px-10 lg:px-20'>
                            <div className='flex items-center justify-center flex-wrap gap-x-[30px] lg:gap-x-[86px] gap-y-5'>
                                <div className='w-full px-[15px] md:px-[37px] py-[17px] md:py-[26px] border border-[#DDDDDD4D] shadow-xl rounded-[10px] md:flex-[calc(50%-86px)]'>
                                    <div className='flex items-center justify-start gap-x-[26px]'>
                                        <div>
                                            <img src={service1} alt="" className='w-[56px] h-auto' />
                                        </div>
                                        <p className='text-sm md:text-[1.464vw] text-[rgba(33,33,33,1)]'>Expert Technicians with Unmatched Repair Skills</p>
                                    </div>
                                </div>
                                <div className='w-full px-[15px] md:px-[37px] py-[17px] md:py-[26px] border border-[#DDDDDD4D] shadow-xl rounded-[10px] md:flex-[calc(50%-86px)]'>
                                    <div className='flex items-center justify-start gap-x-[26px]'>
                                        <div>
                                            <img src={service2} alt="" className='w-[56px] h-auto' />
                                        </div>
                                        <p className='text-sm md:text-[1.464vw] text-[rgba(33,33,33,1)]'>Over 1 Million Watches Expertly Serviced</p>
                                    </div>
                                </div>
                                <div className='w-full px-[15px] md:px-[37px] py-[17px] md:py-[26px] border border-[#DDDDDD4D] shadow-xl rounded-[10px] md:flex-[calc(50%-86px)]'>
                                    <div className='flex items-center justify-start gap-x-[26px]'>
                                        <div>
                                            <img src={service3} alt="" className='w-[56px] h-auto' />
                                        </div>
                                        <p className='text-sm md:text-[1.464vw] text-[rgba(33,33,33,1)]'>Dedicated Service Counters at Every Outlet</p>
                                    </div>
                                </div>
                                <div className='w-full px-[15px] md:px-[37px] py-[17px] md:py-[26px] border border-[#DDDDDD4D] shadow-xl rounded-[10px] md:flex-[calc(50%-86px)]'>
                                    <div className='flex items-center justify-start gap-x-[26px]'>
                                        <div>
                                            <img src={service4} alt="" className='w-[56px] h-auto' />
                                        </div>
                                        <p className='text-sm md:text-[1.464vw] text-[rgba(33,33,33,1)]'>Transparent and Swift Resolutions for Every Issue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-[50px]'>
                    <div className='py-[35px]'>
                        <div className='py-[34px] bg-[#F7F7F7]'>
                            <div className='max-w-[120rem] mx-auto md:px-10 lg:px-20'>
                                <h2 className='text-[4.206vw] md:text-[1.757vw] text-[#080101] mt-[21px] pb-2 mb-2 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 md:gap-x-[27px] text-center'>
                                    <span className='bg-[#ff0000] w-full h-0.5'></span>
                                    <span>NEED HELP TO SERVICE YOUR WATCH ?</span>
                                    <span className='bg-[#ff0000] w-full h-0.5'></span>
                                </h2>
                                <p className='text-sm md:text-[1.025vw] text-center px-[2rem] md:px-0 mb-[15px]'>If you need assistance with finding the perfect servicing for your watch, feel free to contact out watch experts.</p>
                            </div>
                            <div className='px-6 md:px-20'>
                                <div className='w-full md:w-[375px] mx-auto'>
                                    <div className='flex mx-auto justify-center gap-x-2.5 md:gap-x-[27px]'>
                                        <div>
                                            <a href="+91 8080656656" className='flex items-center gap-x-2 bg-white py-2 md:py-[11.81px] px-[7px] md:px-2.5 min-w-[150px] md:min-w-[160px] border border-[#E5E5E5] rounded-[10px]'>
                                                <span><MdLocalPhone className='md:text-xl' /></span>
                                                <span className='text-sm'>+91 8080656656</span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="+91 8080656656" className='flex items-center gap-x-2 bg-white py-2 md:py-[11.81px] px-[7px] md:px-2.5 min-w-[150px] md:min-w-[160px] border border-[#E5E5E5] rounded-[10px]'>
                                                <span><IoLogoWhatsapp className='text-green-600 md:text-xl' /></span>
                                                <span className='text-sm'>+91 7483758028</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[360px] mx-auto flex items-center justify-center mt-3 gap-x-3'>
                                        <span className='w-full h-0.5 bg-[#0000001a]'></span>
                                        <span className='text-sm md:text-[1.025vw]'>OR</span>
                                        <span className='w-full h-0.5 bg-[#0000001a]'></span>
                                    </div>
                                    <div className='flex items-center justify-center mt-[11px]'>
                                        <button className='flex items-center gap-x-2 bg-white py-2 md:py-[11.81px] px-[7px] md:px-2.5 min-w-[150px] md:min-w-[160px] border border-[#E5E5E5] rounded-[10px]'>
                                            <span><FaComments className='text-xl' /></span>
                                            <span className='text-sm md:text-[1.025vw]'>Chat With Us</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-[50px]'>
                    <div className='py-[35px]'>
                        <div className='max-w-[882px] mx-auto'>
                            <div className='flex flex-wrap md:flex-nowrap gap-x-[25px]'>
                                <h2 className='px-7 text-[5.607vw] mb-4 block md:hidden'>Explore JIT Boutiques Near you</h2>
                                <div className='w-[513px] px-7 md:px-0'>
                                    <img src={whatsapp_image1} alt="" className='w-full h-auto rounded-[5px]' />
                                </div>
                                <div className='w-[326px] px-7 md:px-0'>
                                    <h2 className='text-[2.196vw] font-serif text-[#080101] hidden md:block'>Explore JIT Boutiques Near you</h2>
                                    <p className='text-sm md:text-[1.464vw] py-[25px] border-b border-[#E53E38]'>
                                        <span className='text-xl md:text-[2.196vw] pr-2.5 font-semibold'>65+</span>
                                        JIT Boutiques to explore
                                    </p>
                                    <p className='text-sm md:text-[1.464vw] py-[25px] border-b border-[#E53E38]'>
                                        <span className='text-xl md:text-[2.196vw] pr-2.5 font-semibold'>09+</span>
                                        Cities all accross India
                                    </p>
                                    <button className='bg-[#060D36] text-white text-xs md:text-[0.878vw] py-[11px] md:py-3.5 px-[9px] md:px-2.5 mt-[25px] rounded-[5px] border border-[#060D36]'>
                                        LOCATE STORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[2%]'>
                    <div className='py-9'>
                        <div className='ml-[10%]'>
                            <h2 className='mb-[2.4rem] text-xl font-serif'>The Watch Journal</h2>
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
                                        spaceBetween: 10,
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
                                        slidesPerView: 2.2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3.3,
                                        spaceBetween: 10,
                                    },
                                    1440: {
                                        slidesPerView: 3.3,
                                        spaceBetween: 10,
                                    },
                                }}
                            >
                                {watchJournal.map((journal) => (
                                    <SwiperSlide key={journal.id}>
                                        <a href="#" className=''>
                                            <div className='rounded-b-[10px] bg-[#f3f3f3]'>
                                                <hr className='h-[7px] bg-[#E2A362]' />
                                                <div className='pl-[13px] pr-5 w-full h-[391px]'>
                                                    <div className='flex mt-[9.5px]'>
                                                        <p className='bg-[#EBEBEB] rounded-full p-2 text-sm mr-2.5 uppercase font-semibold'>{journal.btn1}</p>
                                                        <p className='bg-[#EBEBEB] rounded-full p-2 text-sm mr-2.5 uppercase font-semibold'>{journal.btn2}</p>
                                                        {journal.btn3 && (
                                                            <p className='bg-[#EBEBEB] rounded-full p-2 text-sm mr-2.5 uppercase font-semibold'>{journal.btn3}</p>
                                                        )}
                                                    </div>
                                                    <div className='mt-[13px]'>
                                                        <h3 className='mb-1.5 text-left'>
                                                            <a href="#" className='h-[50px] text-xl font-serif'>{journal.name}</a>
                                                        </h3>
                                                    </div>
                                                    <div className='mt-2.5 pt-1'></div>
                                                    <a href="#" className='text-[#363535] opacity-[1] text-sm underline flex justify-start'>READ MORE</a>
                                                </div>
                                            </div>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WatchServicing