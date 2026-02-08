
import React from 'react';
import { Button } from './Button';

export const Hero = () => (
  <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-[#F8FBFF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[2px] w-8 bg-[#0040B0]"></div>
          <span className="text-xs font-bold tracking-widest text-[#0040B0] uppercase">Welcome to Gonza Systems</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-[#001D4A] mb-8 leading-tight">
          Simplifying Payments. Driving Business Growth
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl">
          We make it easy for businesses and consumers to access financial services that power growth. Built for Africa, our solutions meet local needs helping thousands get paid, sell online, and grow in the digital economy.
        </p>
        <a href="#solutions"><Button>Get Started</Button></a>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full aspect-square max-w-lg mx-auto overflow-hidden rounded-full border-8 border-white shadow-2xl">
          <img 
            src="https://picsum.photos/id/1/800/800" 
            alt="Business women using POS" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 shadow-xl rounded-lg overflow-hidden border-4 border-white">
           <img src="https://picsum.photos/id/160/300/600" alt="POS Device" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
);
