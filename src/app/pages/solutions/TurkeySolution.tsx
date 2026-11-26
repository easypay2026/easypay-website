import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { motion } from "motion/react";
import { Shield, Zap, Globe } from "lucide-react";
import { StaticGlobeMap } from "../../components/StaticGlobeMap";
import { ContactUsCta } from "../../components/ContactUsCta";
import { handleEmailClick } from "../../utils/email";

export function TurkeySolution() {
  return (
    <div className="min-h-screen bg-[#1F2225]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#1F2225] py-0 w-full overflow-hidden mt-[80px] min-h-[700px] lg:min-h-[500px] lg:h-[calc(100vh-280px)] max-h-[880px] flex flex-col justify-center relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Left: Slogan + Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:flex-[2] flex flex-col justify-center pt-12 lg:pt-0 pb-12 lg:pb-0 relative pr-0 lg:pr-[100px]"
            >
              <span className="text-[#01CD86] font-semibold tracking-[0.2em] uppercase mb-9 block text-[14px]">
                Solution
              </span>

              <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-tight mb-5 whitespace-normal md:whitespace-nowrap">
                <span className="text-[#01CD86]">Turkey</span> Payment Solution
              </h2>

              <p className="text-[#606872] text-[16px] leading-relaxed max-w-[640px] mb-10">
                Capture the Eurasian E-commerce hub. Supporting local Troy cards and international card networks, covering 95%+ of paying users while capitalizing on Lira depreciation benefits.
              </p>

              <button onClick={handleEmailClick} className="px-8 h-[48px] bg-[#01CD86] text-[#1B1D21] text-[15px] font-semibold uppercase rounded-[8px] hover:bg-[#20e280] transition-all duration-300 w-fit group overflow-hidden">
                <div className="relative h-[20px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                  </div>
                </div>
              </button>
            </motion.div>

            {/* Right: Globe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block w-full lg:flex-[1] relative mt-10 lg:mt-4 min-h-[350px] lg:min-h-[540px]" style={{ overflow: "visible" }}
            >
              <div className="w-full h-[350px] lg:h-[620px] absolute right-0 top-1/2 -translate-y-1/2 lg:w-[120%]" style={{ overflow: "visible" }}>
                <StaticGlobeMap target={"Turkey"} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-[60px] lg:py-[120px] relative z-10 w-full border-t border-[#E4E5E6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 w-full"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1B1D21] leading-tight">
              Core Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 lg:gap-[60px] w-full">
            {[
              {
                title: "High Willingness-to-Pay Market",
                desc: "Turkey's mobile E-commerce ARPU (Average Revenue Per User) ranks among the top globally, featuring exceptionally high payment conversion rates, particularly for Strategy/SLG genres.",
                icon: <Globe size={32} strokeWidth={1.5} />
              },
              {
                title: "Lira Depreciation Dividend",
                desc: "Businesses can price and settle in USD, which relatively lowers the payment threshold for local users and significantly boosts their willingness to spend.",
                icon: <Zap size={32} strokeWidth={1.5} />
              },
              {
                title: "Comprehensive Channel Coverage",
                desc: "The simultaneous integration of the Troy local network and dual international cards enables you to reach over 95% of payment users in Turkey.",
                icon: <Shield size={32} strokeWidth={1.5} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-start gap-4 transition-colors duration-300 w-full group"
              >
                <div className="text-[#01CD86] shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col w-full">
                  <h3 className="text-[20px] font-semibold text-[#1B1D21] mb-3 leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#606872] text-[15px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


            {/* Supported Payment Methods */}
      <section className="bg-[#F8F9FA] py-[60px] lg:py-[120px] relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 w-full"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1B1D21] leading-tight max-w-3xl">
              Supported Payment Methods
            </h2>
          </motion.div>

          <div className="flex flex-col w-full mt-8 relative max-w-[1400px]">
            {/* The continuous vertical line behind the dashes */}
            <div className="absolute left-[1px] top-4 bottom-16 w-[1px] bg-[#E4E5E6] z-0 hidden md:block"></div>
            
            {[
              {
                title: "Troy Local Card",
                desc: "Turkey's domestic card scheme. It accounts for over 30% of the nationwide card issuance and stands as the preferred payment method for local users.",
              },
              {
                title: "Visa / Mastercard",
                desc: "International credit cards that effectively cover the high-end consumer demographic in Turkey, serving as the mainstream channels for online payments.",
              },
              {
                title: "BKM Express",
                desc: "A digital wallet launched by the Turkish banking alliance, designed to conveniently aggregate quick payments across multiple banks.",
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start w-full group relative mb-[48px] lg:mb-[88px] last:mb-0"
              >
                {/* Vertical Visual Connector (Dash) */}
                <div className="hidden md:flex flex-col items-center justify-start shrink-0 w-[4px] mr-[20px] lg:mr-[40px] relative z-10 pt-1">
                  <div className="w-[2px] h-[16px] bg-[#01CD86] group-hover:scale-110 transition-transform duration-300 shadow-sm" />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-[22px] font-semibold text-[#1B1D21] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#606872] text-[16px] leading-relaxed max-w-[75%] pr-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactUsCta />

      <Footer />
    </div>
  );
}
