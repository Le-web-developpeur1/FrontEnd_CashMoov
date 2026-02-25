import { motion } from "framer-motion";
import { Wallet, Users, Building2, HandCoins } from "lucide-react";

const enterpriseOffers = [
  {
    icon: Wallet,
    title: "Paiement de salaires",
    description: "Payez les salaires de vos employés rapidement et en toute sécurité"
  },
  {
    icon: Users,
    title: "Paiements à tiers",
    description: "Réglez vos fournisseurs et partenaires en quelques clics"
  },
  {
    icon: Building2,
    title: "Caisse déplacée",
    description: "Effectuez vos opérations bancaires directement dans vos locaux"
  },
  {
    icon: HandCoins,
    title: "Cash collection",
    description: "Collectez les paiements de vos clients en toute simplicité"
  },
  // {
  //   icon: TrendingUp,
  //   title: "Gestion de trésorerie",
  //   description: "Optimisez la gestion de vos flux financiers"
  // },
  // { TrendingUp, Layers,
  //   icon: Layers,
  //   title: "Paiements en masse",
  //   description: "Effectuez plusieurs paiements simultanément"
  // }
];

export default function EnterpriseOffersSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/salair.png"
                  alt="Cash Moov Entreprises"
                  loading="lazy"
                  className="w-full h-auto object-cover scale-103"
                />
              </div>
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#F7CE47]/20 to-[#2A4793]/20 rounded-full blur-3xl -z-10"></div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            >
              Des solutions <span className="text-[#F7CE47]">sur mesure</span> pour votre entreprise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8"
            >
              Optimisez la gestion financière de votre entreprise avec nos services dédiés
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {enterpriseOffers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-[#F7CE47]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#F7CE47] to-[#e6bd3a]">
                      <offer.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#2A4793]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 leading-tight">
                        {offer.title}
                      </h3>
                      <p className="text-[0.625rem] sm:text-xs text-gray-600 leading-relaxed">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
