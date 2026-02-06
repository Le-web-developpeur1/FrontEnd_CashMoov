import { useForm } from "react-hook-form";
import { useState } from "react";
import { contactAPI } from "@/utils/api";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
  last_name: string;
  first_name: string;
  email: string;
  phon_number: string;
  message: string;
}

export default function ContactForm() {
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      last_name: "",
      first_name: "",
      email: "",
      phon_number: "",
      message: "",
    },
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const watchAllFields = watch();

  const onSubmit = async (data: ContactFormData) => {
      setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await contactAPI.send(data);
      setSuccess('Message envoyé avec succès !');

      setTimeout(() => {
        setSuccess("")
      }, 2000);
        reset();
    } catch (error: any) {
      console.error('Erreur:', error);
      setLoading(false);
      alert(error.message || 'Erreur lors de l\'envoi du message');
    } finally {
      setLoading(false);
    }
  };

  const isFieldActive = (fieldName: keyof ContactFormData) => {
    return focusedField === fieldName || watchAllFields[fieldName]?.length > 0;
  };

  return (
    <div className="">
        <AnimatePresence>
          {success && ( 
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25}}
              className="text-green-600 text-sm"
        >
              {success}
            </motion.p>
          )}

        </AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-5">
          <div className="flex flex-col gap-2 md:col-span-2 relative">
          <input
            {...register("last_name", { required: "Le nom est obligatoire" })}
            onFocus={() => setFocusedField("last_name")}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none peer"
          />
          <label 
            className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
              ${isFieldActive("last_name") ? "-top-2.5 text-xs text-[#2A4793] font-medium" : "top-3 text-base text-gray-500"}
            `}
          >
            Nom
          </label>
          {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
        </div>

        <div className="flex flex-col gap-2 md:col-span-3 relative">
          <input
            {...register("first_name", { required: "Le prénom est obligatoire" })}
            onFocus={() => setFocusedField("first_name")}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none peer"
          />
          <label 
            className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
              ${isFieldActive("first_name") ? "-top-2.5 text-xs text-[#2A4793] font-medium" : "top-3 text-base text-gray-500"}
            `}
          >
            Prénom
          </label>
          {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
        </div>

        <div className="flex flex-col gap-2 md:col-span-5 relative">
          <input
            {...register("email", { required: "L'email est obligatoire" })}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none peer"
          />
          <label 
            className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
              ${isFieldActive("email") ? "-top-2.5 text-xs text-[#2A4793] font-medium" : "top-3 text-base text-gray-500"}
            `}
          >
            Email
          </label>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2 md:col-span-5 relative">
          <input
            {...register("phon_number")}
            onFocus={() => setFocusedField("phon_number")}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none peer"
          />
          <label 
            className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
              ${isFieldActive("phon_number") ? "-top-2.5 text-xs text-[#2A4793] font-medium" : "top-3 text-base text-gray-500"}
            `}
          >
            Téléphone
          </label>
        </div>

        <div className="flex flex-col gap-2 md:col-span-5 relative ">
          <textarea
            {...register("message")}
            rows={6}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            placeholder=" "
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#2A4793] focus:border-[#2A4793] outline-none resize-none peer"
          />
          <label 
            className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
              ${isFieldActive("message") ? "-top-2.5 text-xs text-[#2A4793] font-medium" : "top-3 text-base text-gray-500"}
            `}
          >
            Message
          </label>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#2A4793] text-white px-4 py-2 rounded-md disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Envoyer le message"
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
