import type { ServiceCardProps } from "@/types";
import { Wallet, Send, CreditCard, Banknote, Users } from "lucide-react";

export const SERVICES_PARTICULIERS: Omit<ServiceCardProps, 'onDiscover'>[] = [
  {
    title: "Dépôt et Retrait",
    description: "Déposez et retirez votre argent facilement via différents canaux sécurisés.",
    icon: Wallet,
    iconColor: "#2A4793",
    features: [
      "Via Agent",
      "Via Bank",
      "Via autres services",
    ],
  },
  {
    title: "Transfert",
    description: "Envoyez de l'argent rapidement et en toute sécurité localement ou à l'international.",
    icon: Send,
    iconColor: "#2A4793",
    features: [
      "Local",
      "International",
    ],
  },
  {
    title: "Paiements Mobiles",
    description: "Payez vos factures, achetez du crédit et effectuez vos paiements marchands en toute simplicité.",
    icon: CreditCard,
    iconColor: "#2A4793",
    features: [
      "Paiement de Facture",
      "Achat de crédit",
      "Paiement Marchand (face à face et Remote)",
    ],
  },
];

export const SERVICES_ENTREPRISES: Omit<ServiceCardProps, 'onDiscover'>[] = [
  {
    title: "Paiement de Salaire et Paiement à tiers",
    description: "Gérez vos paiements de salaires et vos paiements à tiers de manière simple et sécurisée.",
    icon: Banknote,
    iconColor: "#F7CE47",
    features: [
      "Virements salariaux automatisés",
      "Paiements groupés aux fournisseurs",
      "Multi-devises et multi-pays",
      "Conformité réglementaire assurée",
    ],
  },
  {
    title: "Caisse déplacée",
    description: "Bénéficiez d'un service de caisse mobile pour vos opérations sur site.",
    icon: Wallet,
    iconColor: "#F7CE47",
    features: [
      "Service de caisse mobile",
      "Opérations sur site",
      "Sécurité renforcée",
      "Traçabilité complète",
    ],
  },
  {
    title: "Cash collection",
    description: "Optimisez la collecte de vos liquidités avec notre service de cash collection.",
    icon: Users,
    iconColor: "#F7CE47",
    features: [
      "Collecte de liquidités",
      "Gestion de trésorerie",
      "Rapports détaillés",
      "Support dédié",
    ],
  },
];
