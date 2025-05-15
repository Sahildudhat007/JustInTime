import React from 'react'

// image import
import wishlist from "../../assets/images/wishlist.png"
import watch4 from "../../assets/images/watch4.webp"
import hover_watch4 from "../../assets/images/hover_watch4.webp"
import watch2 from "../../assets/images/watch2.webp"
import hover_watch2 from "../../assets/images/hover_watch2.webp"
import watch3 from "../../assets/images/watch3.webp"
import hover_watch3 from "../../assets/images/hover_watch3.webp"

function WatchWinder() {
    return (
        <>
            <section className='px-2.5 md:px-[50px] xl:px-20 mt-4 mb-5'>
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={watch4} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_watch4} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Watch Winder</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Automatic Single Black Watch Wooden Winder</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 5,995</p>
                            </div>
                        </a>
                    </li>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={watch2} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_watch2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Watch Winder</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Automatic Red and Beige Two Watch Wooden Winder</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 9,995</p>
                            </div>
                        </a>
                    </li>
                    <li className='group'>
                        <a href="..." className='block'>
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img src={watch3} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                <img src={hover_watch3} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                    <img src={wishlist} alt="" className='' />
                                </div>
                            </div>
                            <div className='p-4 pt-[18px] group'>
                                <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>Watch Winder</p>
                                <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>Automatic Red and white Two Watch Wooden Winder</h3>
                                <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ 9,995</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default WatchWinder