import { SectionBanner } from '@/components/sections/SectionBanner';
import { SectionBanner2 } from '@/components/sections/SectionBanner2';
import { ServiceCard } from '@/components/cards/ServiceCard';
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
    
    return (
        <section className="mt-15">
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
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                {SERVICES_ENTREPRISES.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            icon={service.icon}
                            iconColor={service.iconColor}
                        />
                    </motion.div>
                ))}
            </motion.div>

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
