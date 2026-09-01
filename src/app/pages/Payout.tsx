import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Send, Globe, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function Payout() {
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
              Global Payouts
            </h1>
            <p className="text-xl text-[#606872] mb-10 leading-relaxed">
              Automate and streamline your worldwide payouts. Send funds to sellers, freelancers, and employees effortlessly across borders.
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
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Borderless Reach</h3>
              <p className="text-[#606872] leading-relaxed">Send funds to more than 100 countries and territories with our optimized global payout network.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Instant Settlement</h3>
              <p className="text-[#606872] leading-relaxed">Deliver real-time payouts via local payment rails to keep your vendors and users satisfied.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Scalable Operations</h3>
              <p className="text-[#606872] leading-relaxed">Automate reconciliation and compliance to free your finance team from tedious manual work.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
