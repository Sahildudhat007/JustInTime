import React from 'react';

// image import
import explore_store from "../../assets/explore_store.webp";

function ExploreJIT() {
    return (
        <>
            <section className='py-[100px]'>
                <div className='w-full'>
                    <div className='max-w-[882px] mx-auto px-[25px] md:px-0'>
                        <div className='block md:hidden'>
                            <h2 className='text-2xl mb-4 font-serif text-[#080101]'>Explore JIT Boutiques Near you</h2>
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap gap-[25px] w-full'>
                            <div className='w-[513px]'>
                                <div className='w-full'>
                                    <img src={explore_store} alt="" className='rounded-md' width={800} height={707} />
                                </div>
                            </div>
                            <div className='w-[326px]'>
                                <div className='hidden md:block'>
                                    <h2 className='text-[2.196vw] font-serif text-[#080101]'>Explore JIT Boutiques Near you</h2>
                                </div>
                                <p className='py-[25px] text-sm md:text-[1.464vw] border-b border-[#E53E38]'>
                                    <span className='text-xl md:text-[2.196vw] font-semibold pr-2.5'>75+</span>
                                    JIT Boutiques to explore
                                </p>
                                <p className='py-[25px] text-sm md:text-[1.464vw] border-b border-[#E53E38]'>
                                    <span className='text-xl md:text-[2.196vw] font-semibold pr-2.5'>15+</span>
                                    Cities all accross India
                                </p>
                                <div className='mt-[25px]'>
                                    <a href="#" className='bg-[#060D36] text-xs md:text-[0.878vw] px-[9px] md:px-2.5 py-[11px] md:py-3.5 rounded-sm text-white'>LOCATE STORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreJIT