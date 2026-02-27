import { motion } from "framer-motion";

export default function LeaderSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A4793] leading-tight"
            >
              Le leader du transfert d'argent en Guinée !
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 text-gray-700 text-sm sm:text-base"
            >
              <p>
                <span className="font-bold text-gray-900">CashMoov Main à Main S.A.</span> est une entreprise guinéenne de transfert d'argent qui exerce depuis 2014. Elle a réussi le pari de déployer une plateforme de transfert qui tienne compte des besoins et des réalités des populations guinéennes et africaines.
              </p>

              <p>
                Se voulant plus proche de ses clients, elle a développé des solutions simples, rapides, sécurisées et surtout économiques.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-3 border-3 border-[#2A4793] rounded-2xl"></div>
              
              {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2A4793] rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#F7CE47] rounded-full"></div> */}

              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/LeadTrans.png"
                  alt="CashMoov Leader"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
