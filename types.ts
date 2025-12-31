export interface PricingTier {
  title: string;
  price: number;
  description: string;
}

export interface MenuItem {
  category: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
  priceNote?: string;
}