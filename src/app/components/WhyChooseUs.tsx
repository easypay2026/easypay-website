import { motion } from "motion/react";
import { Link } from "react-router";
import { 
  Gamepad2, 
  ShieldCheck, 
  Users,
  ArrowRight 
} from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Gamepad2 size={40} strokeWidth={1} />,
      title: "Dedicated to Global Gaming",
      desc: "Providing efficient and secure one-stop payment solutions deeply aligned with the monetization scenarios and needs of the gaming industry.",
      link: "/products/acquiring"
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1} />,
      title: "Bank-Level Security",
      desc: "Building technical barriers for secure cross-border payment systems with a bank-level protection framework, ensuring end-to-end fund and data security.",
      link: "/products/risk-management"
    },
    {
      icon: <Users size={40} strokeWidth={1} />,
      title: "Comprehensive Team Support",
      desc: "Dedicated account managers provide deep understanding of your business needs, acting as a highly efficient bridge between merchants and our payment team.",
      link: "/products/payout"
    }
  ];

  return (
    <section className="py-[136px] px-6 lg:px-12 bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1D21] tracking-tight">
            Why choose EasyPay
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <Link 
                to={reason.link}
                className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#01CD86]/40 transition-all duration-300 min-h-[320px] h-full"
              >
                <div className="text-[#1B1D21] group-hover:text-[#01CD86] transition-colors duration-300 mb-8">
                  {reason.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#1B1D21] mb-4">
                  {reason.title}
                </h3>

                <p className="text-[#606872] text-[15px] leading-relaxed mb-10 flex-grow pr-4">
                  {reason.desc}
                </p>

                <div 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1B1D21] group-hover:bg-[#01CD86] group-hover:text-white group-hover:border-[#01CD86] transition-all duration-300 mt-auto"
                >
                  <div className="transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
