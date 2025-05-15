import React from 'react';

// react icon
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function Breadcrumb({ pageTitle = 'pageTitle', goBackLink }) {
    return (
        <>
            <section className='border-b border-[#12121214] py-2.5'>
                <ul className='w-[95%] mx-auto flex items-center gap-2'>
                    <li className='text-xs lg:text-[1.025vw] font-serif tracking-wider opacity-65'><Link to='/'>{goBackLink} </Link></li>
                    <li><MdKeyboardArrowRight className='text-xs opacity-65' /></li>
                    <li className='text-xs lg:text-[1.025vw] font-serif tracking-wider opacity-65'>{pageTitle}</li>
                </ul>

            </section>
        </>
    )
}

export default Breadcrumb