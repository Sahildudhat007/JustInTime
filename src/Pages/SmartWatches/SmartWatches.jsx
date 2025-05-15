import React, { useState } from 'react';

// image import
import smartwatches_desk from "../../assets/smartwatches_desk.webp";
import smartwatches_mobile from "../../assets/smartwatches-mobile.webp";

// components import
import Smart from './Smart';
import MenWomenData from '../../Components/MenWomenData/MenWomenData';

// react icon
import { FiFilter } from "react-icons/fi";

function SmartWatches() {

    const brands = ["Buckle Clasp", "Black"];

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState("All");

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredWatches = selectedBrand === "All"
        ? MenWomenData.smartData
        : MenWomenData.smartData.filter(watch => watch.brand === selectedBrand);

    return (
        <>
            <section className='w-full'>
                <div className='relative w-full h-full'>
                    <img src={smartwatches_desk} alt="" className='w-full h-full object-cover hidden md:block' />
                    <img src={smartwatches_mobile} alt="" className='w-full h-full object-cover block md:hidden' />
                    <div className='absolute left-[10vw] bottom-[4vw] p-2.5 md:p-0'>
                        <h1 className='text-[9.3vw] md:text-[3.66vw] font-serif text-white'>Smart Watches</h1>
                        <p className='text-[3.33vw] md:text-[1.318vw] text-white uppercase opacity-70'>11 Watches | 35 Brands</p>
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
                        <a href="#" className='text-white bg-black rounded-full py-4 px-7 text-sm md:text-[1.1vw] hover:bg-gray-800 transition hidden md:flex items-center'>
                            <FiFilter className='mr-2' />
                            FILTER & SORT
                        </a>
                    </div>
                </div>

                <div className='px-[10px] lg:px-[50px] xl:px-[10%] pb-9 grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-[25px]'>
                    {filteredWatches.length > 0 ? (
                        filteredWatches.map((value, ind) => (
                            <Smart
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
                            <strong>The Smartwatch Revolution: Your Ultimate Guide to Choosing the Best Smartwatches in 2025</strong>
                        </h2>
                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>The world of smartwatches has seen remarkable growth in recent years, with advancements in technology and design making these wearable gadgets more functional, stylish, and accessible than ever before. Smartwatches are no longer just about telling the time—they are now powerful tools for health tracking, communication, entertainment, and much more. Whether you're a tech enthusiast, fitness fanatic, or someone who just wants a convenient device on your wrist, there's a smartwatch out there for you. In this comprehensive guide, we'll explore some of the best smartwatches on the market, including models from popular brands like </p>
                        {isExpanded && (
                            <>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    In this guide, we'll take you through a comprehensive overview of watches tailored for men, explore the different types of watches for men or classic watch for men, and the top watch brands for men, and discuss how to choose the correct watch based on your preferences. Whether you're buying your first men's watch or looking to upgrade your collection, this guide will help you make an informed choice.
                                    <a href="#" className='text-[#007aff] underline'><span>Helix,</span></a>
                                    <a href="#" className='text-[#007aff] underline'><span>Garmin,</span></a>
                                    <a href="#" className='text-[#007aff] underline'><span>Timex,</span></a>
                                </p>
                                <h3 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Why Choose a Smartwatch?</strong>
                                </h3>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em] space-x-2'>
                                    Before diving into the details of specific models, it's important to understand why smartwatches have become so popular. These watches combine the traditional role of a timepiece with modern technological features that help you stay connected, track fitness goals, and simplify daily tasks. Whether it's answering calls on the go, tracking your heart rate during a workout, or receiving notifications without reaching for your phone, a smartwatch provides both practicality and convenience.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Smartwatches also feature several customisation options, with countless apps available to cater to different needs. From navigation to music control, smartwatches can significantly enhance your lifestyle.
                                </p>
                                <h2 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Top Smartwatch Brands to Consider</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    There are numerous smartwatch brands on the market today, each offering unique features and designs to cater to various needs. Some of the top smartwatch brands include:
                                </p>
                                <ul className='my-[1em] list-disc pl-5 md:pl-10'>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Helix
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Garmin
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Timex
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Samsung
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Apple
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            <a href="#" className='text-[#007aff] underline'>Fossil</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                            Amazfit
                                        </p>
                                    </li>
                                </ul>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Each brand offers a range of models suitable for different occasions, from fitness-focused devices to high-end luxury models designed for style-conscious individuals.
                                </p>
                                <h2 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Helix: Stylish and Functional Smartwatches</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Helix is a popular brand known for producing stylish and functional smartwatches. With an emphasis on blending technology with modern aesthetics, Helix offers affordable and reliable options for both men and women.
                                </p>
                                <a href="#" className='text-[#007aff] underline'>Helix Men's Black Digital Smart Watch TW0HXW406T</a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Helix Men's Black Digital Smart Watch TW0HXW406T is a fantastic option for those looking for a versatile, feature-rich smartwatch at a competitive price. Featuring a sleek black design, this digital smartwatch is equipped with multiple features that cater to fitness enthusiasts, professionals, and casual users alike.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    With a large digital display, the TW0HXW406T offers clear readability, even in direct sunlight. It also boasts fitness tracking features such as step counting, heart rate monitoring, and calorie tracking. For those who want to stay connected, the smartwatch allows notifications for calls, messages, and social media updates right on the screen.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The watch also offers water resistance, making it suitable for everyday wear, including workouts and outdoor activities. The sleek design and practical features make this Helix smartwatch a great all-around choice for those who want a reliable, affordable smartwatch without compromising on quality.
                                </p>
                                <a href="#" className='text-[#007aff] underline'>Helix Women's Black Digital Smart Watch TW0HXW203T</a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Helix Women's Black Digital Smart Watch TW0HXW203T is another fantastic offering from the brand, specifically designed for women who need a smartwatch that combines style with functionality. The watch comes with a streamlined, minimalist design, making it an excellent choice for both casual and more formal occasions.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Just like the men's model, the TW0HXW203T offers fitness tracking features like step counting, heart rate monitoring, and sleep tracking. It also includes notifications for calls, messages, and emails, ensuring you stay connected without needing to pull out your phone. Its lightweight design makes it comfortable for all-day wear, and the durable build ensures it can withstand the rigours of daily life. Whether you're hitting the gym or going for a run, this Helix smartwatch can help you track your progress and stay on top of your goals.
                                </p>
                                <h2 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Garmin: The Brand for Fitness and Adventure</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Garmin has long been a leading brand in the fitness tracker market, and its smartwatches are no exception. Known for their durable, high-performance watches, Garmin's smartwatches are perfect for active users who demand top-notch fitness tracking capabilities.
                                </p>
                                <a href="#" className='text-[#007aff] underline'>Garmin Unisex AMOLED Digital-Smart Watch EPIX GEN 2 010-02582-07</a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Garmin Unisex AMOLED Digital-Smart Watch EPIX GEN 2 010-02582-07 is a standout in the Timex smartwatch lineup. Featuring an AMOLED display, this watch offers vibrant colours and sharp clarity, making it easy to view notifications, workout data, and maps. Its sleek design and unisex fit make it a great option for both men and women.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Packed with fitness tracking features, including heart rate monitoring, GPS, and sleep tracking, this watch is perfect for those who lead an active lifestyle. Whether you're hiking, running, or cycling, the Garmin EPIX GEN 2 provides valuable metrics to track your performance. The watch is also equipped with customisable watch faces, allowing you to personalise it to your liking.
                                </p>
                                <h2 className='text-sm md:text-[16px] my-[1em]'>
                                    <strong>Timex: Classic Design with Modern Features</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Timex has a long-standing reputation for creating durable and reliable timepieces, and their smartwatches are no different. Known for combining classic design with modern features, Timex offers smartwatches that appeal to those who want a timeless aesthetic without sacrificing functionality.
                                </p>
                                <a href="#" className='text-[#007aff] underline'>Timex Black Digital Smart Watch </a>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    The Timex Black Digital Smart Watch are a perfect choice for active women looking for a smartwatch that can handle intense workouts while still offering a stylish design. Garmin's reputation for precision in health and fitness tracking is evident in this model, which includes advanced features such as heart rate monitoring, GPS tracking, and multi-sport activity modes.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Whether you're running, cycling, swimming, or doing yoga, the provides real-time data to help you optimise your workouts. The watch is also water-resistant, so you can wear it while swimming or in the rain without worrying about damaging it. With a long battery life, you won't have to worry about recharging during the day, making it perfect for long outdoor activities.
                                </p>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Choosing the Right Smartwatch: What to Look For</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    When buying a smartwatch, several important factors should guide your decision. A smartwatch is not just an accessory but a functional device that should align with your lifestyle and needs. Below are key aspects to consider before making a purchase:
                                </p>
                                <p>
                                    <strong>1. Operating System Compatibility</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    One of the most crucial factors is ensuring that the smartwatch is compatible with your smartphone's operating system. Android users should opt for smartwatches that run on Wear OS or other Android-friendly software. Apple users, on the other hand, may prefer an Apple Watch, which seamlessly integrates with iPhones and offers exclusive features like iMessage and Apple Pay. Some smartwatches, such as those from Garmin or Timex, work across multiple platforms, making them versatile options.
                                </p>
                                <p>
                                    <strong>2. Design and Comfort</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Since you'll likely wear your smartwatch for extended periods, it's essential to choose a design that matches your personal style and ensures comfort. Factors such as watch size, strap material, and weight play a significant role. Some models offer interchangeable bands, allowing users to switch between casual and formal looks easily.
                                </p>
                                <p>
                                    <strong>3. Battery Life and Charging</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Battery life varies significantly across smartwatch brands and models. Some watches last only a day, while others, like Garmin's smartwatches, can run for multiple days on a single charge. Consider your daily routine—if you don't want to charge your watch every night, opt for a model with longer battery life. Additionally, check whether the smartwatch supports fast charging, as this can be a convenient feature for busy users.
                                </p>
                                <p>
                                    <strong>4. Fitness and Health Tracking Features</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Many smartwatches now double as fitness trackers, offering features like heart rate monitoring, step counting, sleep tracking, and calorie tracking. If you're into sports or workouts, choose a smartwatch with built-in GPS, SpO2 monitoring, and advanced activity tracking. Some watches also offer specialized tracking for swimming, cycling, and running, making them ideal for athletes.
                                </p>
                                <p>
                                    <strong>5. Water Resistance and Durability</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    A water-resistant smartwatch is a must if you plan to wear it while swimming, running in the rain, or even washing your hands. Some models are designed for deep water diving, while others are splash-proof. Look for a watch with an IP67 or IP68 rating for everyday water resistance.
                                </p>
                                <p>
                                    <strong>6. Price and Budget Considerations</strong>
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Smartwatches come in various price ranges, from budget-friendly options like Helix to premium models from brands like Garmin and Timex. Higher-end models often include premium materials, additional sensors, and enhanced durability. Determine your budget and choose a smartwatch that offers the best features within that range.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    By carefully considering these factors, you can find a smartwatch that perfectly matches your needs, ensuring a balance between style, functionality, and affordability.
                                </p>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Smartwatches for Men: Choosing the Right Model</strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    When it comes to smart watches for men, there are plenty of options to choose from, ranging from fitness-oriented models to more fashion-forward designs. For men who prioritize fitness tracking, models like the
                                    <a href="#" className='text-[#007aff] underline'><span>Helix Men's Black Digital Smart Watch TW0HXW406T </span></a> are great options, offering a balance of design and function.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For those who want a more premium experience with advanced features like AMOLED displays and GPS tracking, the
                                    <a href="#" className='text-[#007aff] underline'><span> Timex Unisex AMOLED Digital-Smart Watch EPIX GEN 2 010-02582-07 </span></a>is a standout choice. With the addition of heart rate monitoring, sleep tracking, and a robust design, this smartwatch is an excellent companion for both everyday use and fitness activities.
                                </p>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Smartwatches for Women: A Stylish and Functional Option</strong>
                                </h2>
                                <p className='my-[1em] text-sm md:text-[16px] text-[#6F6F6F]'>
                                    When it comes to smartwatches for women, the perfect choice combines both fashion and functionality. A well-designed smartwatch should not only complement your personal style but also provide essential features such as heart rate monitoring, sleep tracking, activity tracking, and smartphone notifications. Many women prefer a smartwatch that is lightweight, comfortable, and stylish enough to wear daily, whether at the office, gym, or social gatherings.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    One of the top choices is the
                                    <a href="#" className='text-[#007aff] underline'><span> Helix Women's Black Digital Smart Watch TW0HXW203T, </span></a>which offers an elegant and minimalist design, making it a versatile accessory that pairs well with any outfit. Despite its sleek look, it packs in multiple features like calorie tracking, step counting, and call/message notifications, making it ideal for modern women who need a balance between fashion and technology.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    For fitness-conscious women, the Garmin Women's Black Digital Smart Watch is an excellent option. This smartwatch is designed to track multiple fitness metrics, including heart rate, oxygen levels, and sleep quality. Its durability and water resistance make it perfect for intense workouts, outdoor activities, or even swimming.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    With these smartwatches, women can enjoy the best of both worlds—style and cutting-edge technology—ensuring they stay connected, active, and in control of their health and lifestyle.
                                </p>
                                <h2 className='my-[1em] text-sm md:text-[16px]'>
                                    <strong>Conclusion: </strong>
                                </h2>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Smartwatches have become an integral part of modern life, offering a blend of technology, convenience, and style. With features like health tracking, notifications, and seamless integration with smartphones, smartwatches have revolutionised the way we stay connected and manage our daily tasks.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    Whether you're looking for a smartwatch for fitness, style, or everyday use, brands like Helix, Garmin, and Timex offer a variety of models that cater to different needs and preferences. From the affordable and functional Helix Men's Black Digital Smart Watch to the premium Timex Unisex AMOLED Digital-Smart Watch EPIX GEN 2, there's a smartwatch out there for everyone.
                                </p>
                                <p className='text-sm md:text-[16px] text-[#6F6F6F] my-[1em]'>
                                    As smartwatches continue to evolve, they will only become more integrated into our lives, offering new ways to stay healthy, stay connected, and enhance our daily routines. Whether you're a man, a woman, or someone looking for a unisex option, choosing the right smartwatch can make all the difference in optimising your lifestyle. Shop online at
                                    <a href="#" className='text-[#007aff] underline'><span> Just In Time </span></a>today!
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

export default SmartWatches