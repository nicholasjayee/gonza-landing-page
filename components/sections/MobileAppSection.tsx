
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { Button } from '../Button';
import { DeviceMockup } from '../DeviceMockup';

export const MobileAppSection = () => (
  <section id="mobile-app" className="py-24 bg-[#001D4A] text-white scroll-mt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
      <motion.div 
        {...({
          initial: { opacity: 0, y: 100 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1, ease: "easeOut" }
        } as any)}
        className="w-full lg:w-1/2 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        <DeviceMockup type="phone" className="relative z-10 shadow-2xl">
          <div className="w-full h-full bg-[#001D4A] p-4 flex flex-col items-center justify-center text-center">
            {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
            <motion.div 
              {...({
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                transition: { delay: 0.5, type: "spring" }
              } as any)}
              className="w-20 h-20 bg-white rounded-2xl mb-6 flex items-center justify-center"
            >
              <span className="text-3xl font-bold text-[#001D4A]">g</span>
            </motion.div>
            <h3 className="text-xl font-bold mb-2">Gonza Systems Mobile</h3>
            <p className="text-sm text-gray-400 mb-8">Scan. Pay. Go.</p>
            <div className="w-full space-y-4">
              {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
              <motion.div 
                {...({
                  animate: { opacity: [0.1, 0.3, 0.1] },
                  transition: { duration: 2, repeat: Infinity }
                } as any)}
                className="h-12 w-full bg-white/10 rounded-lg"
              ></motion.div>
              <div className="h-12 w-full bg-white/10 rounded-lg"></div>
              <div className="h-40 w-full bg-white/10 rounded-lg"></div>
            </div>
          </div>
        </DeviceMockup>
      </motion.div>
      {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
      <motion.div 
        {...({
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.2 }
        } as any)}
        className="w-full lg:w-1/2"
      >
        <SectionHeader 
          light
          subtitle="Gonza Systems Mobile"
          title="Gonza Systems Mobile App"
          description="Gonza Systems Mobile app is the best lifestyle app. With Gonza Systems Mobile you can pay all your bills in bulk in one transaction. Pay TV & internet bills. You can buy airtime for yourself or for a different number at the same time. Order & pay event tickets and holiday trips. All with ZERO transaction fees. Link your VISA card on the Gonza Systems Mobile app and pay all your shopping bills by simply scanning the QR code whether or in-store or online."
        />
        <div className="flex flex-wrap items-center gap-6 mt-8">
          <Button variant="secondary">Get Started <ArrowRight size={20} /></Button>
          <div className="flex gap-4">
            {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
            <motion.div 
              {...({ whileHover: { scale: 1.1 } } as any)}
              className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-all"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="Play Store" />
            </motion.div>
            {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
            <motion.div 
              {...({ whileHover: { scale: 1.1 } } as any)}
              className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-all"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="App Store" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
