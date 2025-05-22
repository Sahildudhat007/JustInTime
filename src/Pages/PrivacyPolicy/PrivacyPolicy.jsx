import React from 'react';

// component import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

function PrivacyPolicy() {
    return (
        <>
            <div>
                <Breadcrumb goBackLink="Home" pageTitle="Privacy Policy" />
            </div>

            <section className='mx-auto px-[1.5rem] md:px-10 lg:px-[120px] py-7 w-full max-w-[72.6rem] font-serif'>
                <h1 className='text-center text-3xl md:text-6xl font-serif mb-16'>Privacy Policy</h1>
                <p className='mb-4'>JUST IN TIME ("Us" or "We") revere your privacy and consider it a top priority to secure your personal information. We commit to protecting your personal information collected via the applications installed on the website or native mobile applications, or our official website.</p>
                <p className='my-4'>This privacy notice and policy indicate the data we collect from you across online platforms and describe the purposes for collecting your personal information. It also specifies the other parties with whom we may share your information and the measures we take to protect your data security. It will give you details on how we look after the privacy of your data when you visit our website despite your access location/when you interact directly with us or our affiliates. It states your privacy rights and how the constitutional law protects your data.</p>
                <p className='my-4'>We disclose our privacy policy abiding by the laws applicable to data privacy and data security in the country where JUST IN TIME distributes its product/services to you. Note that we can change our privacy practices anytime in the future, and we encourage you to check our policy updates whenever you visit our website.</p>
                <p className='my-4'>By accepting this privacy policy, you agree to the policy terms mentioned here and expressly consent to our use and disclosure of your personal information submitted on our website or other online platforms.</p>
                <p className='my-4'>&nbsp;&nbsp;<b>What Information Do We Collect About You/the User?</b></p>
                <p className='my-4'>We may collect, use, or store information based on what you provide to us directly while registering for certain services/features or from automatically captured data when you visit our website/application or from third parties. We may collect information in the following categories without limitation:</p>
                <ul className='list-disc md:pl-8 my-4'>
                    <li>
                        <b>Data of Identity</b>
                        <span>- This category includes first name, last name, maiden name, username, marital status, age, nationality, government identification documents, date of birth, gender, employer, title or other identity data submitted in product reviews, surveys and questionnaires.</span>
                    </li>
                    <li>
                        <b>Contact Information</b>
                        <span>- This category includes data related to a postal address, email address, phone number or similar data.</span>
                    </li>
                </ul>
                <ul className='list-disc md:pl-8 my-4'>
                    <li>
                        <b>Technical Data</b>
                        <span>- This includes information regarding the website, mobile app and device usage, internet protocol (IP) address, browser type, time zone setting, location, your login data, browser version, server log information, browser plug-in types, operating system, technology on the devices, and other automated data collected like cookies and pixels.  </span>
                    </li>
                    <li>
                        <b>Transaction Information</b>
                        <span>- This category includes data related to your transaction history, date and time of the transaction, your preferences, total transaction amount and similar data.</span>
                    </li>
                    <li>
                        <b>Product and Service Data</b>
                        <span>- We also store or collect information about your account registration, payment information, and data related to your requested products and services.</span>
                    </li>
                    <li>
                        <b>Financial Information</b>
                        <span>- We collect/store your payment method/mode, transactions, type of payment, spending patterns/trends, transaction history, and other similar data.</span>
                    </li>
                    <li>
                        <b>Marketing and Communications Data</b>
                        <span>- This category includes your preferences in communication emails or receiving marketing-related information from our website/third-party services. You can stop us from sending you marketing messages by following the opt-out links or contacting us.</span>
                    </li>
                </ul>
                <p className='my-4'>We do not collect personal data that hints about your ethnicity, race, sex life, religious or philosophical beliefs, criminal convictions, sexual orientation, political opinions, genetic information or biometric data.</p>
                <p className='my-4'>&nbsp;</p>
                <p className='my-4'><b>How Do We Use Your Personal Information?</b></p>
                <p className='my-4'>We may retain your information for as long as necessary to fulfil the below purposes and satisfy any legal, tax, regulatory, and accounting requirements.</p>
                <ul className='list-disc md:pl-4 my-4'>
                    <li>
                        <b>General</b>
                    </li>
                </ul>
                <p className='my-4'>We may use your data to register you and your device for a particular service or deliver a service/feature, or provide customised content for giving suggestions depending on your past activities.</p>
                <p className='my-4'>&nbsp;</p>
                <ul className='list-disc md:pl-4 my-4'>
                    <li>
                        <b>Marketing and Advertisements </b>
                    </li>
                </ul>
                <p className='my-4'>We may use your data to communicate regarding products/services via email, whatsapp, sms, RCS, phone, in-device messaging, or to give you service and product updates via newsletters and other forms of marketing campaigns. Note that we may use your information and contact you depending on your consent or as per permission applicable under law.</p>
                <p className='my-4'>&nbsp;</p>
                <ul className='list-disc md:pl-4 my-4'>
                    <li>
                        <b>Product/Services Improvement</b>
                    </li>
                </ul>
                <p className='my-4'>We may use your reviews and suggestions for our process improvements to improve/modify our products and services. We may use them to learn user preferences, recommendations, advertisements, and other communications.</p>
                <p className='my-4'>&nbsp;</p>
                <p className='my-4'>
                    <b>Links to Other Websites and Third-Party Sites</b>
                </p>
                <p className='my-4'>Please note that the JUST IN TIME application may have links to third-party websites or applications. We are not responsible for other websites' content or content on third-party applications and privacy statements. When you leave our website, we recommend you check their privacy policy to know your rights and obligations, especially when you submit content on their website/applications.</p>
            </section>
        </>
    )
}

export default PrivacyPolicy