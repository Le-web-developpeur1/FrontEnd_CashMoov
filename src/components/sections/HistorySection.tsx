import { motion } from "framer-motion";

const historyData = [
  {
    year: "2014",
    title: "Fondation",
    description: "L'entreprise est fondée avec l'ambition de révolutionner le secteur du transfert d'argent en Guinée, en Afrique et dans le monde."
  },
  {
    year: "2016",
    title: "Couverture complète du pays",
    description: "Fort d'un leadership et d'une parfaite maîtrise du transfert d'argent, nous avons réussi en quelques années à couvrir toute l'étendue du territoire guinéen."
  },
  {
    year: "2017",
    title: "Première agence en Afrique",
    description: "Afin d'explorer de nouveaux marchés, l'entreprise démarre son expansion continentale en ouvrant sa première agence africaine au Mali (Bamako)."
  },
  {
    year: "2018",
    title: "Présence hors Afrique",
    description: "L'entreprise obtient sa première représentation hors Afrique en Angleterre en 2018."
  },
  {
    year: "2021",
    title: "Refonte image de marque",
    description: "Pour porter notre nouvel élan vers le digital, nous avons décidé d'opter pour une nouvelle charte graphique et la mise en place de supports web."
  }
];

export default function HistorySection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-3 border-3 border-[#2A4793] rounded-2xl"></div>
              
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2A4793] rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#F7CE47] rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-10 h-10 bg-[#F7CE47] rounded-full"></div>

              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/History.png"
                  alt="Notre Histoire"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {historyData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-3"
              >
                <div className="flex flex-col items-center">
                  <div className="text-[#2A4793] font-bold text-lg sm:text-xl whitespace-nowrap">
                    {item.year}
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#F7CE47] rounded-full mt-1.5"></div>
                  {index < historyData.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-1.5"></div>
                  )}
                </div>

                <div className="flex-1 pb-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
