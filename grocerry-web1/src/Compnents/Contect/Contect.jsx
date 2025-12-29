import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbHours12 } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import Heading from '../Home/Heading/Heading';
export const Contect = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-10 ">
            <div className="py-25">
                <h1 className="text-center font-bold text-5xl my-10 text-zinc-500">Contect Us</h1>
                <div>
                    <p className='text-xl font-semibold text-zinc-800 mb-10'>We’d love to hear from you!
                        At GrOcery, your satisfaction is our priority. Whether you have a question, need help with an order, or want to share feedback, our team is always here to assist you.</p>
                </div>
                <Heading Highlight="Customer " Normal="Support"/>
                <div className='grid grid-cols-1 md:grid-cols-4 place-items-center gap-20  '>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gradient-to-b  from-orange-400 to-orange-500 text-white text-5xl flex items-center justify-center h-20 w-20 rounded-full'>
                            <MdSupportAgent />
                        </div>
                        <p className='mt-5 text-xl font'>

                            <span className="font-semibold">Email</span><br /> <a href="#">support@grocery.com</a>
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gradient-to-b  from-orange-400 to-orange-500 text-white text-5xl flex items-center justify-center h-20 w-20 rounded-full'>
                            <FaPhoneVolume />
                        </div>
                        <p className='mt-5 text-xl font'>

                            <span className="font-semibold">Phone</span><br /> <a href="#">+91 98765 43210</a>
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gradient-to-b  from-orange-400 to-orange-500 text-white text-5xl flex items-center justify-center h-20 w-20 rounded-full'>
                            <TbHours12 />
                        </div>
                        <p className='mt-5 text-xl font'>
                            <span className="font-semibold">Working Hours</span><br /> <p className='w-50'>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <div className='bg-gradient-to-b  from-orange-400 to-orange-500 text-white text-5xl flex items-center justify-center h-20 w-20 rounded-full'>
                            <IoLocation />
                        </div>
                        <p className='mt-5 text-xl font'>
                            <span className="font-semibold">Location</span><br /> 
                            <p>
                                GrOcery
                                123 Fresh Market Street,
                                Your City, India
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
