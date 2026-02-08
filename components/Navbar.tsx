
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <a href="#hero" className="flex items-center">
              <span className="text-3xl font-bold text-[#001D4A]">gonza</span>
              <span className="text-3xl font-bold text-[#A33224]">systems</span>
            </a>
            
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
              <button className="flex items-center gap-1 hover:text-[#0040B0] transition-colors">
                <img src="https://flagcdn.com/w20/ug.png" alt="UG" className="w-4 h-3" />
                UGANDA <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#solutions" className="flex items-center gap-1 hover:text-[#0040B0] transition-colors">Business Solutions <ChevronDown className="w-4 h-4" /></a>
              <a href="#mobile-app" className="flex items-center gap-1 hover:text-[#0040B0] transition-colors">Personal Payments <ChevronDown className="w-4 h-4" /></a>
              <button className="flex items-center gap-1 hover:text-[#0040B0] transition-colors">Blog <ChevronDown className="w-4 h-4" /></button>
              <a href="#footer" className="flex items-center gap-1 hover:text-[#0040B0] transition-colors">Help <ChevronDown className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-semibold text-[#001D4A] border-r border-gray-300 pr-4 hover:text-[#0040B0] transition-colors">Login</button>
            <Button variant="outline" className="py-2 px-4 text-sm">Register</Button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-[#001D4A] hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-height-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          <button className="w-full flex items-center justify-between p-3 text-[#001D4A] font-bold hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <img src="https://flagcdn.com/w20/ug.png" alt="UG" className="w-5 h-4" />
              <span>UGANDA</span>
            </div>
            <ChevronDown size={18} />
          </button>
          
          <div className="h-px bg-gray-100 my-2"></div>

          <a 
            href="#solutions" 
            onClick={() => setIsOpen(false)} 
            className="block p-3 text-[#001D4A] font-bold hover:bg-gray-50 hover:text-[#0040B0] rounded-lg transition-colors"
          >
            Business Solutions
          </a>
          <a 
            href="#mobile-app" 
            onClick={() => setIsOpen(false)} 
            className="block p-3 text-[#001D4A] font-bold hover:bg-gray-50 hover:text-[#0040B0] rounded-lg transition-colors"
          >
            Personal Payments
          </a>
          <a 
            href="#" 
            className="block p-3 text-[#001D4A] font-bold hover:bg-gray-50 hover:text-[#0040B0] rounded-lg transition-colors"
          >
            Blog
          </a>
          <a 
            href="#footer" 
            onClick={() => setIsOpen(false)} 
            className="block p-3 text-[#001D4A] font-bold hover:bg-gray-50 hover:text-[#0040B0] rounded-lg transition-colors"
          >
            Help & Support
          </a>

          <div className="h-px bg-gray-100 my-4"></div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="p-3 text-[#001D4A] font-bold text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Login
            </button>
            <Button variant="primary" className="w-full py-3">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
