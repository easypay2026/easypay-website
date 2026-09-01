import { Link } from "react-router";
import { Mail } from "lucide-react";
import EasyPayLogo from "../../imports/EasyPay";
import { handleEmailClick } from "../utils/email";

export function Footer() {
  return (
    <footer className="bg-[#1F2225] border-t border-[#262A2E]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 w-full">
          
          {/* Left Column: Brand & Text */}
          <div className="flex flex-col max-w-sm mb-8 lg:mb-0">
            <div className="mb-6 flex justify-start opacity-90" style={{ "--fill-0": "#FFFFFF" } as React.CSSProperties}>
              <div className="w-[127px] h-[14.3px] relative">
                <EasyPayLogo />
              </div>
            </div>
            <p className="text-[15px] text-[#606872] mb-8 leading-relaxed font-normal">
              Next-generation payment infrastructure for global enterprises. Empowering your business expansion with secure, one-stop localized solutions.
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-[#606872] flex flex-col gap-[24px]">
                <span className="font-medium text-[#8B95A1] text-[13px]">EASY PAY INTERNATIONAL INVESTMENT CO., LIMITED</span>
                <span className="text-[15px]">Address: Room 1633, 16/F Radio City, 505 Hennessy Road, Causeway Bay, Hong Kong</span>
              </div>
              <a 
                href="mailto:info@easypayx.com"
                target="_top"
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-[#606872] hover:text-[#01CD86] transition-colors cursor-pointer w-fit mt-1"
              >
                <div className="flex items-center justify-center relative top-[2px]">
                  <Mail size={18} />
                </div>
                <div className="flex items-center justify-center h-[18px]">
                  <span className="text-[14px] font-medium underline underline-offset-4 leading-none relative top-[-1px]">info@easypayx.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: 3 columns (EasyPay, Solution, About) */}
          <div className="flex flex-col md:flex-row gap-12 lg:gap-32 w-full md:w-auto">
            
            {/* EasyPay */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                EasyPay
              </h4>
              <ul className="space-y-4 flex flex-col">
                <li>
                  <Link to="/products" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Product
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="flex flex-col md:ml-[20px]">
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                Solution
              </h4>
              <ul className="space-y-4 flex flex-col">
                <li>
                  <Link to="/solutions/turkey" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Turkey Payment
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/philippines" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Philippines Payment
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/egypt" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Egypt Payment
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/middle-east" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Middle East Cross-Border
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
                ABOUT
              </h4>
              <ul className="space-y-4 flex flex-col">
                <li>
                  <Link to="/about" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-[15px] font-normal text-[#606872] hover:text-[#01CD86] transition-colors whitespace-nowrap">
                    Terms & Privacy
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-[#262A2E] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] font-normal text-[#606872]">
              © 2026 EasyPay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}