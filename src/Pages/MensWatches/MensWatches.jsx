import React, { useState } from 'react'

// image import
import mens_watches_landing from "../../assets/mens_watches_landing.webp"
import mens_watches_lending_mobile from "../../assets/mens_watches_landing_mobile.webp"

// components import
import Men from './Men';
import MenWatchData from './MenWatchData';

// react icon
import { FiFilter } from "react-icons/fi";


function MensWatches() {

    const brands = ["All", "Casio", "Fossil", "Seiko", "Tissot", "Automatic", "50% Off"];

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredWatches = selectedBrand === "All"
        ? MenWatchData
        : MenWatchData.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={mens_watches_landing} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={mens_watches_lending_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Men's Watches</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>3124 Watches | 35 Brands</p>
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
                            <Men
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
                            <strong>Men's Watches Showcase: Discover the Ultimate Collection</strong>
                        </h2>
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>A watch is more than just a device to tell time. It is an accessory that signifies personal style, class, and functionality. Whether you're looking for a men's watch for a formal occasion, a rugged sports watch for your outdoor adventures or a cutting-edge smartwatch to track your fitness goals, the world of watches for men offers various options to suit every taste and need. </p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>In this guide, we'll take you through a comprehensive overview of watches tailored for men, explore the different types of watches for men or classic watch for men, and the top watch brands for men, and discuss how to choose the correct watch based on your preferences. Whether you're buying your first men's watch or looking to upgrade your collection, this guide will help you make an informed choice.</p>
                                <h3 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Types of Watches for Men</strong>
                                </h3>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em] space-x-2'>
                                    <span>There are endless options for men's watches. Certain brands stand out in the category, including</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Tissot,</span></a>
                                    <a href="..." className='text-[#007aff] underline'><span>Fossil,</span></a>
                                    <a href="..." className='text-[#007aff] underline'><span>Casio,</span></a>
                                    <a href="..." className='text-[#007aff] underline'><span>Rado,</span></a>
                                    <a href="..." className='text-[#007aff] underline'><span>Longines,</span></a>
                                    <a href="..." className='text-[#007aff] underline'><span>versace,</span></a>
                                    <span>and</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Emporio Armani.</span></a>
                                    <span>Different watches serve varying preferences and occasions and watches for men are categorised into many segments:</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Digital Watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Digital men's watches</span></a>
                                    <span>are an absolute favourite for most men. The watch for men brand are stylish and classy. They add a contemporary vibe to the entire attire. These stylish watches for men are versatile and blend easily with every occasion. Digital watches look best with a pair of denim jeans and T-shirts.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Digital Watches: The</span>
                                    <a href="..." className='text-[#007aff] underline'><span>analogue mens watch</span></a>
                                    <span>brands watch can never be the wrong choice for someone looking for a sophisticated old-school look. Analog watches are simple, classic, and evergreen. They are still the widely used type of watch worldwide. An analogue men's watch oozes out charm and politeness. They look superb with simple sweaters and pullovers and have a rich and minimalistic look.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Smartwatches: With technological advancement, smartwatches are the new craze among men.</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Smartwatches for men</span></a>
                                    <span>are a blend of luxury, functionality, and design. With a smartwatch, one can send a message, record one's footsteps or read an email, the possibilities are endless. For a tech enthusiast, a smartwatch is a perfect investment. Smartwatches can look good with anything. But, they look extremely sophisticated with party shirts and t-shirts. They also look great with athleisure clothes.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Dress watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Dress watches</span></a>
                                    <span>for men are classic and sophisticated watches that are supposed to be worn with a suit or a tuxedo. Classic watches for men suit almost every man. They are considered to be luxury watches and symbolise class. Dress watches add a finishing touch to men's daily and formal wear outfits. They are often passed down to generations as family assets. A dress watch is something that every man must own in his wardrobe.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Quartz watches: For men, Quartz watches work with quartz crystal oscillation. These watches are known for giving the most accurate time.</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Quartz men's watches</span></a>
                                    <span>are incredibly durable and are highly desirable to millions of men. Styling a quartz watch is pretty straightforward. They look lovely in every outfit. So, a quartz watch can be paired with anything without any doubt. </span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Chronograph watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Chronograph watches for men</span></a>
                                    <span>have a distinctive layout in the dial. Chronograph watches do a lot more than just tell time. They have a stopwatch feature that allows tracking time intervals. Men's chronograph watches look mesmerizing with an adventurous look and should be styled with pieces of denim, cargo pants, and leather jackets.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Swiss watches: A Swiss watch is a benchmark for every watchmaker. They are the most recognized, respected, and admired watches in the world. A Swiss watch can easily pass the test of time and can be useful for generations. They are extremely durable and high in quality. Almost all Swiss watches are handmade and well-crafted, which makes them so distinguishable from other watches.</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Swiss watches for men</span></a>
                                    <span>are made up of strong materials that make them last a lifetime. Hence, things like corrosion, scratches, or normal wear and tear are never a problem with Swiss watches. While many consider Swiss watches to be among the costly watches for men, they can complement any man and in any attire. But they always look best with semi-formals. Every man should own at least one Swiss watch.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>A watch is a great gift for a man - Here's why.</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>It's amazing how, despite all technological advancements, watches are still the most desirable accessory for men. Imagine something so old is still making a mark on millions of hearts. Perhaps the reason behind this is that a watch is not just an accessory, it's a timeless piece of art that showcases the refined craftsmanship and engineering of human civilization. Men of every class, caste, and society wear watches. From the president of the country to a local handyman, a watch is a loved accessory by all. We live in an age where there are endless ways to tell time, but wristwatch manufacturers are still making billions in profit. For men, their wristwatch is much more than just an accessory. They add value to their lifestyle. A watch is an expression of a man's personality. A man's watch tells a lot about his life. For example, a watch's design, brand, and functionality disclose a man's life choices. A watch with different watches and time zones can be a sign of his wanderlust nature. Most men see their watches as investments. Some watches are worth more than cars or other assets. A good watch from a well-known watchmaker might also appreciate its value. For millions of men, a watch is an emotional investment. Even when they are fully dressed, they feel incomplete without their wristwatch. A man might have an extensive men's watch collection, but it's perfectly ok to gift him a watch. Because when it comes to watches for men on sale, the more the merrier. Also, unlike a PlayStation or a phone, a watch is a more versatile gift. Because watches in themselves are versatile and can be worn on different occasions. If you are looking for the perfect gift for your dad, husband, boyfriend, uncle, or any other special man in your life, then gifting them a watch is perhaps the smartest decision. Because every time they wear it and take a glance at their watch, it will remind them of you and your love. The best thing about wristwatches is that they make a perfect gift for every occasion including birthdays and anniversaries.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Also, budget mens watches come in many variations, so you will have a plethora of different watches to choose from.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Know everything about luxury watches for men</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>When it comes to options for men fashion watches, luxury watches top the chart.</span>
                                    <a href="..." className='text-[#007aff] underline'>Luxury watches</a>
                                    <span>come with a set of values and add aesthetics to a man's life. Most Swiss watches are luxury watches and are highly valued in the watch market. In India, a premium or a luxury watch can start from Rs. 10,000 and can go up to lakhs. Some of the best watch brands for men in India for luxury men's watches are Calvin Klein, Rado, Tissot, Seiko, Versace, Fossil, Emporio Armani, and many others. For men, luxury watches symbolize their class and character. It is often said that a man isn't fully dressed till he has a watch on his wrist. </span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>A luxury watch for a man is much more than just an accessory; it elegantly tells the onlooker who they are and where they stand in life. And hence, men love their luxury watches to death. Mens fashion watches isn't just about owning an accessory; it's about owning a lifestyle. It's also about showing the world where they belong. And a luxury watch helps men do that with much style and panache. The Men's Watches Showcase includes everything from stylish budget men watches to the latest smartwatches, ensuring every man finds the perfect fit for his lifestyle.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Top Watch Brands for Men</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>The right watch is often as good as the brand that endorses it. Whether you prefer an affordable men's watch for regular use or a high-end luxury timepiece, the market is flooded with reputable brands catering to different needs and budgets. Let's look at a few the trending branded watches for men that are topnotch in terms of quality, design, and reliability:</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Affordable Options (Entry brands and Fashion Brands):</strong>
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Timex: One of India's leading brands for men's watches, Timex offers timepieces at affordable prices. Known for its stylish and durable design, a</span>
                                            <a href="..." className='text-[#007aff] underline'>Timex men's watch</a>
                                            <span>is your perfect everyday wear. </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Fossil: Known for designs that blend classic and contemporary styles, Fossil offers men's watches that can be accessorized with all kinds of outfit. Perfect for casual and formal occasions,</span>
                                            <a href="..." className='text-[#007aff] underline'>Fossil men's watches</a>
                                            <span>often feature leather bands,chronograph designs, and elegant dials.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Casio: Casio is your go-to brand for affordable yet durable men's watches Known for their practical designs,</span>
                                            <a href="..." className='text-[#007aff] underline'>Casio watches</a>
                                            <span>are characterised with features such as alarms, backlighting, and water resistance, making them an ideal and reliable timepiece.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Luxury Brands:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Rado: In the men's watches category,</span>
                                            <a href="..." className='text-[#007aff] underline'>Rado</a>
                                            <span>watches are known for their innovative use of materials such as ceramic and high-tech tungsten. Rado men's luxury watches offer sleek, modern designs that stand out for their scratch-resistant surfaces and exceptional durability.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Versace:</span>
                                            <a href="..." className='text-[#007aff] underline'>Versace</a>
                                            <span>watches cater to the male customer segment seeking bold style and sophistication. These luxury men's watches are known for unique, eye-catching designs, often featuring the iconic Versace logo and high-quality craftsmanship, making them a perfect statement timepiece.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Ferragamo:</span>
                                            <a href="..." className='text-[#007aff] underline'>Ferragamo men's watches</a>
                                            <span>are the epitome of refined elegance, with the brand's signature being attention to detail. With sleek, minimalist designs, these watches exude sophistication, making them a perfect symbol of understated luxury.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>Fitness and Sports Watches:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Garmin: Garmin fitness watches are for men who value performance and innovation. Garmin offers a wide range of watches that track various fitness activities, from running to swimming and golf. Known for their precision and GPS capabilities, Garmin men's watches are engineered to withstand the rigours of outdoor adventures while providing valuable fitness data. Garmin's sports watches, like the</span>
                                            <a href="..." className='text-[#007aff] underline'>Garmin Unisex Amoled Digital-Smart Watch,</a>
                                            <span>are perfect for athletes or fitness enthusiasts who are involved in intense training sessions.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>How to Buy the Right Watch</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>When buying a men's watch, several factors will guide you toward the best choice. Here's a breakdown of what to consider to ensure that you pick a men's watch that perfectly suits your style and utility requirements.</span>
                                </p>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Purpose:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Are you buying a men's watch that can be worn to work, for casual outings, or while taking up sports? While purchasing a wrist watch for men, the purpose or occasion is crucial in narrowing down your options. For example, if you're looking for a men's watch for formal work settings, a sleek and minimalist watch with leather straps is the best option.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Material:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>The material of the men's watch affects its durability, comfort, and aesthetic appeal. Stainless steel watches for men are durable, timeless, and versatile, making them suitable for casual and formal settings. Many premium watches for men are made of high-quality materials that enhance their longevity and contribute to their overall elegance and value.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Features:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>When selecting a men's watch, it's essential to consider the desired product features. Some may simply opt for a classic watch with timekeeping functionality, while others require advanced features. For tech-savvy individuals, a smartwatch for men could be the best option, offering tech features such as tracking of heart rate , fitness monitoring, and other notifications.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Budget:</strong>
                                </h2>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>The price of a men's watch can vary widely, with options available for every price category. Whether you're looking for an affordable or premium men's watch, setting a budget helps in shortlisting watches that match your financial parameters. Affordable men's watches offer great value for their functionality, while luxury watches deliver craftsmanship, precision, and timeless appeal.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='my-[1em] text-sm md:text-[16px] text-[#6F6F6F]'>
                                    By considering these key factors - purpose, material, features, and budget - you'll find the perfect men's watch that complements your personal style and utility.
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Watches for Different Occasions</strong>
                                </h2>
                                <p className='my-[1em] text-sm md:text-[16px] text-[#6F6F6F]'>
                                    The perfect men's watch should be versatile and suitable for various occasions. Here's a quick guide to choosing the right men's watch for different occasions:
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Formal Events: For formal events, a dress watch with a sleek leather band and a simple dial works well. Choose a classic men's dress watch to pair with your suit or tuxedo for a polished, sophisticated look.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Casual Outings: Whether you're grabbing a cup of coffee with friends or hanging out at a weekend party, a casual men's watch is perfect. Choose fabric designs or rubber watch bands for additional comfort and ease of wear.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Workplace: A men's watch with a minimalist design and a professional appearance is the perfect workplace accessory. A stainless-steel watch or a leather band with a classic dial works well in corporate environments.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Outdoor Adventures: Men's sports watches or smartwatches are ideal to be worn during outdoor activities such as hiking, biking, or swimming. These watches are built to withstand outdoor pressures and keep you on track with fitness goals.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>How to Shop for Men's Watches Online</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Online shopping is the go-to choice to buy watches for men, with convenience, access to product variety, and ease of price comparison being its advantages.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Authenticity Matters: When shopping for a men's watch, it’s important to opt for authorised sellers or well-known online retailers. Be sure to check for warranties and return policies to safeguard your purchase.
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Check Serial Numbers and Packaging: Verify the serial number and product packaging to ensure that the product is authentic.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Watches for Men: Pricelist!</strong>
                                </h2>
                                <ul className='my-[1em] list-decimal pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Budget-Friendly Watches: We have numerous options for affordable men's watches priced</span>
                                            <a href="..." className='text-[#007aff] underline'>below ₹5,000.</a>
                                            <span>Timex and Casio offer high-quality yet budget watches for men.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Mid-Range Watches: Men's watches priced between</span>
                                            <a href="..." className='text-[#007aff] underline'>₹5,000 and ₹20,000</a>
                                            <span>offer a balance of style and affordability. Fossil and Citizen have a range of reliable and stylish options.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Luxury Watches: If budget is not a concern, choose from our range of luxury men's watches. Choose from the appealing designs of Rado and Longines watches that are priced</span>
                                            <a href="..." className='text-[#007aff] underline'>above ₹20,000.</a>
                                            <span>These luxury watches are a combination of both style and status.</span>
                                        </p>
                                    </li>
                                </ul>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Conclusion</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    In conclusion, the purpose of a men's watch is not limited to time tracking. A watch is a personal style statement, a functional tool, and an investment. Whether you're looking for a men's watch for a formal event or a sports watch for outdoor activities,  there's a watch that perfectly suits every occasion. From affordable options to luxury brands, choose your best fit from our men's watch range.
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>Shop the Perfect Watch at Just In Time!</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Explore the vast collection of premium trending watches for men</span>
                                    <a href="..." className='text-[#007aff] underline'>men's watches</a>
                                    <span>at Just In Time. Whether you need a classic timepiece, a sporty smartwatch, or a luxury watch, we have the perfect match for you. Visit the Just In Time website and shop online watches men today for the best deals! You can also visit our 75+ stores across 15+ cities.</span>
                                </p>
                                <h2 className='my-[1em] text-xl md:text-2xl'>
                                    <strong>FAQs</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>1. How to select the best watch for a man?</strong>
                                    <span>Watches make a perfect gift for men, though choosing the right one can be overwhelming! While investing in a timepiece, consider his personality, lifestyle, and personal preferences. Set a budget, research your options, compare styles and features, and invest in a reputable brand that fits his needs.</span>
                                </p>
                                <ul className='my-[1em] list-decimal pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Think of the end-user - Consider his interests, hobbies, and profession. A classic watch would suit a businessman, while a sports enthusiast may opt for a rugged design.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Analyse the end user's location and climatic conditions - Metal bracelet watches are suitable in dry climatic conditions, whereas water-resistant watches suit humid or rainy region conditions.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Set a budget - Choose from our range of affordable to luxury watches based on your budget. Decide your spending capability and willingness before finalising your purchase.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Research well - Do your research on the quality, durability, and price of a watch in terms of materials and mode of operation.  Quartz watches are affordable, while automatic ones are pricier. Stainless steel is budget-friendly, while titanium or carbon fibre watches are costlier. </span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Consider styles and features - The choice of a watch needs to suit the wearer's personality. We also have handwatches for men. A classic three-hand watch suits a traditionalist and not a tech-savvy person. Features such as chronographs and water resistance should meet the user's needs.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Select the brand - Once you've decided on style and function, research on brands and their USPs. Choose a brand that fits your budget and requirements.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>2. How do I match a watch with my outfit?</strong>
                                    <span>Pairing the right watch with the right outfit enhances your look. Choose a watch that complements your attire and occasion.</span>
                                </p>
                                <ul className='my-[1em] list-decimal pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Customise your watchstrap to match your outfit - Leather straps suit formal outfits, while metal straps suit semi-casual wear. Casual watches go well with jeans and T-shirts.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Match with the occasion - Dress codes matter. A gold or black watch suits business events, while silver or smartwatches work for casual occasions.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Match your watch with your shoes - Coordinate your watch with your shoes for a refined look. Black shoes pair well with black watches, and leather-strapped watches complement leather shoes.</span>
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>3. Where to buy and service men's watches?</strong>
                                    <p>Find a wide range of men's watches at Just In Time stores or online. With over 65+ stores across India, we also offer after-sales services like battery replacements and strap changes.</p>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>4. Are men's watches water-resistant?</strong>
                                    <p>Yes, many men's watches are water-resistant, making them ideal for various conditions.</p>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>5. Do men's watches come with interchangeable straps?</strong>
                                    <p>Yes, some watches have interchangeable straps for versatile styling.</p>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <strong>6. Where can I purchase men's watches?</strong>
                                    <p>You can buy men's watches online or at Just In Time stores across India.</p>
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

export default MensWatches