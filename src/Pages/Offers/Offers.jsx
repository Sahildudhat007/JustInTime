import React, { useState } from 'react';

// image impoer
import desk_img1 from "../../assets/images/desk_img1.webp";
import mobile_img1 from "../../assets/images/mobile_img1.png";

// components import
import Off from './Off';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';

// react icon
import { FiFilter } from "react-icons/fi";
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

function Offers() {

  const brands = ["All", "Guess", "Versace", "30% off", "40% off"];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredWatches = selectedBrand === "All"
    ? MenWomenData.offerData
    : MenWomenData.offerData.filter(watch => watch.brand === selectedBrand);

  return (
    <>
      <div className='hidden lg:block'>
        <Breadcrumb goBackLink="Home" pageTitle="Offers" />
      </div>

      <section className='w-full'>
        <div className='w-full h-full'>
          <img src={desk_img1} alt="" className='w-full h-full object-cover hidden md:block' />
          <img src={mobile_img1} alt="" className='w-full h-full object-cover block md:hidden' />
        </div>

        <div className='block lg:hidden'>
          <Breadcrumb goBackLink="Home" pageTitle="Offers" />
        </div>

        <div className='container mx-auto py-6 px-2.5 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex flex-wrap gap-3'>
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => setSelectedBrand(brand)}
                className={`border border-black rounded-full py-3 px-6 text-sm md:text-[1.171vw] cursor-pointer
                ${selectedBrand === brand ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {brand}
              </button>
            ))}
          </div>
          <div>
            <a href="#" className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
              <FiFilter className='mr-2' />
              FILTER & SORT
            </a>
          </div>
        </div>

        <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
          {filteredWatches.length > 0 ? (
            filteredWatches.map((value, ind) => (
              <Off
                key={ind}
                id={value.id}
                img={value.img}
                hover_img={value.hover_img}
                brand={value.brand}
                off={value.off}
                text={value.text}
                price={value.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500">No watches found for this brand.</p>
          )}

        </div>

        <div className='py-[1%] px-[5%] md:px-[10%]'>
          <div>
            <h2 className='text-xl md:text-2xl my-[1em]'>
              Exclusive Watch Offers: Time to Upgrade Your Style
            </h2>
            <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Looking for exclusive watch offers? Just In Time brings you stunning deals on a variety of watches. From sleek leather straps to elegant stainless steel options, you'll find the perfect accessory to complement your look. Shop now to save on top styles like analogue and chronograph designs!</p>
            {isExpanded && (
              <>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Explore Offers on Watches from Just In Time that You Simply Can't Refuse
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Are you looking for offers and discounts on watches? Just In Time brings you the exciting world of branded and premium watches at exceptional rates. Take a glimpse of our watch outlets online and offline, offering a comprehensive collection of timepieces at lower prices and amazing offers on the latest and branded watches. <span><strong>branded watches.</strong></span> </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time is fond of its ardent watch lovers and has brought outstanding discounts on branded timepieces, integrating the harmony of quality, aesthetics, perfection, crafting, and variety into your <span><strong>watch collection</strong></span>
                  without overpaying. Just In Time brings a blend of unique timepieces in the form of your one-stop shop for over 40+ global branded wristwatches. Indulge in affordable and exclusive designer timepieces today with the Just In Time <span><strong>watch store.</strong></span>
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Enter a World of Exclusive Offers on Branded Watches at Just In Time
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time has an enviable collection of the top branded timepieces at competitive rates. Not only that, we offer delightful discounts and watch sales for beginner and seasoned watch aficionados. From watches for men that are classy and modish to watches for women that are sleek and elegant, Just In Time features a diverse range. Whether it is the festive season, someone’s birthday, or you want a special gift for your partner, Just In Time provides daily discounts and sales on timepieces you love. Why overpay for watches elsewhere when you can get them at incredible rates from Just In Time? We are an authorized retailer of top global watch brands.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Grab the Latest Offers and the Best
                  <strong>Watch Deals  </strong>
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time's wide selection of timepieces come at a varied price range and amazing offers. With new launches and seasonal discounts, you will be spoilt for choices. Whether you are looking for an offer for <span><strong>women's watches,</strong></span> men's watches, or even <span><strong>offers on smart watch,</strong></span> Just In Time will seal the deal for you in terms of great offers on your favorite timepieces. Shop for the finest, authentic, high-quality, everyday, special occasion timepieces at jaw-dropping rates and offers.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Corporate Offers to Boost Morale
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Make the most out of the offers on watches to gift your employees on a limited budget. Since corporate gifting is essential in corporate culture, we understand the importance of boosting the morale of your employees, important stakeholders, and valuable customers. They deserve something special and different. Thus, Just In Time brings you a mélange of top international brand <span><strong>watches online</strong></span> and offline. Our offerings include a variety of movements like Swiss, Japanese, Italian, etc., as well as <span><strong> smart watch offers.</strong></span>
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time offers personalized services, redefining the art of gifting. Customize watches with your company logo on the dial, engraving on the back cover, special packaging options, embossing on the strap, as well as gift card schemes to ensure they get access to a diverse choice of premium and luxury wristwatches from over 40+ global watch brands. You can also personalize and put the company logo on the gift card. Head over to our customer care team on our website to learn more.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Gift Offers, with Love
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Are you hunting for places to find the best deals on watches? Just In Time offers a wide range of watches that can be an excellent gift for newlywed couples or a suitable anniversary gift. Are you looking for couple watches from authentic brands within your budget? Surf through the Offers page section on the Just In Time website and find a treasure trove of <span><strong>watch sales</strong></span>and discount offers on all premium watches from luxury and fashion brands.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Whether it is someone's anniversary, wedding, birthday, or any other special occasion, Just In Time provides year-round discounts on select watches. You can also use the discount codes on your first prepaid purchase to get additional discounts on your billing.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Festive Offers for Unbridled Joy
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Dig into this festival's best offers with Just In Time. Just In Time festive season sales celebrate a legacy of authentic and branded watches at amazing prices. You can now expand your collection this festive season and enjoy the occasion with your loved ones, sporting a premium and luxury watch for the event.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Keep an eye out for the <span><strong>watch sale</strong></span>alerts on our website. Our Offers page section constantly updates festive discounts and flash sale events on special days and festivals to get your spirits soaring high in the spirit of the occasion. Whether looking for an ornate <span><strong>rose gold watch</strong></span> or a high-tech smart watch, Just In Time offers timepieces that cater to all.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Variety of <span><strong>Watch Offers</strong> on Just In Time </span>
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time brings you the best smartwatches from the leading brands and manufacturers. From luxury smartwatches to <span><strong>Swiss watches,</strong></span> we are on the wish list of every watch-lover. We are an authorized retailer offering the best prices on the bestsellers without compromising the brand's authenticity. Get our online store's most beautifully designed and high-spec smart watch.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Find amazing <span><strong>women's watch sales</strong></span> and <span><strong>men's watch sales</strong></span> at over 50+ offline stores in India and expand your collection from an inventory of more than thousands of products! Shop as you typically would and save big with Just In Time. Add to the cart and purchase authentic branded and best-priced timepieces to access the best <span><strong>watch deals</strong></span> on branded timepieces today.
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  Why Choose Just In Time?
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  With new watch styles from global brands added to our lines, you can access a versatile range of styles and designs that instantly rev up your look. Just In Time is available pan-India at over 50+ stores, offering a vast inventory of 12000 varieties of watches from 40+ international brands under one roof. The selection of products is all-inclusive- you will find something for everybody.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Based on certain factors like colour, brand, dial colour, dial shape, strap material, strap colour, gender, discount and more, you can pick out the perfect timepiece from your favorite brand today. We also have the best offers on watches at Just In Time. Keep an eye out for the discount codes and ongoing sales on branded wristwatches right away to get them at the best price.
                </p>
                <p className='text-sm md:text-xl text-[#6F6F6F] my-[1em]'>
                  Here are the reasons to choose us-
                </p>
                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      Just In Time is an authorized retailer of 40+ luxury watch brands with a brand warranty and a Just In Time stamp.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      As India's leading authorized retailer of luxury and premium timepieces from 40+ global brands, Just In Time holds ethics of truth and genuineness as an integral part of its DNA. Our expert staff offers you authentic pieces and assists you in any way required.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      Our collection is one of the largest and most diverse. Just In Time has over 50+ stores across India with more than 12000 variety of watches, and from every brand in stock at any given time.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      The knowledgeable staff at our boutiques are well-trained and offer a delightful and enjoyable shopping experience to make you return for more.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      A dedicated team for after-sales support is available to ensure you a seamless purchase experience, ensuring your timepiece keeps ticking for generations to come. The state-of-the-art facilities in multiple cities offer after-sales services.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      You are protected against malpractices as Just In Time is an authorized retailer, a professionally run business that deals in official timepieces from top brands.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      You are eligible to be a part of our loyalty program. Redeem points after purchase to get gifts, rewards, and many more exciting things.
                    </p>
                  </li>
                  <li>
                    <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                      Our prices are competitive compared to retailers all over the world. We offer timepieces from global brands and their latest collections at competitive rates, so you don’t need to look elsewhere for the best rates.
                    </p>
                  </li>
                </ul>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Just In Time is your reliable authorized retailer for any watch you want. It carries a legacy of elegance and fashion wrapped into these curated <span><strong>watch collections</strong></span> from top brands across the globe. Indulge in luxurious, classic, and timeless pieces to develop unmatched looks at unbeatable prices. Whether you want a bit of dazzle or to keep the look minimalist, Just In Time has it all.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  Take advantage of these exclusive watch offers and upgrade your collection. Whether you're searching for the perfect gift or treating yourself, these deals offer unbeatable style at discounted prices!
                </p>
                <h2 className='text-xl md:text-2xl my-[1em]'>
                  FAQs
                </h2>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>Which is the best watch at a low price?</strong>
                </p>
                <p className='text-sm text-[#6F6F6F] my-[1em]'>
                  Just In Time is home to over 40+ top global brands, offering more than 12000 varieties of products. You can purchase all the best international brands of watches at great offers and irresistible discounts.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>How can I get discounts on watches?</strong>
                </p>
                <p className='text-sm text-[#6F6F6F] my-[1em]'>
                  Keep track of the Just In Time website and social media pages from time to time to know more about seasonal, festive, and flash discounts. You can also check out the Just In Time Offers page to know which brands offer watch sales.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>Are there any offers on smart watches at Just In Time? </strong>
                </p>
                <p className='text-sm text-[#6F6F6F] my-[1em]'>
                  You can check out our Offers Page to learn more about the smart watch offers at Just In Time. We have end-of-season sales along with several seasonal and festive discounts on smartwatches.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>Is Just In Time providing offers on premium brands? </strong>
                </p>
                <p className='text-sm text-[#6F6F6F] my-[1em]'>
                  Throughout the year, Just In Time offers jaw-dropping offers and deals on premium watch brands— look out for the best watch deals on our website and social media.
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>1. What are the top discounts available?</strong>
                  <p>You can make great savings on watches available for sale at discounts. Feel free to explore our offers on selected watches. </p>
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>2. Are these watches suitable for gifting?</strong>
                  <p>Yes, these watches are perfect for gifting with stylish designs and great offers.</p>
                </p>
                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                  <strong>3. Is there any warranty on these watches?</strong>
                  <p>Yes, all of these watches come with a standard manufacturer's warranty.</p>
                </p>
              </>
            )}
            <p
              onClick={toggleReadMore}
              className='text-[2.8vw] md:text-[1.8vw] lg:text-[1.025vw] uppercase cursor-pointer underline text-[#070101]'>
              {isExpanded ? 'Read Less' : 'Read More'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers