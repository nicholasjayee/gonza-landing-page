
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { FeatureList } from '../FeatureList';
import { Button } from '../Button';
import { Laptop } from '../devices/Laptop';

export const OnlinePaymentsSection = () => (
  <section id="online-payments" className="py-24 scroll-mt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
      {/* Fix: Use 'as any' for motion props to resolve type incompatibility */}
      <motion.div 
        {...({
          initial: { opacity: 0, scale: 0.9, y: 50 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 }
        } as any)}
        className="w-full lg:w-1/2"
      >
        <Laptop>
          <img src="https://picsum.photos/id/2/1200/800" alt="Online Payment Dashboard" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 right-4 h-12 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#0040B0] rounded-md"></div>
              <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-100"></div>
            </div>
          </div>
        </Laptop>
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
          subtitle="Online Payment Solution - Payment Gateway"
          title="Online Payments For Businesses"
          description="Whether you're running an online store, subscription service, digital platform, or marketplace, Gonza Systems provides end-to-end payment solutions tailored for your business."
        />
        <h4 className="font-bold text-lg mb-4 text-[#001D4A]">Key Benefits</h4>
        <FeatureList items={[
          "Accept payments via MTN MoMo, Airtel Money, and bank cards",
          "Send E-invoices and receive payments within minutes",
          "Share Payment links with customers, no website needed",
          "Send up a branded Payment Page for your business",
          "Use our ready-to-go Payment Plugins for your e-commerce store."
        ]} />
        <Button variant="secondary">Get Started <ArrowRight size={20} /></Button>
      </motion.div>
    </div>
  </section>
);
