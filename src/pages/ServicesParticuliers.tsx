import { SectionBanner } from '@/components/sections/SectionBanner';
import { SERVICES_PARTICULIERS } from '@/constants';
import { motion } from 'framer-motion';
import { UserPlus, History, Send, Bell } from 'lucide-react';

export default function ServicesParticuliers() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const steps = [
        {
            icon: UserPlus,
            title: "Créez votre compte",
            description: "Inscription gratuite en moins de 2 minutes"
        },
        {
            icon: Send,
            title: "Envoyez de l'argent",
            description: "Transférez en quelques clics de manière sécurisée"
        },
        {
            icon: Bell,
            title: "Suivez votre transfert",
            description: "Recevez des notifications à chaque étape"
        },
        {
            icon: History,
            title: "Consultez votre historique",
            description: "Enregistrez les coordonnées de vos proches"
        },
    ];

    return (
        <section className="mt-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <SectionBanner
                    title='Des solutions simples pour vos besoins au quotidien'
                />
            </motion.div>
            
            <div className="w-full">
                {SERVICES_PARTICULIERS.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`${index === 1 ? 'bg-gray-50' : 'bg-white'} w-full py-16 lg:py-24`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                                    {service.description}
                                </p>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className={`grid gap-8 justify-items-center ${
                                    service.features?.length === 2 
                                        ? 'grid-cols-1 md:grid-cols-2 md:gap-18 max-w-4xl mx-auto' 
                                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                }`}
                            >
                                {service.features?.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                                    >
                                        <div className="h-48 bg-gradient-to-br from-[#2A4793] to-[#1f356d] flex items-center justify-center">
                                            <img
                                                src={service.image}
                                                alt={feature}
                                                className="w-32 h-32 object-contain"
                                            />
                                        </div>
                                        {/* <div className="w-6 h-6 rounded-full text-[#2A4793] flex items-center justify-center flex-shrink-0 mt-1">
                                                <Check className="w-4 h-4 " />
                                        </div> */}
                                        <div className="p-6">
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comment ça marche ?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Commencez en 4 étapes simples
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 "
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#F7CE47]" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}