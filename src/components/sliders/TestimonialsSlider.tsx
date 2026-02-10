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
          Plus de 100 000 utilisateurs satisfaits à travers le monde
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
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[350px] 
                           h-[280px] flex flex-col
                           mb-8 bg-white shadow-lg rounded-2xl 
                           p-6 text-left"
              >
                <div className="flex text-yellow-400 text-xl mb-3">
                  {"★".repeat(t.rating)}
                </div>

                <p className="text-gray-700 italic mb-6 flex-1 line-clamp-4">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-600 text-sm">
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
