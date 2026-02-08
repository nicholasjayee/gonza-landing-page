
import React from 'react';
import { Hotel } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';
import { FeatureList } from '../FeatureList';
import { Tablet } from '../devices/Tablet';

export const OracleIntegrationSection = () => (
  <section id="oracle" className="py-24 bg-[#F0F7FF] scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2">
        <Tablet>
          <img src="https://picsum.photos/id/20/1200/1600" alt="Oracle Hospitality" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl text-center">
              <div className="w-16 h-16 bg-[#E67E22] rounded-xl mx-auto mb-4 flex items-center justify-center text-white">
                <Hotel size={32} />
              </div>
              <p className="text-2xl font-bold text-[#001D4A]">Room 402</p>
              <p className="text-gray-500 font-medium">Guest: Jane Doe</p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                <div className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold text-sm">Checked In</div>
              </div>
            </div>
          </div>
        </Tablet>
      </div>
      <div className="w-full lg:w-1/2">
        <SectionHeader 
          subtitle="Hotel Management Software - Oracle PMS"
          title="Oracle Hospitality & Reserveport Integration"
          description="Gonza Systems is an accredited Oracle Hospitality partner and reseller, delivering the full suite of Oracle Hospitality solutions tailored for hotels, resorts and food & beverage operators across Africa."
        />
        <h4 className="font-bold text-lg mb-4 text-[#001D4A]">Key Benefits:</h4>
        <FeatureList items={[
          "Unified property management (PMS)- Streamlines front & back-office operations, reservations, check-in/out, housekeeping, guest profiles, and loyalty programs within a single platform.",
          "Enhanced guest experience & loyalty - Built-in guest profiling collects preferences, past stays and spending habits.",
          "Inventory Management: Simphony POS provides real-time stock tracking by automatically updating inventory as sales happen.",
          "Integrated Food & Beverage POS - A unified POS system connects with PMS, loyalty, payments, and"
        ]} />
      </div>
    </div>
  </section>
);
