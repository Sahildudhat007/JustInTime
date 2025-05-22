import React from 'react'

function TempItem({ img, name }) {
    return (
        <>
            <a href="#">
                <div>
                    <img src={img} alt="" className='w-full h-auto object-cover' />
                </div>
                <div className='pt-[12.65px]'>
                    <p className='text-[16px] text-center font-semibold uppercase'>{name}</p>
                </div>
            </a>
        </>
    )
}

export default TempItem