import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2A4793] to-[#1f356d] px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-[#F7CE47] mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Page non trouvée
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/80 text-lg mb-8 max-w-md mx-auto"
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="bg-[#F7CE47] text-[#2A4793] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition hover:scale-105 transform duration-300"
          >
            Retour à l'accueil
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition hover:scale-105 transform duration-300"
          >
            Page précédente
          </button>
        </motion.div>
      </div>
    </div>
  );
}
