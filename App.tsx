
import React from 'react';
// Fix: Added missing Hotel and CheckCircle2 icons to the import list
import { ArrowRight, Smartphone as MobileIcon, Hotel, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsGrid } from './components/SolutionsGrid';
import { SectionHeader } from './components/SectionHeader';
import { FeatureList } from './components/FeatureList';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { POSTerminal } from './components/devices/POSTerminal';
import { Laptop } from './components/devices/Laptop';
import { Tablet } from './components/devices/Tablet';
import { Watch } from './components/devices/Watch';
import { DeviceMockup } from './components/DeviceMockup';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <SolutionsGrid />

      {/* Feature: POS */}
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

      {/* Feature: Online Payments */}
      <section id="online-payments" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
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

      {/* Feature: Contactless Payments / Watch */}
      <section id="contactless" className="py-24 scroll-mt-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
           <div className="w-full lg:w-1/2 flex justify-center">
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
                  <div className="mt-2 text-green-400 animate-pulse">
                     <CheckCircle2 size={20} />
                  </div>
               </div>
             </Watch>
           </div>
           <div className="w-full lg:w-1/2">
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
          </div>
         </div>
      </section>

      {/* Feature: Mobile App */}
      <section id="mobile-app" className="py-24 bg-[#001D4A] text-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
            <DeviceMockup type="phone" className="relative z-10 shadow-2xl">
              <div className="w-full h-full bg-[#001D4A] p-4 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-white rounded-2xl mb-6 flex items-center justify-center">
                   <span className="text-3xl font-bold text-[#001D4A]">g</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Gonza Systems Mobile</h3>
                <p className="text-sm text-gray-400 mb-8">Scan. Pay. Go.</p>
                <div className="w-full space-y-4">
                  <div className="h-12 w-full bg-white/10 rounded-lg animate-pulse"></div>
                  <div className="h-12 w-full bg-white/10 rounded-lg"></div>
                  <div className="h-40 w-full bg-white/10 rounded-lg"></div>
                </div>
              </div>
            </DeviceMockup>
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
                 <div className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-all"><img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="Play Store" /></div>
                 <div className="p-3 bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-all"><img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-6 h-6 invert" alt="App Store" /></div>
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
