import { PARTNERS } from "@/constants";
import { motion } from "framer-motion";

export default function PartnerSlider() {
  const loopPartners = [...PARTNERS, ...PARTNERS];

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="m-3 text-center font-bold mb-10 text-3xl text-[#2A4793]"
      >
        Nos partenaires de confiance
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" text-center mb-20 text-gray-600 mt-2"
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
              className="min-w-[260px] h-[90px] rounded-xl flex flex-row items-center justify-center gap-3 p-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-gray-800 font-semibold text-center text-sm">
                {partner.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
