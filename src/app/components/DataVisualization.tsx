import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export function DataVisualization() {
  const metrics = [
    { label: "Transactions", value: "2.4M", change: "+12.5%", color: "#01CD86" },
    { label: "Volume", value: "$847M", change: "+8.3%", color: "#606872" },
    { label: "Customers", value: "12.8K", change: "+15.2%", color: "#01CD86" }
  ];

  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 72 },
    { month: "Mar", value: 68 },
    { month: "Apr", value: 85 },
    { month: "May", value: 78 },
    { month: "Jun", value: 92 }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-[16px] font-semibold text-[#1B1D21]">Performance Metrics</h3>
          <p className="text-xs text-[#606872]">Last 30 days</p>
        </div>
        <div className="w-8 h-8 rounded bg-[#01CD86]/10 flex items-center justify-center">
          <TrendingUp size={16} className="text-[#01CD86]" />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-center p-4 bg-gray-50 rounded hover:bg-white hover:shadow-sm transition-all duration-200"
          >
            <div className="text-xs text-[#606872] mb-1">{metric.label}</div>
            <div className="text-xl font-medium text-[#1B1D21] mb-1">{metric.value}</div>
            <div className="text-xs font-medium" style={{ color: metric.color }}>
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple bar chart */}
      <div className="space-y-3">
        {chartData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 text-xs text-[#606872]">{data.month}</div>
            <div className="flex-1 h-8 bg-gray-50 rounded-sm relative overflow-hidden group">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${data.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="absolute h-full bg-gradient-to-r from-[#01CD86] to-[#606872] rounded-sm group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="w-12 text-xs text-right font-medium text-[#606872]">{data.value}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
