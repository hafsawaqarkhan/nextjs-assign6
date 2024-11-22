import React from 'react';

const Achievement = () => {
  return (
    <div className="mt-32" id='achievement'>
      <div className="text-center">
        <h1 className="text-[40px] sm:text-[48px] font-bold">Our Achievements</h1>
        <p className="text-center text-xl mx-auto max-w-[90%] sm:text-2xl lg:w-[1152px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      <div className="flex flex-wrap items-center
       justify-around mt-10 gap-8">
        <div>
          <h1 className="text-[40px] font-bold text-center">+200</h1>
          <h3 className="text-center text-[15px]">Courses</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center">50K</h1>
          <h3 className="text-center text-[15px]">Mentors</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center">370K</h1>
          <h3 className="text-center text-[15px]">Students</h3>
        </div>
        <div>
          <h1 className="text-[40px] font-bold text-center">100+</h1>
          <h3 className="text-center text-[15px]">Recognition</h3>
        </div>
      </div>
    </div>
  );
};

export default Achievement;