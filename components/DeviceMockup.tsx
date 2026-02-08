
import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface DeviceMockupProps {
  type: 'phone' | 'browser';
  children: React.ReactNode;
  className?: string;
}

export const DeviceMockup = ({ type, children, className = "" }: DeviceMockupProps) => {
  if (type === 'phone') {
    return (
      <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
        {/* Power Button */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -right-[17px] top-[72px] rounded-r-lg"></div>
        {/* Volume Buttons */}
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        
        {/* Screen Content */}
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 z-20 text-black">
            <span className="text-[10px] font-bold">9:41</span>
            <div className="flex gap-1 items-center">
              <Signal size={10} />
              <Wifi size={10} />
              <Battery size={10} />
            </div>
          </div>
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>
          
          <div className="w-full h-full pt-8">
            {children}
          </div>

          {/* Home Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full z-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative mx-auto bg-gray-900 rounded-t-xl py-2 px-2 shadow-2xl ${className}`}>
      {/* Browser Header */}
      <div className="flex items-center gap-2 mb-2 px-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex-1 bg-gray-800 rounded-md h-6 flex items-center px-3 mx-4">
          <div className="w-2 h-2 rounded-full bg-gray-600 mr-2"></div>
          <div className="h-1.5 w-32 bg-gray-700 rounded-full"></div>
        </div>
      </div>
      {/* Browser Content */}
      <div className="bg-white rounded-b-lg overflow-hidden border border-gray-800">
        {children}
      </div>
    </div>
  );
};
