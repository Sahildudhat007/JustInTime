import React, { useState } from 'react';

// image import
import arrival_animation from "../../assets/arrival_animation.webp";
import Men from '../Men/Men';
import Women from '../Women/Women';
import Unisex from '../Unisex/Unisex';

function NewArrivals() {

    const [isActive, setIsActive] = useState('Men');

    return (
        <>
            <section className='mt-8 mb-[39px]'>
                <div className='mb-[23.43px] space-y-[30.46px]'>
                    <div className='relative flex items-center justify-center'>
                        <div className='flex items-center'>
                            <span className='content-[""] w-[21.2%] md:w-[32%] lg:w-[36.8%] h-[1.3px] bg-black absolute left-0'></span>
                            <img src={arrival_animation} alt="" className='w-[184.281px] md:w-[223px] h-[88px] md:h-[102px]' />
                            <span className='content-[""] w-[21.2%] md:w-[32%] lg:w-[36.8%] h-[1.3px] bg-black absolute right-0'></span>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-wrap px-8 md:px-[50px] xl:px-[139px] w-full justify-between md:justify-center">
                        {['Men', 'Women', 'Unisex'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setIsActive(item)}
                                className={`text-lg pb-2 md:pb-[16.57px] w-[15.436%] border-b-2 border-black font-serif text-center cursor-pointer ${isActive === item ? 'border-black' : 'border-transparent'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                {isActive === "Men" && <Men />}
                {isActive === "Women" && <Women />}
                {isActive === "Unisex" && <Unisex />}
            </section>
        </>
    )
}

export default NewArrivals