
import React from 'react';

export const Tablet = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full max-w-[500px] aspect-[3/4] bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl border border-gray-800">
    <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden relative border border-gray-800">
      {/* Front Camera */}
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-700 rounded-r-full lg:hidden"></div>
      <div className="w-full h-full bg-white">
        {children}
      </div>
    </div>
    {/* Power & Volume Buttons */}
    <div className="absolute top-12 -right-[2px] w-[3px] h-12 bg-gray-800 rounded-l-md"></div>
    <div className="absolute top-32 -right-[2px] w-[3px] h-20 bg-gray-800 rounded-l-md"></div>
  </div>
);
