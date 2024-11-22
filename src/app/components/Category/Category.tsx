import React from 'react';
import Image from 'next/image';

const Category = () => {

  return (
    <>
      <h1 className="text-center font-bold text-[46px] mt-20 md:text-[30px]">Explore Courses By Category</h1>
      <p className="text-[18px] text-center mt-4">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <Image src ="/image/course1.png" alt="" width={410} height={132}/>
        <Image src ="/image/course2.png" alt="" width={410} height={132}/>
        <Image src ="/image/course3.png" alt="" width={410} height={132}/>
        <Image src ="/image/course4.png" alt="" width={410} height={132}/>
        <Image src ="/image/course5.png" alt="" width={410} height={132}/>
        <Image src ="/image/course6.png" alt="" width={410} height={132}/>
        <Image src ="/image/course7.png" alt=""width={410} height={132}/>
        <Image src ="/image/course8.png" alt=""width={410} height={132}/>
        <Image src ="/image/course9.png" alt="" width={410} height={132}/>
         </div>


    <div className="flex items-center justify-center">
<button className="border border-black px-4 py-3 rounded mt-16 hover:bg-black hover:text-white transition-all">
          View All Courses </button> </div>
    </>
  );
};

export default Category;