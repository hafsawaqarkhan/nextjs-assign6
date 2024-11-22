import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className='mt-32 flex flex-col sm:flex-row items-center justify-evenly px-4 sm:px-0'>
                <div className='mb-6 sm:mb-0 text-center sm:text-left'>
                    <h1 className='font-bold text-[18px] sm:text-[20px]'>Subscribe to our newsletter</h1>
                    <p className='text-[16px] sm:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-start'>
                    <input type="text"placeholder='Enter Your Email'
                        className='border border-black w-full sm:w-[265px] h-[48px] rounded mr-4 pl-3 mb-4 sm:mb-0'
                    />
                    <button className='border border-black w-full sm:w-[119px] h-[48px] rounded
                    '>Subscribe</button>  <p className='mt-4 text-center sm:text-left text-sm sm:text-base'
                    >By subscribing you agree to our Privacy Policy</p>
                </div>  </div>

            <div className='flex flex-col sm:flex-row items-center justify-evenly mt-28 px-4 sm:px-0'>
                <div className='mb-6 sm:mb-0'>
                    <Image src={"/image/Column.png"} alt="Logo" width={130.6}height={30.38}/> </div>
                <div className='text-center sm:text-left mb-6 sm:mb-0'>
                    <h1 className='font-bold text-[16px] sm:text-[18px]'>Courses</h1>
                    <h4 className='text-sm sm:text-base'>Business</h4>
                    <h4 className='text-sm sm:text-base'>Development</h4>
                    <h4 className='text-sm sm:text-base'>Technology</h4>
                    <h4 className='text-sm sm:text-base'>Design</h4>
                    <h4 className='text-sm sm:text-base'>Programming</h4>
                </div>
                <div className='text-center sm:text-left mb-6 sm:mb-0'>
                    <h1 className='font-bold text-[16px] sm:text-[18px]'>Resources</h1>
                    <h2 className='text-sm'>Career</h2>
                    <h2 className='text-sm'>Resume</h2>
                    <h2 className='text-sm '>Learning</h2>
                    <h2 className='text-sm'>Interview Preparation</h2>
                    <h2 className='text-sm'>Jobs</h2>
                </div>
                <div className='text-center sm:text-left'>
                    <h1 className='font-bold text-[16px] sm:text-[18px]'>About Us</h1>
                    <h1 className='text-sm '>Contact</h1>
                    <h1 className='text-sm '>Help/Support</h1>
                    <h1 className='text-sm '>FAQ</h1>
                    <h1 className='text-sm '>Terms and Conditions</h1>
                    <h1 className='text-sm '>Partners</h1>
                </div>
            </div>

            <div className='border border-black mx-10 mt-16'></div>

            <div className='flex flex-col sm:flex-row items-center justify-between mt-10 mx-10 pb-24'>

                <div className='text-center sm:text-left mb-4 sm:mb-0 text-sm sm:text-base'>
                    2023 Ddsgnr. All rights reserved.
                </div>

                <div className='flex space-x-4 text-sm sm:text-base mb-4 sm:mb-0'>
                    <h1 className=' underline'>Privacy Policy</h1>
                    <h1 className='underline'>Terms of Service</h1>
                    <h1 className=' underline'>Cookies Settings</h1>
                </div>

                <div className='w-full sm:w-auto'> <Image
                        src={"/image/Social.png"} alt=""  width={132} height={24} className="mx-auto sm:mx-0" />  </div>
            </div>
        </>
    )
}

export default Footer;