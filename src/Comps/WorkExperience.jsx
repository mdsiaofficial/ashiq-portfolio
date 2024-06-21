import React from 'react';
import atom from '../assets/atomic.png'; 

const WorkExperience = () => {
  return (
    <div className="md:container flex md:gap-3 md:max-w-[43rem] flex-col mx-auto md:px-4 py-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>

      {/* Atomic Finance */}
      <div className="flex gap-5">
        <div className="mt-3">
          <img src={atom} alt="Atomic Finance Logo" className="w-[10rem]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Company</h3>
          <p className="text-gray-600">Position</p>
          <p className="text-gray-600">May 2021 - Oct 2022</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam consequuntur praesentium inventore alias ducimus libero, facere ipsa debitis veniam. At inventore eligendi delectus voluptate sit aperiam possimus voluptas cupiditate.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default WorkExperience;