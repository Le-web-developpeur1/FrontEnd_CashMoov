import type { LucideIcon } from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  features: ServiceFeature[] | string[];
  icon?: LucideIcon;
  iconColor?: string;
  image?: string;
  onDiscover?: () => void;
}

export interface SectionBannerProps {
  title: string;
  bgColor?: string;
}

export interface SectionBanner2Props {
  title: string;
  description: string;
  bgColor?: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  country: string;
  photo: string;
  text: string;
}

export interface ContactInfo {
  icone: any;
  title: string;
  details: string[];
  color: string;
}

export interface FAQ {
  questions: string;
  answer: string;
}

export interface Message {
  sender: "user" | "bot" | "assistant" | "system";
  text: string;
}
