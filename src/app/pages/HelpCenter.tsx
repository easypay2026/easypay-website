import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, MessageCircle, FileText, Search } from "lucide-react";
import { motion } from "motion/react";

export function HelpCenter() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-medium text-[#1B1D21] mb-6 tracking-tight">
              How can we help?
            </h1>
            <div className="relative max-w-2xl mx-auto mt-10">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#606872]" size={20} />
              <input 
                type="text" 
                placeholder="Search for articles, guides, and API docs..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01CD86] text-lg shadow-sm"
              />
            </div>
          </motion.div>
        </section>

        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-100 p-8 rounded-3xl hover:border-[#01CD86] transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-[#01CD86]/10 rounded-xl flex items-center justify-center mb-6 text-[#01CD86] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-medium text-[#1B1D21] mb-2">Email Support</h3>
              <p className="text-[#606872] mb-6">Drop us a line anytime. Our support team typically responds within 2 hours.</p>
              <a href="mailto:info@easypayx.com" className="text-[#606872] font-medium hover:underline">info@easypayx.com</a>
            </div>
            
            <div className="border border-gray-100 p-8 rounded-3xl hover:border-[#01CD86] transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-6 text-[#25D366] group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-medium text-[#1B1D21] mb-2">WhatsApp Support</h3>
              <p className="text-[#606872] mb-6">Need immediate assistance? Chat with our support agents instantly via WhatsApp.</p>
              <button className="text-[#606872] font-medium hover:underline">Start Chat</button>
            </div>
          </div>
        </section>
        
        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-medium text-[#1B1D21] mb-8 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Integration Guides", 
              "Account Verification (KYC/KYB)", 
              "Payout Limits & Fees",
              "Handling Chargebacks",
              "Sandbox Environment",
              "Webhooks Configuration"
            ].map((topic, i) => (
              <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <FileText className="text-[#01CD86]" size={20} />
                <span className="font-medium text-[#1B1D21]">{topic}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
