import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function GlobalCoverage() {
  const regions = [
    { name: "North America", countries: 3, transactions: "45%" },
    { name: "Europe", countries: 27, transactions: "32%" },
    { name: "Asia Pacific", countries: 15, transactions: "18%" },
    { name: "Rest of World", countries: 105, transactions: "5%" }
  ];

  const currencies = ["USD", "EUR", "GBP", "JPY", "CNY", "AUD", "CAD", "CHF"];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded bg-[#606872]/10 flex items-center justify-center">
          <Globe size={20} className="text-[#606872]" />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold text-[#1B1D21]">Global Coverage</h3>
          <p className="text-xs text-[#606872]">150+ countries</p>
        </div>
      </div>

      {/* Regional breakdown */}
      <div className="space-y-4 mb-8">
        {regions.map((region, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#606872]">{region.name}</span>
              <span className="text-xs font-medium text-[#1B1D21]">{region.transactions}</span>
            </div>
            <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: region.transactions }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="absolute h-full bg-[#606872] rounded-full"
              />
            </div>
            <div className="text-xs text-[#606872] mt-1">{region.countries} countries</div>
          </motion.div>
        ))}
      </div>

      {/* Supported currencies */}
      <div className="pt-6 border-t border-gray-100">
        <div className="text-xs text-[#606872] mb-3">Supported Currencies</div>
        <div className="flex flex-wrap gap-2">
          {currencies.map((currency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-[#606872] hover:border-[#606872] hover:text-[#606872] transition-all duration-200 cursor-default"
            >
              {currency}
            </motion.div>
          ))}
          <div className="px-3 py-1.5 text-xs text-[#606872]">+25 more</div>
        </div>
      </div>
    </div>
  );
}
