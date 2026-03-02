import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactInfo, FAQ } from "@/types";

export const CONTACT_INFO: ContactInfo[] = [
  {
    icone: Phone,
    title: "Téléphone",
    details: ["+224 621640000", "+224 661640000", "+224 657640000"],
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
    details: [
      "Bureau ouvert",
      "Lun-Ven : 8h30-17h30",
      "Service disponible : 24/7",
    ],
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
    questions: "Comment annuler une transaction ?",
    answer:
      "Pour annuler une transaction, vous devez contacter le service client et fournir les informations suivantes : le motif de l'annulation, l'identifiant et le montant de la transaction",
  },
  {
    questions: "Mes données sont-elles sécurisées ?",
    answer:
      "Oui, nous utilisons un cryptage de niveau bancaire et respectons les normes de sécurité internationales.",
  },
];
