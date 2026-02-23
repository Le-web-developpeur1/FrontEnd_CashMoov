import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ServiceCardProps } from "@/types";

interface ServiceCardWithOptionalImageProps extends ServiceCardProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const ServiceCard: React.FC<ServiceCardWithOptionalImageProps> = ({
  title,
  description,
  features,
  icon: Icon,
  imageSrc,
  imageAlt,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 group w-full h-full"
    >
      <div className={`${imageSrc ? 'grid lg:grid-cols-2 gap-6 lg:gap-8 items-center' : ''}`}>
        
        <div>
          {Icon && (
            <div className="mb-5 sm:mb-6 flex gap-5 items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-2xl flex items-center justify-center ">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                {title}
              </h3>
            </div>
          )}
          
          <div className="mb-5 sm:mb-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#2A4793]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A4793]" />
                </div>
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {imageSrc && (
          <div className="mt-6 lg:mt-0 flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden w-full max-w-md">
              <div className="aspect-square">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
