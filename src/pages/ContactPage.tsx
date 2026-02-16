import { Mail, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT_INFO, FAQS } from "@/constants";
import { motion } from "framer-motion";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-15 bg-[#2A4793] text-center py-12 px-4"
      >
        <h2 className="text-[#F7CE47] text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h2>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
          Notre équipe est à votre écoute pour répondre à toutes vos questions
        </p>
      </motion.div>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {CONTACT_INFO.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl p-5 sm:p-6 text-center border-t-4 border-[#2A4793] transition-all duration-300 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${info.color} rounded-xl sm:rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, id) => (
                  <p key={id} className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="bg-gradient-to-br from-[#D9DEEB] to-[#E8EBF5] py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 h-full flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2A4793] to-[#1f356d] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                Envoyez-nous un message
              </h4>
            </div>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <h4 className="text-2xl font-bold text-gray-900 pb-5">
              Questions fréquentes
            </h4>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-6 flex-1"
            >
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -2, x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg p-4 border-l-4 border-[#2A4793] transition-all duration-300"
                >
                  <h5 className="text-sm sm:text-base font-bold text-gray-900 mb-1 flex items-start gap-2">
                    <span className="text-[#F7CE47] text-xl flex-shrink-0">•</span>
                    {faq.questions}
                  </h5>
                  <p className="text-gray-600 leading-relaxed ml-6 text-xs sm:text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-gradient-to-br from-[#2A4793] to-[#1f356d] p-4 text-center text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7CE47] rounded-full opacity-10 blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                <p className="text-white/90 mb-3 text-sm leading-relaxed">
                  Notre équipe est disponible à tout moment
                </p>

                <div className="flex gap-2 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+224621640000"
                    className="bg-white text-[#2A4793] px-3 py-2 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-100 transition shadow-lg text-sm flex-1 max-w-[100px]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span className="hidden sm:inline">Appel</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contact@cashmoov.com"
                    className="bg-white text-[#2A4793] px-3 py-2 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-100 transition shadow-lg text-sm flex-1 max-w-[100px]"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="hidden sm:inline">Email</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/224621640000?text=Bonjour%20l'équipe%20Cash%20Moov"
                    target="blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-2 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-green-600 transition shadow-lg text-sm flex-1 max-w-[120px]"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
