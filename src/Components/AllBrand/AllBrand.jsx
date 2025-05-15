import React from 'react';

// image import
import armani_brand from "../../assets/armani_brand.webp";
import atlantic_brand from "../../assets/atlantic_brand.webp";
import britime_brand from "../../assets/britime_brand.webp";
import briston_brand from "../../assets/briston_brand.webp";
import bering_brand from "../../assets/bering_brand.webp";
import boos_brand from "../../assets/boss_brand.webp";
import casio_brand from "../../assets/casio_brand.webp";
import ck_brand from "../../assets/ck_brand.webp";
import coach_brand from "../../assets/coach_brand.webp";
import citizen_brand from "../../assets/citizen_brand.webp";
import dc_brand from "../../assets/dc_brand.avif";
import dw_brand from "../../assets/dw_brand.avif";
import diesel_brand from "../../assets/diesel_brand.webp";
import emporioarmani_brand from "../../assets/emporioarmani_brand.webp";
import fossil_brand from "../../assets/fossil_brand.webp";
import furla_brand from "../../assets/furla_brand.webp";
import garmin_brand from "../../assets/garmin_brand.webp";
import gc_brand from "../../assets/gc_brand.webp";
import guess_brand from "../../assets/guess_brand.webp";
import helix_brand from "../../assets/helix_brand.webp";
import longines_brand from "../../assets/longines_brand.webp";
import movado_brand from "../../assets/movado_brand.webp";
import mk_brand from "../../assets/mk_brand.webp";
import montneo_brand from "../../assets/montneo_brand.avif";
import obaku_brand from "../../assets/obaku_brand.webp";
import philippplein_brand from "../../assets/philippplein_brand.png";
import pleunsport_brand from "../../assets/pleunsport_brand.avif";
import rado_brand from "../../assets/rado_brand.webp";
import roamer_brand from "../../assets/roamer_brand.webp";
import skagen_brand from "../../assets/skagen_brand.webp";
import seiko_brand from "../../assets/seiko_brand.webp";
import ferragamo_brand from "../../assets/ferragamo_brand.webp";
import tissot_brand from "../../assets/tissot_brand.webp";
import timex_brand from "../../assets/timex_brand.webp";
import tedbaker_brand from "../../assets/tedbaker_brand.webp";
import ucb_brand from "../../assets/ucb_brand.avif";
import versace_brand from "../../assets/versace_brand.webp";

