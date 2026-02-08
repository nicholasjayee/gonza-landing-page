
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsGrid } from './components/SolutionsGrid';
import { SectionHeader } from './components/SectionHeader';
import { FeatureList } from './components/FeatureList';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <SolutionsGrid />

      {/* Feature: POS */}
      <section id="pos" className="py-24 bg-[#F0F7FF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/180/800/600" alt="POS Terminal" className="rounded-2xl shadow-2xl" />
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
            <Button variant="secondary">Get Started <ArrowRight size={20} /></Button>
          </div>
        </div>
      </section>

      {/* Feature: Online Payments */}
      <section id="online-payments" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/2/800/600" alt="Online Payment Dashboard" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
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
          </div>
        </div>
      </section>

      {/* Feature: Oracle Integration */}
      <section id="oracle" className="py-24 bg-[#F0F7FF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/20/800/600" alt="Oracle Hospitality" className="rounded-2xl shadow-2xl" />
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

      {/* Feature: Fuel Station */}
      <section id="fuel" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/201/800/600" alt="Fuel Station" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              subtitle="Petrol Station Management System"
              title="Fuel Station Management Made Easy"
              description="Gonza Systems Forecourt Management Solution (GSFMS) helps you stay in control with real-time insights and modern tools at every pump. Whether you're managing one station or an entire network, GSFMS brings automation, accountability, and efficiency helping you reduce losses, optimize performance, and improve profitability for your petrol station."
            />
            <h4 className="font-bold text-lg mb-4 text-[#001D4A]">Key Benefits:</h4>
            <FeatureList items={[
              "Remote price enforcement",
              "Fleet and B2B sales management",
              "Remote monitoring and real-time reporting",
              "Remote diagnostics/support",
              "Live tracking of fuel and product sales",
              "Direct integration with URA systems",
              "Integrated payments: safe, flexible payment options",
              "Inventory and pump dispenser oversight",
              "Shift management: track attendant performance"
            ]} />
          </div>
        </div>
      </section>

      {/* Feature: Mobile App */}
      <section id="mobile-app" className="py-24 bg-[#001D4A] text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/3/500/800" alt="Gonza Systems Mobile App" className="max-w-xs mx-auto drop-shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              light
              subtitle="Gonza Systems Mobile"
              title="Gonza Systems Mobile App"
              description="Gonza Systems Mobile app is the best lifestyle app. With Gonza Systems Mobile you can pay all your bills in bulk in one transaction. Pay TV & internet bills. You can buy airtime for yourself or for a different number at the same time. Order & pay event tickets and holiday trips. All with ZERO transaction fees. Link your VISA card on the Gonza Systems Mobile app and pay all your shopping bills by simply scanning the QR code whether or in-store or online."
            />
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <Button variant="secondary">Get Started <ArrowRight size={20} /></Button>
              <div className="flex gap-4">
                 <div className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20"><img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="Play Store" /></div>
                 <div className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20"><img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="App Store" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
