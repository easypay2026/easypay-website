import { Link, useLocation } from "react-router";
import { 
  Menu, 
  X, 
  ChevronDown, 
  CreditCard, 
  Send, 
  ShieldAlert, 
  Bitcoin,
  MessageSquare,
  LifeBuoy
} from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { handleEmailClick } from "../utils/email";


import EasyPayLogo from "../../imports/EasyPay";

  export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileSolutionOpen, setIsMobileSolutionOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    const [showStatement, setShowStatement] = useState(false);
    const location = useLocation();
    useLayoutEffect(() => {
      if (!showStatement) return;
      const body = document.body;
      const html = document.documentElement;
      const scrollY = window.scrollY;
      const previousBody = body.getAttribute('style');
      const previousOverflow = html.style.overflow;
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      const paddingRight = parseFloat(window.getComputedStyle(body).paddingRight) || 0;
      Object.assign(body.style, {
        position: 'fixed', top: '-' + scrollY + 'px', width: '100%',
        overflow: 'hidden', paddingRight: (paddingRight + scrollbarWidth) + 'px',
      });
      html.style.overflow = 'hidden';
      return () => {
        if (previousBody === null) body.removeAttribute('style');
        else body.setAttribute('style', previousBody);
        html.style.overflow = previousOverflow;
        const behavior = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollY);
        html.style.scrollBehavior = behavior;
      };
    }, [showStatement]);
  
  const handleNavClick = (path: string, e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
    setIsMenuOpen(false);
  };
  const isDarkPage = false;
  
  
  // Theme variants
  const navBg = 'bg-white';
  const textColor = 'text-[#1B1D21]';
  const textHover = 'hover:text-[#1B1D21]';
  const textMuted = 'text-[#606872]';
  const dropdownBg = 'bg-white border-gray-100';
  const logoColor = '#10B981';


  const productsItems = [
    {
      title: "Acquiring",
      desc: "Accept payments globally with ease.",
      icon: <CreditCard size={24} strokeWidth={1.5} />,
      link: "/products/acquiring"
    },
    {
      title: "Payout",
      desc: "Send funds to businesses and individuals.",
      icon: <Send size={24} strokeWidth={1.5} />,
      link: "/products/payout"
    },
    {
      title: "Risk Management",
      desc: "Protect your business from fraud.",
      icon: <ShieldAlert size={24} strokeWidth={1.5} />,
      link: "/products/risk-management"
    },
    {
      title: "Crypto Payment",
      desc: "Seamlessly process digital assets.",
      icon: <Bitcoin size={24} strokeWidth={1.5} />,
      link: "/products/crypto-payment"
    }
  ];

  const solutionsItems = [
    {
      title: "Turkey Payment Solution",
      subtitle: "Supporting local Troy cards and international card networks.",
      link: "/solutions/turkey"
    },
    {
      title: "Philippines Payment Solution",
      subtitle: "Direct connections to top wallets like GCash, reaching 80M+ users.",
      link: "/solutions/philippines"
    },
    {
      title: "Egypt Payment Solution",
      subtitle: "Pioneer integrations with Fawry and Vodafone Cash.",
      link: "/solutions/egypt"
    },
    {
      title: "Middle East Cross-Border Solution",
      subtitle: "Covering mainstream payments across six Gulf countries.",
      link: "/solutions/middle-east"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300">
      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-[#1F2225] text-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="min-h-10 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center text-[13px] tracking-[0.02em] leading-snug">
              <span className="text-white/80">
                Solemn Statement: Our company has not issued any virtual currency and is strictly not affiliated with the &ldquo;EasyPay&rdquo; crypto-payment project.
              </span>
              <Link
                to="/statement-of-non-affiliation"
                onClick={(e) => handleNavClick("/statement-of-non-affiliation", e)}
                className="font-semibold underline underline-offset-2 decoration-white/50 hover:decoration-white transition-colors text-[14px]"
              >
                Read All
              </Link>
              <button
                onClick={() => setShowStatement(true)}
                aria-label="Close announcement"
                className="ml-8 text-white/60 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statement of Non-Affiliation Modal */}
      {showStatement && createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowStatement(false)}
          />
          <div className="relative w-full max-w-[640px] max-h-[85vh] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl">
            <div className="px-8 sm:px-10 pt-5 sm:pt-6 pb-8 sm:pb-10">
              <div className="flex items-center justify-between gap-4 mb-6 mt-2">
                <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1B1D21] tracking-tight text-left">
                  STATEMENT OF NON-AFFILIATION
                </h2>
                <button
                  onClick={() => setShowStatement(false)}
                  aria-label="Close"
                  className="shrink-0 self-start -mt-1 text-[#606872] hover:text-[#1B1D21] transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-[#606872]">
                <p className="text-[#1B1D21] font-medium">
                  Recently, a market project styled &ldquo;EasyPay&rdquo; involving an &ldquo;EP token&rdquo; has emerged, which has been flagged as a suspected pyramid-selling activity.
                </p>
                <p className="text-[#1B1D21] font-medium">
                  EASY PAY INTERNATIONAL INVESTMENT CO., LIMITED (CR No. 2375068) hereby solemnly declares:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-[#1B1D21] text-[28px] leading-none shrink-0">·</span>
                    <span><span className="font-semibold text-[#1B1D21]">No Affiliation:</span> We have no relationship whatsoever in terms of shareholding, control, or business with the &ldquo;EasyPay&rdquo; project or its claimed sponsors.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1B1D21] text-[28px] leading-none shrink-0">·</span>
                    <span><span className="font-semibold text-[#1B1D21]">No Crypto Issued:</span> Our business scope is strictly general commercial and investment business. We have never issued any virtual currency or &ldquo;EP token&rdquo;, and promised no high yields or referral rebates.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#1B1D21] text-[28px] leading-none shrink-0">·</span>
                    <span><span className="font-semibold text-[#1B1D21]">Public Warning:</span> We urge the public to remain vigilant against false statements and protect their own property.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/statement-of-non-affiliation"
                  onClick={(e) => {
                    handleNavClick("/statement-of-non-affiliation", e);
                    setShowStatement(false);
                  }}
                  className="w-full sm:flex-1 h-[44px] flex items-center justify-center border border-gray-200 text-[#1B1D21] text-[14px] font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Read All
                </Link>
                <button
                  onClick={() => {
                    setShowStatement(false);
                    setShowBanner(false);
                  }}
                  className="w-full sm:flex-1 h-[44px] bg-[#1B1D21] text-white text-[14px] font-semibold rounded-xl hover:bg-[#2A2E33] transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <div className={navBg}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0 lg:-ml-1" onClick={(e) => handleNavClick("/", e)}>
            <div className="flex items-center translate-x-1 lg:translate-x-2" style={{ "--fill-0": "#01CD86" } as React.CSSProperties}>
              <div className="w-[127px] h-[14.3px] relative">
                <EasyPayLogo />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 mr-auto ml-16">
            <Link 
              to="/" 
              onClick={(e) => handleNavClick("/", e)}
              className={`text-[16px] font-semibold transition-colors duration-200 ${textMuted} ${textHover}`}
            >
              Home
            </Link>

            <Link 
              to="/products" 
              onClick={(e) => handleNavClick("/products", e)}
              className={`text-[16px] font-semibold transition-colors duration-200 ${textMuted} ${textHover}`}
            >
              Product
            </Link>

            {/* Solution Dropdown */}
            <div className="relative group py-8">
              <button className={`flex items-center text-[16px] font-semibold transition-colors duration-200 ${textMuted} group-hover:text-[#1B1D21]`}>
                Solution
              </button>
              
              <div className={`fixed ${showBanner ? 'top-[120px]' : 'top-[80px]'} left-0 w-full shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t ${dropdownBg}`}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
                  <div className="flex justify-between w-full">
                    {/* Left Column (Items 0-1) */}
                    <div className="flex flex-col gap-[68px] w-full max-w-[45%]">
                      {solutionsItems.slice(0, 2).map((item, idx) => (
                        <Link key={idx} to={item.link} className="flex flex-col gap-2 group/item" onClick={(e) => handleNavClick(item.link, e)}
                        >
                          <div className={`flex items-center transition-colors w-fit ${textColor} group-hover/item:text-[#01CD86]`}>
                            <span className="text-[18px] font-semibold">{item.title}</span>
                            <span className="ml-1 transition-colors duration-300 font-semibold">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </span>
                          </div>
                          <span className={`text-[15px] leading-relaxed ${textMuted}`}>
                            {item.subtitle}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column (Items 2-3) */}
                    <div className="flex flex-col gap-[68px] w-full max-w-[45%]">
                      {solutionsItems.slice(2, 4).map((item, idx) => (
                        <Link key={idx + 2} to={item.link} className="flex flex-col gap-2 group/item" onClick={(e) => handleNavClick(item.link, e)}
                        >
                          <div className={`flex items-center transition-colors w-fit ${textColor} group-hover/item:text-[#01CD86]`}>
                            <span className="text-[18px] font-semibold">{item.title}</span>
                            <span className="ml-1 transition-colors duration-300 font-semibold">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </span>
                          </div>
                          <span className={`text-[15px] leading-relaxed ${textMuted}`}>
                            {item.subtitle}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              onClick={(e) => handleNavClick("/about", e)}
              className={`text-[16px] font-semibold transition-colors duration-200 ${textMuted} ${textHover}`}
            >
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <button onClick={handleEmailClick} className="px-6 h-[40px] bg-[#01CD86] text-[#1B1D21] text-[12px] font-semibold tracking-wide uppercase rounded-[8px] hover:bg-[#20e280] transition-all duration-200 group flex items-center justify-center overflow-hidden">
              <div className="relative h-[20px] overflow-hidden">
                <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                  <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden text-[#1B1D21]`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-6 border-t relative z-[60] h-[calc(100vh-120px)] overflow-y-auto pb-20 border-gray-100 bg-white absolute top-full left-0 w-full px-6`}>
            <div className="flex flex-col gap-6">
              <Link 
                to="/" 
                className={`text-[16px] font-semibold transition-colors text-[#1B1D21] hover:text-[#606872]`}
                onClick={(e) => handleNavClick("/", e)}
              >
                Home
              </Link>

              <Link to="/products" 
                className={`text-[16px] font-semibold transition-colors text-[#1B1D21] hover:text-[#606872]`}
                onClick={(e) => handleNavClick("/products", e)}
              >
                Product
              </Link>
              
              <div className="flex flex-col gap-0">
                <button 
                  onClick={() => setIsMobileSolutionOpen(!isMobileSolutionOpen)}
                  className="flex items-center gap-1 py-2 text-[16px] font-semibold text-[#1B1D21] transition-colors hover:text-[#606872] w-full text-left"
                >
                  <span>Solution</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileSolutionOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileSolutionOpen && (
                  <div className="flex flex-col gap-2 pl-4 py-2 border-l border-gray-100 ml-2 mt-1">
                    {solutionsItems.map((item, idx) => (
                      <Link 
                        key={idx}
                        to={item.link} 
                        className={`flex flex-col py-2 transition-colors group/mob text-[#1B1D21] hover:text-[#01CD86]`} 
                        onClick={(e) => handleNavClick(item.link, e)}
                      >
                        <span className="font-medium text-[15px]">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/about" 
                className={`text-[16px] font-semibold transition-colors text-[#1B1D21] hover:text-[#606872]`}
                onClick={(e) => handleNavClick("/about", e)}
              >
                About
              </Link>
              <button onClick={handleEmailClick} className="px-6 h-[70px] mt-4 bg-[#01CD86] text-[#000000] text-[15px] font-medium tracking-wide rounded-[8px] hover:bg-[#20e280] transition-all w-full group flex items-center justify-center">
                <div className="relative h-[20px] overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                    <span className="h-[20px] flex items-center justify-center leading-none">CONTACT US</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}
