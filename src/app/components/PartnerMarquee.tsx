import { useState } from "react";
import Frame32_2 from "../../imports/Frame32-2";
import Frame34 from "../../imports/Frame34";

export function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-[40px] md:bottom-[80px] left-0 w-full flex justify-center pointer-events-none z-10">
      {/* Container aligned with the navigation's max-width and padding */}
      <div 
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 overflow-hidden relative pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
        }}
      >
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee-scroll 30s linear infinite;
            display: flex;
            width: fit-content;
          }
          .animate-marquee.paused {
            animation-play-state: paused;
          }
          
          /* The Colored layer starts fully transparent */
          .logo-track-colored > div > div > div {
             opacity: 0;
             transition: opacity 0.3s ease;
             cursor: pointer;
          }
          /* When a specific logo is hovered, it reveals its colored version */
          .logo-track-colored > div > div > div:hover {
             opacity: 1;
          }
        `}</style>
        
        {/* Base Layer (Frame32-2: Accurate gray colors provided by user) */}
        <div className={`animate-marquee ${isHovered ? 'paused' : ''} logo-track-base`}>
          <div className="flex shrink-0 items-center gap-[100px] pr-[100px]">
            <Frame32_2 />
          </div>
          <div className="flex shrink-0 items-center gap-[100px] pr-[100px]">
            <Frame32_2 />
          </div>
        </div>

        {/* Hover Layer (Frame34: Full colors) */}
        <div className={`animate-marquee ${isHovered ? 'paused' : ''} logo-track-colored absolute top-0 left-6 lg:left-12`}>
          <div className="flex shrink-0 items-center gap-[100px] pr-[100px]">
            <Frame34 />
          </div>
          <div className="flex shrink-0 items-center gap-[100px] pr-[100px]">
            <Frame34 />
          </div>
        </div>

      </div>
    </div>
  );
}