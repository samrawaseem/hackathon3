import PageBg from '@/components/PageBg'
import TrustComp from '@/components/TrustComp'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <PageBg name={'Contact'} />
            <div className="ContactPage my-12 w-[90vw] mx-auto md:w-[80vw]">
                <div className="Getintouch w-[90%] mx-auto flex gap-5 flex-col md:w-[70%]">
                    <h2 className="text-3xl md:text-4xl text-center">Get In Touch With Us</h2>
                    <p className="text-center text-gray-400 text-sm md:text-base">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
                <div className="lowerContactPage flex flex-col gap-8 md:flex-row md:gap-[5vw]">
                    {/* Left Section */}
                    <div className="leftContact w-full md:w-[40%] flex flex-col gap-6 my-6">
                        <div className="flex gap-5">
                            <FaLocationDot className="text-4xl md:text-5xl" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold">Address</p>
                                <p className="text-sm md:text-base">
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <FaPhoneAlt className="text-3xl md:text-4xl" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold">Phone</p>
                                <p className="text-sm md:text-base">Mobile: +(84) 546-6789</p>
                                <p className="text-sm md:text-base">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <FaClock className="text-3xl md:text-4xl" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold">Working Time</p>
                                <p className="text-sm md:text-base">
                                    Monday-Friday: 9:00 - 22:00 <br />
                                    Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="rightContact w-full md:w-[50%] mx-auto my-6 flex flex-col gap-5">
                        <div className="input flex flex-col gap-3">
                            <p className="text-sm md:text-base">Your name</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-sm md:text-lg py-2 px-2 rounded-lg w-full"
                                placeholder="ABC"
                            />
                        </div>
                        <div className="input flex flex-col gap-3">
                            <p className="text-sm md:text-base">Email address</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-sm md:text-lg py-2 px-2 rounded-lg w-full"
                                placeholder="Abc@def.com"
                            />
                        </div>
                        <div className="input flex flex-col gap-3">
                            <p className="text-sm md:text-base">Subject</p>
                            <input
                                type="text"
                                className="border outline-none border-gray-600 text-sm md:text-lg py-2 px-2 rounded-lg w-full"
                                placeholder="This is optional"
                            />
                        </div>
                        <div className="input flex flex-col gap-3">
                            <p className="text-sm md:text-base">Message</p>
                            <textarea
                                className="border outline-none border-gray-600 text-sm md:text-lg py-2 px-2 rounded-lg w-full"
                                placeholder="Hi! I’d like to ask about"
                            ></textarea>
                        </div>
                        <button className="btn w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-sm md:text-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <TrustComp />
        </div>
    )
}

export default Contact;
