
import React, { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2, 
  Smartphone, 
  CreditCard, 
  Globe, 
  Calculator, 
  Hotel, 
  Fuel, 
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram
} from 'lucide-react';

// Reusable Components
// Fix: Added optional modifier '?' to children prop to resolve TypeScript errors at JSX call sites.
const Button = ({ children, variant = 'primary', className = '' }: { children?: React.ReactNode, variant?: 'primary' | 'outline' | 'secondary', className?: string }) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#A33224] text-white hover:bg-[#8B2B1F]",
    secondary: "bg-[#0040B0] text-white hover:bg-[#003399]",
    outline: "border-2 border-[#A33224] text-[#A33224] hover:bg-[#A33224] hover:text-white"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ subtitle, title, description, light = false }: { subtitle?: string, title: string, description?: string, light?: boolean }) => (
  <div className={`mb-12 ${light ? 'text-white' : 'text-[#001D4A]'}`}>
    {subtitle && (
      <div className="flex items-center gap-2 mb-4">
        <div className={`h-[2px] w-8 ${light ? 'bg-white' : 'bg-[#0040B0]'}`}></div>
        <span className={`text-xs font-bold tracking-widest uppercase ${light ? 'text-gray-200' : 'text-[#0040B0]'}`}>{subtitle}</span>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
    {description && <p className={`text-lg max-w-2xl ${light ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>}
  </div>
);

const FeatureList = ({ items, light = false }: { items: string[], light?: boolean }) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <CheckCircle2 className={`w-6 h-6 shrink-0 ${light ? 'text-white' : 'text-[#0040B0]'}`} />
        <span className={light ? 'text-gray-100' : 'text-gray-700'}>{item}</span>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-[#001D4A]">pesa</span>
              <span className="text-3xl font-bold text-[#A33224]">pal</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
              <button className="flex items-center gap-1 hover:text-[#0040B0]">
                <img src="https://flagcdn.com/w20/ug.png" alt="UG" className="w-4 h-3" />
                UGANDA <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-[#0040B0]">Business Solutions <ChevronDown className="w-4 h-4" /></button>
              <button className="flex items-center gap-1 hover:text-[#0040B0]">Personal Payments <ChevronDown className="w-4 h-4" /></button>
              <button className="flex items-center gap-1 hover:text-[#0040B0]">Blog <ChevronDown className="w-4 h-4" /></button>
              <button className="flex items-center gap-1 hover:text-[#0040B0]">Help <ChevronDown className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-sm font-semibold text-[#001D4A] border-r border-gray-300 pr-4 hover:text-[#0040B0]">Login</button>
            <Button variant="outline" className="py-2 px-4 text-sm">Register</Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const solutions = [
    { title: "Forecourt Management Solution", color: "bg-[#4CAF50]", icon: <Fuel className="text-white" /> },
    { title: "Online Payments", color: "bg-[#0040B0]", icon: <Globe className="text-white" /> },
    { title: "Openfloat", color: "bg-[#3498DB]", icon: <Calculator className="text-white" /> },
    { title: "Reserveport", color: "bg-[#E67E22]", icon: <Hotel className="text-white" /> },
    { title: "Point Of Sale Payments", color: "bg-[#1B6CA8]", icon: <CreditCard className="text-white" /> },
    { title: "Hospitality", color: "bg-[#E74C3C]", icon: <Hotel className="text-white" /> },
    { title: "Pesapal Mobile App", color: "bg-[#4CAF50]", icon: <Smartphone className="text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-[#0040B0]"></div>
              <span className="text-xs font-bold tracking-widest text-[#0040B0] uppercase">Welcome to Pesapal</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#001D4A] mb-8 leading-tight">
              Simplifying Payments. Driving Business Growth
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl">
              We make it easy for businesses and consumers to access financial services that power growth. Built for Africa, our solutions meet local needs helping thousands get paid, sell online, and grow in the digital economy.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Business women using POS" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floatings (simulated images from the screenshot) */}
            <div className="absolute -bottom-10 -left-10 w-48 shadow-xl rounded-lg overflow-hidden border-4 border-white">
               <img src="https://picsum.photos/id/160/300/600" alt="POS Device" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001D4A] mb-4">
            Find The Finance And Payment Solutions That Fit Your Business
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Simplify operations, boost efficiency, and enhance customer experience with solutions tailored to fit your needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className={`${item.color} w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg`}>
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <span className="text-sm font-bold text-[#001D4A] leading-tight">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: POS */}
      <section className="py-24 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/180/800/600" alt="POS Terminal" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              subtitle="POS Machine for Business - POS Terminal"
              title="Point Of Sale Payments"
              description="Accept card payments within your business premises with Pesapal POS. Provide seamless customer experience with Pesapal's POS machine."
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/2/800/600" alt="Online Payment Dashboard" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              subtitle="Online Payment Solution - Payment Gateway"
              title="Online Payments For Businesses"
              description="Whether you're running an online store, subscription service, digital platform, or marketplace, Pesapal provides end-to-end payment solutions tailored for your business."
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
      <section className="py-24 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/20/800/600" alt="Oracle Hospitality" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              subtitle="Hotel Management Software - Oracle PMS"
              title="Oracle Hospitality & Reserveport Integration"
              description="Pesapal is an accredited Oracle Hospitality partner and reseller, delivering the full suite of Oracle Hospitality solutions tailored for hotels, resorts and food & beverage operators across Africa."
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/201/800/600" alt="Fuel Station" className="rounded-2xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              subtitle="Petrol Station Management System"
              title="Fuel Station Management Made Easy"
              description="Pesapal Forecourt Management Solution (PFMS) helps you stay in control with real-time insights and modern tools at every pump. Whether you're managing one station or an entire network, PFMS brings automation, accountability, and efficiency helping you reduce losses, optimize performance, and improve profitability for your petrol station."
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
      <section className="py-24 bg-[#001D4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img src="https://picsum.photos/id/3/500/800" alt="Pesapal Mobile App" className="max-w-xs mx-auto drop-shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeader 
              light
              subtitle="Pesapal Mobile"
              title="Pesapal Mobile App"
              description="Pesapal Mobile app is the best lifestyle app. With Pesapal Mobile you can pay all your bills in bulk in one transaction. Pay TV & internet bills. You can buy airtime for yourself or for a different number at the same time. Order & pay event tickets and holiday trips. All with ZERO transaction fees. Link your VISA card on the Pesapal Mobile app and pay all your shopping bills by simply scanning the QR code whether or in-store or online."
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

      {/* Footer */}
      <footer className="bg-[#0040B0] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold">pesapal</span>
              </div>
              <p className="text-sm text-blue-100 mb-8">Payments Anywhere, Anytime</p>
              <div className="flex gap-6 mb-8">
                <img src="https://picsum.photos/id/11/40/25" className="h-6" alt="PCI DSS" />
                <img src="https://picsum.photos/id/12/40/25" className="h-6" alt="PCI PTS" />
              </div>
              <p className="text-sm font-semibold">Regulated by the Bank of Uganda.</p>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-6">Discover Pesapal</h5>
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
                <li><a href="#" className="hover:text-white transition-colors">Payments Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Online Invoice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SABI POS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reserveport</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ticketsasa</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-6">Contacts</h5>
              <address className="not-italic text-sm text-blue-100 space-y-4">
                <p>Pesapal Uganda Limited</p>
                <p>Bandali Close Plot 12, Bugolobi,</p>
                <p>P.O Box 520040 Luzira, Kampala, Uganda</p>
                <p className="pt-4">Tel: +256-326-100-650</p>
                <p>Email: infoug@pesapal.com</p>
              </address>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-300 transition-colors" />
            </div>
            <div className="text-xs text-blue-100 font-medium">
              © 2009-2026, Pesapal™. All Rights Reserved / Privacy Policy / Terms and Conditions
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
