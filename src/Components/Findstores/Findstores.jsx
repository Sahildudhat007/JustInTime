import React from 'react'

// image import
import mumbai from "../../assets/mumbai.avif"
import pune from "../../assets/pune.avif"
import bengaluru from "../../assets/bengaluru.avif"
import ahmedabad from "../../assets/ahmedabad.png"
import vadodara from "../../assets/vadodra.avif"
import surat from "../../assets/surat.png"
import rajkot from "../../assets/rajkot.png"
import indore from "../../assets/indore.avif"
import raipur from "../../assets/raipur.avif"
import delhi from "../../assets/delhi.avif"
import noida from "../../assets/noida.webp"
import chandigarh from "../../assets/chandigarh.webp"
import bhavnagar from "../../assets/bhavnagar.webp"

const cityData = [
    {
        id: 1,
        img: mumbai,
        cityName: "Mumbai",
    },
    {
        id: 2,
        img: pune,
        cityName: "Pune",
    },
    {
        id: 3,
        img: bengaluru,
        cityName: "Bengaluru",
    },
    {
        id: 4,
        img: ahmedabad,
        cityName: "Ahmedabad",
    },
    {
        id: 5,
        img: vadodara,
        cityName: "Vadodara",
    },
    {
        id: 6,
        img: surat,
        cityName: "Surat",
    },
    {
        id: 7,
        img: rajkot,
        cityName: "Rajkot",
    },
    {
        id: 8,
        img: indore,
        cityName: "Indore",
    },
    {
        id: 9,
        img: raipur,
        cityName: "Raipur",
    },
    {
        id: 10,
        img: delhi,
        cityName: "Delhi",
    },
    {
        id: 11,
        img: noida,
        cityName: "Noida",
    },
    {
        id: 12,
        img: chandigarh,
        cityName: "Chandigarh",
    },
    {
        id: 13,
        img: bhavnagar,
        cityName: "Bhavnagar",
    },
]

function Findstores() {
    return (
        <>
            <section>
                <div className='m-auto px-[5%] pt-[4%] pb-[5%]'>
                    <div>
                        <h2 className='text-[20px] xl:text-[30px] text-[#363535] my-4 lg:my-6 font-serif'>Find a Just In Time Boutique</h2>
                        <p className='mt-2.5 mb-[30px] text-sm text-[#6F6F6F] opacity-70'>We are available in 15 Cities across India. Select your city to locate a store</p>
                    </div>
                    <div className='pt-4 pb-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {cityData.map((city) => (
                            <div key={city.id}>
                                <a href="..." className='relative block'>
                                    <img src={city.img} alt={city.cityName} className='w-full h-full object-cover' />
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center pl-6'>
                                        <p className='text-2xl text-[#363535] font-serif uppercase'>{city.cityName}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Findstores