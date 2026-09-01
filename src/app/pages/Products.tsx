import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ContactUsCta } from "../components/ContactUsCta";
import { handleEmailClick } from "../utils/email";
import { motion } from "motion/react";
import { 
  CreditCard, 
  Globe, 
  ShieldCheck,
  Zap,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Coins,
  Rocket
} from "lucide-react";
import { lazy, Suspense } from "react";

// Deferred so the d3-geo globe does not block this page's first paint.
const GlobeWithMarkers = lazy(() =>
  import("../components/GlobeWithMarkers").then(m => ({ default: m.GlobeWithMarkers }))
);

export function Products() {
  const sections = [
    {
      title: "Payment Coverage:\nReaching Every Corner of the Globe",
      items: [
        { 
          title: "150+ Countries/Regions Covered", 
          desc: "Spanning mainstream markets worldwide—including Europe, the Americas, Southeast Asia, Japan, South Korea, the Middle East, and India—effectively eliminating geographical payment barriers.", 
          icon: <Globe size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "350+ Local Payment Methods", 
          desc: "Aggregating the most mainstream payment methods tailored to local user habits, comprehensively covering credit cards, e-wallets, bank transfers, and carrier billing.", 
          icon: <CreditCard size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "70+ Transaction Currencies", 
          desc: "Supporting multi-currency transactions and real-time exchange rates to seamlessly meet the payment preferences of global players.", 
          icon: <Coins size={28} strokeWidth={1.5} /> 
        },
      ]
    },
    {
      title: "Payment Experience:\nSmooth Flow & High Success Rates",
      items: [
        { 
          title: "30+ Local Languages", 
          desc: "Providing fully localized payment pages and customer support to significantly enhance the user experience.", 
          icon: <MessageSquare size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "Streamlined User Journey", 
          desc: "Optimizing end-to-end interactions with minimal redirects to reduce drop-off rates and noticeably boost payment success rates.", 
          icon: <TrendingUp size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "Familiar Payment Flows", 
          desc: "Delivering the payment interfaces that users are most accustomed to, lowering their decision-making threshold and increasing their willingness to pay.", 
          icon: <CheckCircle size={28} strokeWidth={1.5} /> 
        },
      ]
    },
    {
      title: "Payment Cost:\nEfficient and Economical",
      items: [
        { 
          title: "Transparent Pricing, No Hidden Fees", 
          desc: "Offering a clear and transparent fee structure to help you effectively control your operational costs.", 
          icon: <ShieldCheck size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "Unified Integration, Simple & Fast", 
          desc: "Providing pristine API documentation and robust technical support so that a single interface can unlock all payment channels, drastically reducing development time and costs.", 
          icon: <Zap size={28} strokeWidth={1.5} /> 
        },
        { 
          title: "Simplified Process for Rapid Launch", 
          desc: "Optimizing the entire integration workflow to shorten development cycles and ensure your business goes live rapidly.", 
          icon: <Rocket size={28} strokeWidth={1.5} /> 
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                Product
              </span>

              <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-tight mb-5">
                Maximize Global Reach with Seamless <span className="text-[#01CD86]">Optimized</span> Payments
              </h2>

              <p className="text-[#606872] text-[16px] leading-relaxed max-w-[640px] mb-10">
                Access 350+ payment methods across 150+ countries via a single API, unlocking ultimate cost efficiency.
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
                <Suspense fallback={null}>
                  <GlobeWithMarkers />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections Data */}
      <div className="flex flex-col w-full relative">
        {sections.map((section, sIdx) => (
          <section key={sIdx} className={`relative z-10 py-[60px] lg:py-[80px] lg:py-[120px] ${sIdx === 1 ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
            
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex flex-col items-start relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14 w-full"
              >
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1B1D21] leading-tight max-w-3xl whitespace-pre-line">
                  {section.title}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 lg:gap-[60px] w-full">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex flex-col items-start gap-4 transition-colors duration-300 w-full group"
                  >
                    <div className="text-[#01CD86] shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col w-full">
                      <h3 className="text-[20px] font-semibold text-[#1B1D21] mb-3 leading-snug transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#606872] text-[15px] leading-relaxed max-w-[75%] pr-8">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <ContactUsCta />

      <Footer />
    </div>
  );
}
