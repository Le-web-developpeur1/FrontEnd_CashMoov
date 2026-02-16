import { TESTIMONIALS } from "@/constants";
import { motion } from "framer-motion";

export default function TestimonialsSlider() {
  const loopTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-full mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#2A4793]"
        >
          Ce que disent nos clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-2"
        >
          Découvrez les expériences de nos utilisateurs satisfaits
        </motion.p>

        <div className="overflow-hidden mt-12">
          <div className="flex gap-5 animate-scroll">

            {loopTestimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="min-w-[200px] sm:min-w-[280px] md:min-w-[350px] 
                           h-[180px] sm:h-[240px] md:h-[280px] flex flex-col
                           mb-8 bg-white shadow-lg rounded-xl sm:rounded-2xl 
                           p-3 sm:p-5 md:p-6 text-left"
              >
                <div className="flex text-yellow-400 text-sm sm:text-lg md:text-xl mb-1.5 sm:mb-3">
                  {"★".repeat(t.rating)}
                </div>

                <p className="text-gray-700 italic mb-3 sm:mb-5 md:mb-6 flex-1 line-clamp-2 sm:line-clamp-3 md:line-clamp-4 text-[11px] sm:text-sm md:text-base leading-tight">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-auto">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-[11px] sm:text-sm md:text-base truncate">{t.name}</p>
                    <p className="text-gray-600 text-[9px] sm:text-xs md:text-sm truncate">
                     {t.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
