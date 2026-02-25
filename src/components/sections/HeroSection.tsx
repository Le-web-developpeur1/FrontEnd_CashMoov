import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    "Transférer de l'argent dans plus de 63 pays",
    "Payer vos factures et vos articles en boutique ou en ligne",
    "Rechargez du crédit téléphonique",
    "Recevoir votre salaire à temps"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen pt-14 sm:pt-20 md:pt-20 flex items-center overflow-hidden bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793]">
      
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <motion.div 
          className="w-[50vw] h-[50vw] sm:w-[60vw] sm:h-[60vw] md:w-[70vw] md:h-[70vw] z-20"          
          animate={{
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
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-contain opacity-30 sm:opacity-40"
          />
        </motion.div>

        {/* <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-30 left-10 w-16 h-16 sm:w-20 sm:h-20 z-20"
        >
          <img 
            src="/images/PNG (1).png" 
            alt="Sticker" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.line 
            x1="15%" y1="25%" 
            x2="30%" y2="80%" 
            stroke="#F7CE47"
            opacity={0.2} 
            strokeWidth="1" 
            strokeDasharray="8,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          <motion.line 
            x1="50%" y1="65%" 
            x2="75%" y2="50%" 
            stroke="#F7CE47"
            opacity={0.2} 
            strokeWidth="1" 
            strokeDasharray="8,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </svg> */}
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transferez de l'argent et faites vos Paiements <span className="text-[#F7CE47]">en toute simplicité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0"
            >
              CashMoov est un portefeuille électronique qui vous permet de {" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#F7CE47] pt-3 font-semibold inline-block"
                >
                  {features[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0"
            >
              CashMoov est un portefeuille électronique qui vous permet de : Transférez de l'argent dans la quasi-totalité des pays du monde (plus de 63 pays), Payez vos factures et vos articles en boutique ou en ligne, Rechargez du crédit téléphonique et Recevoir votre salaire à temps.
            </motion.p> */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl pt-10 sm:pt-4 text-white/90 max-w-2xl mx-auto lg:mx-0"
            >
              Téléchargez et Partagez le sourire
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0 px-4 sm:px-0"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/us/app/cashmoov-client/id6642668233?l=fr-FR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 backdrop-blur-sm border-2 border-[#F7CE47] rounded-2xl px-6 py-3 transition-all duration-300 w-full sm:w-auto hover:bg-[#F7CE47]/10"
              >
                <FaApple className="text-3xl text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/80">Télécharger sur</p>
                  <p className="text-base font-bold text-white">App Store</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.estel.cashmoovsubscriberapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 backdrop-blur-sm border-2 border-[#F7CE47] rounded-2xl px-6 py-3 transition-all duration-300 w-full sm:w-auto hover:bg-[#F7CE47]/10"
              >
                <FaGooglePlay className="text-2xl text-white flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-white/80">Disponible sur</p>
                  <p className="text-base font-bold text-white">Google Play</p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center lg:justify-end"
            style={{ perspective: "62.5rem" }}
          >
            <motion.div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#F7CE47] rounded-full opacity-20 blur-3xl"
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
              className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-96"
              animate={{
                y: [0, -15, 0],
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
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
