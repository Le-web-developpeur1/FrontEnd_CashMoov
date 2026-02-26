import { SectionBanner } from '@/components/sections/SectionBanner';
import { SERVICES_PARTICULIERS } from '@/constants';
import { motion } from 'framer-motion';
import { UserPlus, Eye, Send, Bell } from 'lucide-react';

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
            description: "Inscription gratuite en moins de 5 minutes"
        },
        {
            icon: Send,
            title: "Faites vos transactions",
            description: "Transfert et paiement effectués en quelques clics de manière sécurisée"
        },
        {
            icon: Eye,
            title: "Transparence",
            description: "Vérifiez la page de confirmation avant de valider avec votre code PIN"
        },
        {
            icon: Bell,
            title: "Suivi ",
            description: "Recevez des notifications à chaque étape. Consultez l'historique de vos transactions à tout moment"
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
                        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 !== 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                            <div className="flex-1 w-full">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4 sm:mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.features?.map((feature, idx) => {
                                        if (typeof feature === 'object' && 'icon' in feature) {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <li key={idx} className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2A4793]/10 to-[#F7CE47]/10 flex items-center justify-center flex-shrink-0">
                                                        <FeatureIcon className="w-6 h-6 text-[#2A4793]" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="text-gray-700 text-base leading-relaxed">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                            
                            <div className="flex-1 w-full flex justify-center">
                                <div className="relative w-full max-w-xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto min-h-[25rem] sm:min-h-[31.25rem] object-cover rounded-xl"
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