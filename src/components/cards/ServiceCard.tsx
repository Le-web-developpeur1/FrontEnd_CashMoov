import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceCardProps } from "@/types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-[#2A4793]/50 hover:shadow-lg transition-all duration-300 group w-full h-full"
    >
      {Icon && (
        <div className="mb-4 sm:mb-6 flex gap-4 items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2 mb-3">
            {title}
          </h3>
        </div>
      )}
      
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <ul className="space-y-2.5 sm:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2A4793]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2A4793]" />
            </div>
            <span className="text-xs sm:text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
