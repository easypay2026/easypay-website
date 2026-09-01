import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CreditCard, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Acquiring() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-medium text-[#1B1D21] mb-6 tracking-tight">
              Global Acquiring
            </h1>
            <p className="text-xl text-[#606872] mb-10 leading-relaxed">
              Accept payments globally with industry-leading authorization rates. Our advanced acquiring network is built to maximize your revenue while minimizing friction.
            </p>
            <button className="px-8 py-3.5 bg-[#1F2225] text-white text-[16px] font-semibold rounded hover:bg-[#11283d] transition-all duration-200 ">
              Contact Us
            </button>
          </motion.div>
        </section>

        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto bg-gray-50 py-24 rounded-3xl">
          <div className="grid md:grid-cols-3 gap-12 px-6">
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Multi-Currency Support</h3>
              <p className="text-[#606872] leading-relaxed">Process payments in over 150 currencies globally, ensuring your customers can pay exactly how they want.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">High Authorization</h3>
              <p className="text-[#606872] leading-relaxed">Our intelligent routing engine dynamically connects to the best performing acquirers to boost your acceptance rates.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Secure & Compliant</h3>
              <p className="text-[#606872] leading-relaxed">Fully PCI-DSS Level 1 compliant infrastructure that keeps your customers' data completely secure.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
