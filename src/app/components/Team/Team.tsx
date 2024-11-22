import React from 'react'
import Image from 'next/image'

const Team = () => {
    return (
        <>
            <div className="bg-[#F7F7F7] mt-32 px-4 md:px-8 pt-10">
                <h1 className="text-[32px] md:text-[48px] text-center font-bold">Our team</h1>
                <p className="mt-4 text-[16px] md:text-[18px] text-center mb-8 md:mb-10">  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
        
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <Image src ="/image/hero411.png" alt="" width={394} height={209}/>
        <Image src ="/image/hero412.png" alt="" width={394} height={209}/>
        <Image src ="/image/hero413.png" alt="" width={394} height={209}/>
        <Image src ="/image/hero421.png" alt="" width={394} height={209}/>
        <Image src ="/image/hero422.png" alt="" width={394} height={209}/>
        <Image src ="/image/hero423.png" alt="" width={394} height={209}/>
       
         </div>
                </div>
        
        </>
    )
}

export default Team