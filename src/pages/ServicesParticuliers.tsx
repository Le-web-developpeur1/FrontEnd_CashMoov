import { SectionBanner } from '@/components/sections/SectionBanner';
import { SERVICES_PARTICULIERS } from '@/constants';
import { motion } from 'framer-motion';
import { UserPlus, Users, Send, Bell, Check } from 'lucide-react';

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
            icon: Users,
            title: "Ajoutez vos bénéficiaires",
            description: "Enregistrez les coordonnées de vos proches"
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
        }
    ];

    return (
        <section className="mt-13">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <SectionBanner
                    badge='Services pour Particuliers'
                    title='Des solutions simples pour vos besoins quotidiens'
                    description="Transférez de l'argent, rechargez vos proches, payez vos factures et bien plus encore, le tout depuis une seule application."
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
                        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4 sm:mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#2A4793] flex items-center justify-center flex-shrink-0 mt-1">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="flex-1 w-full flex justify-center">
                                <div className="relative w-full max-w-[15.625rem] lg:max-w-[18.75rem]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
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
