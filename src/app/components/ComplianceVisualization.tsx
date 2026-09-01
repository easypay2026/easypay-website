import { motion } from "motion/react";
import { Shield, CheckCircle } from "lucide-react";

export function ComplianceVisualization() {
  const certifications = [
    { name: "PCI DSS", status: "Certified", level: "Level 1" },
    { name: "SOC 2", status: "Type II", level: "Compliant" },
    { name: "ISO 27001", status: "Certified", level: "2024" },
    { name: "GDPR", status: "Compliant", level: "EU" }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded bg-[#01CD86]/10 flex items-center justify-center">
          <Shield size={20} className="text-[#01CD86]" />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold text-[#1B1D21]">Compliance Status</h3>
          <p className="text-xs text-[#606872]">Real-time monitoring</p>
        </div>
      </div>

      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors duration-200 group"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={16} className="text-[#01CD86]" />
              <div>
                <div className="text-[16px] font-semibold text-[#1B1D21]">{cert.name}</div>
                <div className="text-xs text-[#606872]">{cert.status}</div>
              </div>
            </div>
            <div className="text-xs font-medium text-[#606872] group-hover:text-[#01CD86] transition-colors">
              {cert.level}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#606872]">Last audit</span>
          <span className="font-medium text-[#1B1D21]">January 2026</span>
        </div>
      </div>
    </div>
  );
}
