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
      <section className="py-20 bg-[#2A4793] mb-8">
        <div className="max-w-7xl mx-auto px-6">
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Pourquoi choisir <span className="text-[#F7CE47]">Cash Moov</span> ?
            </h2>
            <p className="text-White mt-3 max-w-2xl mx-auto">
              Une solution complète pour tous vos besoins de transfert
            </p>
          </motion.div>
  
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-6 rounded-2xl shadown-xl text-center cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transferts instantanés</h3>
              <p className="text-black text-sm">
                Envoyez de l'argent en quelques secondes, 24h/24 et 7j/7
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-6 rounded-2xl shadown-xl text-center cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% sécurisé</h3>
              <p className="text-black text-sm">
                Vos transactions sont protégées par un cryptage de niveau bancaire
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-6 rounded-2xl shadown-xl text-center cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réseau mondial</h3>
              <p className="text-black text-sm">
                Plus de 50 pays et 150 devises disponibles pour vos transferts
              </p>
            </motion.div>
  
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#D9DEEB] p-6 rounded-2xl shadown-xl text-center cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#F7CE47] rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-[#2A4793]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support dédié</h3>
              <p className="text-black text-sm">
                Notre équipe est disponible pour vous aider à tout moment
              </p>
            </motion.div>
  
          </motion.div>
        </div>
      </section>
    );
}
