import { motion } from "framer-motion";
import { Zap, Shield, Globe, Headphones } from "lucide-react";

export default function SectionChoix() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16 "
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Pourquoi choisir <span className="text-[#2A4793]">Cash Moov</span> ?
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Une solution complète pour tous vos besoins de transfert
            </p>
          </motion.div>
  
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2">Transferts instantanés</h3>
              <p className="text-black text-xs sm:text-sm">
                Envoyez de l'argent en quelques secondes, 24h/24 et 7j/7
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2">100% sécurisé</h3>
              <p className="text-black text-xs sm:text-sm">
                Vos transactions sont protégées par un cryptage de niveau bancaire
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2">Réseau mondial</h3>
              <p className="text-black text-xs sm:text-sm">
                Plus de 50 pays et 150 devises disponibles pour vos transferts
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center cursor-pointer"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2">Support dédié</h3>
              <p className="text-black text-xs sm:text-sm">
                Notre équipe est disponible pour vous aider à tout moment
              </p>
            </motion.div>
  
          </motion.div>
        </div>
      </section>
    );
}
