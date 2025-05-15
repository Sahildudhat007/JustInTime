import React from 'react';

// components import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

// image import
import smb_story_logo from "../../assets/images/smb_story_logo.png";
import pr_news from "../../assets/images/pr_news.avif";
import indian_express from "../../assets/images/indian_express.avif";
import indian_retailing from "../../assets/images/india_retailing.avif";
import india_today from "../../assets/images/india_today.avif";
import ani_news from "../../assets/images/ani_news.avif";

const pressData = [
    {
        id: 1,
        logo: smb_story_logo,
        name: "Just In Time's Bet on Private Labels...",
        text: "Just in Time (JIT), a prominent player in India's watch retail sector, is set...",
        link: "https://yourstory.com/smbstory/mumbai-just-in-times-bet-on-private-labels-d2c-watches-international-brands"
    },
    {
        id: 2,
        logo: pr_news,
        name: "Just In Time - India's Most Trusted ...",
        text: "As India's most trusted retailer for International watch brands 'Just In Time...",
        link: "https://www.prnewswire.com/in/news-releases/just-in-time---indias-most-trusted-retailer-of-international-watch-brands-joins-forces-with-shah-rukh-khans-jawan-as-exclusive-watch-retail-partner-301916065.html"
    },
    {
        id: 3,
        logo: indian_express,
        name: "Reboot your style with these timepie...",
        text: "Just In Time, a renowned watch brand has joined forces with Red Chillies as t...",
        link: "https://www.prnewswire.com/in/news-releases/just-in-time---indias-most-trusted-retailer-of-international-watch-brands-joins-forces-with-shah-rukh-khans-jawan-as-exclusive-watch-retail-partner-301916065.html"
    },
    {
        id: 4,
        logo: indian_retailing,
        name: "Watches brand Just in Time collabora...",
        text: "A viral scene from the Jawan movie trailer showcases Shah Rukh Khan’s dance p...",
        link: "https://www.indiaretailing.com/2023/09/04/watches-brand-just-in-time-collaborates-with-shah-rukh-khans-jawan-as-exclusive-watch-retail-partner/"
    },
    {
        id: 5,
        logo: india_today,
        name: "Just In Time - India's Most Trusted ...",
        text: "As India's most trusted retailer for International watch brands 'Just In Time...",
        link: "https://www.indiatoday.in/pr-newswire?rkey=20230902EN98719&filter=4315"
    },
    {
        id: 6,
        logo: ani_news,
        name: "Just In Time - India's Most Trusted ...",
        text: "Just In Time takes pride in its vast assortment of fashionable timepieces whi...",
        link: "https://www.aninews.in/news/business/business/just-in-time-indias-most-trusted-retailer-of-international-watch-brands-joins-forces-with-shah-rukh-khans-jawan-as-exclusive-watch-retail-partner20230902110346/"
    },
]

function PressReleases() {
    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Press Releases" />
            </div>
            <section className='px-[37px] lg:px-[55px] py-[30px] lg:py-[35px] mx-auto'>
                <h2 className='text-[4.206vw] md:text-[3vw] xl:text-[1.757vw] font-serif my-[18px]'>Press</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-2.5 gap-y-4'>
                    {pressData.map((item) => (
                        <div className='border border-[#70707047] rounded-lg p-[25px]'>
                            <div className='mb-2'>
                                <img src={item.logo} alt="" />
                            </div>
                            <h4 className='text-xl font-serif mb-[5px]'>{item.name}</h4>
                            <p className='my-[15px] opacity-45'>{item.text}</p>
                            <a href={item.link} target='blank' className='mb-12 text-[#383838] text-[15px] xl:text-[1vw] underline'>Read More</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PressReleases