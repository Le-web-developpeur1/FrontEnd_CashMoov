import { motion } from "framer-motion";
import { Smartphone, CreditCard, Send, Banknote, Users, Building2, Wallet, ArrowRight } from "lucide-react";

export default function ServicesSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            <span className="text-[#2A4793]">Des services adaptés à </span>
            <span className="text-[#2A4793] font-extrabold">chaque besoin</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Que vous soyez particulier ou entreprise, Cash Moov vous accompagne avec des solutions sur mesure grâce à notre portefeuille intégré 
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 max-w-5xl mx-auto"
        >
          <a 
              href="/services-particuliers"
            >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-[#2A4793]/50 hover:shadow-lg transition-all duration-300 group"
            >
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  Compte Mobile
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A4793] group-hover:translate-x-1 transition-transform duration-300" />
                </h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2A4793]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2A4793]" />
                  </div>
                  <span className="text-xs sm:text-sm">Dépôt et retrait d'argent instantané</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2A4793]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2A4793]" />
                  </div>
                  <span className="text-xs sm:text-sm">Transfert d'argent rapide et sécurisé</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2A4793]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2A4793]" />
                  </div>
                  <span className="text-xs sm:text-sm">Paiements mobiles pour tous vos achats</span>
                </li>
              </ul>
            </motion.div>
          </a>
          
          <a
            href="/services-entreprises" 
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-[#F7CE47]/50 hover:shadow-2xl transition-all duration-300 group"
            >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F7CE47] to-[#e6b935] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                    Offres Entreprises
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#2A4793] group-hover:translate-x-1 transition-transform duration-300" />
                  </h3>
                </div>

               
                <ul className="space-y-2.5 sm:space-y-3 sm:mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F7CE47]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Banknote className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F7CE47]" />
                    </div>
                    <span className="text-xs sm:text-sm">Paiement de salaires et paiements à tiers</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F7CE47]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F7CE47]" />
                    </div>
                    <span className="text-xs sm:text-sm">Caisse déplacée pour vos opérations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F7CE47]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F7CE47]" />
                    </div>
                    <span className="text-xs sm:text-sm">Cash collection et gestion de trésorerie</span>
                  </li>
                </ul>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
