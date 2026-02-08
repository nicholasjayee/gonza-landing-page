
import React from 'react';
import { Fuel, Globe, Calculator, Hotel, CreditCard, Smartphone } from 'lucide-react';

const solutions = [
  { id: "fuel", title: "Forecourt Management Solution", color: "bg-[#4CAF50]", icon: <Fuel className="text-white" /> },
  { id: "online-payments", title: "Online Payments", color: "bg-[#0040B0]", icon: <Globe className="text-white" /> },
  { id: "oracle", title: "Openfloat", color: "bg-[#3498DB]", icon: <Calculator className="text-white" /> },
  { id: "oracle", title: "Reserveport", color: "bg-[#E67E22]", icon: <Hotel className="text-white" /> },
  { id: "pos", title: "Point Of Sale Payments", color: "bg-[#1B6CA8]", icon: <CreditCard className="text-white" /> },
  { id: "oracle", title: "Hospitality", color: "bg-[#E74C3C]", icon: <Hotel className="text-white" /> },
  { id: "mobile-app", title: "Gonza Systems Mobile App", color: "bg-[#4CAF50]", icon: <Smartphone className="text-white" /> },
];

export const SolutionsGrid = () => (
  <section id="solutions" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#001D4A] mb-4">
        Find The Finance And Payment Solutions That Fit Your Business
      </h2>
      <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
        Simplify operations, boost efficiency, and enhance customer experience with solutions tailored to fit your needs.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {solutions.map((item, idx) => (
          <a 
            href={`#${item.id}`} 
            key={idx} 
            className="flex flex-col items-center group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:-translate-y-2"
          >
            <div className={`${item.color} w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
              {/* Provide a generic type to ReactElement to ensure 'size' is recognized as a valid prop for cloneElement */}
              {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
            </div>
            <span className="text-sm font-bold text-[#001D4A] leading-tight transition-colors duration-300 group-hover:text-[#A33224]">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
