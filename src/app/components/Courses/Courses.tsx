import React from 'react';
import Image from 'next/image';

const Courses = () => {
    return (
        <>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold mt-20 md:mt-44 text-center">
                Courses  </h1>
            <p className="text-[16px] sm:text-[18px] text-center mt-3 sm:mt-5">
                Your Ultimate Guide to Learning </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8
             text-[14px] sm:text-[16px] mt-10 md:mt-16">
                <h1 className="border-black border-b pb-1">Popular</h1> <h1>Recommended</h1> <h1>Best Price</h1>
            </div>

           
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <Image src ="/image/Row11.png" alt="" width={416} height={534}/>
        <Image src ="/image/Row12.png" alt="" width={416} height={534}/>
        <Image src ="/image/Row13.png" alt="" width={416} height={534}/>
        <Image src ="/image/Row21.png" alt="" width={416} height={534}/>
        <Image src ="/image/Row22.png" alt="" width={416} height={534}/>
        <Image src ="/image/Row23.png" alt="" width={416} height={534}/>
       
         </div>
         <div className="flex items-center justify-center mt-16">
                <button className="border border-black px-6 py-3 rounded-lg">
                    View All Courses
                </button>

            </div>
        </>
    );
};

export default Courses;