const brandLogo = [
    {
        id: 1,
        img: armani_brand,
        link: "https://armaniexchange.in/collection/watches",
    },
    {
        id: 2,
        img: atlantic_brand,
        link: "https://atlanticwatches.ch/",
    },
    {
        id: 3,
        img: britime_brand,
        link: "https://britime.in/",
    },
    {
        id: 4,
        img: briston_brand,
        link: "https://briston-watches.com/",
    },
    {
        id: 5,
        img: bering_brand,
        link: "https://beringtime.in/",
    },
    {
        id: 6,
        img: boos_brand,
        link: "https://www.hugoboss.com/in",
    },
    {
        id: 7,
        img: casio_brand,
        link: "https://www.casio.com/in/",
    },
    {
        id: 8,
        img: ck_brand,
        link: "https://ro.calvinklein.com/mens-watches-jewellery",
    },
    {
        id: 9,
        img: coach_brand,
        link: "https://www.coach.com/shop/women/accessories/watches",
    },
    {
        id: 10,
        img: citizen_brand,
        link: "https://www.citizenwatch-global.com/",
    },
    {
        id: 11,
        img: dc_brand,
        link: "https://darrenclark.in/",
    },
    {
        id: 12,
        img: dw_brand,
        link: "https://in.danielwellington.com/",
    },
    {
        id: 13,
        img: diesel_brand,
        link: "https://www.dieselindia.com/collection/watch-for-men?srsltid=AfmBOopI-TbmX9_ZQJtMM0aBnWkm91k5B1-4bh9XzDZeF1cY_r3wVXuP",
    },
    {
        id: 14,
        img: emporioarmani_brand,
        link: "https://www.armani.com/en-us/emporio-armani/man/accessories/watches/?order=dynamic_listing-index_us_en",
    },
    {
        id: 15,
        img: fossil_brand,
        link: "https://www.fossil.com/en-in/",
    },
    {
        id: 16,
        img: furla_brand,
        link: "https://int.furla.com/in/en/accessories-watches/",
    },
    {
        id: 17,
        img: garmin_brand,
        link: "https://www.garmin.com/en-US/",
    },
    {
        id: 18,
        img: gc_brand,
        link: "https://guesswatches.com/pages/gc-luxury-watches?srsltid=AfmBOopj-BpXiAYlhYFVJIMKQf9w1Vzw8ReeeBtmhotKPEEtmFQkx7aM",
    },
    {
        id: 19,
        img: guess_brand,
        link: "https://guesswatches.com/pages/gc-luxury-watches?srsltid=AfmBOoqXfWesA2gfvwkaSiTsrXoGx3BMrhoIwWVrd_A8AzzrwZctBGAw",
    },
    {
        id: 20,
        img: helix_brand,
        link: "https://helix-watches.com/",
    },
    {
        id: 21,
        img: longines_brand,
        link: "https://www.longines.com/en-in/",
    },
    {
        id: 22,
        img: movado_brand,
        link: "https://www.movado.com/us/en/home",
    },
    {
        id: 23,
        img: mk_brand,
        link: "https://www.michaelkors.global/in/en/women/watches/",
    },
    {
        id: 24,
        img: montneo_brand,
        link: "https://montneo.com/?srsltid=AfmBOoq43JSDv95QEwn4Q2SxmZ8n7qBup_sL6vkOdRDZNiq1ZgUCEvHB",
    },
    {
        id: 25,
        img: obaku_brand,
        link: "https://shop.obaku.com/",
    },
    {
        id: 26,
        img: philippplein_brand,
        link: "https://www.plein.com/in/search/?cgid=watches",
    },
    {
        id: 27,
        img: pleunsport_brand,
        link: "https://www.pleinsport.com/in/search?cgid=watches&srsltid=AfmBOopcIGlg1IQirmT1Q0w9-C4qTNnZwxICl8oBC-OKk9Fi75mnYQ9Q",
    },
    {
        id: 28,
        img: rado_brand,
        link: "https://www.rado.com/en_in/",
    },
    {
        id: 29,
        img: roamer_brand,
        link: "https://roamer.ch/",
    },
    {
        id: 30,
        img: skagen_brand,
        link: "https://www.skagen.com/en-us/",
    },
    {
        id: 31,
        img: seiko_brand,
        link: "https://www.seikowatches.com/in-en",
    },
    {
        id: 32,
        img: ferragamo_brand,
        link: "https://www.ferragamo.com/shop/us/en/men/jewelry-m/timepieces-1?srsltid=AfmBOoqC6fHv3_LJcAnEI4GGEli4Ad-Un9sXNen_locgbI26dXgRiXdQ",
    },
    {
        id: 33,
        img: tissot_brand,
        link: "https://www.tissotwatches.com/en-in",
    },
    {
        id: 34,
        img: timex_brand,
        link: "https://shop.timexindia.com/?utm_source=Lyxel_Affiliate&utm_medium=CPS&utm_campaign=LA101_744&gad_source=1",
    },
    {
        id: 35,
        img: tedbaker_brand,
        link: "https://www.tedbaker.com/collections/mens-watches?srsltid=AfmBOoqypai18azjmvJAaymNqJ39RXYI23ltizlsrjHIpACMrHrknerA",
    },
    {
        id: 36,
        img: ucb_brand,
        link: "https://in.benetton.com/collections/watches?filter.v.availability=1&sort_by=created-descending",
    },
    {
        id: 37,
        img: versace_brand,
        link: "https://www.versace.com/in/en/products/watches/",
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
                            <div kay={logo.id}>
                                <a href={logo.link} target='blank'>
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