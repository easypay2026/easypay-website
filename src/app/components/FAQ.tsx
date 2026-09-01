import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I get started with EasyPay?",
      answer: "Getting started is simple. Contact our sales team to discuss your requirements, and we'll guide you through the onboarding process, which typically takes 2-3 weeks depending on your business complexity."
    },
    {
      question: "What documentation do I need to provide for onboarding?",
      answer: "You'll need to provide standard KYB documentation including business registration, proof of address, and identity verification for key stakeholders and directors."
    },
    {
      question: "How do you ensure transaction security and compliance?",
      answer: "We use bank-grade encryption, multi-factor authentication, and comply with PCI DSS Level 1 standards. We are also fully compliant with CBB regulations and major data protection laws."
    },
    {
      question: "How long does API integration typically take?",
      answer: "Most integrations are completed within 1-2 weeks. We provide comprehensive API documentation, dedicated technical support, and full-featured sandbox environments."
    },
    {
      question: "What is your pricing model for enterprise clients?",
      answer: "We offer flexible, volume-based pricing tailored to your specific needs. Contact our sales team for a customized quote that scales efficiently with your business."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors duration-200 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <span className="text-[16px] font-semibold text-[#1B1D21] group-hover:text-[#606872] transition-colors pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown size={20} className={`${isOpen ? 'text-[#606872]' : 'text-[#606872]'} transition-colors`} />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[15px] text-[#606872] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}