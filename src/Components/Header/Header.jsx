import React, { useMemo, useState, useRef, useEffect } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

// image import 
import white_logo from "../../assets/icons/white_logo.svg";
import black_logo from "../../assets/icons/black_logo.svg";
import i from "../../assets/icons/i.svg";
import book from "../../assets/icons/book.svg";
import prepaid_offer from "../../assets/images/prepaid_offer.webp";
import paylater_offer from "../../assets/images/paylater_offer.webp";
import mastercard from "../../assets/images/mastercard.avif";
import rupay from "../../assets/images/rupay.avif";
import visa from "../../assets/images/visa.avif";
import upiIcons from "../../assets/images/upi_icons.svg";

import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';

// component import
import OurBrand from '../OurBrand/OurBrand';

// react icon 
import { IoIosSearch } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

function Header() {

    // view all open
    const [isOpen, setIsOpen] = useState(false);

    // sidebar
    const [openMenubar, setOpenMenubar] = useState(false);
    const toggleMenubar = () => {
        setOpenMenubar(!openMenubar);
    }

    // cart open
    const [cartOpen, setCartOpen] = useState(false);
    useEffect(() => {
        if (cartOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [cartOpen])

    const toggleSidebar = () => {
        setCartOpen(!cartOpen);
    };

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const data = useSelector((state) => state.cartreducer.carts)

    // cart
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);

    const wishlistItems = useSelector((state) => state.cartreducer.wishlists);

    const removeFromCart = (id) => {
        dispatch(REMOVE_CART(id));
    };

    const changeQuantity = (event, id) => {
        const quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, quantity));
    };

    // subtotal
    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + (item.price.replace(/,/g, '') * quantity);
        }, 0);
    }, [cartItems, quantities]);

    const location = useLocation();
    const isWhiteTheme = location.pathname !== '/';

    return (
        <>
            <section className={`bg-black ${isWhiteTheme ? "bg-white" : "bg-black"}`}>
                {/* header */}
                <header className='container mx-auto px-[15px] md:px-[50px] pt-3.5 pb-3 flex items-center justify-between border-b border-b-[#cdc6c6] lg:border-0'>
                    <Link to={"/"}>
                        <img src={isWhiteTheme ? black_logo : white_logo} alt="" className='w-full max-w-[182px] h-auto' />
                    </Link>
                    <div className='flex items-center'>
                        <ul className='flex items-center'>
                            <li className='cursor-pointer pr-[18px]'>
                                <a href="#" className={`hidden md:flex items-center pl-3 rounded-md ${isWhiteTheme ? "bg-gray-100" : "bg-white"}`}>
                                    <IoIosSearch className="text-xl" />
                                    <span className='text-xs plesholder-text-[#000000] py-[12.4px] pr-[87px] pl-[9px]'>Search Product, Brands</span>
                                </a>
                            </li>
                            <li className='pr-[18px] block md:hidden'>
                                <a href="#"><HiOutlineSearch className="text-xl text-white" /></a>
                            </li>
                            <li className='pr-[18px] hidden md:block'>
                                <Link to="user"><FaRegUser className={`text-xl ${isWhiteTheme ? "text-black" : "text-white"}`} /></Link>
                            </li>

                            {/* wishlisht */}
                            <li className='pr-[18px]'>
                                <Link to={"/wishlist"}>
                                    <div className='relative'>
                                        <FaRegHeart className={`text-xl ${isWhiteTheme ? "text-black" : "text-white"}`} />
                                        {wishlistItems.length > 0 && (
                                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                                {wishlistItems.length}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </li>

                            {/* cart */}
                            <div className='relative z-50'>
                                <div className='pr-[18px]'>
                                    <button onClick={toggleSidebar} className="button text-white flex items-center gap-1 cursor-pointer">
                                        <div className='relative'>
                                            <FiShoppingBag className={`text-xl ${isWhiteTheme ? "text-black" : "text-white"}`} />
                                            <p className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{data.length}</p>
                                        </div>
                                    </button>
                                </div>

                                {/* Overlay */}
                                {cartOpen && (
                                    <div
                                        className="fixed inset-0 bg-[#0000006f]"
                                        onClick={toggleSidebar}
                                    ></div>
                                )}

                                {/* Sidebar */}
                                <div className={`fixed top-0 right-0 h-screen w-full max-w-[471px] bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                                    <div className='pt-[30px] pb-5 px-8 flex items-center justify-between'>
                                        <h2 className='text-lg font-semibold'>Your Cart</h2>
                                        <button onClick={toggleSidebar} className="text-gray-600 text-xl cursor-pointer">
                                            <IoCloseOutline />
                                        </button>
                                    </div>
                                    <div className='px-[10px] md:px-5 xl:px-8'>
                                        {cartItems.length === 0 ? (
                                            <div>
                                                <p className='text-[1.025vw] mb-[30px] text-center'>Your cart is empty.</p>
                                                <p className='text-[1.025vw] w-[80%] mx-auto opacity-70 text-center'>There is nothing in your Bag currently. Explore items available exclusively at JIT</p>
                                                <p className="mt-[55px] mb-[5px] text-[1.2vw] text-[#383838] font-medium text-center">Have an account?</p>
                                                <p className='text-[1.025vw] mt-2 mb-[13px] text-center'>
                                                    <Link to="logIn" className="border-b hover:border-b-2 font-medium">Log in </Link>
                                                    to check out faster.
                                                </p>
                                            </div>
                                        ) : (
                                            cartItems.map((item) => {
                                                return (
                                                    <>
                                                        <div key={item.id}>
                                                            <table className="table-auto">
                                                                <tbody>
                                                                    <tr className='mb-6 grid grid-cols-3 items-center'>
                                                                        <td className='col-span-1 w-[100%] xl:w-[11.714vw] h-auto'>
                                                                            <img src={item.img} alt="" className='rounded-md' />
                                                                        </td>
                                                                        <td className='pl-[1.2rem] lg:pl-8 col-span-2'>
                                                                            <div className='md:pt-1.5 flex justify-between'>
                                                                                <p className='text-sm lg:text-[1.1713vw] uppercase font-serif font-semibold'>{item.brand}</p>
                                                                                <RiDeleteBinLine onClick={() => removeFromCart(item.id)} className='pr-[7px] text-2xl text-gray-600 cursor-pointer' />
                                                                            </div>
                                                                            <a href="#" className='text-sm lg:text-[1.1713vw] line-clamp-2 md:pt-1.5'>{item.text}</a>
                                                                            <div className='flex items-center justify-between pt-[.6rem] mt-[13px]'>
                                                                                <input
                                                                                    onChange={(event) => changeQuantity(event, item.id)}
                                                                                    value={quantities[item.id] || "Qty"}
                                                                                    type="number"
                                                                                    placeholder='Qty'
                                                                                    className='bg-[#F2F2F2] border border-[#70707033] text-sm pl-[10px] w-[82px] md:w-[7.76vw] h-[30px] md:h-[2.928vw] outline-0' />
                                                                                <p className='uppercase font-serif font-semibold text-[2.804vw] lg:text-[1.318vw]'>₹ {item.price}</p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        )}
                                        {cartItems.length > 0 &&
                                            <>
                                                < div className='' >
                                                    <h3 className='font-serif mb-2 text-[18px] tracking-wider'>Bank Offers</h3>
                                                    <Swiper
                                                        modules={[Scrollbar]}
                                                        cssMode={true}
                                                        className="w-full max-w-4xl h-64"
                                                    >
                                                        <SwiperSlide className="flex items-center justify-center bg-blue-300 text-white text-xl font-bold">
                                                            <img src={prepaid_offer} alt="" />
                                                        </SwiperSlide>
                                                        <SwiperSlide className="flex items-center justify-center bg-red-300 text-white text-xl font-bold">
                                                            <img src={paylater_offer} alt="" />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                                <div className='py-[15px]'>
                                                    <h3 className='font-serif text-[18px] tracking-wider mt-4 mb-2.5'>Order Summary</h3>
                                                    <div className='bg-[#F7F7F7] rounded-md px-[17px] pt-[22px] pb-6 mb-4'>
                                                        <div className='flex items-center justify-between'>
                                                            <h2 className='text-[3.271vw] md:text-[2vw] lg:text-[1.171vw] text-[#383838] opacity-90 leading-[19px]'>Bag Total (2 Products)</h2>
                                                            <p className='text-[3.271vw] md:text-[2vw] lg:text-[1.171vw] text-[#080101] font-semibold'>₹ {subtotal.toFixed(2)}</p>
                                                        </div>
                                                        <div className='mt-3.5 flex justify-between'>
                                                            <h2 className='text-[3.271vw] md:text-[2vw] lg:text-[1.171vw] text-[#383838] opacity-90 leading-[19px]'>Shipping Charges</h2>
                                                            <p className='text-[3.271vw] md:text-[2vw] lg:text-[1.171vw] text-[#080101] font-semibold'>0</p>
                                                        </div>
                                                        <div className='border-t border-[#70707070] pt-4 mt-3.5'>
                                                            <div className='flex justify-between'>
                                                                <h2 className='text-[3.271vw] md:text-[2vw] lg:text-[1.171vw] text-[#383838] font-medium opacity-90 leading-[19px]'>Grand Total</h2>
                                                                <p className='text-[3.271vw] md:text-[2vw] lg:text-[1.318vw] text-[#080101] font-semibold font-serif'>₹ {subtotal.toFixed(2)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='space-y-5'>
                                                        <h3 className='text-[3.271vw] md:text-[2vw] lg:text-[1.025vw] text-[#080101] text-center'>Just In Time Secured</h3>
                                                        <div className='flex items-center justify-center gap-[5%]'>
                                                            <div>
                                                                <img src={mastercard} alt="" className='w-[13vw] lg:w-[4.392vw] ' />
                                                            </div>
                                                            <div>
                                                                <img src={rupay} alt="" className='w-[13vw] lg:w-[4.392vw]' />
                                                            </div>
                                                            <div>
                                                                <img src={visa} alt="" className='w-[13vw] lg:w-[4.392vw]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sticky bottom-0 left-0 w-full border-t border-gray-300 pt-[17px] pr-[6px] pb-6 pl-4 md:px-[22px] md:py-[21px] bg-white flex items-center justify-between z-50'>
                                                    <div className=''>
                                                        <p className='text-sm lg:text-[1.171vw] text-[#383838]'>Grand Total</p>
                                                        <p className='font-serif text-[16px] lg:text-[1.318vw] mt-1.5 font-semibold'>₹ {subtotal.toFixed(2)}</p>
                                                    </div>
                                                    <div className='flex items-center justify-center'>
                                                        <button className='bg-[#121212] w-full h-[45px] px-2.5 py-[5px] rounded-[10px] flex items-center'>
                                                            <span className='text-[13px] text-white'>Checkout</span>
                                                            <span className='flex items-center'>
                                                                <img src={upiIcons} alt="" className='mx-2.5' />
                                                                <RiArrowRightSLine className='text-white' />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* mobile manu */}
                            <div className='relative'>
                                <button onClick={toggleMenubar} className='block lg:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-hamburger" width="23.098" height="13.628" viewBox="0 0 23.098 13.628">
                                        <g id="Group_16114" data-name="Group 16114" transform="translate(-5071.5 -1073.286)">
                                            <line id="Line_3078" data-name="Line 3078" x2="22.098" transform="translate(5072 1073.786)" fill="none" stroke="black" className={`${isWhiteTheme ? "stroke-black" : "stroke-white"}`} strokeLinecap="round" strokeWidth="1"></line>
                                            <line id="Line_3079" data-name="Line 3079" x2="11.049" transform="translate(5083.049 1080.1)" fill="none" stroke="black" className={`${isWhiteTheme ? "stroke-black" : "stroke-white"}`} strokeLinecap="round" strokeWidth="1"></line>
                                            <line id="Line_3080" data-name="Line 3080" x2="22.098" transform="translate(5072 1086.414)" fill="none" stroke="black" className={`${isWhiteTheme ? "stroke-black" : "stroke-white"}`} strokeLinecap="round" strokeWidth="1"></line>
                                        </g>
                                    </svg>
                                </button>

                                {/* Sidebar */}
                                <div
                                    className={`fixed top-0 left-0 h-screen overflow-y-scroll w-80 bg-white transform transition-transform duration-300 z-50 ${openMenubar ? 'translate-x-0' : '-translate-x-full'
                                        }`}
                                >
                                    <aside>
                                        <ul className="my-4 pb-[40%]">
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Shop by Brand</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-plus" width="15px" height="15px" fill="none" viewBox="0 0 10 10">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
                                                            </path>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Men's Watches</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Women's Watches</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Smart Watches</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Watch Advisor</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Offers</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Gifiting</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>Watch Accessories</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif flex items-center justify-between'>
                                                        <span>JIT Boutique</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.869" height="16.263" viewBox="0 0 17.869 16.263">
                                                            <g id="Group_16235" data-name="Group 16235" transform="translate(-365.5 -105.147)">
                                                                <line id="Line_1192" data-name="Line 1192" x2="17" transform="translate(365.5 113.5)" fill="none" stroke="#000" strokeWidth="1"></line>
                                                                <path id="Path_5767" data-name="Path 5767" d="M359.384,105.5h11v11" transform="translate(195.361 -223.222) rotate(45)" fill="none" stroke="#000" strokeWidth="1"></path>
                                                            </g>
                                                        </svg>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif'>
                                                        <span className='flex items-center text-sm gap-[15px] uppercase'>
                                                            <img src={i} alt="" className='' />
                                                            About Us
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li className='border-b border-[#e7e3e3] p-[5px] w-[95%]'>
                                                <div className='px-[2.2rem] py-[1.1rem]'>
                                                    <p className='text-2xl font-serif'>
                                                        <span className='flex items-center text-sm gap-[15px] uppercase'>
                                                            <img src={book} alt="" className='' />
                                                            Watch Journal
                                                        </span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className='w-full h-[95px] bg-white sticky bottom-0 left-0 flex items-center justify-evenly p-4'>
                                            <div>
                                                <a href="..." className='text-center'>
                                                    <div className='flex justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23.675" height="26.318" viewBox="0 0 23.675 26.318">
                                                            <defs>
                                                                <clipPath id="clip-path">
                                                                    <rect id="Rectangle_3815" data-name="Rectangle 3815" width="23.675" height="26.318" stroke="#000" strokeWidth="1"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g id="Group_15327" data-name="Group 15327" transform="translate(2 5)">
                                                                <g id="Group_12193" data-name="Group 12193" transform="translate(-2 -5)" clipPath="url(#clip-path)">
                                                                    <path id="Path_5856" data-name="Path 5856" d="M31.748,10.1A5.051,5.051,0,1,1,36.8,5.051,5.057,5.057,0,0,1,31.748,10.1m0-9.519a4.468,4.468,0,1,0,4.468,4.468A4.473,4.473,0,0,0,31.748.583" transform="translate(-19.91 3.999)" stroke="#000" strokeWidth="1"></path>
                                                                    <path id="Path_5857" data-name="Path 5857" d="M20.476,67.387H0V66.174a10.238,10.238,0,1,1,20.476,0ZM.583,66.8H19.893v-.63a9.655,9.655,0,0,0-19.311,0Z" transform="translate(1.6 -41.069)" stroke="#000" strokeWidth="1"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className='mt-1'>Log in</p>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="..." className='text-center'>
                                                    <div className='flex justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35.222" height="27.906" viewBox="0 0 35.222 27.906" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <defs>
                                                                <clipPath id="clip-path">
                                                                    <rect id="Rectangle_3817" data-name="Rectangle 3817" width="35.222" height="27.906" fill="#080101"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g id="Group_12196" data-name="Group 12196" opacity="0.6">
                                                                <path id="Path_5858" data-name="Path 5858" d="M0,0V.719H22.2V23.071H4.2V13.33H0v.719H3.486V23.79H22.918V0Z" transform="translate(0 0)" fill="#080101"></path>
                                                                <rect id="Rectangle_3816" data-name="Rectangle 3816" width="8.972" height="0.719" transform="translate(0 6.836)" fill="#080101"></rect>
                                                                <path id="Path_5859" data-name="Path 5859" d="M93.361,31.744h7.151l4.434,5.912v9.006H93.361Zm-.719-.719V47.381h13.024V37.417l-4.794-6.392Z" transform="translate(-70.443 -23.591)" fill="#080101"></path>
                                                                <g id="Group_12195" data-name="Group 12195">
                                                                    <g id="Group_12194" data-name="Group 12194" clipPath="url(#clip-path)">
                                                                        <path id="Path_5860" data-name="Path 5860" d="M29.062,101.869A3.455,3.455,0,0,1,25.61,98.42a3.394,3.394,0,0,1,.2-1.149l.677.243a2.678,2.678,0,0,0-.156.906,2.732,2.732,0,1,0,5.31-.909l.679-.237a3.454,3.454,0,0,1-3.255,4.6" transform="translate(-19.473 -73.963)" fill="#080101"></path>
                                                                        <path id="Path_5861" data-name="Path 5861" d="M108.868,101.869a3.453,3.453,0,0,1-3.449-3.449,3.4,3.4,0,0,1,.2-1.149l.677.243a2.666,2.666,0,0,0-.156.906,2.732,2.732,0,0,0,5.463,0,2.765,2.765,0,0,0-.153-.909l.678-.237a3.454,3.454,0,0,1-3.258,4.6" transform="translate(-80.159 -73.963)" fill="#080101"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className='mt-1'>Track Order</p>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="..." className='text-center'>
                                                    <div className='flex justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Group_12592" data-name="Group 12592" width="30.961" height="30.987" viewBox="0 0 30.961 30.987" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <defs>
                                                                <clipPath id="clip-path">
                                                                    <rect id="Rectangle_4006" data-name="Rectangle 4006" width="30.961" height="30.987" fill="#080101"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g id="Group_12592-2" data-name="Group 12592" transform="translate(0 0)" clipath="url(#clip-path)">
                                                                <path id="Path_5990" data-name="Path 5990" d="M23.917,30.987l-.2,0a14.691,14.691,0,0,1-7.3-2.3A38.637,38.637,0,0,1,2.061,14.1,15.272,15.272,0,0,1,.05,8.113,8.292,8.292,0,0,1,1.6,2.227,5.127,5.127,0,0,1,6.269.01,1.4,1.4,0,0,1,7.325.557C8.241,2.1,9.186,3.747,10.3,5.747a3.369,3.369,0,0,1,.3.876c.019.078.038.156.058.232a1.272,1.272,0,0,1-.744,1.618,19.249,19.249,0,0,0-1.99,1.105,2.074,2.074,0,0,0-1.051,1.238A1.883,1.883,0,0,0,7.3,12.239a24.588,24.588,0,0,0,2.754,3.311c2.266,2.264,4.629,4.512,6.913,6.685l.926.881a5.212,5.212,0,0,0,1.121.743,1.451,1.451,0,0,0,2.131-.487,16.812,16.812,0,0,0,1.3-2.237A1.269,1.269,0,0,1,24.22,20.4c1.236.54,2.7,1.192,4.166,1.928A8.183,8.183,0,0,1,29.451,23c.252.179.49.349.74.495a1.529,1.529,0,0,1,.77,1.462,5.361,5.361,0,0,1-2.652,4.733,8,8,0,0,1-4.393,1.3M5.912.846A4.294,4.294,0,0,0,2.28,2.725a7.471,7.471,0,0,0-1.388,5.3A14.45,14.45,0,0,0,2.8,13.687,37.806,37.806,0,0,0,16.848,27.958a13.881,13.881,0,0,0,6.885,2.18h0a7.171,7.171,0,0,0,4.118-1.159,4.506,4.506,0,0,0,2.263-4.021c0-.4-.082-.575-.35-.731-.283-.165-.549-.353-.8-.536a7.433,7.433,0,0,0-.954-.61c-1.451-.727-2.9-1.373-4.126-1.909-.236-.1-.435-.144-.67.335a17.622,17.622,0,0,1-1.372,2.351,2.282,2.282,0,0,1-3.224.746,5.889,5.889,0,0,1-1.3-.875l-.926-.881c-2.289-2.177-4.655-4.428-6.928-6.7a25.411,25.411,0,0,1-2.849-3.425,2.676,2.676,0,0,1-.564-2.076A2.861,2.861,0,0,1,7.475,8.861,20.039,20.039,0,0,1,9.553,7.708c.318-.15.38-.287.288-.634-.022-.083-.043-.168-.063-.252a2.731,2.731,0,0,0-.217-.663C8.451,4.166,7.51,2.523,6.6.99A.743.743,0,0,0,6.222.855c-.1-.006-.208-.009-.31-.009" transform="translate(0 0)" fill="#080101"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className='mt-1'>Call Us</p>
                                                </a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>

                                {/* Overlay */}
                                {cartOpen && (
                                    <div
                                        className="fixed inset-0 bg-[#0000006f]"
                                        onClick={toggleSidebar}
                                    ></div>
                                )}
                            </div>
                        </ul>
                    </div>
                </header >

                {/* navbar */}
                < nav className='border-t border-t-[#cdc6c6] border-b border-b-[#a5a5a54a] py-2 hidden lg:block' >
                    <ul className='mx-auto w-[72%] py-1 flex justify-evenly items-center font-serif'>
                        <li className='relative inline-block'>
                            <div>
                                <Link
                                    onClick={toggleDropdown}
                                    className={`text-sm px-3 py-3 ${isOpen ? 'bg-[#ffffff83] text-black' : ''} ${isWhiteTheme ? 'text-black' : 'text-white'} `}>
                                    Shop by Brand
                                </Link>
                            </div>
                            {isOpen && (
                                <div class="absolute left-0 mt-[10px] z-10 w-[860px] h-[60vh] overflow-y-scroll rounded-b-2xl bg-[#F0F0F0]" ref={dropdownRef} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="px-[44px] py-[22px]" role="none">
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-[1.757vw] my-[22px] text-[#070101] font-serif'>Our Brands</h3>
                                            <div>
                                                <Link onClick={() => setIsOpen(false)} to="allBrand" className='text-[1.171vw] underline text-[#070101] uppercase'>view all</Link>
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
                            <Link to="mensWatches" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>Men's Watches</Link>
                        </li>
                        <li>
                            <Link to="womensWatches" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>Women's Watches</Link>
                        </li>
                        <li>
                            <Link to="gifting" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>Gifting</Link>
                        </li>
                        <li>
                            <Link to="offers" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>Offers</Link>
                        </li>
                        <li>
                            <Link to="watchAccessories" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>Watch Accessories</Link>
                        </li>
                        <li>
                            <Link to="findstores" className={`text-sm ${isWhiteTheme ? "text-black" : "text-white"}`}>JIT Boutique</Link>
                        </li>
                    </ul>
                </nav >
            </section >
        </>
    )
}

export default Header