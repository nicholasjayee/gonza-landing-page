
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { FeatureList } from '../FeatureList';
import { Button } from '../Button';
import { Watch } from '../devices/Watch';

export const ContactlessSection = () => (
  <section id="contactless" className="py-24 scroll-mt-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
      {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
      <motion.div 
        {...({
          initial: { opacity: 0, scale: 0.5 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { type: "spring", stiffness: 100, damping: 15 }
        } as any)}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <Watch>
          <div className="w-full h-full bg-[#1a1a1a] flex flex-col items-center justify-center p-4">
            <div className="w-12 h-8 bg-blue-600 rounded-md mb-2 flex flex-col p-1">
              <div className="w-4 h-2 bg-yellow-400 rounded-sm mb-1"></div>
              <div className="mt-auto flex justify-between">
                <div className="w-4 h-1 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-[10px] text-white/50 mb-1">Tap to Pay</p>
            <p className="text-sm font-bold text-white">UGX 12,000</p>
            {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
            <motion.div 
              {...({
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                transition: { delay: 0.8, type: "spring" }
              } as any)}
              className="mt-2 text-green-400"
            >
              <CheckCircle2 size={20} />
            </motion.div>
          </div>
        </Watch>
      </motion.div>
      {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
      <motion.div 
        {...({
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 }
        } as any)}
        className="w-full lg:w-1/2"
      >
        <SectionHeader 
          subtitle="Contactless & Digital Wallets"
          title="Payments Beyond The Card"
          description="Gonza Systems stays ahead of the curve by supporting the latest in payment technology. Give your customers the freedom to pay using their favorite wearable or digital wallet."
        />
        <FeatureList items={[
          "Full support for Fitbit Pay and Google Pay",
          "NFC-enabled transactions for instant 'Tap & Go'",
          "Secure, encrypted tokenization for every transaction",
          "Reduced physical contact for improved hygiene",
          "Faster checkout lines during peak hours"
        ]} />
        <Button variant="secondary">Learn More <ArrowRight size={20} /></Button>
      </motion.div>
    </div>
  </section>
);
