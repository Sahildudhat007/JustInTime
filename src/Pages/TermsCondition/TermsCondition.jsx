import React from 'react';

// components import
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

function TermsCondition() {
    return (
        <>
            <div className=''>
                <Breadcrumb goBackLink="Home" pageTitle="Terms and Conditions" />
            </div>
            <section>
                <div className='mx-auto px-[1.5rem] md:px-10 lg:px-[120px] py-7 w-full max-w-[72.6rem]'>
                    <h1 className="text-[4rem] leading-16 font-serif text-center mb-12 lg:mb-16">
                        Terms and Conditions
                    </h1>
                    <div className='font-serif'>
                        <p className='mb-4 font-serif'>These terms and conditions apply to users who visit our website but do not handle business and users who register on our website. &nbsp;</p>
                        <p className='my-4'>
                            <b>About Disclosing Your Personal Information </b>
                        </p>
                        <ol className='list-decimal my-4 pl-10'>
                            <li>
                                <span> We may share your personal information with internal and external entities subject to your consent. We may allow third parties and individuals to facilitate our services like audit, analysis, maintenance, marketing communication from different channels (whatsapp, SMS, RCS etc) and development. We may share collective information such as demographics and usage statistics with our advertisers, sponsors or other third parties. We give limited access and do not allow the third party to use your data for their purposes but permit them to use it by following our instructions. </span>
                            </li>
                            <li>
                                <span> You should confirm your consent for third-party user agreement and JUST IN TIME's privacy policy while using our website/applications.  </span>
                            </li>
                            <li>
                                <span> We may disclose your information to comply with compulsory legal processes, prevent actual or potential fraud or unauthorised transactions, enforce policy compliance, verify the policies governing our services or protect the rights/safety of JUST IN TIME or any of our affiliates, customers and business partners.  </span>
                            </li>
                        </ol>
                        <p className='py-4'>
                            <b>Your Rights and Choices</b>
                        </p>
                        <p className=''>
                            <span>Under data protection laws, you can exercise the following rights and choices:</span>
                        </p>
                        <ol className='list-decimal my-4 pl-10'>
                            <li>
                                <span> Request access to your personal information and correction of data we hold. </span>
                            </li>
                            <li>
                                <span> Withdraw your consent for receiving promotional and marketing communications from us. </span>
                            </li>
                            <li>
                                <span> Request personal data erasure where we process your information unlawfully or in scenarios abiding by local law or where you feel it impacts your fundamental rights and freedoms. </span>
                            </li>
                        </ol>
                        <p>&nbsp;</p>
                        <p className='my-4'>
                            <b>Data Security</b>
                        </p>
                        <p className='my-4'>We value your security and give it primary importance. However, no application, computer system, internet transmission, or wireless network connection is completely secure. We will put our best efforts into protecting your information and preventing your data from being accessed unethically or from accidental data loss. In some scenarios, we may ask for your credit or debit card details to the approved payment gateways while making the payment. By agreeing to this privacy policy, you commit to providing correct and accurate credit/ debit card details. You also vouch to only use a credit/ debit card with lawfully owning it for any transaction on this website.</p>
                        <p className='my-4'>
                            <b>Cookies </b>
                        </p>
                        <p className='my-4'>You can accept or refuse browser cookies for our website. By disabling cookies for our website, some parts of this website may be unavailable and inaccessible. Cookies and tracking technology help us serve you better by improving user experience and interface.</p>
                        <p className='my-4'>For any queries regarding our privacy practices, contact our team by emailing customercare@justintime.in or calling us at +91 8080-656-656 (Mon-Sat, 11 am to 7 pm). We reserve the right to modify our policy terms without any prior notice. </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsCondition