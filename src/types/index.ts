import type { LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: LucideIcon;
  iconColor?: string;
  image?: string;
  onDiscover?: () => void;
}

export interface SectionBannerProps {
  badge: string;
  title: string;
  description: string;
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

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  sender: "user" | "bot" | "assistant" | "system";
  text: string;
}
