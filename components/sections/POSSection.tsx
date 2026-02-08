
import React from 'react';
import { ArrowRight, Smartphone as MobileIcon } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { FeatureList } from '../FeatureList';
import { Button } from '../Button';
import { POSTerminal } from '../devices/POSTerminal';

export const POSSection = () => (
  <section id="pos" className="py-24 bg-[#F0F7FF] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2 flex justify-center">
        <POSTerminal>
          <img src="https://picsum.photos/id/180/600/1200" alt="POS App Interface" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="text-xs font-bold uppercase tracking-widest opacity-70">Retail Mode</p>
            <p className="text-xl font-bold">UGX 45,000</p>
          </div>
        </POSTerminal>
      </div>
      <div className="w-full lg:w-1/2">
        <SectionHeader 
          subtitle="POS Machine for Business - POS Terminal"
          title="Point Of Sale Payments"
          description="Accept card payments within your business premises with Gonza Systems POS. Provide seamless customer experience with Gonza Systems's POS machine."
        />
        <FeatureList items={[
          "Take MoMo and Airtel, Visa and Mastercard payments.",
          "Access sales reports in real time",
          "Next day settlement to any bank",
          "Accept contactless payments such as Fitbit Pay or Google Pay",
          "Connect to 4G or WiFi to stay online during payment processing",
          "Same day setup upon submission of all documents"
        ]} />
        <div className="flex flex-col sm:flex-row gap-8 items-center mt-8">
          <Button variant="secondary">Get Started <ArrowRight size={20} /></Button>
          <div className="flex items-center gap-3 text-[#001D4A]">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <MobileIcon size={24} className="text-[#0040B0]" />
            </div>
            <div>
              <p className="text-xs font-bold opacity-60">ALSO AVAILABLE AS</p>
              <p className="text-sm font-bold">Soft POS App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
