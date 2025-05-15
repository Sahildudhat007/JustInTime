import React from 'react';

// component import
import Breadcrumb from '../Breadcrumb/Breadcrumb';

// image import
import login_desktop from "../../assets/login_desktop.webp";

function User() {
    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Account" />
            </div>
            <section className='md:w-[700px] lg:w-[904px] mx-auto py-[30px] my-[50px]'>
                <div className='flex flex-wrap md:flex-nowrap relative'>
                    <div className='w-full h-auto md:w-[50%]'>
                        <img src={login_desktop} alt="" className='md:rounded-l-lg' />
                    </div>
                    <div className='w-full md:w-[50%] absolute md:relative bottom-0 bg-white rounded-t-lg md:rounded-r-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <div className='py-5 px-[30px]'>
                            <h1 className='text-xl font-serif text-[#363535] mb-[13px] text-center'>Login</h1>
                            <form action="/account/login" className='w-full max-w-[500px] mx-auto mt-10 pb-[38px]'>
                                <div className='flex items-center'>
                                    <p className='w-[27%] h-[55px] mr-[5px] rounded-[8px] flex justify-center items-center text-[#626262] border border-[#d7d7d7]'>+91</p>
                                    <input type="number" placeholder='Phone number' className='w-[75%] h-[55px] p-[15px] rounded-[8px] border border-[#d7d7d7] outline-0' />
                                </div>
                                <button className='w-full h-[50px] rounded-[8px] my-[15px] uppercase px-[30px] text-sm bg-black text-white cursor-pointer'>Get Otp</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default User