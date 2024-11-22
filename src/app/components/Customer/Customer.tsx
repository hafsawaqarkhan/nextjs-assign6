import React from 'react'
import Image from 'next/image'
function Customer() {
  return (
    <div className='bg-[#F7F7F7]'>
       <h1 className='lg:w-[560px] lg:h-[58px] sm:m-4 sm:text-[48px] font-bold text-[24px] leading-5'>
        Customer testimonials</h1> 
    <p className=' lg:w-[560px] lg:h-[27px] font-normal text-[10px] lg:text-[18px] m-4 '>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className='m-4 space-x-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10'>
<Image src="/image/Content01.png" alt="" width={400} height={300} />
      <Image src="/image/Content02.png" alt="" width={400} height={300} />
      <Image src="/image/Content03.png" alt="" width={400} height={300} />
</div>

</div>
  )
}

export default Customer
