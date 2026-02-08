
import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => (
  <footer id="footer" className="bg-[#0040B0] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold">gonza systems</span>
          </div>
          <p className="text-sm text-blue-100 mb-8">Payments Anywhere, Anytime</p>
          <div className="flex gap-6 mb-8">
            <img src="https://picsum.photos/id/11/40/25" className="h-6" alt="PCI DSS" />
            <img src="https://picsum.photos/id/12/40/25" className="h-6" alt="PCI PTS" />
          </div>
          <p className="text-sm font-semibold">Regulated by the Bank of Uganda.</p>
        </div>
        
        <div>
          <h5 className="font-bold text-lg mb-6">Discover Gonza Systems</h5>
          <ul className="space-y-4 text-sm text-blue-100">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-6">Resources</h5>
          <ul className="space-y-4 text-sm text-blue-100">
            <li><a href="#" className="hover:text-white transition-colors">Payments API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Developer</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-6">Industry Solutions</h5>
          <ul className="space-y-4 text-sm text-blue-100">
            <li><a href="#online-payments" className="hover:text-white transition-colors">Payments Page</a></li>
            <li><a href="#online-payments" className="hover:text-white transition-colors">Online Invoice</a></li>
            <li><a href="#pos" className="hover:text-white transition-colors">SABI POS</a></li>
            <li><a href="#oracle" className="hover:text-white transition-colors">Reserveport</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ticketsasa</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-6">Contacts</h5>
          <address className="not-italic text-sm text-blue-100 space-y-4">
            <p>Gonza Systems Uganda Limited</p>
            <p>Bandali Close Plot 12, Bugolobi,</p>
            <p>P.O Box 520040 Luzira, Kampala, Uganda</p>
            <p className="pt-4">Tel: +256-326-100-650</p>
            <p>Email: infoug@gonzasystems.com</p>
          </address>
        </div>
      </div>

      <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#A33224] transition-all duration-300 hover:scale-110" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#A33224] transition-all duration-300 hover:scale-110" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#A33224] transition-all duration-300 hover:scale-110" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#A33224] transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#A33224] transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <div className="text-xs text-blue-100 font-medium">
          © 2009-2026, Gonza Systems™. All Rights Reserved / Privacy Policy / Terms and Conditions
        </div>
      </div>
    </div>
  </footer>
);
