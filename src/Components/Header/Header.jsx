import React, { useState } from 'react'

// image import 
import white_logo from "../../assets/white_logo.png"

// react icon 
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
import OurBrand from '../OurBrand/OurBrand';


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <section className='bg-black'>
                {/* header */}
                <header className='container mx-auto px-[15px] md:px-[50px] pt-3.5 pb-3 flex items-center justify-between'>
                    <a href="...">
                        <img src={white_logo} alt="" className='w-full max-w-[182px] h-auto' />
                    </a>
                    <div className='flex items-center '>
                        <ul className='flex items-center'>
                            <li className='cursor-pointer pr-[18px]'>
                                <a href="..." className='hidden md:flex items-center bg-white pl-3 rounded-md'>
                                    <IoIosSearch className='text-xl' />
                                    <span className='text-xs plesholder-text-[#000000] py-[12.4px] pr-[87px] pl-[9px]' >Search Product, Brands</span>
                                </a>
                            </li>
                            <li className='pr-[18px] block md:hidden'>
                                <a href="..."><HiOutlineSearch className='text-xl text-white' /></a>
                            </li>
                            <li className='pr-[18px] hidden md:block'>
                                <a href="..."><FaRegUser className='text-xl text-white' /></a>
                            </li>
                            <li className='pr-[18px]'>
                                <a href="..."><FaRegHeart className='text-xl text-white' /></a>
                            </li>
                            <li className='pr-[18px]'>
                                <a href="..."><FiShoppingBag className='text-xl text-white' /></a>
                            </li>
                            {/* mobile manu */}
                            <a href="..." className='block lg:hidden'>
                                <HiMiniBars3BottomRight className='text-white text-2xl' />
                            </a>
                        </ul>
                    </div>
                </header>

                {/* navbar */}
                <nav className='border-t border-b border-white py-2 hidden lg:block'>
                    <ul className='mx-auto w-[72%] py-1 flex justify-evenly items-center font-serif'>
                        <li className='relative inline-block'>
                            <div>
                                <Link
                                    onClick={toggleDropdown}
                                    className={`text-sm px-3 py-3 ${isOpen ? "text-black bg-[#F0F0F0]" : "text-white"}`}>
                                    Shop by Brand
                                </Link>
                            </div>
                            {isOpen && (
                                <div class="absolute left-0 mt-[10px] z-10 w-[860px] h-[60vh] overflow-y-scroll rounded-b-2xl bg-[#F0F0F0]" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="px-[44px] py-[22px]" role="none">
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-[1.757vw] my-[22px] text-[#070101] font-serif'>Our Brands</h3>
                                            <div>
                                                <Link to={"allBrand"} className='text-[1.171vw] underline text-[#070101] uppercase'>view all</Link>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-4 gap-x-2.5 gap-y-4'>
                                            <OurBrand />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className=''>
                            <Link to={"mensWatches"} className='text-sm text-white'>Men's Watches</Link>
                        </li>
                        <li>
                            <Link to={"womensWatches"} className='text-sm text-white'>Women's Watches</Link>
                        </li>
                        <li>
                            <Link to={"gifting"} className='text-sm text-white'>Gifting</Link>
                        </li>
                        <li>
                            <Link to={""} className='text-sm text-white'>Offers</Link>
                        </li>
                        <li>
                            <Link to={"watchAccessories"} className='text-sm text-white'>Watch Accessories</Link>
                        </li>
                        <li>
                            <Link to={"findstores"} className='text-sm text-white'>JIT Boutique</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header