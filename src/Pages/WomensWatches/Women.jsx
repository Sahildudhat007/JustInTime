import React from 'react'

// react icon
import wishlist from "../../assets/wishlist.png"

function Women({ img, hover_img, brand, text, price }) {
    return (
        <>
            <section className=''>
                <a href="...">
                    <div className='group'>
                        <div className='relative overflow-hidden rounded-lg'>
                            <img src={img} alt="" className="w-full transition-opacity duration-300 group-hover:opacity-0" />
                            <img src={hover_img} alt="" className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                <img src={wishlist} alt="" className='' />
                            </div>
                        </div>
                        <div className='p-4 pt-[18px] group'>
                            <div className=''>
                                <h2 className='text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold font-serif'>{brand}</h2>
                            </div>
                            <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{text}</h3>
                            <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {price}</p>
                        </div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Women