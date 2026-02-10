"use client";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export function HeroSection() {
  return (
    <div className="relative min-h-screen pt-16 sm:pt-20 md:pt-25 flex items-center overflow-hidden bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793]">
      
      <div className="absolute inset-0 overflow-hidden flex items-start sm:items-center justify-center -mt-20 sm:mt-0">
        
        <motion.div 
          className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
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
            className="w-full h-full object-contain opacity-30 sm:opacity-40 md:opacity-50"
          />
        </motion.div>

      </div>

      <div className="relative z-10 md:ml-12 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 text-center lg:text-left -mt-8 lg:-mt-30"
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
                className="flex flex-col sm:flex-row gap-4 pt-10 justify-center lg:justify-start"
              >
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://apps.apple.com/us/app/cashmoov-client/id6642668233?l=fr-FR"
                  target="blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center sm:justify-start gap-3 backdrop-blur-sm border-2 border-[#F7CE47] rounded-xl px-3 py-3 transition-all duration-300"
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
                  href="https://play.google.com/store/apps/details?id=com.estel.cashmoovsubscriberapp"
                  target="blank"
                  rel="noopener noreferrer"
                  className=" group flex items-center justify-center sm:justify-start  gap-2 sm:gap-3   backdrop-blur-sm border-2 border-[#F7CE47] rounded-xl px-2 py-2 sm:px-3 sm:py-3 transition-all duration-300 "                
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
            style={{ perspective: "1000px" }}
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
              style={{ 
                rotateX: 5,
                rotateY: -10
              }}
              className="relative z-10 w-80 sm:w-96 md:w-[450px] lg:w-[500px]"              
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/App CashMoov.png"
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
