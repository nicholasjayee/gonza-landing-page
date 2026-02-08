
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsGrid } from './components/SolutionsGrid';
import { Footer } from './components/Footer';
import { POSSection } from './components/sections/POSSection';
import { OnlinePaymentsSection } from './components/sections/OnlinePaymentsSection';
import { OracleIntegrationSection } from './components/sections/OracleIntegrationSection';
import { ContactlessSection } from './components/sections/ContactlessSection';
import { MobileAppSection } from './components/sections/MobileAppSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <POSSection />
      <OnlinePaymentsSection />
      <OracleIntegrationSection />
      <ContactlessSection />
      <MobileAppSection />
      <Footer />
    </div>
  );
};

export default App;
