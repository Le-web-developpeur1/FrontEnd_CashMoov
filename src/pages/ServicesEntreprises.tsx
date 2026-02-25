import { SectionBanner } from '@/components/sections/SectionBanner';
import { SectionBanner2 } from '@/components/sections/SectionBanner2';
import { useNavigate } from 'react-router-dom';
import { SERVICES_ENTREPRISES } from '@/constants';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Shield, Headphones } from 'lucide-react';

export default function ServicesEntreprises() {
    const navigate = useNavigate();

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

    const advantages = [
        {
            icon: Zap,
            title: "Rapidité d'exécution",
            description: "Paiements traités en temps réel avec notification instantanée à vos bénéficiaires"
        },
        {
            icon: DollarSign,
            title: "Tarifs compétitifs",
            description: "Économisez jusqu'à 80% sur vos frais de transfert internationaux"
        },
        {
            icon: Shield,
            title: "Conformité assurée",
            description: "Respect des réglementations locales et internationales (KYC, AML)"
        },
        {
            icon: Headphones,
            title: "Support dédié",
            description: "Account manager personnel et support technique 24/7"
        }
    ];

    // Images pour les services entreprises
    const serviceImages = [
        "/images/Salaires.jfif",
        "/images/point.jfif",
        "/images/Depart.jfif"
    ];
    
    return (
        <section className="mt-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <SectionBanner
                    badge='Solutions pour Entreprises'
                    title='Des solutions professionnelles pour votre croissance internationale'
                    description="Gérez vos paiements internationaux, votre trésorerie et vos transactions en toute simplicité avec nos outils dédiés aux entreprises."
                />
            </motion.div>
            
            <div className="w-full">
                {SERVICES_ENTREPRISES.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`${index === 1 ? 'bg-gray-50' : 'bg-white'} w-full py-16 lg:py-24`}
                    >
                        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                            <div className="flex-1 w-full flex flex-col justify-center">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4793] mb-4 sm:mb-6 text-center">
                                    {service.title}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 text-center mb-6 sm:mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-4 max-w-2xl mx-auto">
                                    {service.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#F7CE47] flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-4 h-4 text-[#2A4793]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="flex-1 w-full flex justify-center">
                                <div className="relative w-full max-w-[25rem] lg:max-w-[31.25rem]">
                                    <img
                                        src={serviceImages[index]}
                                        alt={service.title}
                                        className="w-full h-auto object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-gray-50 py-12 sm:py-16 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi les entreprises nous choisissent
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600">
                            Des avantages pensés pour les professionnels
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-[#F7CE47]/50 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F7CE47] to-[#e6b935] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <advantage.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                                    {advantage.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SectionBanner2
                    title='Prêt à faire évoluer votre entreprise ?'
                    description='Rejoignez plus de 5000 entreprises qui nous font confiance pour leurs paiements internationaux'
                    buttonLabel='Contactez-nous'
                    onButtonClick={() => navigate("/contact")}
                />
            </motion.div>
        </section>
    );
}
