import React from 'react'

// react icon
import { FaXTwitter, FaSquareFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <hr className='h-1.5 bg-[#C1271B]' />
            <footer className='bg-[#060d36] py-9'>
                <div className='pb-[2%]'>
                    <div className='flex justify-evenly items-center pb-4 border-b border-[#707070]'>
                        <div className='flex items-center gap-4 pl-[3%] md:pl-0'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Group_14580" data-name="Group 14580" width="34.803" height="30.793" viewBox="0 0 34.803 30.793" style={{ fill: "white" }}>
                                    <g id="Group_14577" data-name="Group 14577" transform="translate(1.96)">
                                        <path id="Path_6878" data-name="Path 6878" d="M-857.412,509.326a14.482,14.482,0,0,1,7.39-2.015,14.55,14.55,0,0,1,14.55,14.55,14.481,14.481,0,0,1-2.015,7.389l.618.618a15.324,15.324,0,0,0,2.244-8.007,15.4,15.4,0,0,0-15.4-15.4,15.324,15.324,0,0,0-8.007,2.244Z" transform="translate(865.42 -506.465)"></path>
                                        <path id="Path_6879" data-name="Path 6879" d="M-932.868,625.307a14.482,14.482,0,0,1-7.332,1.98,14.55,14.55,0,0,1-14.55-14.55,14.482,14.482,0,0,1,1.98-7.332l-.618-.618a15.324,15.324,0,0,0-2.209,7.95,15.4,15.4,0,0,0,15.4,15.4,15.324,15.324,0,0,0,7.95-2.209Z" transform="translate(955.596 -597.341)"></path>
                                    </g>
                                    <g id="Group_14578" data-name="Group 14578" transform="translate(0 7.086)">
                                        <rect id="Rectangle_5066" data-name="Rectangle 5066" width="5.153" height="0.644" transform="translate(0 2.014) rotate(-23.013)"></rect>
                                        <rect id="Rectangle_5067" data-name="Rectangle 5067" width="5.153" height="0.644" transform="translate(6.171 5.01) rotate(-113.013)"></rect>
                                    </g>
                                    <g id="Group_14579" data-name="Group 14579" transform="translate(28.039 18.765)">
                                        <rect id="Rectangle_5068" data-name="Rectangle 5068" width="5.153" height="0.644" transform="translate(6.764 2.995) rotate(156.987)"></rect>
                                        <rect id="Rectangle_5069" data-name="Rectangle 5069" width="5.153" height="0.644" transform="translate(0.593 0) rotate(66.987)"></rect>
                                    </g>
                                    <path id="Path_6880" data-name="Path 6880" d="M-754.674,657.367a.226.226,0,0,1-.151-.03.317.317,0,0,1-.151-.272v-9.03a.317.317,0,0,1,.151-.272l8.4-4.44a.275.275,0,0,1,.3,0,.318.318,0,0,1,.151.272l.03,8.849a.317.317,0,0,1-.151.272l-8.426,4.621a.225.225,0,0,1-.151.03Zm.3-9.151v8.336l7.822-4.259-.03-8.185Z" transform="translate(772.131 -632.916)"></path>
                                    <path id="Path_6881" data-name="Path 6881" d="M-858.242,656.992a.272.272,0,0,1-.151-.03l-8.487-4.53a.283.283,0,0,1-.151-.272v-8.97a.317.317,0,0,1,.151-.272.274.274,0,0,1,.3,0l4.53,2.356,3.987,2.114a.317.317,0,0,1,.151.272v9.03a.317.317,0,0,1-.151.272.384.384,0,0,1-.181.03Zm-8.185-5.013,7.883,4.2v-8.336l-3.805-2.023-1.691-.876-2.386-1.238Z" transform="translate(875.699 -632.541)"></path>
                                    <path id="Path_6882" data-name="Path 6882" d="M-858.242,591.57a.272.272,0,0,1-.151-.03l-8.487-4.47a.317.317,0,0,1-.151-.272.317.317,0,0,1,.151-.272l8.456-4.621a.274.274,0,0,1,.3,0l8.426,4.651a.317.317,0,0,1,.151.272.317.317,0,0,1-.151.272l-8.4,4.44a1.314,1.314,0,0,1-.151.03Zm-7.852-4.772,7.852,4.138,7.732-4.108-7.792-4.319Z" transform="translate(875.699 -576.149)"></path>
                                    <path id="Path_6883" data-name="Path 6883" d="M-827.554,609.691a.273.273,0,0,1-.151-.03l-1.691-.876a.317.317,0,0,1-.151-.272v-2.507a.317.317,0,0,1,.151-.272l8.245-4.651a.306.306,0,0,1,.423.121.306.306,0,0,1-.121.423l-8.125,4.56v2.144l1.087.574v-2.023a.317.317,0,0,1,.151-.272l8.215-4.621a.306.306,0,0,1,.423.121.306.306,0,0,1-.121.423l-8.034,4.53v2.326a.361.361,0,0,1-.151.272.329.329,0,0,1-.151.03Z" transform="translate(841.054 -593.878)"></path>
                                    <path id="Path_6884" data-name="Path 6884" d="M-732.433,718.343a.111.111,0,0,1-.091-.03l-1.51-.544h-.03c-.03-.03-.091-.06-.121-.091,0-.03-.03-.03-.03-.06a.384.384,0,0,1-.03-.181l.362-1.782a.313.313,0,0,1,.362-.242.294.294,0,0,1,.242.3v.06l-.242,1.117,2.567-1.48a1.156,1.156,0,0,1,.846-.121,1.144,1.144,0,0,1,.695.544l.966,2.023a.3.3,0,0,1-.151.393.3.3,0,0,1-.393-.151l-.966-1.993a.479.479,0,0,0-.3-.242.386.386,0,0,0-.362.06l-2.6,1.51.906.332a.314.314,0,0,1,.181.393A.354.354,0,0,1-732.433,718.343Z" transform="translate(752.97 -699.45)"></path>
                                </svg>
                            </div>
                            <div>
                                <p className='text-white text-[2.5vw] lg:text-[1.025vw]'>Easy Returns</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36.38" height="24.794" viewBox="0 0 36.38 24.794" style={{ fill: "white" }}>
                                    <g id="Group_16157" data-name="Group 16157" transform="translate(-1012.571 -464)">
                                        <path id="Path_6388" data-name="Path 6388" d="M37.294,21.514a.52.52,0,0,0-.367-.152H29.793V16.667a.52.52,0,0,0-.52-.52H5.52a.52.52,0,0,0-.52.52V36.945a.52.52,0,0,0,.52.52H9.212a3.992,3.992,0,0,0,7.916,0H31.109a3.991,3.991,0,0,0,7.916,0h1.836a.52.52,0,0,0,.52-.52V25.815a.52.52,0,0,0-.152-.368l-3.934-3.934Zm3.047,4.516v2.284H33.849V22.4h2.863l3.629,3.63ZM28.754,17.187V30.632H6.039V17.186H28.754ZM6.039,31.671H28.754v4.754H17.129a3.992,3.992,0,0,0-7.916,0H6.039Zm7.131,8.23a2.956,2.956,0,1,1,2.957-2.957A2.96,2.96,0,0,1,13.171,39.9Zm21.9,0a2.956,2.956,0,1,1,2.956-2.957A2.96,2.96,0,0,1,35.067,39.9Zm3.958-3.476a3.991,3.991,0,0,0-7.916,0H29.793V22.4h3.016v6.433a.52.52,0,0,0,.52.52h7.012v7.071Z" transform="translate(1007.571 447.853)"></path>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className='text-white text-[2.5vw] lg:text-[1.025vw]'>Free Shipping</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Group_14997" data-name="Group 14997" width="24.553" height="30.541" viewBox="0 0 24.553 30.541" style={{ fill: "white" }}>
                                    <g id="Group_14586" data-name="Group 14586">
                                        <g id="Group_14581" data-name="Group 14581" transform="translate(1.677)">
                                            <path id="Path_6885" data-name="Path 6885" d="M-1052.957,675.125a10.465,10.465,0,0,1-10.453-10.454,10.465,10.465,0,0,1,10.453-10.453,10.465,10.465,0,0,1,10.453,10.453A10.466,10.466,0,0,1-1052.957,675.125Zm0-20.373a9.93,9.93,0,0,0-9.919,9.919,9.931,9.931,0,0,0,9.919,9.919,9.93,9.93,0,0,0,9.919-9.919A9.93,9.93,0,0,0-1052.957,654.752Z" transform="translate(1063.41 -654.218)"></path>
                                        </g>
                                        <g id="Group_14582" data-name="Group 14582" transform="translate(4.035 2.358)">
                                            <path id="Path_6886" data-name="Path 6886" d="M-1011.17,714.552a8.1,8.1,0,0,1-8.1-8.1,8.1,8.1,0,0,1,8.1-8.095,8.1,8.1,0,0,1,8.1,8.095A8.1,8.1,0,0,1-1011.17,714.552Zm0-15.656a7.569,7.569,0,0,0-7.561,7.561,7.569,7.569,0,0,0,7.561,7.561,7.569,7.569,0,0,0,7.561-7.561A7.569,7.569,0,0,0-1011.17,698.9Z" transform="translate(1019.265 -698.362)"></path>
                                        </g>
                                        <g id="Group_14583" data-name="Group 14583" transform="translate(0.645 17.698) rotate(3)">
                                            <path id="Path_6887" data-name="Path 6887" d="M5.688,12.327l-1.517-3.9L0,10.173,4.5,0,5,.158.974,9.263l3.512-1.47,1.24,3.187L9.683,2.248l.5.161Z"></path>
                                        </g>
                                        <g id="Group_14584" data-name="Group 14584" transform="matrix(0.998, -0.07, 0.07, 0.998, 13.536, 18.069)">
                                            <path id="Path_6888" data-name="Path 6888" d="M4.494,12.327,0,2.409l.5-.161L4.456,10.98,5.7,7.793l3.513,1.47L5.181.158,5.682,0l4.5,10.173L6.011,8.428Z"></path>
                                        </g>
                                        <g id="Group_14585" data-name="Group 14585" transform="translate(7.864 5.76)">
                                            <path id="Path_6889" data-name="Path 6889" d="M-943.89,762.392l-.929,2.038-2.226.254a.623.623,0,0,0-.522.426.623.623,0,0,0,.172.652l1.651,1.514-.446,2.195a.623.623,0,0,0,.244.628.623.623,0,0,0,.673.038l1.95-1.1,1.95,1.1a.624.624,0,0,0,.673-.038.623.623,0,0,0,.244-.628l-.446-2.195,1.651-1.514a.623.623,0,0,0,.172-.652.623.623,0,0,0-.522-.426l-2.225-.254-.929-2.038a.622.622,0,0,0-.567-.364.623.623,0,0,0-.567.364Zm.338.154a.252.252,0,0,1,.229-.147.253.253,0,0,1,.229.147l.973,2.134a.187.187,0,0,0,.148.108l2.33.266a.252.252,0,0,1,.21.172.251.251,0,0,1-.069.263l-1.728,1.585a.187.187,0,0,0-.057.174l.467,2.3a.251.251,0,0,1-.1.253.251.251,0,0,1-.271.015l-2.041-1.154a.188.188,0,0,0-.183,0l-2.041,1.154a.252.252,0,0,1-.272-.015.25.25,0,0,1-.1-.253l.467-2.3a.187.187,0,0,0-.057-.174l-1.729-1.585a.251.251,0,0,1-.069-.263.252.252,0,0,1,.21-.172l2.33-.266a.186.186,0,0,0,.148-.108l.973-2.134Z" transform="translate(947.597 -762.028)" fill-rule="evenodd"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className='text-white text-[2.5vw] lg:text-[1.025vw]'>100% Authentic Products</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-10 lg:pl-40 pb-20'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                        <div>
                            <h2 className='text-[3.500vw] lg:text-[14.9888px] text-white mb-8 font-serif font-bold'>About Company</h2>
                            <ul className='text-white opacity-55 text-[3vw] lg:text-[1.025vw]'>
                                <li className='mr-6 pb-2'>
                                    <Link to="aboutUs" className=''>About Us</Link>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Store Locator</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Blogs</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Franchise</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Careers</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Annual Results</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Press Releases</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[3.500vw] lg:text-[14.9888px] text-white mb-8 font-serif font-bold'>Online Shopping</h2>
                            <ul className='text-white opacity-55 text-[3vw] lg:text-[1.025vw]'>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>New Arrivals</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Men's Watches</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Women's Watches</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Smart Watches</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Watch Offers</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Watch Servicing</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[3.500vw] lg:text-[14.9888px] text-white mb-8 font-serif font-bold'>Useful Links</h2>
                            <ul className='text-white opacity-55 text-[3vw] lg:text-[1.025vw]'>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Corporate Gifting</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Track Order</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Return Request</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Terms and Condition</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Cancellation Return & Refund</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Privacy Policy</a>
                                </li>
                                <li className='mr-6 pb-2'>
                                    <a href="..." className=''>Shipping and Dispatch Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[3.500vw] lg:text-[14.9888px] text-white mb-8 font-serif font-bold'>Social Media</h2>
                            <ul className='text-white flex flex-wrap items-center space-x-4'>
                                <li className=''>
                                    <a href="..." className='text-2xl'><FaXTwitter /></a>
                                </li>
                                <li className=''>
                                    <a href="..." className='text-2xl'><FaSquareFacebook /></a>
                                </li>
                                <li className=''>
                                    <a href="..." className='text-2xl'><FaInstagram /></a>
                                </li>
                                <li className=''>
                                    <a href="..." className='text-2xl'><FaYoutube /></a>
                                </li>
                                <li className=''>
                                    <a href="..." className='text-2xl'><FaLinkedinIn /></a>
                                </li>
                            </ul>
                            <div className='w-[55%] text-white opacity-55 mt-6'>
                                <small className=''>© Copyright 2025, <a href="...." className='hover:underline'>Just In Time</a></small>
                                <small>, All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer