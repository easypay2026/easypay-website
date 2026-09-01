import { motion } from "motion/react";
import { Database, Cloud, Shield, Zap } from "lucide-react";

export function TechnicalArchitecture() {
  const layers = [
    {
      icon: <Cloud size={18} />,
      title: "API Layer",
      description: "RESTful & GraphQL",
      color: "#01CD86"
    },
    {
      icon: <Zap size={18} />,
      title: "Processing Engine",
      description: "Real-time transactions",
      color: "#606872"
    },
    {
      icon: <Shield size={18} />,
      title: "Security Layer",
      description: "End-to-end encryption",
      color: "#01CD86"
    },
    {
      icon: <Database size={18} />,
      title: "Data Layer",
      description: "Distributed storage",
      color: "#606872"
    }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-8">
      <h3 className="text-[16px] font-semibold text-[#1B1D21] mb-6">Technical Architecture</h3>
      
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-gray-200 group">
              <div 
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${layer.color}15` }}
              >
                <div style={{ color: layer.color }}>
                  {layer.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[16px] font-semibold text-[#1B1D21] mb-0.5">{layer.title}</div>
                <div className="text-xs text-[#606872]">{layer.description}</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#01CD86] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {index < layers.length - 1 && (
              <div className="w-px h-3 bg-gray-200 ml-8 my-0.5" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-xs text-[#606872]">Uptime SLA</div>
          <div className="text-[16px] font-semibold text-[#01CD86]">99.99%</div>
        </div>
      </div>
    </div>
  );
}
