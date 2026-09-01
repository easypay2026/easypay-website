import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  // 更新为 v5 确保缓存刷新，弹窗能再次出现
  const storageKey = "easypay-cookie-consent-v5"; 

  useEffect(() => {
    const consent = localStorage.getItem(storageKey);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(storageKey, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(storageKey, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9990] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-[1400px] mx-auto w-full pointer-events-auto">
            <div className="bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl p-6 md:p-8 relative">
              
              {/* 标题单独放上面 */}
              <h3 className="text-[#1B1D21] text-[18px] font-bold mb-3 pr-8">We value your privacy</h3>
              
              {/* 正文和按钮在一行，使用 items-center 确保它们彼此居中对齐 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="text-[#606872] text-[14px] md:text-[15px] leading-relaxed max-w-[800px] flex-1">
                  We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                  <Link to="/terms" className="text-[#1B1D21] hover:underline font-bold transition-colors">
                    Terms & Privacy Policy
                  </Link>.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                  <button
                    onClick={handleDecline}
                    className="w-full sm:w-auto px-6 h-[44px] text-[#1B1D21] text-[14px] font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="w-full sm:w-auto px-6 h-[44px] bg-[#1B1D21] text-white text-[14px] font-semibold rounded-xl hover:bg-[#2A2E33] transition-colors shadow-sm"
                  >
                    Accept All
                  </button>
                </div>
              </div>

              <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-[#606872] hover:text-[#1B1D21] transition-colors p-2"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
