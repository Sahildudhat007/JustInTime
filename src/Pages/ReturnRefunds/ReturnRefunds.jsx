import React from 'react';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

function ReturnRefunds() {
    return (
        <>
            <div>
                <Breadcrumb goBackLink="Home" pageTitle="Return & Refunds" />
            </div>

            <section className='container max-w-[55.5rem] mx-auto py-[21px]'>
                <h1 className='text-center text-3xl md:text-4xl lg:text-6xl font-serif mb-[2rem]'>Return & Refunds</h1>
                <div className='py-[60px] md:py-7 px-10 md:px-36 '>
                    <h2 className='my-[17px] text-xl font-semibold'>Returns</h2>
                    <p className='mb-5 text-sm'>Enter your order information to get started.</p>
                    <form>
                        <div className='my-2.5'>
                            <label htmlFor="" className='text-[75%]'>Order ID<strong>*</strong></label>
                            <input type="text" placeholder='Enter Order ID' className='inline-block text-sm w-full h-9 rounded-md border hover:border-black transition-all ease-in-out border-[#d9d9d9] px-[11px] py-1' />
                        </div>
                        <div className='my-2.5'>
                            <label htmlFor="" className='text-[75%]'>Phone Number<strong>*</strong></label>
                            <input type="text" placeholder='e.g. 9876543210' className='inline-block text-sm w-full h-9 rounded-md border hover:border-black transition-all ease-in-out border-[#d9d9d9] px-[11px] py-1' />
                        </div>
                        <div className='mt-5 mb-2.5'>
                            <button className='px-[15px] bg-black text-white w-full h-9 rounded-md'>Next</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ReturnRefunds