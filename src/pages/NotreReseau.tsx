import { FaGlobe, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import MapAgences from "@/components/cards/MapAgences";
// FaMapMarkerAlt, FaMoneyBillWave,
export default function NotreReseau() {
  // const stats = [
  //   { icon: FaGlobe, number: "63+", label: "Pays couverts" },
  //   { icon: FaMapMarkerAlt, number: "500+", label: "Points de service" },
  //   { icon: FaMoneyBillWave, number: "150+", label: "Devises disponibles" },
  //   { icon: FaUsers, number: "100K+", label: "Utilisateurs actifs" },
  // ];

  const regions = [
    {
      name: "Afrique de l'Ouest",
      countries: ["Bénin", "Burkina Faso", "Côte d'Ivoire", "Gambie", "Ghana", "Guinée-Bissau", "Liberia", "Mali", "Niger", "Nigeria", "Sénégal", "Sierra Leone", "Togo"],
    },
    {
      name: "Afrique Centrale",
      countries: ["Cameroun", "Congo", "Congo RDC", "Gabon", "Guinée Équatoriale"],
    },
    {
      name: "Afrique du Nord, Est & Australe",
      countries: ["Afrique du Sud", "Algérie", "Égypte", "Kenya", "Maroc", "Mauritanie", "Mozambique", "Soudan", "Tunisie"],
    },
    {
      name: "Europe",
      countries: ["Allemagne", "Angleterre", "Autriche", "Belgique", "Chypre", "Danemark", "Espagne", "France", "Grèce", "Irlande", "Italie", "Luxembourg", "Norvège", "Pays-Bas", "Pologne", "Portugal", "Royaume-Uni", "Suisse", "Ukraine"],
    },
    {
      name: "Amérique",
      countries: ["Argentine", "Brésil", "Canada", "États-Unis"],
    },
    {
      name: "Asie & Moyen-Orient",
      countries: ["Arabie Saoudite", "Australie", "Chine", "Émirats arabes unis", "Hong Kong", "Inde", "Indonésie", "Japon", "Malaisie", "Thaïlande", "Turquie"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="min-h-screen bg-gray-50">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#2A4793] via-[#2A4793] to-[#F7CE47] py-16 sm:py-20 lg:py-24 overflow-hidden mt-10"
      >
        
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 left-10 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center"
          >
            <FaUsers className="text-white text-2xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-20 right-20 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center"
          >
            <FaUsers className="text-white text-xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full border-4 border-white flex items-center justify-center"
          >
            <FaUsers className="text-white text-xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center"
          >
            <FaUsers className="text-white text-3xl" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center"
          >
            <FaUsers className="text-white text-2xl" />
          </motion.div>
          
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="20%" x2="30%" y2="60%" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="30%" y1="60%" x2="60%" y2="40%" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="60%" y1="40%" x2="80%" y2="30%" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="80%" y1="30%" x2="85%" y2="70%" stroke="white" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 max-w-3xl mx-auto">
            Un réseau mondial pour vous accompagner partout où vous en avez besoin
          </p>
        </motion.div>
      </motion.div>

      {/* <div className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center border border-gray-200 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 ">
                  <stat.icon className="text-white text-xl sm:text-2xl" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#2A4793] to-[#1f356d] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Couverture géographique
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Présents dans plus de 60 pays à travers le monde
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:auto-rows-fr"
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-200 hover:border-[#2A4793]/50 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{region.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {region.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gradient-to-br hover:from-[#2A4793] hover:to-[#1f356d] hover:text-white hover:border-[#2A4793] transition-all duration-300 cursor-pointer"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <MapAgences/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 py-12 sm:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Devenez partenaire Cash Moov
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Rejoignez notre réseau et offrez nos services à vos clients
          </p>
          
          <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#2A4793] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#1f356d] transition hover:scale-105 transform duration-300"
            >
               Devenir partenaire
            </a>
            
        </div>
      </motion.div>
    </div>
  );
}
