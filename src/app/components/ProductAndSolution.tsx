import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Globe, CheckCircle, Zap } from "lucide-react";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Frame50 from "../../imports/Frame50";
import Frame52 from "../../imports/Frame52";
import Frame53 from "../../imports/Frame53";
import Frame54 from "../../imports/Frame54";

// The globe pulls in d3-geo and only renders at lg and up, so keep it out of
// the initial bundle and load it when this section is actually reached.
const GlobeWithMarkers = lazy(() =>
  import("./GlobeWithMarkers").then(m => ({ default: m.GlobeWithMarkers }))
);

const SOLUTIONS: { flag: React.ReactNode; title: string; desc: string; link: string }[] = [
  {
    flag: <div className="w-[32px] h-[32px]"><Frame50 /></div>,
    title: "Turkey Payment Solution",
    desc: "Supporting local Troy cards and international card networks, covering 95%+ of paying users.",
    link: "/solutions/turkey",
  },
  {
    flag: <div className="w-[32px] h-[32px]"><Frame53 /></div>,
    title: "Philippines Payment Solution",
    desc: "Direct connections to top wallets like GCash, reaching 80M+ users with instant settlements.",
    link: "/solutions/philippines",
  },
  {
    flag: <div className="w-[32px] h-[32px]"><Frame52 /></div>,
    title: "Egypt Payment Solution",
    desc: "Pioneer integrations with Fawry and Vodafone Cash, reaching 110M young mobile payment users.",
    link: "/solutions/egypt",
  },
  {
    flag: <div className="w-[32px] h-[32px]"><Frame54 /></div>,
    title: "Middle East Cross-Border Solution",
    desc: "Covering mainstream payments across six Gulf countries for high-net-worth players.",
    link: "/solutions/middle-east",
  },
];

export function ProductAndSolution() {
  return (
    <section className="bg-[#1F2225] py-0">
      {/* Top: Globe + Slogan */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-0">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: Slogan + Subtitle — shifted left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full lg:flex-[2] flex flex-col justify-center pb-12 lg:pb-0 relative pr-0 lg:pr-[100px]"
          >
            <span className="text-[#01CD86] font-bold tracking-[0.2em] uppercase mb-9 block text-[14px]">
              Product &amp; Solutions
            </span>

            <h2 className="text-[36px] md:text-[48px] font-bold text-white leading-tight mb-5">
              Maximize Global Reach with Seamless <span className="text-[#01CD86]">Optimized</span> Payments
            </h2>

            <p className="text-[#606872] text-[16px] leading-relaxed max-w-[640px]">
              Access 350+ payment methods across 150+ countries via a single API, unlocking ultimate cost efficiency.
            </p>
            
            <Link 
              to="/products"
              className="mt-14 inline-flex items-center justify-center px-8 h-[48px] bg-[#01CD86] text-[#1B1D21] text-[15px] font-semibold uppercase rounded-[8px] hover:bg-[#20e280]  transition-all duration-300 w-fit group overflow-hidden"
            >
              <div className="relative h-[20px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center justify-center leading-none">LEARN MORE</span>
                  <span className="h-[20px] flex items-center justify-center leading-none">LEARN MORE</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right: Globe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block w-full lg:flex-[1] relative mt-4" // Added mt-4 for 16px downward shift
              style={{ minHeight: 540, overflow: "visible" }}
            >
              <div className="w-full h-[350px] lg:h-[620px] absolute right-0 top-1/2 -translate-y-1/2 lg:w-[120%]" style={{ overflow: "visible" }}>
                <Suspense fallback={null}>
                  <GlobeWithMarkers />
                </Suspense>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Product Features */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-[80px] lg:pt-[124px] pb-[60px] lg:pb-[84px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 lg:gap-[60px] w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 text-[#01CD86]">
               <Globe size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-semibold text-white -mb-4 leading-snug min-h-[56px] lg:min-h-[60px]">Comprehensive Global Coverage</h3>
            <p className="text-[#606872] text-[15px] leading-relaxed">
              Eliminate geographic barriers by accessing 150+ countries with 350+ local payment methods and 70+ currencies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 text-[#01CD86]">
               <CheckCircle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-semibold text-white -mb-4 leading-snug min-h-[56px] lg:min-h-[60px]">Seamless & High Converting</h3>
            <p className="text-[#606872] text-[15px] leading-relaxed">
              Boost conversion rates with 30+ local languages and streamlined, familiar payment flows that minimize user drop-offs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="mb-6 text-[#01CD86]">
               <Zap size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-[20px] font-semibold text-white -mb-4 leading-snug min-h-[56px] lg:min-h-[60px]">Cost-Efficient & Rapid Integration</h3>
            <p className="text-[#606872] text-[15px] leading-relaxed">
              Accelerate your launch with a single unified API, enjoying transparent pricing and zero hidden fees for ultimate cost efficiency.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Market Solutions */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-[40px] lg:pt-[52px] pb-[80px] lg:pb-[116px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[14px] font-medium tracking-[0.25em] uppercase text-[#606872]">
            Market Solutions
          </span>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-0" />

        {/* Solution rows */}
        <div className="divide-y divide-white/10">
          {SOLUTIONS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <Link
                to={s.link}
                className="flex items-center justify-between py-5 group hover:pl-3 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center mt-[2px] bg-transparent">
                    {typeof s.flag === 'string' ? (
                      <span className="text-[36px] absolute leading-none">{s.flag}</span>
                    ) : (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[32px] h-[32px]">
                        {s.flag}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium leading-tight group-hover:text-[#01CD86] transition-colors duration-200 text-[20px]">
                      {s.title}
                    </p>
                    <p className="text-[#606872] text-sm mt-0.5 max-w-[850px] pr-[64px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#01CD86] group-hover:bg-[#01CD86]/10 transition-all duration-300">
                  <ArrowRight size={14} className="text-[#606872] group-hover:text-[#01CD86] group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-white/10" />
      </div>
    </section>
  );
}
