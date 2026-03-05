import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                title='Politique de Confidentialité'
                description="Politique de confidentialité de Cashmoov. Découvrez comment nous collectons, utilisons et protégeons vos donées personnelles."
                url='https://cashmoov.net/privacy'
            />
        
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
                                Politique de Confidentialité de Cash Moov
                            </h1>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl p-6 sm:p-8 shadow-lg space-y-6"
                    >
                        <p className="text-gray-700 leading-relaxed">
                            La présente politique de confidentialité décrit la manière dont Cash Moov SA, une société de droit guinéen opérant à travers une application de téléphonie mobile, Cash Moov, et ses filiales (collectivement, "Cash Moov" ou "nous") obtient, utilise, stocke, gère et supprime certaines informations que vous nous fournissez en tant qu'utilisateur de nos services. Vous disposez de certains droits, décrits ci-dessous, pour savoir quelle information nous collectons, comment nous l'utilisons et comment vous pouvez l'obtenir et la corriger.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov collecte d'abord des informations sur vous et sur la personne à qui vous envoyez de l'argent (votre "Bénéficiaire") à partir des données que vous avez fournies dans l'application Cash Moov ("App"). Lorsque vous fournissez des informations à Cash Moov, à travers l'application ou autrement, vous garantissez à Cash Moov que toutes les informations que vous nous fournissez sur vous-même et sur votre Bénéficiaire sont exactes et complètes. Cash Moov s'appuie sur votre garantie lorsque Cash Moov vous fournit le service.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Les informations que vous fournissez comprennent des données personnelles, définies comme des informations pouvant être utilisées, seules ou avec d'autres informations, pour vous identifier. En plus des informations que vous fournissez, Cash Moov peut avoir, ou peut obtenir de tierces parties, des informations sur vous ou sur votre Bénéficiaire, dont certaines peuvent être des données personnelles. De plus amples informations sur ces tierces parties figurent ci-dessous.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov utilise ces informations pour vous fournir ses services et pour vous protéger, ainsi que le service Cash Moov, votre Bénéficiaire et le grand public contre les erreurs, la fraude, le blanchiment d'argent et d'autres problèmes.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Collection d'informations
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les informations initiales que nous collectons de vous sont celles que vous nous avez fournies sur l'application Cash Moov. Cela inclut des informations sur vous, tels que votre nom légal complet, votre adresse, votre date de naissance, votre numéro de téléphone, votre adresse e-mail, les quatre derniers chiffres de votre numéro de sécurité sociale (s'il s'agit d'un citoyen américain), ainsi que d'autres informations et / ou documents nous permettant de vérifier votre identité.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Vous devez également nous fournir des informations sur votre Bénéficiaire qui peuvent inclure des informations personnelles sensibles tels que son nom, son adresse, son numéro de téléphone portable et / ou des informations sur son compte bancaire.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov peut également collecter des informations sur votre téléphone mobile ou un autre appareil à partir duquel vous accédez à l'application Cash Moov, notamment votre adresse IP (protocole Internet), votre système d'exploitation, les informations d'identification de l'appareil et d'autres informations associées à votre accès à et à votre utilisation de l'application. Cash Moov peut également collecter des informations sur les sites Web que vous avez visités avant d'accéder au service Cash Moov. Cash Moov peut conserver et stocker ces informations et les associer à votre utilisation, afin d'aider Cash Moov à vous identifier et de faciliter votre utilisation de notre service dans le futur.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov peut vérifier et confirmer toutes les informations que vous nous fournissez (ou que nous recueillons lorsque vous accédez à l'application Cash Moov) avec des tierces parties, y compris la société de télécommunication ou institution financière par laquelle votre argent est envoyé à votre Bénéficiaire. Cash Moov peut également vérifier ces informations auprès des services de vérification de l'identité, des bases de données électroniques, des sociétés de réseaux sociaux et des agences d'évaluation de crédit. Cash Moov peut partager vos informations avec les banques, les fournisseurs de télécommunications et les autres sociétés de services financiers qui facilitent le paiement à votre Bénéficiaire.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            De temps à autre, Cash Moov peut demander à vous et / ou à votre Bénéficiaire de nous fournir des informations et / ou des documents supplémentaires pour confirmer votre identité et votre éligibilité à utiliser le service Cash Moov.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Lorsque vous accédez à l'application Cash Moov, Cash Moov peut collecter et stocker des informations concernant votre utilisation de l'application et du service. Cela inclut des informations sur la fréquence à laquelle vous accédez à l'application, le temps que vous y passez, la façon dont vous vous déplacez sur le site, l'historique de vos transferts et des informations détaillées sur le montant que vous transférez et sur vos bénéficiaires.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Si vous nous contactez pour une raison quelconque, que ce soit par téléphone, courrier électronique, texte ou autre, Cash Moov peut enregistrer et stocker les communications que vous avez avec nous.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Utilisation des informations
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov peut conserver et utiliser toutes les informations et la documentation que vous fournissez, ainsi que les informations que nous tirons de votre utilisation du service, ainsi que les informations que nous obtenons à votre sujet auprès des tiers, afin de vous fournir le service Cash Moov, et pour permettre à Cash Moov de se conformer aux lois et règlementations, y compris ceux destinés à prévenir la fraude, le blanchiment d'argent et d'autres abus du système financier.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov peut utiliser vos informations pour vous contacter au besoin afin de confirmer ou de compléter une transaction et pour permettre à nos agents, partenaires et fournisseurs de services de remplir leurs obligations dans la fourniture du service Cash Moov. Cash Moov peut également utiliser vos informations pour améliorer notre service, résoudre des problèmes, développer de nouveaux produits et services et créer des campagnes de publicité, de marketing et de promotion. (Ci-dessous figurent de plus amples d'informations sur l'utilisation par Cash Moov de vos données à des fins de marketing et de promotion.)
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Enfin, Cash Moov peut divulguer vos informations à des tiers, y compris à des agences gouvernementales, lorsque Cash Moov détermine de manière raisonnable qu'une telle divulgation est requise par la loi, telles que les réponses à des assignations à comparaître et des d'informations demandées par des autorités policières, des régulateurs des services financiers ou des autorités nationales chargées de la sécurité.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov ne vendra pas, ne louera pas et ne divulguera pas vos informations à des spécialistes du marketing ou à des tiers qui ne sont pas affiliés à Cash Moov dans le but de faire de la publicité, de la promotion ou de la vente d'autres services. Toutefois, où et dans la mesure permise par la loi, Cash Moov peut travailler avec des tiers pour analyser les informations que nous recueillons de vous lorsque vous nous visitez en ligne, y compris notre site Web, notre page Facebook et nos publicités Facebook, que vous utilisez oui ou non le service Cash Moov.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov peut utiliser les informations que nous recueillons à cet endroit, ainsi que les informations que nous obtenons de votre utilisation de notre service, y compris des informations personnelles, pour annoncer et promouvoir les services Cash Moov auprès de vous et auprès des autres. Par exemple, Cash Moov fournirait des données au compte Ad Manager de Facebook et aux programmes SDK de Facebook, qui nous fournissent des informations sur les méthodes utilisées par les clients et les autres visiteurs pour accéder, afficher et utiliser le site Web et l'application Cash Moov. Nous utilisons ces informations pour créer des publicités et des promotions. Ces publicités et promotions peuvent apparaître dans votre flux Facebook ou sur d'autres sites appartenant ou gérés par Facebook, tel que Instagram.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Nous pouvons personnaliser nos messages marketing et promotionnels pour vous en fonction de votre utilisation de notre service, des informations que vous nous avez fournies ou que nous obtenons autrement à votre sujet, ainsi que des algorithmes conçus pour nous aider à anticiper vos besoins potentiels sur la base de vos informations et celles des autres utilisateurs des services Cash Moov. Cash Moov estime que de tels programmes fournissent des informations précieuses et des avantages pour nos utilisateurs actuels et potentiels. En acceptant la présente politique de confidentialité vous donnez à Cash Moov votre accord pour l'utilisation de vos données à des fins de marketing et de promotion.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Protection des informations personnelles collectées par Cash Moov
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Les experts et les pratiques de pointe en matière de sécurité de Cash Moov assurent que vos informations personnelles sont sécurisées. Toutes ces informations sont stockées sur des serveurs dotés d'une technologie de pointe en matière de protection des données et ne sont accessibles qu'aux employés de Cash Moov qui, à des fins professionnelles, doivent y accéder.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Nous utilisons des technologies de cryptage et d'encodage de haut niveau pour sécuriser les informations entrées dans l'application Cash Moov afin qu'elles ne soient pas lisibles par des tiers non autorisés. Cependant, aucune méthode de transmission sur Internet ni méthode de stockage électronique n'est à 100% sécurisée. Bien que Cash Moov utilise des méthodes robustes pour protéger les données que vous nous avez fournies et que nous testons régulièrement nos pratiques et notre technologie de protection des informations, Cash Moov ne peut en garantir la sécurité de manière absolue. Nous vous informerons toutefois de toute violation ou de tout compromission qui affecterait vos données, dans les meilleurs délais, conformément aux lois en vigueur.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov protège les données que vous nous fournissez conformément aux exigences de la Loi L-2016-037-AN du 28 Juillet 2016 relative à la Cybersecurite et la Protection des données à caractère personnel en République de Guinée.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Votre droit d'accéder à vos informations personnelles et de les corriger
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Vous avez le droit d'accéder à vos informations personnelles stockées par Cash Moov, sous réserve des dispositions de la Loi L-2016-037-AN du 28 Juillet 2016 relative à la Cybersecurite et la Protection des données à caractère personnel en République de Guinée et des lois qui lui sont ultérieures, et conformément aux réglementations applicables en matière de protection des données et aux politiques de Cash Moov visant à prévenir la fraude et autres abus des services financiers.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Pour ce faire, vous pouvez nous contacter à l'adresse <a href="mailto:contact@cashmoov.net" className="text-[#2A4793] font-semibold hover:underline">contact@cashmoov.net</a>. Si les informations que Cash Moov a conservées à votre sujet sont fausses, incomplètes ou inexactes, vous avez le droit d'exiger que Cash Moov les corrige ou que vous corrigiez les informations vous-même directement dans l'application.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Destruction d'informations
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            Cash Moov conservera les informations sur chaque transaction pendant une durée de dix (10) ans conformément aux dispositions de l'article 54 de la Loi ordinaire N° L/2021/024/AN du 17 Août 2021 portant lutte contre le blanchiment de capitaux et le financement du terrorisme en République de Guinée. Après cette période, Cash Moov pourra détruire ces informations et celles-ci ne seront plus disponibles pour vous ou pour quiconque.
                        </p>

                        <h2 className="text-2xl font-bold text-[#2A4793] mt-8 mb-4">
                            Modification de la Politique de Confidentialité
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            La politique de confidentialité de Cash Moov pourrait changer à l'avenir, notamment en cas d'évolution dans le cadre légal et réglementaire en matière de protection des données à caractère personnel. Si cela se produit, la version révisée sera publiée sur notre site Web, <a href="https://cashmoov.net" className="text-[#2A4793] font-semibold hover:underline">https://cashmoov.net</a> et sera envoyée aux utilisateurs actuels via l'application Cash Moov.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
