import React, { useState } from 'react'

// image import
import womens_watches_landing from "../../assets/Womens_watches_landing.webp"
import womens_watches_lending_mobile from "../../assets/womens_watches_landing_mobile.webp"

// components import
import Women from './Women';
import WomenWatchData from './WomenWatchData';

// react icon
import { FiFilter } from "react-icons/fi";

function WomensWatches() {

    const brands = ["All", "Casio", "Fossil", "Seiko", "Tissot", "Automatic", "50% Off"];

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredWatches = selectedBrand === "All"
        ? WomenWatchData
        : WomenWatchData.filter(watch => watch.brand === selectedBrand);

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
                                    <span>Dress Watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Dress watches for women</span></a>
                                    <span>are classic and sophisticated watches that are supposed to be worn with a gown or a short dress. Dress watches suit almost every woman. They are considered to be luxury watches and symbolize class. Dress watches add a finishing touch to women's daily wear and formal wear outfits. They are often passed down to generations as family assets. A dress watch is something that every woman must own in her wardrobe.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Quartz Watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Quartz watches for women</span></a>
                                    <span>are watches that work with quartz crystal oscillation. These watches are known for giving the most accurate time. Quartz women's watches are extremely durable and at the same time, they are highly desirable by millions of women. Styling a quartz watch is pretty easy. They look nice in every outfit. So, a quartz watch can be paired with anything without any doubt.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Chronograph Watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Women's chronograph watche</span></a>
                                    <span>s have a distinctive layout in the dial. Chronograph watches do a lot more than just tell time. They have a stopwatch feature that allows tracking time intervals. Chronograph watches look mesmerizing with an adventurous look and should be styled with pieces of denim, cargo pants, and leather jackets.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Swiss Watches: A Swiss watch is a benchmark for every watchmaker. They are the most recognized, respected, and admired watches in the world. A Swiss watch can easily pass the test of time and can be useful for generations. They are extremely durable and high in quality. Almost all Swiss watches are handmade and well-crafted which makes them so distinguishable from other watches.</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Swiss watches for women</span></a>
                                    <span>are made up of strong materials that make them last a lifetime. Hence, things like corrosion, scratches, or normal tear wear are never a problem with Swiss watches. A Swiss watch can complement any woman and in any attire. But they always look best with semi-formals. Every woman should own at least one Swiss watch.</span>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    <span>Sports Watches:</span>
                                    <a href="..." className='text-[#007aff] underline'><span>Sports watches for women</span></a>
                                    <span>combine style with functionality, making it perfect for active lifestyles. Designed with features like water resistance, fitness tracking, and durable materials, it ensures reliability during workouts or outdoor adventures. Sports watches offer comfort and performance, whether you prefer a sleek digital design or a rugged analogue look. Ideal for running, swimming, or gym sessions, they keep you on track while complementing your sporty style.</span>
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
                                    <span>Imagine an investment that not only acts as an asset but also adds a spark to your persona. Sounds fantastic, isn't it? A luxury woman's watch is just that. Luxury watches come with a set of values and add charm to a woman's life. Most Swiss watches are luxury watches and are highly valued in the watch market. In India, a premium or a luxury watch can start from Rs. 10000 and can go up to lakhs. Some of the best female watch brands for</span>
                                    <a href="..." className='text-[#007aff] underline'>luxury women's watches</a>
                                    <span>are Calvin Klein, Rado, Tissot, Seiko, Versace, Fossil, Emporio Armani, and many others. For women, luxury watches symbolize their class and independence. She might be wearing the most expensive gown in town, but without a luxury watches, her look might still look incomplete. A luxury watch for a woman is much more than just an accessory; it elegantly tells the onlooker who she is and where she stands in life. And hence, most women love their elegant watches to death. Luxury isn't just about owning an accessory; it's about owning a lifestyle. It's also about showing the world where she belongs. And a luxury watch helps her do that with much style and panache.</span>
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
                                            <span>GUESS:</span>
                                            <a href="..." className='text-[#007aff] underline'>GUESS watches</a>
                                            <span>blend fashion and function perfectly, offering bold designs for trend-conscious women. With eye-catching dials, crystal embellishments, and stylish straps, they add a touch of glamour to any outfit. These watches are ideal for casual and semi-formal occasions, making them versatile accessories.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Obaku:</span>
                                            <a href="..." className='text-[#007aff] underline'>Obaku watches</a>
                                            <span>reflect Danish minimalism, featuring sleek designs with a timeless appeal. Known for their clean dials and ultra-slim cases, these watches are perfect for women who love elegance without excess. The brand focuses on high-quality materials like stainless steel and leather for a refined look.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <span>Fossil:</span>
                                            <a href="..." className='text-[#007aff] underline'>Fossil</a>
                                            <span>is a go-to watch for women who love a mix of classic and contemporary watch designs. With leather, stainless steel, and mesh straps, these watches suit various styles and occasions. Fossil offers quality craftsmanship with features like chronographs and interchangeable bands for a personalised touch.</span>
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

export default WomensWatches