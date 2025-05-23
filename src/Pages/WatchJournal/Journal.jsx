import React from 'react'

function Journal({ img, tag1, tag2, tag3, tag4, title }) {
    return (
        <>
            <div className='w-[264.8px] md:w-[352px] lg:w-[420px] xl:w-[352px] h-[379px] mx-auto border border-[#70707033] rounded-[10px]'>
                <a href="#">
                    <img src={img} alt="" className='w-[264.8px] md:w-[352px] lg:w-[420px] xl:w-[352px] h-[215px] rounded-t-[10px] object-cover' />
                    <hr className='h-[5px] bg-[#E2A362]' />
                    <div className='px-2 md:px-8'>
                        <div className='flex flex-wrap justify-start items-center mt-[9.5px]'>
                            <p className='text-xs bg-[#EBEBEB] rounded-[35px] p-2 mr-2.5 uppercase opacity-[0.5] font-semibold'>{tag1}</p>
                            <p className='text-xs bg-[#EBEBEB] rounded-[35px] p-2 mr-2.5 uppercase opacity-[0.5] font-semibold'>{tag2}</p>
                            <p className='text-xs bg-[#EBEBEB] rounded-[35px] p-2 mr-2.5 uppercase opacity-[0.5] font-semibold'>{tag3}</p>
                            <p className='text-xs bg-[#EBEBEB] rounded-[35px] p-2 mr-2.5 uppercase opacity-[0.5] font-semibold'>{tag4}</p>
                        </div>
                        <div className='mt-[13px] mb-4'>
                            <h3 className='text-[4.20vw] md:text-xl font-serif'>{title}</h3>
                        </div>
                        <div className='mt-[11px]'></div>
                        <div>
                            <a href="#" className='text-sm underline'>READ MORE</a>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Journal