import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// import firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

// image import
import login_desktop from "../../assets/images/login_desktop.webp";

// react icon
import { FcGoogle } from "react-icons/fc";

// react toastify
import { toast } from 'react-toastify';

// component import
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Sign up successful!");
            navigate("/user");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div>
                <Breadcrumb goBackLink="Home" pageTitle="Sign Up" />
            </div>

            <section className='md:w-[700px] lg:w-[904px] mx-auto py-[30px] my-[50px]'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-[50%] -mt-[12rem] md:mt-0 bg-white rounded-t-lg md:rounded-l-lg' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <div className='py-5 px-[30px]'>
                            <div className='mb-[13px]'>
                                <h1 className='text-[27px] font-medium text-[#363535]'>Sign Up</h1>
                                <p className='mt-2 text-xs'>Please enter sign Up detals below</p>
                            </div>
                            <form onSubmit={handleSignUp} action="/account/login" className='w-full max-w-[500px] mx-auto mt-10 pb-[38px]'>
                                <div className='flex flex-col relative'>
                                    <label htmlFor="" className='absolute -top-[8px] left-4 text-xs text-neutral-500 bg-white w-9 text-center'>Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter Email Id'
                                        className='w-full h-[55px] p-[15px] placeholder:text-xs rounded-[8px] border border-[#d7d7d7] outline-0' />
                                </div>
                                <div className='flex flex-col relative mt-[20px]'>
                                    <label htmlFor="" className='absolute -top-[8px] left-4 text-xs text-neutral-500 bg-white w-14 text-center'>Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter Password'
                                        className='w-full h-[55px] p-[15px] placeholder:text-xs rounded-[8px] border border-[#d7d7d7] outline-0' />
                                </div>
                                <div className='flex flex-col relative mt-[20px]'>
                                    <label htmlFor="" className='absolute -top-[8px] left-4 text-xs text-neutral-500 bg-white w-[100px] text-center'>Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder='Enter Confirm Password'
                                        className='w-full h-[55px] p-[15px] placeholder:text-xs rounded-[8px] border border-[#d7d7d7] outline-0' />
                                </div>
                                <button type='submit' className='w-full h-[50px] rounded-[8px] my-[15px] px-[30px] text-sm bg-black text-white cursor-pointer'>Sign Up</button>
                                <div className='mt-[5px] flex items-center gap-3.5'>
                                    <span className='w-full h-0.5 bg-gray-200 inline-block'></span>
                                    <span className='text-sm -mt-1 text-gray-400 font-semibold w-[15rem] text-center'>or continue</span>
                                    <span className='w-full h-0.5 bg-gray-200 inline-block'></span>
                                </div>
                                <button className='w-full h-[50px] rounded-[8px] mt-5 px-[30px] text-sm font-semibold cursor-pointer border border-[#d7d7d7] flex items-center text-center justify-center'>
                                    <span><FcGoogle className='text-2xl mr-2' /></span>
                                    <span>Log in With Google</span>
                                </button>
                                <p className='mt-5 text-xs text-center'>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <Link to="/user" className='font-semibold hover:underline'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className='w-full h-full md:w-[50%]'>
                        <img src={login_desktop} alt="" className='md:rounded-r-lg w-full h-auto object-cover' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp