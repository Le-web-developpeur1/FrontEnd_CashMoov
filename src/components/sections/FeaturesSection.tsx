import { motion } from "framer-motion";

const features = [
  {
    img: "/images/MeR.png",
    title: "Recharger votre compte",
    description: "Alimentez votre compte via un canal physique ou digital"
  },
  {
    img: "/images/Transfert.png",
    title: "Transfert d'argent",
    description: "Envoyez et recevez de l'argent en local et à l'international"
  },
  {
    img: "/images/Credit.png",
    title: "Achat de crédit",
    description: "Rechargez du crédit téléphonique instantanément"
  },
  {
    img: "/images/PaiementM.png",
    title: "Paiement marchand",
    description: "Payez vos achats en boutique en un clic"
  },
  {
    img: "/images/Paiement.png",
    title: "Paiement de facture",
    description: "Réglez vos factures d'éléctricité, d'eau..."
  },
  {
    img: "/images/Retrait.png",
    title: "Produits digitaux",
    description: "Accèdez à une multitude de services : E-sim, Gift Card... "
  },
];

export default function FeaturesSection() {
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
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/images/Portefeuille.png"
                  alt="Cash Moov Features"
                  loading="lazy"
                  className="w-full h-auto object-cover scale-103"
                />
              </div>
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#2A4793]/20 to-[#F7CE47]/20 rounded-full blur-3xl -z-10"></div>
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
              Cash Moov, <span className="text-[#2A4793] sm:text-3xl">le sourire qui rapproche !</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-sm text-center sm:text-base mb-6 sm:mb-8"
            >
              Découvrez toutes les possibilités de votre portefeuille mobile
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-[#2A4793]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#2A4793]/10 to-[#F7CE47]/10 p-2.5">
                      <img 
                        src={feature.img} 
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-[0.625rem] sm:text-xs text-gray-600 leading-relaxed">
                        {feature.description}
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
