import React from 'react';

// components import
import Hero from '../../Components/Hero/Hero';
import Templates from '../../Components/Templates/Templates';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import LovedBrands from '../../Components/LovedBrands/LovedBrands';
import Discount from '../../Components/Discount/Discount';
import WhyBuy from '../../Components/WhyBuy/WhyBuy';
import TrendingSwipe from '../../Components/TrendingSwipe/TrendingSwipe';
import GiftAdvice from '../../Components/GiftAdvice/GiftAdvice';
import SpottedwithJIT from '../../Components/SpottedwithJIT/SpottedwithJIT';
import ShopifySection from '../../Components/ShopifySection/ShopifySection';
import ExploreJIT from '../../Components/ExploreJIT/ExploreJIT';
import WatchOutinspo from '../../Components/WatchOutinspo/WatchOutinspo';

function Home() {
    return (
        <>
            <Hero />
            <Templates />
            <NewArrivals />
            <LovedBrands />
            <Discount />
            <WhyBuy />
            <TrendingSwipe />
            <GiftAdvice />
            <SpottedwithJIT />
            <ShopifySection />
            <ExploreJIT />
            <WatchOutinspo />
        </>
    )
}

export default Home