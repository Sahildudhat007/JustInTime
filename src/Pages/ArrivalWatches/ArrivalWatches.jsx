import React, { useState } from 'react';

// image import
import arrivals_desk from "../../assets/images/arrivals_desk.webp";
import arrivals_mobile from "../../assets/images/arrivals_mobile.webp";

// components import
import Arrival from './Arrival';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

// react icon
import { FiFilter } from "react-icons/fi";

function ArrivalWatches() {

    const brands = ["All", "Briston", "Atlantic", "Coach", "Seiko", "Guess", "Timex"];

    const [selectedBrand, setSelectedBrand] = useState("All");

    const filteredWatches = selectedBrand === "All"
        ? MenWomenData.arrivalData
        : MenWomenData.arrivalData.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <div className='hidden lg:block'>
                <Breadcrumb goBackLink="Home" pageTitle="New Arrival Watches" />
            </div>
            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={arrivals_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={arrivals_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>New Arrival Watches</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>927 Watches | 30 Brands</p>
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <Breadcrumb goBackLink="Home" pageTitle="New Arrival Watches" />
                </div>
                <div className='container mx-auto py-6 px-2.5 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div className='flex flex-wrap gap-3'>
                        {brands.map((brand, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedBrand(brand)}
                                className={`border border-black rounded-full py-3 px-6 text-sm md:text-[1.171vw] cursor-pointer
                                ${selectedBrand === brand ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                {brand}
                            </button>
                        ))}
                    </div>
                    <div>
                        <a href="#" className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
                            <FiFilter className='mr-2' />
                            FILTER & SORT
                        </a>
                    </div>
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {filteredWatches.length > 0 ? (
                        filteredWatches.map((value, ind) => (
                            <Arrival
                                key={ind}
                                id={value.id}
                                img={value.img}
                                hover_img={value.hover_img}
                                brand={value.brand}
                                text={value.text}
                                price={value.price}
                            />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg text-gray-500">No watches found for this brand.</p>
                    )}

                </div>
            </section>
        </>
    )
}

export default ArrivalWatches