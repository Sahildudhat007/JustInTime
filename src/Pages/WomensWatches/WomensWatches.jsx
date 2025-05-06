import React, { useState } from 'react'

// image import
import womens_watches_landing from "../../assets/Womens_watches_landing.webp"
import womens_watches_lending_mobile from "../../assets/womens_watches_landing_mobile.webp"

// components import
import Women from './Women';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';

// react icon
import { FiFilter } from "react-icons/fi";

function WomensWatches() {

    const brands = ["All", "Casio", "Fossil", "Guess", "Tissot", "Michael Kors", "Timex"];

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredWatches = selectedBrand === "All"
        ? MenWomenData.womenData
        : MenWomenData.womenData.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={womens_watches_landing} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={womens_watches_lending_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Women's Watches</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>2044 Watches | 35 Brands</p>
                    </div>
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
                        <a href="..." className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
                            <FiFilter className='mr-2' />
                            FILTER & SORT
                        </a>
                    </div>
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {filteredWatches.length > 0 ? (
                        filteredWatches.map((value, ind) => (
                            <Women
                                key={ind}
                                id={value.id}
                                img={value.img}
                                hover_img={value.hover_img}
                                brand={value.brand}
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
                            <strong>Timeless Elegance: Women's Watch Collection</strong>
                        </h2>
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Explore the ultimate Women's Watch Collection, designed for those who appreciate style and elegance. From classic analogue designs to chic women's chronograph watches, our curated selection offers something for every occasion. </p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>Although women have a plethora of accessory options, most choose their watch as their best accessory. Why? It's simple. A watch makes a woman look strong and smart. Unlike traditional jewellery, a watch is more modern and trendy as an accessory. Through generations, men have dominated the watch industry as consumers, but this trend is changing. Today, women are independent, free, and successful. And this makes them valuable and prospective customers in the wristwatch business. As women are making more money, they are investing in professional watches for women and other luxury watches. The demand for elegant watches for ladies has suddenly gone up among women of all ages. Not just that, women are also valuable customers in the smartwatch segment. Watches are a very smart investment piece and women today have realized this. Hence, they are investing in ladies fashion watches more than ever. Because, no matter how the market turns tomorrow, a watch will be a good investment forever. </p>
                                <h3 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Types of Watches for Women</strong>
                                </h3>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    There are endless options for women's watches. Certain female watch brands stand out, including Tissot, Fossil, Citizen, Longines, Versace, and Michael Kors. Women's watches are categorised into many segments:
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Digital Watches: Digital women's watches are getting popular with time. They are stylish and classy. They add a contemporary vibe to the entire attire. Digital watches look best with a pair of denim jeans and t-shirts.Trendy ladies watches are the perfect blend of functionality and fashion, making them an essential accessory for the modern woman.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Analog Watches: For women who prefer a sophisticated old-school look, analog watches are an excellent choice. Simple, classic, and evergreen, analog watches remain popular worldwide. An analogue watch can elevate any outfit but looks particularly stylish with sweatshirts, skirts, and trousers. A ladies analogue watch is not just a timepiece; it's a timeless accessory that reflects elegance and grace.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Smartwatches: Women today have a very hectic lifestyle and smartwatches help in making their life easy. Smartwatches for women are a blend of luxury, functionality, and design. With a smartwatch, one can send a message, record one's footsteps or read an email, the possibilities are endless. For a tech enthusiast, a smartwatch is a perfect investment. Smartwatches can look good with anything. But, they look extremely sophisticated with jeans, office wear, and t-shirt dresses. They also look great with athleisure clothes.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Dress Watches: </span>
                                    <a href="..." className='text-[#007aff] underline'><span>Dress watches for women</span></a>
                                    <span> are classic and sophisticated watches that are supposed to be worn with a gown or a short dress. Dress watches suit almost every woman. They are considered to be luxury watches and symbolize class. Dress watches add a finishing touch to women's daily wear and formal wear outfits. They are often passed down to generations as family assets. A dress watch is something that every woman must own in her wardrobe.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Quartz Watches: </span>
                                    <a href="..." className='text-[#007aff] underline'><span>Quartz watches for women</span></a>
                                    <span> are watches that work with quartz crystal oscillation. These watches are known for giving the most accurate time. Quartz women's watches are extremely durable and at the same time, they are highly desirable by millions of women. Styling a quartz watch is pretty easy. They look nice in every outfit. So, a quartz watch can be paired with anything without any doubt.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Chronograph Watches: </span>
                                    <a href="..." className='text-[#007aff] underline'><span>Women's chronograph watche</span></a>
                                    <span> s have a distinctive layout in the dial. Chronograph watches do a lot more than just tell time. They have a stopwatch feature that allows tracking time intervals. Chronograph watches look mesmerizing with an adventurous look and should be styled with pieces of denim, cargo pants, and leather jackets.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Swiss Watches: A Swiss watch is a benchmark for every watchmaker. They are the most recognized, respected, and admired watches in the world. A Swiss watch can easily pass the test of time and can be useful for generations. They are extremely durable and high in quality. Almost all Swiss watches are handmade and well-crafted which makes them so distinguishable from other watches. </span>
                                    <a href="..." className='text-[#007aff] underline'><span>Swiss watches for women</span></a>
                                    <span> are made up of strong materials that make them last a lifetime. Hence, things like corrosion, scratches, or normal tear wear are never a problem with Swiss watches. A Swiss watch can complement any woman and in any attire. But they always look best with semi-formals. Every woman should own at least one Swiss watch.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Sports Watches: </span>
                                    <a href="..." className='text-[#007aff] underline'><span>Sports watches for women</span></a>
                                    <span> combine style with functionality, making it perfect for active lifestyles. Designed with features like water resistance, fitness tracking, and durable materials, it ensures reliability during workouts or outdoor adventures. Sports watches offer comfort and performance, whether you prefer a sleek digital design or a rugged analogue look. Ideal for running, swimming, or gym sessions, they keep you on track while complementing your sporty style.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Why Women Are Buying Watches More Than Ever</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>For generations, watches have been traditionally considered a man's prime accessory. Hence, even watchmakers used to spend less of their time creating an extensive women's watch collection. However, with women becoming more independent and career-driven, their choices in accessorizing themselves are also changing. From traditional jewelry like earrings, necklaces, and bangles, women are switching to more progressive accessories like stylish watches for women. And that is the reason why watchmakers these days are coming up with extensive women's wristwatch collections. Today's modern women are not just looking for a typical woman's feminine-styled watch; they seek ladies stylish watches that complement their strong and bold outlook.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>It's no more just an accessory—a watch is now her best friend, a friend that makes her stand out from the rest of the crowd. Women now are decision-makers, innovators, and influencers in our society. And she deserves an extensive watch collection that will amplify her power and passion. Trends are changing, and now, many watchmakers are making gender-neutral watches to cater to both men and women. Because they know, that women today are buying watches more than ever, from modern pieces to vintage womens watches that speak to timeless style. Women are buying watches that they need to wear every day; they are considering watches as a serious piece of investment. And that is a game-changer in the watch industry.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>In every red carpet event, female celebrities are endorsing the new collection of luxury watches from big brands like Rado, Versace, etc. The modern woman sees her watch as not just a luxury indulgence but a timeless piece that adds value to her extensive wardrobe investment. Also, they aren't just looking for watches to show off; they want pieces that are functional and can suit their contemporary lifestyle. They are rediscovering vintage womens watches with a new outlook.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Luxury Watches for Women - A Real Investment</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Imagine an investment that not only acts as an asset but also adds a spark to your persona. Sounds fantastic, isn't it? A luxury woman's watch is just that. Luxury watches come with a set of values and add charm to a woman's life. Most Swiss watches are luxury watches and are highly valued in the watch market. In India, a premium or a luxury watch can start from Rs. 10000 and can go up to lakhs. Some of the best female watch brands for </span>
                                    <a href="..." className='text-[#007aff] underline'>luxury women's watches</a>
                                    <span> are Calvin Klein, Rado, Tissot, Seiko, Versace, Fossil, Emporio Armani, and many others. For women, luxury watches symbolize their class and independence. She might be wearing the most expensive gown in town, but without a luxury watches, her look might still look incomplete. A luxury watch for a woman is much more than just an accessory; it elegantly tells the onlooker who she is and where she stands in life. And hence, most women love their elegant watches to death. Luxury isn't just about owning an accessory; it's about owning a lifestyle. It's also about showing the world where she belongs. And a luxury watch helps her do that with much style and panache.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Top Watch Brands for Women</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Finding the perfect watch for women involves balancing style, functionality, and budget. Whether looking for an affordable fashion piece, a luxurious statement watch, or a high-tech smartwatch, these top brands cater to every woman’s needs. Here are the best brands across different categories to help you choose the right timepiece.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Affordable Options: GUESS, Obaku, Fossil</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>For stylish yet budget-friendly watches, GUESS, Obaku, and Fossil offer stunning designs without breaking the bank.</span>
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>GUESS: </span>
                                            <a href="..." className='text-[#007aff] underline'>GUESS watches</a>
                                            <span> blend fashion and function perfectly, offering bold designs for trend-conscious women. With eye-catching dials, crystal embellishments, and stylish straps, they add a touch of glamour to any outfit. These watches are ideal for casual and semi-formal occasions, making them versatile accessories.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Obaku: </span>
                                            <a href="..." className='text-[#007aff] underline'>Obaku watches</a>
                                            <span> reflect Danish minimalism, featuring sleek designs with a timeless appeal. Known for their clean dials and ultra-slim cases, these watches are perfect for women who love elegance without excess. The brand focuses on high-quality materials like stainless steel and leather for a refined look.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Fossil: </span>
                                            <a href="..." className='text-[#007aff] underline'>Fossil</a>
                                            <span> is a go-to watch for women who love a mix of classic and contemporary watch designs. With leather, stainless steel, and mesh straps, these watches suit various styles and occasions. Fossil offers quality craftsmanship with features like chronographs and interchangeable bands for a personalised touch.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Luxury Brands: Movado, Philipp Plein, Longines</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Movado: </span>
                                            <a href="..." className='text-[#007aff] underline'>Movado</a>
                                            <span> is known for its signature minimalist design, featuring a sleek dial with a single dot at noon. These watches exude sophistication and are perfect for women who appreciate understated luxury. Crafted with premium materials like stainless steel and sapphire crystal, they offer durability and elegance. Movado timepieces seamlessly transition from office wear to evening glamour.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Philipp Plein: </span>
                                            <a href="..." className='text-[#007aff] underline'>Philipp Plein</a>
                                            <span> watches are bold, extravagant, and designed for women who love to stand out. They make a strong fashion statement with eye-catching skull motifs, diamond accents, and oversized designs. These watches combine luxury with a rebellious edge, reflecting Philipp Plein’s signature style. Perfect for fashion-forward women, they add a touch of glamour and confidence to any look.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Longines: </span>
                                            <a href="..." className='text-[#007aff] underline'>Longines</a>
                                            <span> is a symbol of timeless elegance, offering exquisite designs with Swiss craftsmanship. These watches for women are perfect for women who value precision and sophistication, with delicate dials and luxurious materials. They exude femininity and feature classic Roman numerals, mother-of-pearl dials, and diamond embellishments.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Gramin Leaders: Timex</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Garmin: </span>
                                            <a href="..." className='text-[#007aff] underline'>Garmin</a>
                                            <span> smartwatches blend classic design with modern technology, making them a perfect choice for women who seek style and functionality. They support an active lifestyle with features like heart rate monitoring, activity tracking, and Bluetooth calling. Their durable build, stylish straps, and user-friendly interface make them ideal for everyday wear. Whether for fitness, work, or casual outings, Garmin smartwatches offer ultimate versatility.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>How to Buy the Right Watch</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Selecting the perfect watch for women requires careful consideration of several factors:</span>
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Purpose - A watch should match your lifestyle, whether it’s for formal events, casual wear, or fitness activities. A luxury timepiece like Longines is perfect for formal occasions, while a Fossil watch fits casual looks. If you need a fitness-focused option, Timex smartwatches offer advanced tracking features. Choose based on where and how often you plan to wear it.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Material - The material affects durability and style, making it a key factor in your purchase. Leather straps exude elegance and are ideal for professional settings, while stainless steel options like Movado offer a sleek, modern touch. Ceramic watches provide a premium feel with scratch-resistant properties. Pick a material that complements your wardrobe and comfort preference.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Features - Watches today come with various features beyond just telling time. Water resistance is essential for durability, especially for daily or outdoor wear. Smart features like fitness tracking, heart rate monitoring, and notifications are perfect for active users. Philipp Plein watches stand out with their bold design and cutting-edge technology. Look for features that enhance functionality and convenience.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Budget - Finding a watch within your budget doesn't mean compromising on quality. Affordable brands like Obaku and GUESS offer stylish yet budget-friendly options.</span>
                                            <span> <a href="..." className='text-[#007aff] underline'>under ₹5,000.</a> </span>
                                            <span>Mid-range brands like Fossil balance price and premium appeal between</span>
                                            <span> <a href="..." className='text-[#007aff] underline'>₹5,000 - ₹20,000.</a> </span>
                                            <span>For those seeking luxury, brands like Longines and Movado provide timeless elegance</span>
                                            <span> <a href="..." className='text-[#007aff] underline'> above ₹20,000.</a> </span>
                                            <span>Set a realistic budget to find the perfect watch that fits your style.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='my-[1em] text-sm md:text-[16px] text-[#6F6F6F]'>
                                    Avoid buying based on trends alone—choose a watch that reflects your personality and meets your needs.
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Choosing the Right Watch for Every Occasion</strong>
                                </h2>
                                <p className='my-[1em] text-sm md:text-[16px] text-[#6F6F6F]'>
                                    The perfect watch for women isn't just about style—it's about matching it to the right occasion.
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Watches for Different Occasions</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Formal Events: A sleek Longines or Movado watch with a leather strap enhances elegance. Minimalist dials and timeless designs add a refined touch. Perfect for weddings, galas, or corporate events.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Casual Outings: A Fossil or Obaku watch offers comfort and style for everyday wear. Lightweight designs with versatile colours complement relaxed outfits. It is ideal for brunches, shopping, or casual meetups.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Workplace: Minimalistic yet professional styles, like</span>
                                            <span> <a href="..." className='text-[#007aff] underline'>GUESS</a> </span>
                                            <span>or Philipp Plein, elevate office attire. Neutral tones and elegant metal or leather straps add sophistication—an excellent choice for business meetings and daily workwear.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Outdoor Adventures: Rugged </span>
                                            <span><a href="..." className='text-[#007aff] underline'>Timex</a> </span>
                                            <span>smartwatches or sports watches are built for durability. Features like water resistance and fitness tracking support an active lifestyle. Best for hiking, workouts, and outdoor activities.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>No matter where you go, there's always a perfect watch for every occasion.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>How to Shop for Watches Online</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Authenticity Matters: Always buy from authorised sellers to ensure you get a genuine product. Check for official warranties, brand authentication, and seller credibility. Avoid deals that seem too good to be true.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Check Authorized Sellers and Warranties: Purchase from verified retailers or the brand's official website. Ensure the watch comes with a valid warranty and original documentation. This protects against counterfeit products and defects.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Verify Serial Numbers and Packaging Details: Authentic watches have unique serial numbers and high-quality packaging. Cross-check the serial number on the brand's website. Poor packaging or missing details can indicate a fake product.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Things to Look For: Ensure listings have high-resolution images from multiple angles. Read product descriptions carefully for specifications and features. Customer reviews provide insights into quality and authenticity.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Advantages of Online Shopping: Enjoy a wider selection, competitive discounts, and doorstep delivery. Compare models, features, and prices with ease. Online shopping offers convenience with secure payment options.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Price List of Watches for Women</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Budget-Friendly Watches (Under ₹5,000): Stylish and affordable options for everyday use. Perfect for casual wear and essential timekeeping.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Mid-Range Watches (₹5,000 – ₹20,000): A balance of quality and elegance with reliable features. Ideal for work, parties, and semi-formal events.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Luxury Watches (₹20,000 and above): Premium craftsmanship with timeless designs. Best for special occasions and making a statement.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Shop the Perfect Watch at Just In Time!</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Explore our vast collection of premium watches for women at Just In Time. Whether you need a classic timepiece, a sporty smartwatch, or a luxury watch, we have the perfect match for you. Visit <span><a href="..." className='text-[#007aff] underline'>Just In Time</a> </span>today for the best deals!
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>FAQ</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>1. How do I select my watch? - A guide for every woman who loves watches.</strong>
                                    <p>Finding the right watch can be overwhelming, but these key factors will help you make the best choice:</p>
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Evaluate Your Persona - Your watch reflects your personality. A smartwatch suits sports enthusiasts, while a dress watch complements a fashion-forward lifestyle..</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Consider Your Location & Climate - A bracelet watch works well in dry climates, while a water-resistant watch is ideal for rainy regions.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Set Your Budget - Watches range from affordable to luxury. Decide your budget first to narrow down your options.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Research Before Buying - Learn about watch movements (quartz is budget-friendly, automatic is premium) and materials (stainless steel is more affordable than titanium).</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Pick the Right Style & Features - Choose between classic, sporty, or modern designs. Features like chronographs or water resistance add extra functionality.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Select the Brand - Research brands based on their unique features and your budget to find the perfect match.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>2. How to match my watch with my outfit?</strong>
                                    <p>A watch completes your look, so pairing it correctly is essential. Follow these tips:</p>
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Match the Strap with Your Outfit - Leather-strapped watches suit formal attire like suits and blazers, while metal-strapped watches complement semi-casual outfits, ethnic wear, and party dresses.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Consider the Occasion - Formal events call for classic watches, gold or black designs, while casual occasions pair well with silver watches or smartwatches.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Coordinate with Your Shoes - Match metallic stilettos with vintage or metal-strapped watches. Leather boots go well with leather-strapped watches, and black heels pair best with a black watch. Flats and loafers also complement leather-strapped watches.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>3. Where to buy and service women's watches?</strong>
                                    <p>If you want to buy a woman's watch, look no further. You are at the right place,</p>
                                    <span><a href="..." className='text-[#007aff] underline'> Just in Time.</a></span>
                                    <span>Select from our wide range of women's watch collections, featuring top ladies watch brands with price options listed so you get the best value and discounts available. Not just that, we are well-known in the industry for after-purchase services. From battery replacements to changing straps, we cater to every watch need. Visit any Just In Time store near you and enjoy the joy of owning a watch from the leading womens watch brands with price options that suit every budget. We have more than 50+ stores across major cities in India.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Complete your look with a timepiece from our Women's Watch Collection. Whether you're after sophisticated minimalism or bold statement pieces, our range has something to match your style.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>4. What are the latest designs in watches for girls?</strong>
                                    <p>Our collection features the new design watch for girl options that cater to every style. From trending watches for girls that reflect modern trends to classic designs, you'll find the perfect fit. We regularly update our catalogue with new model watches for girl selections to ensure that you have access to the most stylish and innovative pieces.</p>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>5 . Are there any special deals on ladies' watches?</strong>
                                    <p>Yes! We frequently offer discounts and deals as part of our ladies watches sale. Whether you're looking for a girls watch set for gifting or simply want to update your collection with new trend watches, our promotions ensure you get quality at an unbeatable price.</p>
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

export default WomensWatches