"use client";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export function HeroSection() {
  return (
    <div className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793]">
      
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center ml-72 mb-20">
        
        <motion.div 
          className="w-[1200px] h-[1200px]"
          animate={{
            y: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/PNG (1).png"
            alt="Background"
            className="w-full h-full object-contain opacity-50"
          />
        </motion.div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Envoyez de l'argent{" "}
              <span className="text-[#F7CE47]">en toute simplicité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0"
            >
              Transférez de l'argent rapidement et en toute sécurité avec Cash Moov.
              Des frais transparents, des transferts instantanés vers plus de 50 pays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4  justify-center lg:justify-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              >
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="group flex items-center justify-center sm:justify-start gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-[#F7CE47] rounded-xl px-3 py-3 transition-all duration-300"
                >
                  <FaApple className="text-3xl text-white flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-white/80">Télécharger sur</p>
                    <p className="text-base font-bold text-white">App Store</p>
                  </div>
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className=" group flex items-center justify-center sm:justify-start  gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-[#F7CE47] rounded-xl px-2 py-2 sm:px-3 sm:py-3 transition-all duration-300 "                
                >
                  <FaGooglePlay className="text-2xl text-white flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-white/80">Disponible sur</p>
                    <p className="text-base font-bold text-white">Google Play</p>
                  </div>
                </motion.a>
              </motion.div>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              className="absolute w-96 h-96 bg-[#F7CE47] rounded-full opacity-30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="relative z-10 w-72 sm:w-80 md:w-96"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
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
  );
}
