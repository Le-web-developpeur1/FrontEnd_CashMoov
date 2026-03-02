import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-r from-[#2A4793] to-[#1f356d] py-16 sm:py-20 lg:py-24 mt-10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Conditions Générales d'Utilisation
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90">
                            Cashmoov - Monnaie électronique
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl p-6 sm:p-8 shadow-lg space-y-8"
                >
                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">1. Objet</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les présentes Conditions générales ont pour objet de définir les modalités et conditions d'utilisation du Service Cashmoov, notamment en portant à la connaissance des Utilisateurs les conditions de souscription, la tarification des différentes opérations, la notification des opérations. Cashmoov est un service fourni par Cashmoov Guinée, EME agréée par la BCRG sous le N°………………. La signature du Formulaire de Souscription par l'Utilisateur constitue un contrat entre l'Utilisateur et Cashmoov dont les Conditions spécifiques font partie intégrante et dont l'Utilisateur reconnaît accepter pleinement les termes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">2. Définitions</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Les définitions suivantes s'appliquent aux présentes Conditions Cashmoov :
                        </p>
                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p><strong>"Accepteur"</strong> désigne tout commerçant ou société répondant au cahier des charges de l'Accepteur, ayant conclu un contrat d'acceptation avec le Distributeur l'autorisant à recevoir des UV en échange de la fourniture de biens et services divers et titulaire d'un Compte Cashmoov actif ;</p>
                            <p><strong>"Contrat Cashmoov"</strong> signifie le contrat conclu entre Cashmoov et l'Utilisateur relatif à l'ouverture du Compte de Monnaie Electronique et l'utilisation du Service, composé des Conditions spécifiques Cashmoov et du Formulaire de Souscription ;</p>
                            <p><strong>"Client Final" ou "Utilisateur"</strong> désigne tout utilisateur final du service Cashmoov titulaire d'un compte Cashmoov actif et qui sera considéré comme le propriétaire légitime des UV qui figurent sur ledit compte ;</p>
                            <p><strong>"Compte Cashmoov"</strong> pour tout Utilisateur, le compte de monnaie électronique opéré par l'EME et rattaché à un numéro de téléphone mobile, ouvert au nom de l'Utilisateur dans les livres du Distributeur, sur lequel sont inscrits les UV dont il dispose et à partir ou à destination duquel s'effectuent les transferts d'UV de cet Utilisateur ;</p>
                            <p><strong>"Monnaie Electronique" ou "UV"</strong> signifie une valeur monétaire représentant une créance sur l'EME qui est stockée sous une forme électronique, y compris magnétique, émise sans délai contre la remise de fonds d'un montant qui n'est pas inférieur à la valeur monétaire émise, et acceptée comme moyen de paiement par des personnes physiques ou morales autres que l'EME</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">3. Demande d'ouverture de compte Cashmoov</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>3.1</strong> Tout titulaire d'un numéro de téléphone ou d'une connexion internet ou toute personne physique désignée comme utilisateur final d'un numéro de téléphone par le titulaire dudit accès peut faire une demande d'ouverture de Compte Cashmoov et d'utilisation du Service.</p>
                            <p><strong>3.2</strong> L'Utilisateur peut demander l'ouverture d'un Compte Cashmoov auprès de toute agence de Cashmoov Guinée qui agit à cette fin en tant que mandataire de l'EME ou auprès de tout distributeur et Sous-Distributeur en République de Guinée.</p>
                            <p><strong>3.3</strong> Lors de l'ouverture d'un Compte Cashmoov, l'Utilisateur devra fournir, préalablement à la signature du Formulaire de Souscription, les éléments suivants :</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Une Pièce d'Identité ou un extrait du Registre du commerce pour les entreprises ou tout autre justificatif sollicité par Cashmoov ;</li>
                                <li>Le Numéro de téléphone mobile ;</li>
                                <li>Dans le cadre d'un Utilisateur mineur non émancipé, une pièce d'identité ou tout document officiel en cours de validité devra être fourni par le parent ou le tuteur, accompagné de l'autorisation dûment établie ;</li>
                            </ul>
                            <p><strong>3.5</strong> Cashmoov peut refuser discrétionnairement toute demande d'ouverture de Compte Cashmoov, notamment dans l'hypothèse où la pièce d'identité n'est pas considérée comme satisfaisante ou si les informations fournies ne sont pas complètes et précises à tous égards.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">4. Le compte Cashmoov</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>4.1</strong> Le Compte Cashmoov est seulement et uniquement destiné à accueillir et stocker des UV. Il ne peut accueillir aucun autre titre, valeur mobilière ou instrument financier et aucune somme d'argent dans quelque devise que ce soit.</p>
                            <p><strong>4.2</strong> Le Compte Cashmoov est un compte individuel et seul une personne disposant d'identifiants peut être titulaire dudit Compte.</p>
                            <p><strong>4.3</strong> L'ouverture, le fonctionnement ou le maintien du Compte Cashmoov s'effectuent conformément et sous réserve de la législation monétaire, fiscale ou relative aux relations financières avec l'étranger, aux embargos, à la lutte contre la corruption, le blanchiment d'argent ou le financement du terrorisme, en vigueur en République de Guinée.</p>
                            <p><strong>4.4</strong> L'Utilisateur ne pourra pas effectuer de Débit de son Compte Cashmoov s'il ne dispose pas préalablement d'un Solde suffisant en UV pour effectuer une telle Transaction et payer les Frais correspondants. Le Compte Cashmoov ne pourra à aucun moment présenter un Solde négatif ou débiteur.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">5. Les UV</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>5.1</strong> L'EME est un établissement de Monnaie Electronique habilité à émettre des moyens de paiement sous forme d'émission d'UV électroniques en contrepartie des fonds reçus.</p>
                            <p><strong>5.2</strong> Chaque UV a une valeur nominale de un (1) GNF.</p>
                            <p><strong>5.3</strong> Cashmoov agissant au nom et pour le compte de l'EME est responsable du remboursement des UV à leur échéance.</p>
                            <p><strong>5.6</strong> L'émission des UV se fait au pair. Aucun intérêt ne sera dû ou versé par l'EME au cours de la durée de validité des UV.</p>
                            <p><strong>5.11</strong> Les UV sont librement négociables au sein du Système au moyen de l'envoi d'un Ordre de Transfert autorisé, adressé à Need par le titulaire du Compte Cashmoov dans lequel elles sont conservées.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">6. Utilisation du service</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>6.1</strong> L'utilisation du Service par l'Utilisateur est indissociable du Compte Cashmoov dont il est le titulaire et ne peut intervenir qu'au travers de celui-ci.</p>
                            <p><strong>6.3</strong> Cashmoov s'engage à mettre en œuvre tous les moyens nécessaires afin que l'Utilisateur puisse avoir accès au Service dans des conditions de confidentialité et de couverture.</p>
                            <p><strong>6.5</strong> En cas de dommage, de perte ou de vol de sa Carte SIM, l'Utilisateur est tenu d'en informer Cashmoov. L'Utilisateur restera responsable de tous les Frais et Transactions effectuées jusqu'à la réception par Cashmoov de la notification de la survenance des dégâts, perte ou vol.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">7. Les transactions</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>7.1</strong> Tout Débit sur le Compte Cashmoov de l'Utilisateur sera effectué par Ordre de Transfert. L'Utilisateur autorise Cashmoov à agir sur la foi des Ordres de Transfert reçus sans exiger une quelconque confirmation complémentaire de la part de l'Utilisateur.</p>
                            <p><strong>7.2</strong> Après l'ouverture du Compte Cashmoov, l'Utilisateur pourra effectuer dans le cadre de la Tarification applicable, les Transactions suivantes :</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Créditer son Compte Cashmoov en UV au moyen d'un Chargement ou par transfert de UV en provenance d'un autre Utilisateur</li>
                                <li>Débiter le Compte Cashmoov en UV via l'envoi par l'Utilisateur d'un Ordre de Transfert</li>
                                <li>Acheter tout service fourni dans le cadre de ce produit, et notamment des crédits téléphoniques prépayés</li>
                                <li>Acheter des biens ou des services auprès des Accepteurs</li>
                            </ul>
                            <p><strong>7.3</strong> Une confirmation sera émise par le Système à chaque Transaction. Cette confirmation sera envoyée à l'Utilisateur via SMS ou tout autre moyen avec le Solde du Compte Cashmoov réactualisé.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">8. Suspension et interruption des services / fermeture de compte</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>8.1</strong> Cashmoov peut suspendre, restreindre ou mettre fin à la fourniture de tout ou partie du Service et/ou fermer le Compte Cashmoov de l'Utilisateur sans notification préalable dans les circonstances suivantes :</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Si Cashmoov a connaissance ou a des raisons de croire que le Compte Cashmoov fait l'objet d'une utilisation non autorisée, illégale, incorrecte ou frauduleuse</li>
                                <li>Si l'Utilisateur ne respecte pas l'une quelconque de ses obligations au titre du Contrat Cashmoov</li>
                                <li>Si l'Utilisateur fait l'objet d'une interdiction bancaire ou judiciaire</li>
                            </ul>
                            <p><strong>8.2</strong> Cashmoov procédera également à la fermeture du Compte Cashmoov dans les conditions suivantes :</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Sur réception d'une demande de résiliation écrite de l'Utilisateur</li>
                                <li>Si le Compte Cashmoov est inactif durant une période supérieure à douze (12) mois consécutifs</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">9. Tarification</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>9.1</strong> La Tarification publiée par Cashmoov inclut l'ensemble des Frais dus au titre de l'ouverture et de la gestion du Compte Cashmoov ainsi que de l'utilisation du Service par l'Utilisateur.</p>
                            <p><strong>9.2</strong> Les Frais dus au titre de chaque Transaction donneront lieu à prélèvement automatique par Cashmoov du nombre d'UV nécessaires à leur complet règlement, sans notification ou avis préalable.</p>
                            <p><strong>9.3</strong> Les Frais incluent la taxe sur la valeur ajoutée, ainsi que tout autre impôt ou prélèvement au taux applicable.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">10. Sécurité</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>10.1</strong> Un seul Code Cashmoov peut correspondre au Compte Cashmoov de l'Utilisateur.</p>
                            <p><strong>10.2</strong> Seul l'Utilisateur titulaire du Compte Cashmoov peut effectuer des Transactions sur le Compte Cashmoov et utiliser le téléphone mobile et le Code Cashmoov correspondant.</p>
                            <p><strong>10.3</strong> L'Utilisateur est responsable de la bonne conservation et de la bonne utilisation de son téléphone mobile, ainsi que de la conservation du Code d'Initialisation et du Code Cashmoov.</p>
                            <p><strong>10.5</strong> L'Utilisateur ne doit en aucun cas révéler son Code Cashmoov à quiconque, y compris le personnel du Centre d'Assistance Clientèle.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">11. Engagements de l'utilisateur</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>11.1</strong> L'Utilisateur est tenu au paiement des Frais, conformément à la Tarification en vigueur, pour toute Transaction.</p>
                            <p><strong>11.2</strong> L'Utilisateur est entièrement responsable de l'utilisation de son Compte Cashmoov et du Service. Par conséquent, il s'engage à les utiliser conformément aux spécifications techniques et aux conditions contractuelles.</p>
                            <p><strong>11.3</strong> L'Utilisateur s'engage à ne pas utiliser le Service dans le but de commettre une infraction à toute loi ou réglementation applicable.</p>
                            <p><strong>11.4</strong> L'utilisateur doit informer Cashmoov de ses changements d'état civil.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">12. Données personnelles</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>12.1</strong> Les données personnelles collectées dans le cadre des présentes font l'objet d'un traitement informatique ainsi que les opérations réalisées dans le cadre de l'exécution du Service et la gestion du Compte Cashmoov.</p>
                            <p><strong>12.3</strong> L'Utilisateur pourra demander à avoir accès aux informations personnelles le concernant, demander leur correction, mise à jour, ou pour des motifs légitimes, s'opposer à leur traitement.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">13. Modifications des conditions et de la tarification</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>13.1</strong> Cashmoov se réserve le droit de modifier à tout moment les Conditions Cashmoov ou la Tarification. En cas de modification, l'Utilisateur en sera informé au moins quinze (15) jours calendaires avant l'entrée en vigueur.</p>
                            <p><strong>13.2</strong> En continuant à utiliser le Service, l'Utilisateur sera considéré comme ayant accepté les modifications des Conditions Cashmoov ou de la Tarification.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">14. Responsabilité et exclusions</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p><strong>14.2</strong> Sauf dispositions légales impératives contraires, Cashmoov n'est pas responsable des actions ou omissions des commerçants indépendants qui interviennent lors de la fourniture du Service ou des Utilisateurs.</p>
                            <p><strong>14.4</strong> Cashmoov ne saurait être tenue responsable des pertes dues à la panne ou à la défaillance des réseaux de téléphone, des équipements de téléphones mobiles, d'Internet ou des terminaux.</p>
                            <p><strong>14.6</strong> L'Utilisateur est informé qu'il lui appartient de vérifier, à chaque Ordre de Transfert initié, qu'il ne s'est pas trompé de destinataire.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">17. Durée</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Le contrat Cashmoov est conclu pour une durée indéterminée, et pourra être dénoncé à tout moment par l'Utilisateur ou Cashmoov moyennant un préavis écrit de dix (10) jours adressé à l'autre partie.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2A4793] mb-4">19. Droit applicable et attribution de juridiction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les Conditions Cashmoov sont soumises au droit guinéen. Les parties s'efforceront de régler à l'amiable tout litige concernant la validité, l'interprétation ou l'exécution du Contrat Cashmoov. A défaut de règlement à l'amiable dans un délai d'un (1) mois à compter de la notification du litige par l'une des parties, la partie la plus diligente saisira le Tribunal de Commerce de Conakry.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
