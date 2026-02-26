import type { ServiceCardProps } from "@/types";
import { Wallet, Send, CreditCard, Banknote, Users, MapPin, Globe, Receipt, Smartphone, ShoppingBag, Building2, ArrowLeftRight } from "lucide-react";

export const SERVICES_PARTICULIERS: Omit<ServiceCardProps, 'onDiscover'>[] = [
  {
    title: "Transfert d'Argent",
    description: "Envoyez et recevez de l'argent rapidement et en toute sécurité.",
    icon: Send,
    iconColor: "#2A4793",
    image: "/images/services/transfertArgent.png",
    features: [
      {
        icon: MapPin,
        title: "Transfert local",
        description: "Envoyez instantanement de d'argent vers vos bénéficiaires au niveau national et recevez des transferts de vos expéditeurs. Transferez de CashMoov vers CashMoov ou de CashMoov vers un autre compte mobile."
      },
      {
        icon: Globe,
        title: "Transfert international instantané",
        description: "Recevez ou envoyez de fonds vers l'étranger via des partenaires internationaux. Envoyez à destination d'un compte mobile, un compte bancaire ou un service de paiement en cash."
      },
    ],
  },
  {
    title: "Paiements Mobiles",
    description: "Simplifiez vos paiements du quotidien grâce à votre téléphone.",
    icon: CreditCard,
    iconColor: "#2A4793",
    image: "/images/services/paiementMobile.png",
    features: [
      {
        icon: Receipt,
        title: "Paiement de factures",
        description: "Réglez vos factures (électricité, eau, internet, etc.) sans vous déplacer"
      },
      {
        icon: Smartphone,
        title: "Achat de crédit",
        description: "Rechargez votre téléphone ou celui de vos proches instantanément"
      },
      {
        icon: ShoppingBag,
        title: "Paiement marchand",
        description: "Payez vos achats chez les commerçants, en face-à-face ou à distance (remote)"
      },
    ],
  },
  {
    title: "Dépôt et Retrait",
    description: "Vous pouvez alimenter votre compte ou retirer votre argent grâce à plusieurs options pratiques.",
    icon: Wallet,
    iconColor: "#2A4793",
    image: "/images/services/depotretrait.png",
    features: [
      {
        icon: Users,
        title: "Via Agent",
        description: "Dépôt et retrait d'argent auprès du réseau d'agents agréés partout sur le territoire"
      },
      {
        icon: Building2,
        title: "Via Banque",
        description: "Transfert d'argent entre un compte bancaire et le compte mobile pour plus de flexibilité"
      },
      {
        icon: ArrowLeftRight,
        title: "Via autres services",
        description: "Intégration avec d'autres plateformes financières (Orange Money vers CashMoov par exemple)"
      },
    ],
  },
];

export const SERVICES_ENTREPRISES: Omit<ServiceCardProps, 'onDiscover'>[] = [
  {
    title: "Paiement de salaire et paiement à tiers",
    description: "Distribution rapide et sécurisée des salaires et paiements aux partenaires, fournisseurs ou bénéficiaires.",
    icon: Banknote,
    iconColor: "#F7CE47",
    features: [
      "Gagnez du temps en exécutant vos paiements en un clic",
      "Facilitez votre gestion avec un état de paie clair et automatisé",
      "Payez à temps sans aucunes contraintes d'organisation",
    ],
  },
  {
    title: "Caisse déplacée",
    description: "Cette solution mobile permet d'effectuer des opérations financières dans des localités précises : zones minières, base vie, site distant…",
    icon: Wallet,
    iconColor: "#F7CE47",
    features: [
      "Service de caisse mobile sur site",
      "Opérations dans des zones reculées",
      "Sécurité renforcée",
      "Traçabilité complète",
    ],
  },
  {
    title: "Cash collection",
    description: "Nous collectons de manière sécurisée les paiements auprès des clients ou points de vente.",
    icon: Users,
    iconColor: "#F7CE47",
    features: [
      "Collecte sécurisée des paiements",
      "Gestion optimisée de trésorerie",
      "Rapports détaillés en temps réel",
      "Support dédié",
    ],
  },
];
