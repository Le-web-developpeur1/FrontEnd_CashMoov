import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date().getFullYear();

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
    <footer className="bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793] text-white pt-12 pb-6 px-6 md:px-12">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:m-8 mx-auto"
      >

        <motion.div variants={itemVariants}>
          <h3 className="text-[#F7CE47] font-bold text-xl mb-4">Cash Moov</h3>
          <p className="leading-relaxed opacity-90">
            Votre partenaire de confiance pour les transferts internationaux.
          </p>
          <p className="mt-2 opacity-90">
            Disponible gratuitement sur iOS et Android.
          </p>

          <div className="space-y-3 mt-6">
            <motion.a 
              whileHover={{ scale: 1.2, x: -10 }}
              transition={{ type: "keyframes", stiffness: 200 }}
              href="https://apps.apple.com/us/app/cashmoov-client/id6642668233?l=fr-FR"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center w-38 h-14 gap-3 backdrop-blur-sm border-2 border-[#F7CE47] rounded-lg px-3 transition"
            >
              <FaApple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-xs text-gray-300">Disponible sur</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.2, x: 10 }}
              transition={{ type: "keyframes", stiffness: 200 }}
              href="https://play.google.com/store/apps/details?id=com.estel.cashmoovsubscriberapp"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center w-38 h-14 gap-3 backdrop-blur-sm border-2 border-[#F7CE47] rounded-lg px-3 transition"
            >
              <FaGooglePlay className="h-6 w-6"/>
              <div className="text-left">
                <p className="text-xs text-gray-300">Disponible sur</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </motion.a>
          </div>

          <motion.div 
            className="flex gap-4 mt-6 text-xl"
            variants={itemVariants}
          >
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.facebook.com/Cashmoov01/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://x.com/CashMoov"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.instagram.com/cashmoov/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/company/cash-moov/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:ml-16">
          <h3 className="text-[#F7CE47] font-bold text-xl mb-4">Liens rapides</h3>
          <div className="flex flex-col space-y-3">
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <NavLink to="/" className="hover:text-[#F7CE47] transition">Accueil</NavLink>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <NavLink to="/nos-services" className="hover:text-[#F7CE47] transition">Nos services</NavLink>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <NavLink to="/notre-reseau" className="hover:text-[#F7CE47] transition">Notre Réseau</NavLink>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <NavLink to="/contact" className="hover:text-[#F7CE47] transition">Contact</NavLink>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="">
          <h3 className="text-[#F7CE47] font-bold text-xl mb-4">Services</h3>
          <div className="flex flex-col space-y-3">
            <motion.p whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              Transfert d'argent
            </motion.p>
            <motion.p whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              Rechargement mobile
            </motion.p>
            <motion.p whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              Paiement de factures
            </motion.p>
            <motion.p whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              Portefeuille électronique
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:-ml-16">
          <h3 className="text-[#F7CE47] font-bold text-xl mb-4">Contact</h3>
          <div className="space-y-3 opacity-90 leading-relaxed">
            <div>
              <p> <span className="font-semibold text-[#F7CE47]">Siège social : </span> Immeuble Sonit, Avenue de la république, Kaloum</p>
              <p></p>
            </div>
            <div>
              <p> <span className="font-semibold text-[#F7CE47]">BP : </span>3602</p>
            </div>
            <div>
              <p> <span className="font-semibold text-[#F7CE47]">Tél : </span> +224 621 640 000</p>
            </div>
            <div>
              <p> <span className="font-semibold text-[#F7CE47]">Email : </span> 
                <motion.a 
                  whileHover={{ color: "#F7CE47" }}
                  href="mailto:contact@cahmoov.net" 
                  className="hover:text-[#F7CE47] transition"
                >
                 contact@cahmoov.net
                </motion.a>
              </p>
              
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="border-b border-[#b39943] my-8"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-full mx-auto grid grid-cols-1 md:ml-20 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#F7CE47] text-sm"
      >
        <p>&copy; {date} Cash Moov | Tous droits réservés.</p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#" 
          className="hover:text-white transition"
        >
          Politique de confidentialité
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#" 
          className="hover:text-white transition"
        >
          Conditions d'utilisation
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          href="#" 
          className="hover:text-white transition"
        >
          Mentions légales
        </motion.a>
      </motion.div>

    </footer>
  );
};

export default Footer;
