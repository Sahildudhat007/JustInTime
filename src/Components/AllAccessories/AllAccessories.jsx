import React from 'react'

// image import
import wishlist from "../../assets/wishlist.png"
import clock from "../../assets/clock.webp"
import hover_clock from "../../assets/hover_clock.webp"
import watch_box from "../../assets/watch_box.webp"
import hover_watch_box from "../../assets/hover_watch_box.webp"
import watch2 from "../../assets/watch2.webp"
import hover_watch2 from "../../assets/hover_watch2.webp"
import watch3 from "../../assets/watch3.webp"
import hover_watch3 from "../../assets/hover_watch3.webp"
import watch4 from "../../assets/watch4.webp"
import hover_watch4 from "../../assets/hover_watch4.webp"
import case1 from "../../assets/case1.webp"
import hover_case1 from "../../assets/hover_case1.webp"
import case2 from "../../assets/case2.webp"
import hover_case2 from "../../assets/hover_case2.webp"

const accessories = [
    {
        id: 1,
        img: clock,
        hover_img: hover_clock,
        name: "Britime",
        text: "Table Clock",
        price: "17,985"
    },
    {
        id: 2,
        img: watch_box,
        hover_img: hover_watch_box,
        name: "Six Watch Case",
        text: "Watch Box Organizer in 6 Slots of Watches",
        price: "1,200"
    },
    {
        id: 3,
        img: case1,
        hover_img: hover_case1,
        name: "Watch Pod",
        text: "Brown Leather Single Watch Pod",
        price: "1,199"
    },
    {
        id: 4,
        img: case2,
        hover_img: hover_case2,
        name: "Heritage Holder",
        text: "Brown Leather Single Watch Pouch Organizer",
        price: "749"
    },
    {
        id: 5,
        img: watch2,
        hover_img: hover_watch2,
        name: "Watch Winder",
        text: "Automatic Red and Beige Two Watch Wooden Winder",
        price: "9,995"
    },
    {
        id: 6,
        img: watch3,
        hover_img: hover_watch3,
        name: "Watch Winder",
        text: "Automatic Red and Beige Two Watch Wooden Winder",
        price: "9,995"
    },
    {
        id: 7,
        img: watch4,
        hover_img: hover_watch4,
        name: "Watch Winder",
        text: "Automatic Single Black Watch Wooden Winder",
        price: "5,995"
    },
]

function AllAccessories() {
    return (
        <>
            <section className=''>
                <ul className='grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {accessories.map((items) => (
                        <li className='group' key={items.id}>
                            <a href="..." className='block'>
                                <div className="relative w-full overflow-hidden rounded-lg">
                                    <img src={items.img} alt="" className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <img src={items.hover_img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                    <div className='absolute top-5 right-5 w-[20px] h-[18px]'>
                                        <img src={wishlist} alt="" className='' />
                                    </div>
                                </div>
                                <div className='p-4 pt-[18px] group'>
                                    <p className='lg:text-[1.951vw] text-sm xl:text-[1.318vw] uppercase font-serif font-semibold text-left'>{items.name}</p>
                                    <h3 className='text-[#070101] mt-[11px] text-sm lg:text-[1.951vw] xl:text-[1.171vw] text-left font-semibold line-clamp-1'>{items.text}</h3>
                                    <p className='mt-[5px] md:mt-3 text-left text-sm lg:text-[1.951vw] xl:text-[1.318vw] uppercase font-semibold'>₹ {items.price}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
        </>
    )
}

export default AllAccessories