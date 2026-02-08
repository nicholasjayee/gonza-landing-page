
import React from 'react';

export const Watch = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-[180px] flex flex-col items-center">
    {/* Top Strap */}
    <div className="w-24 h-16 bg-gray-800 rounded-t-3xl mb-[-10px]"></div>
    
    {/* Watch Body */}
    <div className="relative w-full aspect-square bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl border-[3px] border-gray-700">
      <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
        {children}
      </div>
      {/* Digital Crown */}
      <div className="absolute right-[-6px] top-1/3 w-3 h-10 bg-gray-800 rounded-r-md border-y border-r border-gray-600"></div>
      {/* Button */}
      <div className="absolute right-[-4px] top-[60%] w-2 h-12 bg-gray-800 rounded-r-sm"></div>
    </div>

    {/* Bottom Strap */}
    <div className="w-24 h-16 bg-gray-800 rounded-b-3xl mt-[-10px]"></div>
  </div>
);
