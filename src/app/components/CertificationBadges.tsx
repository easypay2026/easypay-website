import { motion } from "motion/react";
import { Award, Shield, CheckCircle, Lock } from "lucide-react";

export function CertificationBadges() {
  const certifications = [
    {
      icon: <Shield size={20} />,
      title: "PCI DSS Level 1",
      description: "Highest security standard",
      color: "#01CD86"
    },
    {
      icon: <Lock size={20} />,
      title: "SOC 2 Type II",
      description: "Audited annually",
      color: "#606872"
    },
    {
      icon: <Award size={20} />,
      title: "ISO 27001",
      description: "Information security",
      color: "#01CD86"
    },
    {
      icon: <CheckCircle size={20} />,
      title: "GDPR Compliant",
      description: "Data protection",
      color: "#606872"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-200 group"
        >
          <div 
            className="w-12 h-12 rounded flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
            style={{ backgroundColor: `${cert.color}15` }}
          >
            <div style={{ color: cert.color }}>
              {cert.icon}
            </div>
          </div>
          <h4 className="text-[16px] font-semibold text-[#1B1D21] mb-1">{cert.title}</h4>
          <p className="text-xs text-[#606872]">{cert.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
