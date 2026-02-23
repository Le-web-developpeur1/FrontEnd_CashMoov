import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const historyData = [
  {
    year: "2014",
    title: "Fondation",
    description: "L'entreprise est fondée avec l'ambition de révolutionner le secteur du transfert d'argent en Guinée, en Afrique et dans le monde.",
    image: "/images/Depart.jfif"
  },
  {
    year: "2016",
    title: "Couverture complète du pays",
    description: "Fort d'un leadership et d'une parfaite maîtrise du transfert d'argent, nous avons réussi en quelques années à couvrir toute l'étendue du territoire guinéen.",
    image: "/images/point.jfif"
  },
  {
    year: "2017",
    title: "Première agence en Afrique",
    description: "Afin d'explorer de nouveaux marchés, l'entreprise démarre son expansion continentale en ouvrant sa première agence africaine au Mali (Bamako).",
    image: "/images/paiement.jfif"
  },
  {
    year: "2018",
    title: "Présence hors Afrique",
    description: "L'entreprise obtient sa première représentation hors Afrique en Angleterre en 2018.",
    image: "/images/Sourire.jfif"
  },
  {
    year: "2021",
    title: "Refonte image de marque",
    description: "Pour porter notre nouvel élan vers le digital, nous avons décidé d'opter pour une nouvelle charte graphique et la mise en place de supports web.",
    image: "/images/vivre.jfif"
  }
];

export default function HistorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % historyData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = historyData[currentIndex];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] text-center mb-12 lg:mb-16"
        >
          Notre Histoire
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
             
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={currentItem.image}
                    alt={`Notre Histoire ${currentItem.year}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-auto object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative min-h-[25rem] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-block bg-gradient-to-r from-[#2A4793] to-[#1f356d] text-white px-8 py-3 rounded-full mb-6 shadow-lg"
                >
                  <span className="text-3xl sm:text-4xl font-bold">{currentItem.year}</span>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {currentItem.description}
                </p>

                <div className="flex gap-2">
                  {historyData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="relative h-1 flex-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#2A4793]"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: index === currentIndex ? 1 : index < currentIndex ? 1 : 0 
                        }}
                        transition={{ duration: index === currentIndex ? 4 : 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
