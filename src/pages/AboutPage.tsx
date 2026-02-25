import { motion } from 'framer-motion';
import { Target, Eye, Award, Globe, Users, TrendingUp, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
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

    const stats = [
        { icon: Award, value: "12+", label: "Années d'expérience" },
        { icon: Globe, value: "63+", label: "Pays couverts" },
        { icon: Users, value: "1000+", label: "Points de service" },
        { icon: TrendingUp, value: "100%", label: "Sécurisé" }
    ];

    const values = [
        {
            icon: Shield,
            title: "Fiabilité",
            description: "Un réseau de distribution fiable et maîtrisé partout en Guinée"
        },
        {
            icon: Zap,
            title: "Rapidité",
            description: "Des transactions instantanées pour répondre à vos besoins urgents"
        },
        {
            icon: Users,
            title: "Proximité",
            description: "Une présence locale forte pour être au plus près de nos clients"
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description: "Des solutions digitales adaptées aux réalités africaines"
        }
    ];

    return (
        <section className="mt-10 pb-12">
            <div className="relative bg-gradient-to-br from-[#2A4793] via-[#1f356d] to-[#2A4793] py-20 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                    <motion.div 
                        className="w-[37.5rem] h-[37.5rem] sm:w-[50rem] sm:h-[50rem]"
                        animate={{
                            scale: [0.7, 0.3, 0.7],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img
                            src="/images/PNG (1).png"
                            alt="Background"
                            loading="lazy"
                            className="w-full h-full object-contain opacity-20"
                        />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            À propos de <span className="text-[#F7CE47]">Cashmoov</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                            Une solution de transfert d'argent et de paiement mobile pensée pour l'Afrique
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="bg-white py-12 sm:py-16 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-[#F7CE47]" />
                                </div>
                                <h3 className="text-3xl font-bold text-[#2A4793] mb-2">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                             Leader du transfert d'argent en Guinée !
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg max-w-5xl mx-auto">
                            <p>
                                Cashmoov est une solution de Transfert d'argent et de paiement mobile. Elle a réussi le pari de déployer une plateforme de mobile money qui tienne compte des besoins et des réalités des populations guinéennes et africaines. Forte de son ancrage local, l'entreprise se distingue par sa proximité avec les populations, la fiabilité de son réseau de distribution et sa capacité à traiter des transactions à volumes importants.
                            </p>
                            <p>
                                Grâce à une existence de plus de 12 ans sur le marché africain, elle a développé une expertise unique qui lui permet de satisfaire aux besoins de sa clientèle de manière efficace. Cashmoov propose des services simples, rapides, sécurisés et surtout économiques.
                            </p>
                            <p>
                                Elle a ciblé dès ses premières heures la population active dans le but de faciliter le mouvement des capitaux et ainsi favoriser l'essor de plusieurs activités économiques. Étant très sollicité pour les paiements de fournisseurs, de marchandises, l'entreprise a su s'adapter aux exigences de ce marché pour se positionner comme un acteur majeur dans le pays.
                            </p>
                            <p>
                                Un réseau large mais maîtrisé, constitué d'une multitude de points de service partout en Guinée pour être au plus près de ses clients et une flexibilité permettant de s'adapter à l'évolution du marché, font la particularité de cette institution financière.
                            </p>
                            <p>
                                Les applications mobiles Cashmoov permettent aujourd'hui de transférer de l'argent dans la quasi-totalité des pays du monde, d'effectuer des paiements de factures, d'acheter à des marchands, de recharger du crédit téléphonique, d'acheter une carte cadeau (Gift card), de se procurer la data via e-SIM et même de recevoir son salaire.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Notre Mission et Vision
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Une stratégie centrée sur les besoins réels de nos clients
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-3xl p-8 text-white"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#F7CE47] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-[#2A4793]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Notre Mission</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        Faciliter l'inclusion financière et digitaliser les flux monétaires en Guinée et sur le continent africain.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#F7CE47] to-[#e6bd3a] rounded-3xl p-8"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#2A4793] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-6 h-6 text-[#F7CE47]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-[#2A4793]">Notre Vision</h3>
                                    <p className="text-gray-800 leading-relaxed">
                                        Être un acteur clé de la transformation numérique des services financiers en Afrique, capable de connecter les populations et les entreprises à l'ère du digital.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nos Valeurs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ce qui fait notre différence
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 border border-gray-200 items-center justify-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl flex items-center justify-center mb-4">
                                    <value.icon className="w-8 h-8 text-[#F7CE47]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
