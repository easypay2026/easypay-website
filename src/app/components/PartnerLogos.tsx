import { motion } from "motion/react";
import { lazy, Suspense } from "react";

// These logos are generated Figma exports carrying ~130KB of inline path data.
// They render below the fold, so they are loaded as a separate chunk rather
// than inflating the initial bundle.
const F45 = () => import("../../imports/Frame45-1");
const F44 = () => import("../../imports/Frame44-1");

const F45_Group7 = lazy(() => F45().then(m => ({ default: m.Group7 })));
const F45_Logo = lazy(() => F45().then(m => ({ default: m.Logo })));
const F45_Group4 = lazy(() => F45().then(m => ({ default: m.Group4 })));
const F45_Image7 = lazy(() => F45().then(m => ({ default: m.Image7Vectorized })));
const F45_Group8 = lazy(() => F45().then(m => ({ default: m.Group8 })));

const F44_Group1 = lazy(() => F44().then(m => ({ default: m.Group1 })));
const F44_Group5 = lazy(() => F44().then(m => ({ default: m.Group5 })));
const F44_Group2 = lazy(() => F44().then(m => ({ default: m.Group2 })));
const F44_Group4 = lazy(() => F44().then(m => ({ default: m.Group4 })));
const F44_Group3 = lazy(() => F44().then(m => ({ default: m.Group3 })));
const F44_LogoW = lazy(() => F44().then(m => ({ default: m.LogoW })));

export function PartnerLogos() {
  return (
    <section className="w-full py-[60px] lg:py-[80px] lg:py-[120px] bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="mb-[60px] lg:mb-[100px] flex flex-col items-start w-full">
          <span className="text-[#01CD86] text-[14px] font-bold tracking-[0.2em] uppercase mb-9 block">
            OUR PARTNERS
          </span>
          <h2 className="text-[32px] md:text-[36px] lg:text-[48px] font-bold text-[#1B1D21] leading-tight whitespace-normal md:whitespace-nowrap">
            Trusted by <span className="text-[#01CD86]">Top Global</span> Game Publishers
          </h2>
        </div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full opacity-70 hover:opacity-100 transition-opacity duration-500"
          >
           <Suspense fallback={<div className="min-h-[200px]" />}>
            {/* Desktop Layout - Unchanged */}
            <div className="hidden lg:flex flex-col gap-[68px] w-full">
              <div className="flex items-center justify-between w-full [&>div]:scale-[0.95] [&>div]:origin-center [&>div]:transition-transform">
                <F45_Group7 />
                <F45_Logo />
                <F45_Group4 />
                <F45_Image7 />
                <F45_Group8 />
              </div>
              <div className="flex items-center justify-between w-full [&>div]:scale-[0.95] [&>div:nth-child(3)]:!scale-[1.05] [&>div]:origin-center [&>div]:transition-transform">
                <F44_Group1 />
                <F44_Group5 />
                <F44_Group2 />
                <F44_Group4 />
                <F44_Group3 />
                <F44_LogoW />
              </div>
            </div>

            {/* Mobile Layout - Customized */}
            <div className="lg:hidden flex flex-wrap justify-start items-center w-full gap-y-6">
              {/* Row 1 */}
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F45_Group7 /></div>
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F45_Logo /></div>
              
              {/* Row 2 */}
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F45_Group4 /></div>
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F45_Image7 /></div>
              
              {/* Row 3 - The special 3-logo row */}
              <div className="w-1/3 flex justify-start items-center origin-left scale-[0.65]"><F45_Group8 /></div>
              <div className="w-1/3 flex justify-start items-center origin-left scale-[0.65]"><F44_Group1 /></div>
              <div className="w-1/3 flex justify-start items-center origin-left scale-[0.65]"><F44_Group5 /></div>

              {/* Row 4 */}
              <div className="w-1/2 flex justify-start items-center origin-left"><F44_Group2 /></div>
              <div className="w-1/2 flex justify-start items-center origin-left"><F44_Group4 /></div>
              
              {/* Row 5 */}
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F44_Group3 /></div>
              <div className="w-1/2 flex justify-start items-center origin-left scale-75"><F44_LogoW /></div>
            </div>
           </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
