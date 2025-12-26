import { href } from "react-router-dom";
import exp1 from "../assets/exp-1.jpg";
import exp2 from "../assets/exp-2.jpg";
import exp3 from "../assets/exp-3.jpg";
import { HardHat, ShoppingBag, Coffee, Car } from 'lucide-react';

export const expertise = [
  {
    image: exp1,
    text: "Premium Quality Labels",
    description:
      "High-resolution printing with vibrant colors and durable materials",
  },
  {
    image: exp2,
    text: "Custom Shapes & Sizes",
    description:
      "Labels tailored to your product’s unique shape and packaging requirements.",
  },
  {
    image: exp3,
    text: "Fast Turnaround",
    description:
      "Quick production and delivery for small or large batches without compromising quality.",
  },
];

export const resourcesLinks = [
  {
    href: "https://maps.google.com/?q=123 Main Street, Sandton, Johannesburg",
    text: "123 Main Street, Sandton, Johannesburg, South Africa",
  },
  {
    
    text: "contact@designsolutions.co.za",
  },
];


export const platformLinks = [
  { href: "#", text: "Instagram" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "X" },
  { href: "#", text: "TikTok" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];

export const ReasonsToPick = [
  {
    icon: <Coffee size={64} />,
    text: "Custom Cups",
  },
  {
    icon: <Car size={64} />,
    text: "Custom Car Wrap",
  },
  {
    icon: <ShoppingBag size={64} />,
    text: "Custom Bags",
  },
  {
    icon: <HardHat size={64} />,
    text: "Custom Hats",
  },
];