import React from 'react';

function Contact() {
    return (
        <>
            <section className='mx-auto border-lg bg-[#fafbfb]'>
                <form className='w-[90%] h-full bg-[#fff] p-[2%] m-auto'>
                    <div className='flex items-center justify-between mt-[5%]'>
                        {/* <h2 className='text-[9.346vw] md:text-[2.928vw] text-[#363535] font-serif'>Sell with us</h2>
                        <span className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="close">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                            </svg>
                        </span> */}
                    </div>
                    <div className='border-b border-[#6f6f6f] mb-10'>
                        <p className='text-[3vw] md:text-[1.171vw] text-[#6f6f6f] mb-3.5'>
                            An Opportunity to own and Run a Luxury/Premium Watch Store with Just in Time
                        </p>
                    </div>
                    <div className='flex justify-between gap-[1%] my-[0.805vw] mx-[0.366vw]'>
                        <div className='w-[50%]'>
                            <input type="text" name='firstName' placeholder='First Name' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                        </div>
                        <div className='w-[50%]'>
                            <input type="text" name='lastName' placeholder='Last Name' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                        </div>
                    </div>
                    <div className='my-[.805vw] mx-[.366vw]'>
                        <input type="text" name='email' placeholder='Email' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                    </div>
                    <div className='my-[.805vw] mx-[.366vw]'>
                        <input type="text" name='phone' placeholder='Phone Number' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                    </div>
                    <div className='flex justify-between gap-[1%] my-[0.805vw] mx-[0.366vw]'>
                        <div className='w-[50%]'>
                            <input type="text" name='state' placeholder='State' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                        </div>
                        <div className='w-[50%]'>
                            <input type="text" name='city' placeholder='City' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                        </div>
                    </div>
                    <div className='my-[0.805vw] mx-[0.366vw]'>
                        <h4 className='mt-[19px]'>Franchise Investment (Select any 1)</h4>
                        <div className='flex justify-between gap-[1%] '>
                            <div className='w-[50%]'>
                                <input type="radio" name='investment' value={"1-1.5Cr"} className='mt-2 mr-2' />
                                <label htmlFor="" className=''>1-1.5Cr</label>
                            </div>
                            <div className='w-[50%]'>
                                <input type="radio" name='investment' value={"1-1.5Cr"} className='mt-2 mr-2' />
                                <label htmlFor="" className=''>1.5Cr & Above</label>
                            </div>
                        </div>
                    </div>
                    <div className='my-[0.805vw] mx-[0.366vw]'>
                        <h4 className='mt-[19px]'>Property (Select any 1)</h4>
                        <div className='flex justify-between gap-[1%] '>
                            <div className='w-[50%]'>
                                <input type="radio" name='property' value={"1-1.5Cr"} className='mt-2 mr-2' />
                                <label htmlFor="" className=''>Owned</label>
                            </div>
                            <div className='w-[50%]'>
                                <input type="radio" name='property' value={"1-1.5Cr"} className='mt-2 mr-2' />
                                <label htmlFor="" className=''>Leased/Rented</label>
                            </div>
                        </div>
                    </div>
                    <div className='my-[.805vw] mx-[.366vw]'>
                        <input type="text" name='startTime' placeholder='How soon would you like to start?' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                    </div>
                    <div className='my-[.805vw] mx-[.366vw]'>
                        <input type="text" name='aboutUsSource' placeholder='How do you know about us?' className='text-[3.5vw] md:text-[1.025vw] mt-2 mr-2 p-[17px] border border-[#6F6F6F] text-[#363535] rounded-[10px] opacity-[1] w-full' />
                    </div>
                    <div className='flex items-baseline gap-2.5'>
                        <input type="checkbox" name='acceptTermsSwu' />
                        <label htmlFor="acceptTerms-swu" className='text-[#8e8e8e]'>I Agree to Just In Time contacting me via chat or call to assist further with my form submission.</label>
                    </div>
                    <div className='text-center'>
                        <button className='py-2.5 px-10 bg-black text-white rounded-[5px] uppercase my-[5%] text-[1rem] cursor-pointer'>SUBMIT</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact