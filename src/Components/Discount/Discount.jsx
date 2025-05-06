import React from 'react';

// import image
import offer1 from "../../assets/offer1.webp";
import offer2 from "../../assets/offer2.webp";
import offer3 from "../../assets/offer3.webp";
import offer4 from "../../assets/offer4.webp";
import offer5 from "../../assets/offer5.webp";
import offer6 from "../../assets/offer6.webp";
import offer7 from "../../assets/offer7.webp";
import offer8 from "../../assets/offer8.webp";
import offer9 from "../../assets/offer9.webp";
import offer10 from "../../assets/offer10.webp";
import offer11 from "../../assets/offer11.webp";
import offer12 from "../../assets/offer12.webp";
import offer13 from "../../assets/offer13.webp";
import offer14 from "../../assets/offer14.webp";

// css import
import './discount.css';

function Discount() {

    const offerImages = [
        offer1, offer2, offer3, offer4, offer5, offer6, offer7,
        offer8, offer9, offer10, offer11, offer12, offer13, offer14
    ];

    return (
        <>
            <section className='mb-[90px]'>
                <div className='container mx-auto px-8 md:px-[139px] mb-6'>
                    <h2 className='text-2xl md:text-3xl font-serif'>Offers for You</h2>
                </div>
                <div className='overflow-hidden px-7'>
                    <div className="marquee-track">
                        {[...offerImages, ...offerImages].map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mr-[17px] w-[340.19px]"
                            >
                                <a href="#">
                                    <img
                                        src={src}
                                        alt={`Offer ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Discount