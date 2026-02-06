import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Send, Shield, Smartphone, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadApp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white mt-16">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#2A4793]" />
        
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#F7CE47" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#F7CE47" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Télécharger l'application<br />
                mobile de <span className="text-[#F7CE47]">Cash Moov</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0"
              >
                Gérez vos finances en toute simplicité. Transférez, payez et rechargez où que vous soyez.
              </motion.p>

             

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#F7CE47]">100K+</p>
                  <p className="text-xs sm:text-sm text-white/80">Téléchargements</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#F7CE47]">4.8★</p>
                  <p className="text-xs sm:text-sm text-white/80">Note moyenne</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[#F7CE47]">50+</p>
                  <p className="text-xs sm:text-sm text-white/80">Pays</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex justify-center items-center lg:justify-end"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 sm:w-72 md:w-80 lg:w-96"
              >
                <img 
                  src="/images/phone.png" 
                  alt="Cash Moov App"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="relative z-10 bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2A4793] mb-8 sm:mb-12"
          >
            Tout ce dont vous avez besoin dans une seule app
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A4793] rounded-xl flex items-center justify-center mb-4">
                <Send className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Transferts rapides</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Envoyez de l'argent en quelques secondes vers plus de 50 pays
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A4793] rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">100% sécurisé</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Vos données sont protégées par un cryptage de niveau bancaire
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A4793] rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Interface intuitive</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Une expérience utilisateur simple et agréable
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2A4793] rounded-xl flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Multi-services</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Transferts, paiements, recharges et bien plus encore
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-[#2A4793] py-12 sm:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Prêt à commencer ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8"
          >
            Téléchargez l'application maintenant et profitez de tous nos services
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-[#F7CE47] text-[#2A4793] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-300 transition"
            >
              <FaApple className="text-xl sm:text-2xl" />
              Télécharger sur iOS
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#2A4793] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition"
            >
              <FaGooglePlay className="text-lg sm:text-xl" />
              Télécharger sur Android
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
