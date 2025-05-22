import React from 'react';

// image import
import our_brand1 from "../../assets/images/our_brand1.webp";
import our_brand2 from "../../assets/images/our_brand2.webp";
import our_brand3 from "../../assets/images/our_brand3.webp";
import our_brand4 from "../../assets/images/our_brand4.webp";
import our_brand5 from "../../assets/images/our_brand5.webp";
import our_brand6 from "../../assets/images/our_brand6.webp";
import our_brand7 from "../../assets/images/our_brand7.webp";
import our_brand8 from "../../assets/images/our_brand8.webp";
import our_brand9 from "../../assets/images/our_brand9.webp";
import our_brand10 from "../../assets/images/our_brand10.webp";
import our_brand11 from "../../assets/images/our_brand11.webp";
import our_brand12 from "../../assets/images/our_brand12.webp";
import our_brand13 from "../../assets/images/our_brand13.webp";
import our_brand14 from "../../assets/images/our_brand14.webp";
import our_brand15 from "../../assets/images/our_brand15.webp";
import our_brand16 from "../../assets/images/our_brand16.webp";
import our_brand17 from "../../assets/images/our_brand17.webp";
import our_brand18 from "../../assets/images/our_brand18.webp";
import our_brand19 from "../../assets/images/our_brand19.webp";
import our_brand20 from "../../assets/images/our_brand20.webp";
import our_brand21 from "../../assets/images/our_brand21.webp";
import our_brand22 from "../../assets/images/our_brand22.webp";
import our_brand23 from "../../assets/images/our_brand23.webp";
import our_brand24 from "../../assets/images/our_brand24.webp";
import our_brand25 from "../../assets/images/our_brand25.webp";
import our_brand26 from "../../assets/images/our_brand26.webp";
import our_brand27 from "../../assets/images/our_brand27.webp";
import our_brand28 from "../../assets/images/our_brand28.webp";
import our_brand29 from "../../assets/images/our_brand29.webp";
import our_brand30 from "../../assets/images/our_brand30.webp";
import our_brand31 from "../../assets/images/our_brand31.webp";
import our_brand32 from "../../assets/images/our_brand32.webp";
import our_brand33 from "../../assets/images/our_brand33.webp";
import our_brand34 from "../../assets/images/our_brand34.webp";

// css import
import "./ourbrand.css"

const ourBrand = [
    {
        id: 1,
        img: our_brand1,
        name: "Armani Exchange"
    },
    {
        id: 2,
        img: our_brand2,
        name: "Atlantic"
    },
    {
        id: 3,
        img: our_brand3,
        name: "Britime London"
    },
    {
        id: 4,
        img: our_brand4,
        name: "Briston"
    },
    {
        id: 5,
        img: our_brand5,
        name: "Boss"
    },
    {
        id: 6,
        img: our_brand6,
        name: "Casio"
    },
    {
        id: 7,
        img: our_brand7,
        name: "Citizen"
    },
    {
        id: 8,
        img: our_brand8,
        name: "Calvin Klein"
    },
    {
        id: 9,
        img: our_brand9,
        name: "Coach"
    },
    {
        id: 10,
        img: our_brand10,
        name: "Darren Clark"
    },
    {
        id: 11,
        img: our_brand11,
        name: "Daniel Wellington"
    },
    {
        id: 12,
        img: our_brand12,
        name: "Emporio Armani"
    },
    {
        id: 13,
        img: our_brand13,
        name: "Fossil"
    },
    {
        id: 14,
        img: our_brand14,
        name: "Furla"
    },
    {
        id: 15,
        img: our_brand15,
        name: "Garmin"
    },
    {
        id: 16,
        img: our_brand16,
        name: "GC"
    },
    {
        id: 17,
        img: our_brand17,
        name: "Guess"
    },
    {
        id: 18,
        img: our_brand18,
        name: "Helix"
    },
    {
        id: 19,
        img: our_brand19,
        name: "Michael Kors"
    },
    {
        id: 20,
        img: our_brand20,
        name: "Mont Neo"
    },
    {
        id: 21,
        img: our_brand21,
        name: "Logines"
    },
    {
        id: 22,
        img: our_brand22,
        name: "Movado"
    },
    {
        id: 23,
        img: our_brand23,
        name: "Obaku"
    },
    {
        id: 24,
        img: our_brand24,
        name: "Philipp Plein"
    },
    {
        id: 25,
        img: our_brand25,
        name: "Plein Sports"
    },
    {
        id: 26,
        img: our_brand26,
        name: "Rado"
    },
    {
        id: 27,
        img: our_brand27,
        name: "Roamer"
    },
    {
        id: 28,
        img: our_brand28,
        name: "Skagen"
    },
    {
        id: 29,
        img: our_brand29,
        name: "Seiko"
    },
    {
        id: 30,
        img: our_brand30,
        name: "Ferragamo"
    },
    {
        id: 31,
        img: our_brand31,
        name: "Tissot"
    },
    {
        id: 32,
        img: our_brand32,
        name: "Timex"
    },
    {
        id: 33,
        img: our_brand33,
        name: "Ted Baker"
    },
    {
        id: 34,
        img: our_brand34,
        name: "Versace"
    },
]

function OurBrand() {
    return (
        <>
            {ourBrand.map((brand) => (
                <a href="#" key={brand.id}>
                    <div className='relative w-full'>
                        <img src={brand.img} alt="" className='w-full h-full rounded-b-md' />
                        <div className='absolute bottom-0 w-full bg-black text-white text-center rounded-b-md h-[44px] flex items-center justify-center'>
                            <p>{brand.name}</p>
                        </div>
                    </div>
                </a>
            ))}

        </>
    )
}

export default OurBrand