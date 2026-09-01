import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Bitcoin, Repeat, Link2 } from "lucide-react";
import { motion } from "motion/react";

export function CryptoPayment() {
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
              Crypto Payment
            </h1>
            <p className="text-xl text-[#606872] mb-10 leading-relaxed">
              Bridge the gap between traditional finance and web3. Accept crypto seamlessly and receive fiat settlement directly to your bank account.
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
                <Bitcoin size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Accept Top Assets</h3>
              <p className="text-[#606872] leading-relaxed">Enable payments in Bitcoin, Ethereum, USDT, USDC, and other leading digital assets directly at checkout.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Repeat size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">Instant Conversion</h3>
              <p className="text-[#606872] leading-relaxed">Eliminate volatility risk by automatically converting incoming crypto payments to your preferred fiat currency.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center mb-6 text-[#606872]">
                <Link2 size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#1B1D21] mb-4">On & Off Ramps</h3>
              <p className="text-[#606872] leading-relaxed">Offer global users the ability to convert securely between fiat and crypto using our compliant infrastructure.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
