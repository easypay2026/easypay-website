import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { MessageSquare, ThumbsUp, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

export function Complaints() {
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
              Complaints & Suggestions
            </h1>
            <p className="text-xl text-[#606872] mb-10 leading-relaxed">
              We value your feedback. Whether you have a suggestion to improve our services or need to escalate an issue, our dedicated team is here to listen and resolve it promptly.
            </p>
          </motion.div>
        </section>

        <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-medium text-[#1B1D21] mb-6">Submit Feedback</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-[16px] font-semibold text-[#606872] mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01CD86] bg-white">
                    <option>Suggestion</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[16px] font-semibold text-[#606872] mb-2">Your Email</label>
                  <input type="email" placeholder="email@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01CD86]" />
                </div>
                <div>
                  <label className="block text-[16px] font-semibold text-[#606872] mb-2">Message</label>
                  <textarea rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01CD86]"></textarea>
                </div>
                <button type="button" className="px-8 py-3.5 bg-[#1F2225] text-white text-[16px] font-semibold rounded hover:bg-[#11283d] transition-all duration-200  w-full">
                  Submit
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center shrink-0 text-[#606872]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#1B1D21] mb-2">We're Listening</h4>
                  <p className="text-[#606872]">Every piece of feedback goes directly to our operations team to ensure we continuously improve our platform.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#606872]/10 rounded-xl flex items-center justify-center shrink-0 text-[#606872]">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#1B1D21] mb-2">Transparent Process</h4>
                  <p className="text-[#606872]">We aim to acknowledge all complaints within 24 hours and resolve them within 5 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
