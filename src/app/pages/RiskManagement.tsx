import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ShieldAlert, Fingerprint, Lock } from "lucide-react";
import { motion } from "motion/react";

export function RiskManagement() {
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
              Risk Management
            </h1>
            <p className="text-xl text-[#606872] mb-10 leading-relaxed">
              Protect your business from fraud with intelligent machine learning tools designed specifically to minimize risk while maintaining high conversion rates.
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
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Fraud Prevention</h3>
              <p className="text-[#606872] leading-relaxed">Block fraudulent transactions in real time with our machine learning engine optimized for global ecommerce.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Fingerprint size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Identity Verification</h3>
              <p className="text-[#606872] leading-relaxed">Ensure regulatory compliance and protect against account takeovers with advanced identity checks.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Chargeback Protection</h3>
              <p className="text-[#606872] leading-relaxed">Manage disputes more effectively and maintain a healthy merchant profile with proactive alerting and tools.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
