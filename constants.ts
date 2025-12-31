import { MenuItem, PricingTier, Service } from './types';

export const HONEYBOOK_URL = "https://www.honeybook.com/widget/amazing_grazing_llc_274768/cf_id/6421651357caf2002c676dda";

export const SERVICES: Service[] = [
  {
    title: "CATERING",
    description: "We offer catering to meet the needs of your special event. Whether it's Holidays, Birthdays, Weddings or anything in between.",
    priceNote: "Prices start at $10 per person"
  },
  {
    title: "CHARCUTERIE",
    description: "We offer a variety of different charcuterie options that are sure to meet your needs. We can provide grazing table, charcuterie boards, and trays.",
    priceNote: "Prices start at $75"
  },
  {
    title: "CUSTOM",
    description: "Not sure what you need for your event? We can help with that! Let us get some information from you and give you some options that will be sure to make every guest happy and full.",
    priceNote: "Prices start at $400"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    category: "Cheeses",
    items: ["Brie cheese", "Cheddar, colby, pepper jack", "Mozzarella cheese", "Havarti cheese", "Swiss cheese"]
  },
  {
    category: "Accompaniments",
    items: ["Seasonal fruits and vegetables", "Olives and pickles", "Nuts", "Honey", "Jam or jellies"]
  },
  {
    category: "Bases & Dips",
    items: ["Crackers", "Breads", "Spinach dip, hummus, or vegetable dips", "Fruit dips"]
  },
  {
    category: "Extras",
    items: ["Cured meats", "Finger sandwiches", "Appetizers", "Freshly baked pies"]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    title: "3-foot Graze",
    price: 400,
    description: "Up to 30 guests"
  },
  {
    title: "5-foot Graze",
    price: 650,
    description: "Up to 60 guests"
  },
  {
    title: "6-foot Graze",
    price: 900,
    description: "Up to 75 guests"
  },
  {
    title: "8-foot Graze",
    price: 1150,
    description: "Up to 100 guests"
  },
  {
    title: "10-foot Graze",
    price: 1350,
    description: "Up to 125 guests"
  }
];

export const SERVICE_AREAS = [
  "Winchester, VA",
  "Leesburg, VA",
  "Surrounding Areas"
];