import { FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotreReseau() {
  return (
    <div className="min-h-screen bg-gray-50">
      
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-[#2A4793] via-[#2A4793] to-[#F7CE47] py-16 sm:py-12 lg:py-24 overflow-hidden mt-10"
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
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-white leading-tight">
                  Un réseau mondial pour vous accompagner partout
              </p>
            </motion.div>
        </motion.div>

        <div className="py-12 sm:py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:flex-row-reverse items-center gap-8"
                >
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12">
                        <div className="flex-1 w-full flex justify-center">
                            <div className="relative w-full max-w-xl">
                                <img
                                    src="/images/carteGuinee1.png"
                                    alt="Carte de la Guinée"
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex-1 w-full mt-15">

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4 sm:mb-6">
                                En Guinée
                            </h2>
                            <p className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-600 w-full max-w-5xl mx-auto">
                                Nous avons une présence effective dans toutes les préfectures et sous-préfectures de la Guinée. <br /> <br />
                                Ce réseau dense de plus de 5000 points de services répartis dans tout le pays et une maîtrise de l'écosystème financier local dans l'approvisionnement des points de vente nous permettent de répondre de manière efficace au besoin de l'ensemble de nos clients.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
            <div className="bg-gray-100">


                <div className="max-w-7xl mx-auto p-5 px-4 mt-15 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                        <div className="flex-1 flex">
                            <div className="w-full items-center justify-center">
                                <h2 className="text-3xl sm:text-5xl font-bold text-[#2A4793] sm:mt-10  mb-4 sm:mb-10">
                                    Le service financier le plus proche de vous !
                                </h2>
                                <p className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-600 w-full max-w-5xl mx-auto">
                                    Nos points de vente sont présents dans les zones les plus éloignées du pays.
                                    Où que vous soyez en Guinée, vous pouvez envoyer et recevoir de l’argent, mais aussi accéder à des services financiers innovants.
                                    Parce qu’être proches de vous, c’est plus qu’un message : c’est notre manière d’agir au quotidien.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-5xl mx-auto">
                            <div className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <img 
                                            src="/images/nzerekore.png" 
                                            alt="Image 1" 
                                            className="w-full h-auto sm:h-50 object-cover rounded-lg" 
                                        />
                                        {/* <div className="absolute bottom-0 left-23 w-25 bg-black/60 text-white text-center py-2 rounded-br-lg rounded-tl-lg">
                                            <p className="">N'zérékoré</p>
                                        </div> */}
                                    </div>
                                    <div className="relative">
                                        <img 
                                            src="/images/labe.png" 
                                            alt="Image 2" 
                                            className="w-full h-auto sm:h-50 object-cover rounded-lg" 
                                        />
                                        {/* <div className="absolute top-0 right-0 w-25 bg-black/60 text-white text-center py-2 rounded-bl-lg rounded-tr-lg">
                                            <p className="">Labé</p>
                                        </div> */}
                                    </div>
                                </div>
                            
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <img 
                                            src="/images/kankan.png" 
                                            alt="Image 3" 
                                            className="w-full h-auto sm:h-50 object-cover rounded-lg" 
                                        />
                                        {/* <div className="absolute top-0 left-0 w-25 bg-black/60 text-white text-center py-2 rounded-br-lg rounded-tl-lg">
                                            <p className="">Kankan</p>
                                        </div> */}
                                    </div>
                                    <div className="relative">
                                        <img 
                                            src="/images/kindia.png" 
                                            alt="Image 4" 
                                            className="w-full h-auto sm:h-50 object-cover rounded-lg" 
                                        />
                                        {/* <div className="absolute top-0 right-0 w-25 bg-black/60 text-white text-center py-2 rounded-bl-lg rounded-tr-lg">
                                            <p className="">Kindia</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto p-5 px-4 mt-10 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <img
                            src="/images/carteM4.png"
                            alt="Carte du monde"
                            className="w-full max-h-[32rem] rounded-xl "
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-3 w-full items-center justify-center"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4 sm:mb-2">
                            Couverture Internationale
                        </h2>
                        <p className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-600 w-full max-w-5xl mx-auto mb-4 sm:mb-3">
                            Accédez à plus de 36 destinations partout dans le monde et recevez vos transactions internationales sur votre compte CashMoov en toute quiétude.
                            De votre application , vous pouvez achetez de la marchandise en asie, payez un fournisseur en Europe ou les études de vos enfants au Canada.
                            Vous avez le choix d'envoyer vers:   
                        </p>
                        <ul className="space-y-2 text-lg sm:text-xl sm:ml-5 leading-relaxed text-gray-600 w-full max-w-5xl mx-auto mb-4 sm:mb-3">
                            <li>
                                Un Compte bancaire avec le transfert international instantané. 
                            </li>
                            <li>
                                Un Compte mobile (Orange Money, Wechat, Alipay …)          
                            </li>
                            <li>
                                Un Service de paiement en cash
                            </li>
                        </ul>
                        <p className="space-y-6 text-lg sm:text-xl leading-relaxed text-gray-600 w-full max-w-5xl mx-auto">
                            Toutes vos transactions sont sécurisées, nos processus respectent les standards internationaux et les exigences  en termes de conformité.
                        </p>
                    </motion.div>
                </div>
            </div>
            
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 py-2 sm:py-16"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Devenez partenaire CashMoov
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
