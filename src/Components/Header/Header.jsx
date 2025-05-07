import React, { useMemo, useState, useRef, useEffect } from 'react'

// image import 
import white_logo from "../../assets/white_logo.png"

// PopUp
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_CART, UPDATE_QUANTITY } from '../../Redux/Actions/Action';

// react icon 
import { IoIosSearch } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from 'react-router-dom';
import OurBrand from '../OurBrand/OurBrand';
import { VscChromeClose } from "react-icons/vsc";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

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
            return total + item.rate * quantity;
        }, 0);
    }, [cartItems, quantities]);


    return (
        <>
            <section className='bg-black'>
                {/* header */}
                <header className='container mx-auto px-[15px] md:px-[50px] pt-3.5 pb-3 flex items-center justify-between'>
                    <Link to={"/"}>
                        <img src={white_logo} alt="" className='w-full max-w-[182px] h-auto' />
                    </Link>
                    <div className='flex items-center'>
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
                                <Link to={"/wishlist"}>
                                    <div className='relative'>
                                        <FaRegHeart className='text-xl text-white' />
                                        {wishlistItems.length > 0 && (
                                            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                                {wishlistItems.length}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </li>

                            <div className='pr-[18px]'>
                                <Popup
                                    trigger={
                                        <button className="button text-white flex items-center gap-1 cursor-pointer">
                                            <div className='relative'>
                                                <FiShoppingBag className='text-xl text-white' />
                                                <p className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{data.length}</p>
                                            </div>
                                        </button>}
                                    modal
                                    nested
                                >
                                    {(close) => (
                                        <div className="modal overflow-y-scroll h-[60vh]">
                                            <section className=''>
                                                <div className='align-middle'>
                                                    <div className='py-4 px-6 flex justify-between items-center border-b'>
                                                        <h4 className=' text-lg'>Your Cart</h4>
                                                        <button className="close cursor-pointer" onClick={close}>
                                                            <VscChromeClose />
                                                        </button>
                                                    </div>
                                                    <div className=''>
                                                        {cartItems.length === 0 ? (
                                                            <p className="text-center text-gray-500 py-4">
                                                                Your cart is empty.
                                                            </p>
                                                        ) : (
                                                            cartItems.map((item) => {
                                                                return (
                                                                    <div key={item.id} className=''>
                                                                        <div className='py-4 px-6'>
                                                                            <div className='flex py-3'>
                                                                                <img src={item.img} alt="" className='w-[30%]' />
                                                                                <div className='mx-4 block flex-1'>
                                                                                    <h2 className='text-xl font-semibold font-serif'>{item.brand}</h2>
                                                                                    <p className='text-[1.1713vw] py-1'>{item.text}</p>
                                                                                    <h3 className='text-xl font-semibold font-serif'>₹ {item.price}</h3>
                                                                                    <div className='mt-5'>
                                                                                        <button onClick={() => removeFromCart(item.id)} className='underline hover:no-underline text-stone-600 cursor-pointer'>Remove</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <input onChange={(event) => changeQuantity(event, item.id)}
                                                                                        type="number"
                                                                                        name='number'
                                                                                        min="1"
                                                                                        value={quantities[item.id] || 1}
                                                                                        className='mb-3 w-[70px] h-[38px] px-1 bg-stone-50 border border-stone-300' />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        )}
                                                    </div>
                                                    <div className='sticky bottom-0 bg-white'>
                                                        {cartItems.length > 0 &&
                                                            <div className='border-t px-4 py-3'>
                                                                <div className='flex justify-between mb-4'>
                                                                    <h4>Subtotal</h4>
                                                                    <h4 className='font-medium'>₹ {subtotal.toFixed(2)}</h4>
                                                                </div>
                                                                <div className=''>
                                                                    <a href=".." className='bg-black text-white border border-black w-full block px-6 py-3 text-sm text-center transition-transform hover:bg-white hover:text-black '>Continue to Checkout</a>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                            {/* mobile manu */}
                            <a href="..." className='block lg:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-hamburger" width="23.098" height="13.628" viewBox="0 0 23.098 13.628">
                                    <g id="Group_16114" data-name="Group 16114" transform="translate(-5071.5 -1073.286)">
                                        <line id="Line_3078" data-name="Line 3078" x2="22.098" transform="translate(5072 1073.786)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="1"></line>
                                        <line id="Line_3079" data-name="Line 3079" x2="11.049" transform="translate(5083.049 1080.1)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="1"></line>
                                        <line id="Line_3080" data-name="Line 3080" x2="22.098" transform="translate(5072 1086.414)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="1"></line>
                                    </g>
                                </svg>
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
                                    className={`text-sm px-3 py-3 ${isOpen ? 'text-black bg-[#F0F0F0]' : 'text-white'}`}>
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
                            <Link to="mensWatches" className='text-sm text-white'>Men's Watches</Link>
                        </li>
                        <li>
                            <Link to="womensWatches" className='text-sm text-white'>Women's Watches</Link>
                        </li>
                        <li>
                            <Link to="gifting" className='text-sm text-white'>Gifting</Link>
                        </li>
                        <li>
                            <Link to="offers" className='text-sm text-white'>Offers</Link>
                        </li>
                        <li>
                            <Link to="watchAccessories" className='text-sm text-white'>Watch Accessories</Link>
                        </li>
                        <li>
                            <Link to="findstores" className='text-sm text-white'>JIT Boutique</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header