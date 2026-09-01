import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactUsCta } from "../components/ContactUsCta";
import { useState } from "react";
import { ACCEPTABLE_USE_POLICY, PRIVACY_POLICY } from "./PolicyData";
import { PolicyRenderer } from "./PolicyRenderer";

export function TermsPrivacy() {
  const [activeTab, setActiveTab] = useState<'AUP' | 'PRIVACY'>('AUP');

  return (
    <div className="min-h-screen bg-white selection:bg-[#01CD86] selection:text-white flex flex-col">
      <Navigation />

      {/* Content Section with Top Title and Side Tabs */}
      <section className="pt-[140px] pb-[80px] lg:pb-[120px] w-full text-[#1B1D21] flex-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1B1D21] leading-tight mb-12 lg:mb-16">
            Terms & Privacy Policy
          </h1>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px] items-start">
            
            {/* Left Tabs: reduced width by 80px (280 -> 200) */}
            <div className="w-full lg:w-[200px] shrink-0 flex flex-row lg:flex-col gap-6 lg:gap-4 sticky top-[120px] lg:top-[140px] bg-white z-20 py-4 lg:py-0 border-b border-gray-100 lg:border-none overflow-x-auto">
              <button
                onClick={() => setActiveTab('AUP')}
                className={`whitespace-nowrap text-left py-2 transition-colors duration-200 font-semibold text-[16px] md:text-[18px] ${
                  activeTab === 'AUP' 
                    ? 'text-[#01CD86]' 
                    : 'text-[#1B1D21] hover:text-[#01CD86]'
                }`}
              >
                Acceptable Use Policy
              </button>
              <button
                onClick={() => setActiveTab('PRIVACY')}
                className={`whitespace-nowrap text-left py-2 transition-colors duration-200 font-semibold text-[16px] md:text-[18px] ${
                  activeTab === 'PRIVACY' 
                    ? 'text-[#01CD86]' 
                    : 'text-[#1B1D21] hover:text-[#01CD86]'
                }`}
              >
                Privacy Policy
              </button>
            </div>

            {/* Right Content */}
            <div className="flex-1 min-w-0">
              <PolicyRenderer content={activeTab === 'AUP' ? ACCEPTABLE_USE_POLICY : PRIVACY_POLICY} />
            </div>

          </div>

        </div>
      </section>

      <ContactUsCta />
      <Footer />
    </div>
  );
}
