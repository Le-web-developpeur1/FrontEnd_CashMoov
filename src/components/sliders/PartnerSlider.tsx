import { PARTNERS } from "@/constants";
import { motion } from "framer-motion";

export default function PartnerSlider() {
  const loopPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className=" overflow-hidden py-10 max-full text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#2A4793]"
      >
        Nos partenaires
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12 sm:mb-16 md:mb-15 text-gray-600  sm:text-base px-4 mt-2"
      >
        Nous travaillons avec les meilleurs pour vous offrir un service d'excellence
      </motion.p>
      <div className="flex gap-6 animate-scroll">
        {loopPartners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            
          >

            <div
              key={index}
              className="min-w-[11.25rem] sm:min-w-[13.75rem] md:min-w-[16.25rem] h-[4.375rem] sm:h-[5rem] md:h-[5.625rem] rounded-lg sm:rounded-xl flex flex-row items-center justify-center gap-2 sm:gap-3 p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="w-10 h-10 sm:w-18 sm:h-18 md:w-18 md:h-18 object-contain flex-shrink-0"
              />
              <p className="text-gray-800 font-semibold text-center text-xs sm:text-sm">
                {partner.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
