
import React from 'react';

export const POSTerminal = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-[320px] h-[580px] bg-[#2c3e50] rounded-[3rem] p-3 shadow-2xl border-b-[12px] border-r-[4px] border-gray-900">
    {/* Card Slot Top */}
    <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-40 h-4 bg-[#1a252f] rounded-t-lg shadow-inner"></div>
    
    {/* Screen Body */}
    <div className="w-full h-full bg-black rounded-[2.5rem] p-2 flex flex-col">
      <div className="flex-1 bg-white rounded-[2rem] overflow-hidden relative">
        {children}
      </div>
      
      {/* Keypad/Bottom Area */}
      <div className="h-24 w-full flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-gray-700"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
    
    {/* Side Card Reader */}
    <div className="absolute right-[-8px] top-1/3 w-2 h-32 bg-[#1a252f] rounded-r-lg"></div>
  </div>
);
