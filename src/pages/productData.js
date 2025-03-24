import ldpe from "../assets/ldpe.avif";
import lldpe from "../assets/lldpe.webp";
import hdpe from "../assets/hdpe.jpg";
import ldpegranuels from "../assets/ldpegranuels.jpg";
import lldpegranuels from "../assets/lldpegranuels.jpg";
import hdpegranuels from "../assets/hdpegranuels.jpg";
import flameretardantpolybags from "../assets/flameretardantpolybags.jpg";
import heatshrinkroll from "../assets/heatshrinkroll.jpg";

export const products = [
  {
    id: 1,
    title: "LDPE-Based Packaging",
    description: "Our LDPE rolls and bags are known for their flexibility, transparency, and strength. Widely used in various industries due to their versatility.",
    applications: [
      "Industrial Wrapping for machinery protection",
      "Durable and flexible garbage bags",
      "Food packaging and hospital supplies"
    ],
    image: ldpe
  },
  {
    id: 2,
    title: "LLDPE-Based Packaging",
    description: "LLDPE rolls and bags are prized for their superior strength and puncture resistance. Suitable for applications where durability is essential.",
    applications: [
      "Stretch Wrap for pallet wrapping",
      "Heavy-Duty Bags for carrying heavy items",
      "Protective packaging for shipping"
    ],
    image: lldpe
  },
  {
    id: 3,
    title: "HDPE-Based Packaging",
    description: "Our HDPE Rolls are engineered to provide exceptional strength and durability for a wide range of industrial and commercial applications.",
    applications: [
      "Construction Industry vapor barriers",
      "Retail and Consumer Goods packaging",
      "Protective coverings for building materials"
    ],
    image: hdpe
  },
  {
    id: 4,
    title: "Heat Shrink Roll",
    description: "Our heat-shrinking rolls provide a strong, protective seal around products when heated, ensuring secure packaging and durability. Ideal for safeguarding goods during storage and transportation.",
    applications: [
      "Tamper-proof packaging for bottles and containers",
      "Secure bundling of electronics and consumer goods",
      "Protective wrapping for industrial and automotive parts"
    ],
    image: heatshrinkroll
  },
  {
    id: 5,
    title: "Flame-Retardant Polybags",
    description: "Our flame-retardant polybags are designed to resist ignition and slow the spread of flames, providing enhanced safety in high-risk environments. Ideal for industries requiring fire-resistant packaging solutions.",
    applications: [
      "Secure packaging for electronic components",
      "Safe storage of flammable materials",
      "Protective wrapping for construction and insulation products"
    ],
    image: flameretardantpolybags
  }
];

export const granules = [
  {
    id: 1,
    title: "LDPE Granules",
    description: "Flexible and transparent films, packaging bags, and agricultural sheets.",
    image: ldpegranuels
  },
  {
    id: 2,
    title: "LLDPE Granules",
    description: "High-strength stretch films, industrial liners, and multilayer packaging.",
    image: lldpegranuels
  },
  {
    id: 3,
    title: "HDPE Granules",
    description: "Rigid containers, pipes, and heavy-duty plastic products.",
    image: hdpegranuels
  }
];