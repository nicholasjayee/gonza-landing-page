
import React from 'react';

export const Laptop = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full max-w-[800px]">
    {/* Screen Portion */}
    <div className="bg-gray-800 rounded-t-2xl p-2 pb-0 shadow-2xl border-x-2 border-t-2 border-gray-700">
      <div className="bg-black rounded-t-xl overflow-hidden aspect-[16/10] relative">
        {/* Camera */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        <div className="w-full h-full bg-white">
          {children}
        </div>
      </div>
    </div>
    {/* Base Portion */}
    <div className="relative h-6 w-[105%] -left-[2.5%] bg-gray-400 rounded-b-2xl shadow-xl border-t border-gray-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-500 rounded-b-lg"></div>
    </div>
  </div>
);
