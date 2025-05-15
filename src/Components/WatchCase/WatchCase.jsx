import React from 'react'

// image import
import wishlist from "../../assets/images/wishlist.png"
import watch_box from "../../assets/images/watch_box.webp"
import hover_watch_box from "../../assets/images/hover_watch_box.webp"
import case2 from "../../assets/images/case2.webp"
import hover_case2 from "../../assets/images/hover_case2.webp"
import case1 from "../../assets/images/case1.webp"
import hover_case1 from "../../assets/images/hover_case1.webp"

function WatchCase() {
    return (
        <>
            <section className='px-2.5 md:px-[50px] xl:px-20 mt-4 mb-5'>
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={watch_box} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_watch_box} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Six Watch Case</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Watch Box Organizer in 6 Slots of Watches</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 1,200</p>
                            </div>
                        </a>
                    </li>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={case2} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_case2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Heritage Holder</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Brown Leather Single Watch Pouch Organizer</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 749</p>
                            </div>
                        </a>
                    </li>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={case1} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_case1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Watch Pod</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Brown Leather Single Watch Pod</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 1,199</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default WatchCase