import React from 'react'

// image import
import wishlist from "../../assets/images/wishlist.png"
import { Link } from 'react-router-dom'

function off({ id, img, hover_img, brand, text, price, off }) {
    return (
        <>
            <section className=''>
                <Link to={`/productDetails/${id}`}>
                    <div className='group'>
                        <div className='relative overflow-hidden rounded-lg'>
                            <Link to={`/productDetails/${id}`}>
                                <img src={img} alt="" className="w-full transition-opacity duration-300 group-hover:opacity-0" />
                                <img src={hover_img} alt="" className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className='absolute top-5 w-full'>
                                    <div className='flex justify-between px-5'>
                                        <p className='text-white text-xs bg-[#060D36] rounded-md py-[1.2px] px-[8.6px]'>{off}</p>
                                        <img src={wishlist} alt="" className='w-6 h-5' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='p-4 pt-[18px] group'>
                            <div className=''>
                                <h2 className='text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold font-serif'>{brand}</h2>
                            </div>
                            <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{text}</h3>
                            <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {price}</p>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default off