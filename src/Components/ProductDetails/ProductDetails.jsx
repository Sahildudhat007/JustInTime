import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { ADD_CART, ADD_WISHLIST } from "../../Redux/Actions/Action";

// image import
// import detail_side_img1 from "../../assets/detail_side_img1.webp";
// import detail_side_img2 from "../../assets/detail_side_img2.jpg";
// import detail_side_img3 from "../../assets/detail_side_img3.webp";
// import detail_side_img4 from "../../assets/detail_side_img4.webp";
import group1 from "../../assets/group1.svg";
import group2 from "../../assets/group2.svg";
import group3 from "../../assets/group3.svg";
import just_in_time from "../../assets/just_in_time.png";
import phone_pay from "../../assets/phone_pay.svg";
import gpay from "../../assets/gpay.svg";
import bajaj from "../../assets/bajaj.svg";
import paytm from "../../assets/paytm.svg";
import bg_img from "../../assets/bg_img.svg";
import month from "../../assets/month.webp";
// import wishlist from "../../assets/wishlist.png";

// react icon
import { GoArrowRight } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

// component import
import MenWomenData from '../MenWomenData/MenWomenData';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function ProductDetails() {

    const [isRed, setIsRed] = useState(false);

    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = Number(id);

    const imageUrl = bg_img;

    const product =
        MenWomenData.menData.find(item => item.id === productId) ||
        MenWomenData.womenData.find(item => item.id === productId) ||
        MenWomenData.offerData.find(item => item.id === productId) ||
        MenWomenData.arrivalData.find(item => item.id === productId) ||
        MenWomenData.smartData.find(item => item.id === productId);

    // Handle if product is not found
    if (!product) {
        return <div className="text-center text-red-500 mt-10">Product not found.</div>;
    }

    const { img, brand, text, price } = product;

    // add to wishlist
    const addToWishlist = () => {
        dispatch(ADD_WISHLIST(product));
        setIsRed(true);
    };

    // add to cart
    const addToCart = () => {
        dispatch(ADD_CART(product));
    };

    return (
        <>
            <section className='md:w-[87%] mx-auto pt-9 pb-3'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2.8rem] md:gap-[3rem]'>
                    <div className=''>
                        <div>
                            <img src={img} alt="" className='w-full lg:w-[493px] rounded-lg' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='px-[7.5%] md:px-0'>
                            <div className=''>
                                <p className='text-[#080101] text-2xl uppercase font-semibold font-serif'>{brand}</p>
                            </div>
                            <hr className='my-[7px] text-[#12121233]' />
                            <div className='w-[80%] mb-[.8rem]'>
                                <h1 className='text-[#070101] text-[16px] md:text-2xl'>{text}</h1>
                            </div>
                            <p className='text-sm text-gray-400'> A832 </p>
                            <div className='mt-5 flex items-center justify-between'>
                                <div>
                                    <h2 className='text-[#070101] text-xl md:text-2xl font-semibold'>₹ {price}</h2>
                                    <p className='text-[#707071] text-sm leading-3'>(Inc. of all taxes)</p>
                                </div>
                                <div>
                                    <p className='text-sm font-semibold'>Free <span><a href="..." className='underline font-bold'>Shipping</a></span>  on all Orders</p>
                                </div>
                            </div>
                            <div className='mt-[30px] mb-[15px]'>
                                <div className='flex justify-between items-center mb-[5px]'>
                                    <p className='text-[#221c1c] text-lg md:text-xl font-serif'>Select Dial Size</p>
                                    <div className='flex items-center'>
                                        <a href="..." className='flex items-center gap-[5px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18.513" viewBox="0 0 15 18.513">
                                                <g id="Icon" transform="translate(-0.493 -2.5)">
                                                    <g id="Artboard" transform="translate(0.745 3)">
                                                        <g id="watch" transform="translate(0)">
                                                            <circle id="Oval" cx="7" cy="7" r="7" transform="translate(0.248 1.756)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></circle>
                                                            <path id="Shape" d="M11.462,16.078,11.114,17.7a1.989,1.989,0,0,1-1.989,1.81H4.818A1.989,1.989,0,0,1,2.828,17.7L2.48,16.493m0-11.657L2.838,3.81A1.989,1.989,0,0,1,4.818,2H9.145a1.989,1.989,0,0,1,1.989,1.81l.348,1.624" transform="translate(0.267 -2)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" fillRule="evenodd"></path>
                                                            <g id="Group_48403" data-name="Group 48403" transform="translate(2.529 4.051)">
                                                                <g id="Group_48402" data-name="Group 48402" transform="translate(0 0)">
                                                                    <line id="Line_4625" data-name="Line 4625" y1="4.941" x2="4.941" transform="translate(2.273 2.235)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="0.7"></line>
                                                                    <path id="Polygon_334" data-name="Polygon 334" d="M1.482,0,2.965,1.976H0Z" transform="matrix(0.719, 0.695, -0.695, 0.719, 7.307, 0)"></path>
                                                                    <path id="Polygon_335" data-name="Polygon 335" d="M1.482,0,2.965,1.976H0Z" transform="matrix(-0.719, -0.695, 0.695, -0.719, 2.133, 9.41)"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <p className='uppercase text-[2.804vw] md:text-sm underline'>Size Guide</p>
                                        </a>
                                    </div>
                                </div>
                                <button className='bg-[#060d36] text-white p-[5.2px] md:py-2 md:px-[.8rem] rounded-md text-sm'>47 mm</button>
                            </div>
                        </div>
                        <div className='my-6 py-2.5 px-[7.5%] md:px-[13px] bg-[#f7f7f7]'>
                            <div className='mb-[1.5%]'>
                                <h3 className='text-[#221c1c] text-lg font-serif'>Offers Available</h3>
                            </div>
                            <div>
                                <div className='flex items-center gap-[3%] mb-3'>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 11.812 11.812">
                                            <path id="Icon_material-local-offer" data-name="Icon material-local-offer" d="M14.463,8.658,9.148,3.343A1.174,1.174,0,0,0,8.315,3H4.181A1.185,1.185,0,0,0,3,4.181V8.315a1.179,1.179,0,0,0,.348.839l5.315,5.315a1.174,1.174,0,0,0,.833.343,1.155,1.155,0,0,0,.833-.348l4.134-4.134a1.155,1.155,0,0,0,.348-.833,1.193,1.193,0,0,0-.348-.839Zm-9.4-2.7a.886.886,0,1,1,.886-.886A.885.885,0,0,1,5.067,5.953Z" transform="translate(-3 -3)" fill="#C1271B"></path>
                                        </svg>
                                    </p>
                                    <p className='text-[#6f6f6f] text-xs md:text-sm'>
                                        <strong className='text-black'>Upto Rs. 200 Off on Prepaid Orders.</strong> | TnC apply.
                                    </p>
                                </div>
                                <div className='flex items-center gap-[3%] mb-3'>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 11.812 11.812">
                                            <path id="Icon_material-local-offer" data-name="Icon material-local-offer" d="M14.463,8.658,9.148,3.343A1.174,1.174,0,0,0,8.315,3H4.181A1.185,1.185,0,0,0,3,4.181V8.315a1.179,1.179,0,0,0,.348.839l5.315,5.315a1.174,1.174,0,0,0,.833.343,1.155,1.155,0,0,0,.833-.348l4.134-4.134a1.155,1.155,0,0,0,.348-.833,1.193,1.193,0,0,0-.348-.839Zm-9.4-2.7a.886.886,0,1,1,.886-.886A.885.885,0,0,1,5.067,5.953Z" transform="translate(-3 -3)" fill="#C1271B"></path>
                                        </svg>
                                    </p>
                                    <p className='text-[#6f6f6f] text-xs md:text-sm'>
                                        <strong className='text-black'>10% cashback up to ₹1000. Select Just In Time Pay Later at the checkout</strong> | Offer Applicable only on First purchase | TnC Apply.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full px-[7.5%] md:px-0 md:w-[373px] mt-16 mb-2.5 mx-auto'>
                            <div className='py-4 px-[15px] bg-[#f9f9f9] border border-[#e5e5e5] rounded-[10px]'>
                                <h3 className='text-lg mb-[13px] font-serif'>Check Delivery</h3>
                                <div className='flex border border-[#d3cccc] p-2.5 rounded-md'>
                                    <input type="text" placeholder='Enter Pincode' className='w-full outline-0' />
                                    <button className='cursor-pointer text-gray-500'>CHECK</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-1'>
                            <span className='w-[6%] h-[1px] bg-[#3b3737]'></span>
                            <p className='text-xs font-semibold md:font-normal md:text-sm'>Want to check availability at store?</p>
                            <a href="..." className='text-[#c1271b] text-[13px] font-semibold'>FIND STORE</a>
                            <span className='w-[6%] h-[1px] bg-[#3b3737]'></span>
                        </div>
                        <hr className='mt-[35px] text-[#12121233]' />
                        <div className='mt-[15px] mb-10 px-[7.5%] md:px-0'>
                            <div className='flex justify-around'>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={group1} alt="" className='w-[30px] md:w-auto' />
                                    </div>
                                    <p className='text-[#707070] text-xs md:text-sm mt-1 text-center'>Discount On <br /> Prepaid Order</p>
                                </div>
                                <div className='w-[40%] border-l border-r border-[#0000004d]'>
                                    <div className='flex justify-center'>
                                        <img src={group2} alt="" className='w-[30px] md:w-auto' />
                                    </div>
                                    <p className='text-[#707070] text-xs md:text-sm mt-1 text-center'>7 Day Returns <br /> No Questions Asked</p>
                                </div>
                                <div>
                                    <div className='flex justify-center'>
                                        <img src={group3} alt="" className='w-[30px] md:w-auto' />
                                    </div>
                                    <p className='text-[#707070] text-xs md:text-sm mt-1 text-center'>Servicing <br /> available</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-3 px-[15px] mx-1 mb-2.5 md:mb-[30px] bg-[#faf1e7] rounded-lg flex justify-between items-center'>
                            <div className='w-[18vw] md:w-[150px] bg-white p-2 md:p-5 rounded-lg mr-[11px]'>
                                <img src={just_in_time} alt="" />
                            </div>
                            <div>
                                <span className='pb-[3px] text-sm md:text-[15px]'>
                                    <span className=''>Buy with</span>
                                    <span className='pl-[3px] mr-[3px]'>3/6</span>
                                    <span>interest-free</span>
                                </span>
                                <div className='text-sm md:text-[13.586px] text-[#080101]'>
                                    <span>EMIs of just</span>
                                    <span>
                                        <b className='pl-[3px]'>₹</b>
                                        <b>749/Month</b>
                                    </span>
                                    <div className='mt-[4px] flex gap-1.5 items-center'>
                                        <img src={phone_pay} alt="" className='w-[5vw] md:w-[25px]' />
                                        <img src={gpay} alt="" className='w-[5vw] md:w-[25px]' />
                                        <img src={bajaj} alt="" className='w-[5vw] md:w-[25px]' />
                                        <img src={paytm} alt="" className='w-[5vw] md:w-[25px]' />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-full w-[30px] md:w-[35px] h-[30px] md:h-[35px] flex items-center justify-center cursor-pointer'>
                                <GoArrowRight className='text-xl' />
                            </div>
                        </div>
                        <div className='mt-10 md:mb-[50px] bg-[#F7F7F7] border border-[#FAFAFA] py-[18px] md:px-[30px]'>
                            <div className='flex items-center text-center space-x-0.5'>
                                <span className='w-[23%] h-[2px] bg-[#E53E38]'></span>
                                <p className='text-2xl font-serif'>Getting a better Price?</p>
                                <span className='w-[23%] h-[2px] bg-[#E53E38]'></span>
                            </div>
                            <p className='my-[15px] text-center px-[30px] md:px-0 opacity-70'>
                                Now compare prices at Just In Time, speak with our team to get the best price for your watch.
                            </p>
                            <div className='flex justify-center'>
                                <button className='bg-white border border-[#E5E5E5] p-2.5 flex items-center gap-2 rounded-[5px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.063" height="20.153" viewBox="0 0 20.063 20.153">
                                            <path id="_359de351d95fad8e27d4552078092a3b" data-name="359de351d95fad8e27d4552078092a3b" d="M17.14,2.929A9.991,9.991,0,0,0,1.417,14.978L0,20.153l5.3-1.389a9.985,9.985,0,0,0,4.774,1.216h0A9.99,9.99,0,0,0,17.14,2.929M10.074,18.293h0a8.292,8.292,0,0,1-4.226-1.157l-.3-.18L2.4,17.781l.839-3.063-.2-.314a8.3,8.3,0,1,1,7.034,3.89m4.554-6.216c-.25-.125-1.477-.729-1.706-.812s-.4-.125-.562.125-.645.812-.79.978-.291.187-.541.062a6.818,6.818,0,0,1-2.007-1.238A7.521,7.521,0,0,1,7.634,9.464c-.146-.25-.015-.385.109-.509s.25-.291.374-.437a1.7,1.7,0,0,0,.25-.416.459.459,0,0,0-.021-.437c-.062-.125-.562-1.353-.77-1.853s-.408-.421-.562-.428-.312-.009-.478-.009a.917.917,0,0,0-.666.312A2.8,2.8,0,0,0,5,7.768a4.853,4.853,0,0,0,1.019,2.581,11.125,11.125,0,0,0,4.264,3.768,14.377,14.377,0,0,0,1.423.526,3.424,3.424,0,0,0,1.572.1,2.571,2.571,0,0,0,1.685-1.187,2.085,2.085,0,0,0,.146-1.187c-.062-.1-.229-.167-.478-.291" fill="#060d36" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p className='text-sm font-semibold'>Talk To Us</p>
                                </button>
                            </div>
                        </div>
                        <div className='bg-no-repeat pb-14 md:pb-28 flex justify-center items-center' style={{ backgroundImage: `url('${imageUrl}')`, backgroundSize: "100%" }}>
                            <div className='py-[1vw] px-[1.66vw] flex items-center gap-[3.57vw] lg:gap-[0.732vw]'>
                                <div className='w-[70px] md:w-[139px] lg:w-[5.124vw] h-auto lg:h-[5.124vw] mt-2.5'>
                                    <img src={month} alt="" />
                                </div>
                                <div className='mt-2.5'>
                                    <h3 className='md:text-xl text-white font-serif'>24 Months <br />Manufacturer Warranty</h3>
                                    <a href="..." className='text-xs text-white underline'>T&C Applicable</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className='fixed bottom-0 z-10 w-full bg-white py-[5px]'>
                <div className='w-full xl:w-[84%] mx-auto px-5 flex justify-between items-center'>
                    <div className='hidden lg:block'>
                        <p className='text-[16px] border-b border-[#0000004d] uppercase font-serif font-semibold leading-[1.875]'>{brand}</p>
                        <h2 className='mt-1 text-[#070101] text-sm'>{text}</h2>
                        <div className='flex items-center'>
                            <p className='text-[16px] text-[#080101] font-semibold'>₹ {price}</p>
                            <p className='pl-[5px] text-xs text-[#707070]'>(Inc. of all taxes)</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3.5'>
                        <button className='py-5 cursor-pointer' onClick={addToWishlist}>
                            <FaHeart className={`text-[22px] ${isRed ? 'text-red-500' : 'text-stone-400'}`} />
                        </button>
                        <button className='w-[33.879vw] lg:w-[13.616vw] h-[50px] border text-xs rounded-[5px] uppercase py-[15px] px-2.5 cursor-pointer'>
                            Buy Now
                        </button>
                        <button
                            onClick={addToCart}
                            className='w-[33.879vw] lg:w-[13.616vw] h-[50px] border text-xs bg-black text-white rounded-[5px] uppercase py-[15px] px-2.5 cursor-pointer flex items-center justify-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.44" height="18.154" viewBox="0 0 16.44 18.154">
                                <g id="Icon_feather-shopping-bag" data-name="Icon feather-shopping-bag" transform="translate(0.5 0.5)">
                                    <g id="Group_10684" data-name="Group 10684" transform="translate(0 0)">
                                        <path id="Path_93" data-name="Path 93" d="M7.073,3,4.5,6.431V18.439a1.715,1.715,0,0,0,1.715,1.715H18.223a1.715,1.715,0,0,0,1.715-1.715V6.431L17.366,3Z" transform="translate(-4.5 -3)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                        <path id="Path_94" data-name="Path 94" d="M4.5,9H19.939" transform="translate(-4.499 -5.569)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                        <path id="Path_95" data-name="Path 95" d="M18.862,15A3.431,3.431,0,0,1,12,15" transform="translate(-7.711 -8.138)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                    </g>
                                </g>
                            </svg>
                            <span>Add to Bag</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails