import React from 'react'

// image import
import armani_brand from "../../assets/armani_brand.webp"
import atlantic_brand from "../../assets/atlantic_brand.webp"
import britime_brand from "../../assets/britime_brand.webp"
import briston_brand from "../../assets/briston_brand.webp"
import bering_brand from "../../assets/bering_brand.webp"
import boos_brand from "../../assets/boss_brand.webp"
import casio_brand from "../../assets/casio_brand.webp"
import ck_brand from "../../assets/ck_brand.webp"
import coach_brand from "../../assets/coach_brand.webp"
import citizen_brand from "../../assets/citizen_brand.webp"
import dc_brand from "../../assets/dc_brand.avif"
import dw_brand from "../../assets/dw_brand.avif"
import diesel_brand from "../../assets/diesel_brand.webp"
import emporioarmani_brand from "../../assets/emporioarmani_brand.webp"
import fossil_brand from "../../assets/fossil_brand.webp"
import furla_brand from "../../assets/furla_brand.webp"
import garmin_brand from "../../assets/garmin_brand.webp"
import gc_brand from "../../assets/gc_brand.webp"
import guess_brand from "../../assets/guess_brand.webp"
import helix_brand from "../../assets/helix_brand.webp"
import longines_brand from "../../assets/longines_brand.webp"
import movado_brand from "../../assets/movado_brand.webp"
import mk_brand from "../../assets/mk_brand.webp"
import montneo_brand from "../../assets/montneo_brand.avif"
import obaku_brand from "../../assets/obaku_brand.webp"
import philippplein_brand from "../../assets/philippplein_brand.png"
import pleunsport_brand from "../../assets/pleunsport_brand.avif"
import rado_brand from "../../assets/rado_brand.webp"
import roamer_brand from "../../assets/roamer_brand.webp"
import skagen_brand from "../../assets/skagen_brand.webp"
import seiko_brand from "../../assets/seiko_brand.webp"
import ferragamo_brand from "../../assets/ferragamo_brand.webp"
import tissot_brand from "../../assets/tissot_brand.webp"
import timex_brand from "../../assets/timex_brand.webp"
import tedbaker_brand from "../../assets/tedbaker_brand.webp"
import ucb_brand from "../../assets/ucb_brand.avif"
import versace_brand from "../../assets/versace_brand.webp"

const brandLogo = [
    {
        id: 1,
        img: armani_brand,
    },
    {
        id: 2,
        img: atlantic_brand,
    },
    {
        id: 3,
        img: britime_brand,
    },
    {
        id: 4,
        img: briston_brand,
    },
    {
        id: 5,
        img: bering_brand,
    },
    {
        id: 6,
        img: boos_brand,
    },
    {
        id: 7,
        img: casio_brand,
    },
    {
        id: 8,
        img: ck_brand,
    },
    {
        id: 9,
        img: coach_brand,
    },
    {
        id: 10,
        img: citizen_brand,
    },
    {
        id: 11,
        img: dc_brand,
    },
    {
        id: 12,
        img: dw_brand,
    },
    {
        id: 13,
        img: diesel_brand,
    },
    {
        id: 14,
        img: emporioarmani_brand,
    },
    {
        id: 15,
        img: fossil_brand,
    },
    {
        id: 16,
        img: furla_brand,
    },
    {
        id: 17,
        img: garmin_brand,
    },
    {
        id: 18,
        img: gc_brand,
    },
    {
        id: 19,
        img: guess_brand,
    },
    {
        id: 20,
        img: helix_brand,
    },
    {
        id: 21,
        img: longines_brand,
    },
    {
        id: 22,
        img: movado_brand,
    },
    {
        id: 23,
        img: mk_brand,
    },
    {
        id: 24,
        img: montneo_brand,
    },
    {
        id: 25,
        img: obaku_brand,
    },
    {
        id: 26,
        img: philippplein_brand,
    },
    {
        id: 27,
        img: pleunsport_brand,
    },
    {
        id: 28,
        img: rado_brand,
    },
    {
        id: 29,
        img: roamer_brand,
    },
    {
        id: 30,
        img: skagen_brand,
    },
    {
        id: 31,
        img: seiko_brand,
    },
    {
        id: 32,
        img: ferragamo_brand,
    },
    {
        id: 33,
        img: tissot_brand,
    },
    {
        id: 34,
        img: timex_brand,
    },
    {
        id: 35,
        img: tedbaker_brand,
    },
    {
        id: 36,
        img: ucb_brand,
    },
    {
        id: 37,
        img: versace_brand,
    },
]


function AllBrand() {
    return (
        <>
            <section className='container mx-auto px-[37px] xl:px-[55px] lg:py-[30px] xl:py-[35px]'>
                <div>
                    <h2 className='my-[18px] text-[4.206vw] md:text-[3vw] xl:text-[1.757vw] font-serif'>All Brand</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-2.5 gap-y-4'>
                        {brandLogo.map((logo) => (
                            <div>
                                <a href="..." key={logo.id}>
                                    <img src={logo.img} alt="" className='rounded-xl' />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBrand