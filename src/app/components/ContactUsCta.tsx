import { motion } from "motion/react";
import { handleEmailClick } from "../utils/email";

export function ContactUsCta() {
  return (
    <section className="w-full bg-[#01CD86]">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full py-[60px] lg:py-[80px] overflow-hidden flex flex-col justify-center items-center"
        >
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1D21] mb-8 tracking-tight">
              Ready to Start Your EasyPay Journey?
            </h2>
            <p className="mb-12 max-w-2xl mx-auto font-regular text-[#1b1d21cc] text-[16px]">
              Start building your one-stop payment solution today.<br />
              Contact us to speak with an expert
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={handleEmailClick}
                className="px-8 h-[48px] bg-[#1B1D21] text-white text-[15px] font-semibold uppercase rounded-[8px] hover:bg-[#2A2E33] transition-all duration-300 flex items-center justify-center group overflow-hidden"
              >
                <div className="relative h-[20px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
