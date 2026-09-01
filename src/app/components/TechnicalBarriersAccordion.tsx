import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface BarrierItem {
  title: string;
  content: React.ReactNode;
}

export function TechnicalBarriersAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: BarrierItem[] = [
    {
      title: "Multi-Layer Encryption Technology",
      content: (
        <ul className="text-[#606872] text-[15px] leading-relaxed space-y-3 list-none">
          <li><strong className="font-semibold text-[#1B1D21]">SSL/TLS + AES-256 Encryption:</strong> Employs industry-leading encryption algorithms to safeguard data transmission and storage security.</li>
          <li><strong className="font-semibold text-[#1B1D21]">Tokenization Technology:</strong> Uses tokens to replace sensitive user information, fundamentally eliminating the risk of sensitive data breaches.</li>
        </ul>
      )
    },
    {
      title: "Full-Link Coverage",
      content: (
        <p className="text-[#606872] text-[15px] leading-relaxed">
          Achieves a 100% end-to-end encryption coverage rate, ensuring that data undergoes high-strength encryption processing at every stage—from the client side and network transmission to server storage—providing defense with no blind spots.
        </p>
      )
    },
    {
      title: "System Stability",
      content: (
        <p className="text-[#606872] text-[15px] leading-relaxed">
          Adopts a highly available distributed microservices architecture design, achieving mutual isolation and fault tolerance between services. Even if a single microservice node fails, it will not affect the normal operation of the overall system.
        </p>
      )
    },
    {
      title: "Real-Time Monitoring and Alerting",
      content: (
        <p className="text-[#606872] text-[15px] leading-relaxed">
          Established a comprehensive risk control system, with a professional technical team providing 24/7 uninterrupted system monitoring. It can detect potential risks in milliseconds and trigger automated or manual response mechanisms.
        </p>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-[#E4E5E6] first:border-t">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between py-6 text-left group"
            >
              <span className={`text-[20px] font-semibold transition-colors duration-200 text-[#1B1D21] group-hover:text-[#01CD86]`}>
                {item.title}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-6"
              >
                {isOpen ? (
                  <Minus size={24} className="text-[#01CD86] transition-colors" strokeWidth={1.5} />
                ) : (
                  <Plus size={24} className="text-[#1B1D21] transition-colors group-hover:text-[#01CD86]" strokeWidth={1.5} />
                )}
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pt-0 pr-12">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
