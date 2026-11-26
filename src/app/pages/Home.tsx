import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ComplianceVisualization } from "../components/ComplianceVisualization";
import { GlobalCoverage } from "../components/GlobalCoverage";
import { TechnicalArchitecture } from "../components/TechnicalArchitecture";
import { DataVisualization } from "../components/DataVisualization";
import { PartnerLogos } from "../components/PartnerLogos";
import { ProductAndSolution } from "../components/ProductAndSolution";
import { FAQ } from "../components/FAQ";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { PartnerMarquee } from "../components/PartnerMarquee";
import Grainient from "../components/Grainient";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  Lock,
  TrendingUp,
  Users
} from "lucide-react";
import { useState } from "react";
import { ContactUsCta } from "../components/ContactUsCta";

import { TechnicalBarriersAccordion } from "../components/TechnicalBarriersAccordion";
import { handleEmailClick } from "../utils/email";

export function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[100px] lg:pt-[140px] pb-32 px-6 lg:px-12 overflow-hidden bg-[#F8F9FA] h-screen max-h-[1080px] min-h-[700px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0 opacity-80">
          <Grainient
            color1="#7fffb1"
            color2="#c6ffea"
            color3="#97cacf"
            timeSpeed={1.05}
            colorBalance={0.02}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h1 className="w-full text-[clamp(16px,4.5vw,60px)] font-bold text-[#1B1D21] mb-8 leading-[1.1] tracking-tight flex flex-col gap-[12px]">
                <span className="block whitespace-nowrap">The global payment engine</span>
                <span className="block whitespace-nowrap">Empowering E-commerce expansion</span>
              </h1>

              <p className="text-[#606872] mb-12 max-w-2xl mx-auto leading-relaxed text-[18px]">A one-stop local payment solution tailored for E-commerce enterprises expanding overseas. Seamlessly connecting global cash flows to fuel your continuous and efficient business growth.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={handleEmailClick} className="px-8 h-[52px] bg-[#01CD86] text-[#000000] text-[16px] font-semibold tracking-wide rounded-[8px] hover:bg-[#20e280] transition-colors duration-200  flex items-center justify-center gap-2 group overflow-hidden">
                  <div className="relative h-[20px] overflow-hidden">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                      <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                      <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <PartnerMarquee />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Product & Solutions Section */}
      <ProductAndSolution />

      {/* Licenses & Compliance Section */}
      <section className="w-full pt-[136px] pb-[136px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col">
            {/* Top: Text Content */}
            <div className="mb-16 flex flex-col items-start w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#01CD86] text-[14px] font-bold tracking-[0.2em] uppercase mb-9 block">
                  Licensed &amp; Compliant
                </span>
                <h2 className="text-[36px] md:text-[48px] font-bold text-[#1B1D21] mb-11 leading-tight max-w-4xl">
                  Global Compliance &amp; <br className="hidden md:block" /><span className="text-[#01CD86]">Bank-Level</span> Security You Can Trust
                </h2>
              </motion.div>
            </div>
            
            {/* Dual Qualifications Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 w-full flex items-start gap-4 md:gap-[28px]"
            >
              <div className="text-[56px] md:text-[76px] font-semibold text-[#D0D5DD] leading-[0.85] tracking-tighter shrink-0 mt-[2px] w-[64px] md:w-[86px] text-left">01</div>
              <h3 className="text-[28px] font-bold text-[#1B1D21] leading-tight max-w-4xl">
                Dual Qualifications &amp; Licenses:<br />
                The Cornerstone of Security and Compliance
              </h3>
            </motion.div>

            {/* Bottom: Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex flex-col items-start pl-10 h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#01CD86]"></div>
                
                <h3 className="text-[20px] font-semibold text-[#1B1D21] mb-4 mt-1">Hong Kong MSO License</h3>
                <p className="text-[#606872] text-[16px] leading-relaxed">Holding a formal Money Service Operator license issued by Hong Kong Customs, granting legal qualifications for cross-border fund operations to achieve highly efficient collection, exchange, and global payouts.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex flex-col items-start pl-10 h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#01CD86]"></div>

                <h3 className="text-[20px] font-semibold text-[#1B1D21] mb-4 mt-1">PCI DSS Certification</h3>
                <p className="text-[#606872] text-[16px] leading-relaxed">Strictly adhering to Payment Card Industry Data Security Standards. Utilizing dual protection with end-to-end encryption and Tokenization technology to safeguard funds and privacy comprehensively.</p>
              </motion.div>
            </div>

            {/* Technical Barriers */}
            <div className="mt-[80px] lg:mt-[128px] w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-14 flex items-start gap-4 md:gap-[28px]"
              >
                <div className="text-[56px] md:text-[76px] font-semibold text-[#D0D5DD] leading-[0.85] tracking-tighter shrink-0 mt-[2px] w-[64px] md:w-[86px] text-left">02</div>
                <h3 className="text-[28px] font-bold text-[#1B1D21] leading-tight max-w-4xl">
                  Technical Barriers for Cross-Border Payment Security:<br />
                  Bank-Level Protection Framework
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <TechnicalBarriersAccordion />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerLogos />

      {/* CTA Section */}
      <ContactUsCta />

      <Footer />
    </div>
  );
}