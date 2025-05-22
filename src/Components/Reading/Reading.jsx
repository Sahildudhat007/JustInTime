import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Keyboard } from 'swiper/modules';

const readingData = [
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
    {
        id: 5,
        btn1: "Featured",
        btn2: "Styling",
        name: 'Dazzling Mother-Of-Pearl Dials: 10 Magnificent...',
        date: 'February 12, 2025',
        read: "Read More",
        link: '...',
    },
    {
        id: 6,
        btn1: "Featured",
        btn2: "Styling",
        name: 'The Perfect Pairing: Black Dial Watches with G...',
        date: 'February 12, 2025',
        read: "Read More",
        link: '...',
    },
    {
        id: 7,
        btn1: "Featured",
        btn2: "Watch Care",
        btn3: "Watch Info",
        name: 'Toughened Glass Watches: Pros and Cons of This...',
        date: 'February 5, 2025',
        read: "Read More",
        link: '...',
    },
    {
        id: 8,
        btn1: "Watch Care",
        btn2: "Watch Info",
        name: 'Seasonal Secrets: How to Care for Your Watch T...',
        date: 'February 5, 2025',
        read: "Read More",
        link: '...',
    },
];

function Reading() {
    return (
        <>
            <section className='bg-[#f3f3f3]'>
                <div className='py-16 pl-[15px] lg:pl-[50px]'>
                    <h2 className='mb-6 text-2xl font-serif'>Continue Reading</h2>
                    <div>
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
                                    slidesPerView: 2.2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3.4,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 3.3,
                                    spaceBetween: 24.95,
                                },
                            }}
                        >
                            {readingData.map((reading) => (
                                <SwiperSlide key={reading.id}>
                                    <a href={reading.link} className='w-full h-[418px] rounded-b-lg'>
                                        <hr className='h-1.5 w-full bg-[#E2A362]' />
                                        <div>
                                            <div className='px-[13px]'>
                                                <div className='flex items-center mt-3 '>
                                                    <p className='text-sm font-semibold bg-[#EBEBEB] rounded-full uppercase p-2 mr-2.5'>{reading.btn1}</p>
                                                    <p className='text-sm font-semibold bg-[#EBEBEB] rounded-full uppercase p-2 mr-2.5'>{reading.btn2}</p>
                                                    {reading.btn3 && (
                                                        <p className='text-sm font-semibold bg-[#EBEBEB] rounded-full uppercase p-2 mr-2.5'>{reading.btn3}</p>
                                                    )}
                                                </div>
                                                <div className='mt-[22px] mb-2 text-left'>
                                                    <h3 className='font-serif text-[#070101] text-[20px]'>{reading.name}</h3>
                                                </div>
                                                <div className='mt-2.5 pt-[0.4rem] text-left text-xs opacity-70 uppercase'>
                                                    <span>{reading.date}</span>
                                                </div>
                                                <div className='text-left'>
                                                    <a href="#" className='text-[#363535] text-sm opacity-90 uppercase underline'>{reading.read}</a>
                                                </div>
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

export default Reading