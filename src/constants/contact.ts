import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactInfo, FAQ } from "@/types";

export const CONTACT_INFO: ContactInfo[] = [
  {
    icone: Phone,
    title: "Téléphone",
    details: ["+224621640000", "+224657640000"],
    color: "bg-[#2A4793]",
  },
  {
    icone: Mail,
    title: "Email",
    details: ["contact@cahmoov.net"],
    color: "bg-[#F7CE47]",
  },
  {
    icone: MapPin,
    title: "Adresse",
    details: [`Immeuble Sonit, Avenue de la république, Kaloum`, `BP : 3602`],
    color: "bg-[#2A4793]",
  },
  {
    icone: Clock,
    title: "Horaires",
    details: ["Lun-Ven: 8h-17h30"],
    color: "bg-[#F7CE47]",
  },
];

export const FAQS: FAQ[] = [
  {
    questions: "Combien de temps prend un transfert ?",
    answer:
      "La plupart des transferts sont effectués en quelques minutes. Les transferts bancaires peuvent prendre 1-2 jours ouvrables.",
  },
  {
    questions: "Quels sont les frais de transfert ?",
    answer:
      "Nos frais sont transparents et  varient selon le montant et la destination. ",
  },
  {
    questions: "Comment suivre mon transfert ?",
    answer:
      "Vous recevez un numéro de suivi unique pour chaque transfert. Connectez-vous à votre compte pour suivre l'état en temps réel.",
  },
  {
    questions: "Mes données sont-elles sécurisées ?",
    answer:
      "Oui, nous utilisons un cryptage de niveau bancaire et respectons les normes de sécurité internationales.",
  },
];
