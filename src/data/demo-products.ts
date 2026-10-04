export type ProductCategory = "gold" | "silver";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  type: string;
  collection: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  primaryImage: string;
  galleryImages: string[];
  material: string;
  sku: string;
  stock: number;
  available: boolean;
  featured: boolean;
  tags: string[];
}

export const demoProducts: Product[] = [
  // GOLD PRODUCTS
  { id: "g-01", slug: "mimu-aurelia-gold-ring", name: "MIMU Aurelia Gold Ring", category: "gold", type: "Ring", collection: "Signature", description: "Distinctive warmth. A timeless gold ring designed for enduring elegance.", price: 45000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-001", stock: 5, available: true, featured: true, tags: ["gold", "ring"] },
  { id: "g-02", slug: "mimu-solenne-gold-necklace", name: "MIMU Solenne Gold Necklace", category: "gold", type: "Necklace", collection: "Heritage", description: "Classic craftsmanship.", price: 65000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-002", stock: 3, available: true, featured: true, tags: ["gold", "necklace"] },
  { id: "g-03", slug: "mimu-celeste-gold-earrings", name: "MIMU Celeste Gold Earrings", category: "gold", type: "Earrings", collection: "Contemporary", description: "Subtle elegance.", price: 32000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-003", stock: 10, available: true, featured: false, tags: ["gold", "earrings"] },
  { id: "g-04", slug: "mimu-lumiere-gold-pendant", name: "MIMU Lumière Gold Pendant", category: "gold", type: "Pendant", collection: "Signature", description: "A radiant expression.", price: 28000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-004", stock: 8, available: true, featured: true, tags: ["gold", "pendant"] },
  { id: "g-05", slug: "mimu-elan-gold-bracelet", name: "MIMU Élan Gold Bracelet", category: "gold", type: "Bracelet", collection: "Signature", description: "Refined and structured.", price: 85000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-005", stock: 4, available: true, featured: false, tags: ["gold", "bracelet"] },
  { id: "g-06", slug: "mimu-signature-gold-hoops", name: "MIMU Signature Gold Hoops", category: "gold", type: "Earrings", collection: "Signature", description: "An everyday statement.", price: 42000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-006", stock: 15, available: true, featured: true, tags: ["gold", "earrings"] },
  { id: "g-07", slug: "mimu-amara-gold-chain", name: "MIMU Amara Gold Chain", category: "gold", type: "Necklace", collection: "Essentials", description: "A fine, durable chain.", price: 55000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-007", stock: 12, available: true, featured: false, tags: ["gold", "necklace"] },
  { id: "g-08", slug: "mimu-noelle-gold-statement-ring", name: "MIMU Noelle Gold Statement Ring", category: "gold", type: "Ring", collection: "Heritage", description: "Bold and intricate.", price: 78000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-008", stock: 2, available: true, featured: true, tags: ["gold", "ring"] },
  { id: "g-09", slug: "mimu-heritage-gold-pendant", name: "MIMU Heritage Gold Pendant", category: "gold", type: "Pendant", collection: "Heritage", description: "Traditional roots, modern form.", price: 34000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-009", stock: 5, available: true, featured: false, tags: ["gold", "pendant"] },
  { id: "g-10", slug: "mimu-sienna-gold-earrings", name: "MIMU Sienna Gold Earrings", category: "gold", type: "Earrings", collection: "Contemporary", description: "Fluid, contemporary design.", price: 48000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-010", stock: 6, available: true, featured: false, tags: ["gold", "earrings"] },
  { id: "g-11", slug: "mimu-aster-gold-bracelet", name: "MIMU Aster Gold Bracelet", category: "gold", type: "Bracelet", collection: "Contemporary", description: "Subtle chain bracelet.", price: 29000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-011", stock: 10, available: true, featured: false, tags: ["gold", "bracelet"] },
  { id: "g-12", slug: "mimu-etoile-gold-necklace", name: "MIMU Étoile Gold Necklace", category: "gold", type: "Necklace", collection: "Signature", description: "Stunning star motifs.", price: 92000, currency: "INR", primaryImage: "/images/Gold.jpeg", galleryImages: [], material: "Gold", sku: "MIMU-G-012", stock: 3, available: true, featured: true, tags: ["gold", "necklace"] },

  // SILVER PRODUCTS
  { id: "s-01", slug: "mimu-luna-silver-ring", name: "MIMU Luna Silver Ring", category: "silver", type: "Ring", collection: "Contemporary", description: "Refined form. A luminous silver ring for quietly distinctive expression.", price: 18000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-001", stock: 12, available: true, featured: true, tags: ["silver", "ring"] },
  { id: "s-02", slug: "mimu-selene-silver-necklace", name: "MIMU Selene Silver Necklace", category: "silver", type: "Necklace", collection: "Contemporary", description: "Cool and poised.", price: 22000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-002", stock: 8, available: true, featured: true, tags: ["silver", "necklace"] },
  { id: "s-03", slug: "mimu-mira-silver-earrings", name: "MIMU Mira Silver Earrings", category: "silver", type: "Earrings", collection: "Essentials", description: "Perfect minimal studs.", price: 12000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-003", stock: 20, available: true, featured: false, tags: ["silver", "earrings"] },
  { id: "s-04", slug: "mimu-solace-silver-pendant", name: "MIMU Solace Silver Pendant", category: "silver", type: "Pendant", collection: "Signature", description: "Understated elegance.", price: 15000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-004", stock: 15, available: true, featured: true, tags: ["silver", "pendant"] },
  { id: "s-05", slug: "mimu-elara-silver-bracelet", name: "MIMU Elara Silver Bracelet", category: "silver", type: "Bracelet", collection: "Contemporary", description: "A fluid silver cuff.", price: 28000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-005", stock: 7, available: true, featured: false, tags: ["silver", "bracelet"] },
  { id: "s-06", slug: "mimu-signature-silver-hoops", name: "MIMU Signature Silver Hoops", category: "silver", type: "Earrings", collection: "Signature", description: "The perfect everyday hoop.", price: 16000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-006", stock: 25, available: true, featured: true, tags: ["silver", "earrings"] },
  { id: "s-07", slug: "mimu-aria-silver-chain", name: "MIMU Aria Silver Chain", category: "silver", type: "Necklace", collection: "Essentials", description: "Delicate and strong.", price: 19000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-007", stock: 14, available: true, featured: false, tags: ["silver", "necklace"] },
  { id: "s-08", slug: "mimu-nova-silver-statement-ring", name: "MIMU Nova Silver Statement Ring", category: "silver", type: "Ring", collection: "Contemporary", description: "Architectural design.", price: 32000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-008", stock: 4, available: true, featured: true, tags: ["silver", "ring"] },
  { id: "s-09", slug: "mimu-lumi-silver-pendant", name: "MIMU Lumi Silver Pendant", category: "silver", type: "Pendant", collection: "Contemporary", description: "Catch the light.", price: 14500, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-009", stock: 9, available: true, featured: false, tags: ["silver", "pendant"] },
  { id: "s-10", slug: "mimu-seren-silver-earrings", name: "MIMU Seren Silver Earrings", category: "silver", type: "Earrings", collection: "Signature", description: "Flowing shapes.", price: 21000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-010", stock: 11, available: true, featured: false, tags: ["silver", "earrings"] },
  { id: "s-11", slug: "mimu-aster-silver-bracelet", name: "MIMU Aster Silver Bracelet", category: "silver", type: "Bracelet", collection: "Contemporary", description: "Light chain details.", price: 17500, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-011", stock: 16, available: true, featured: false, tags: ["silver", "bracelet"] },
  { id: "s-12", slug: "mimu-celeste-silver-necklace", name: "MIMU Celeste Silver Necklace", category: "silver", type: "Necklace", collection: "Contemporary", description: "A celestial-inspired piece.", price: 34000, currency: "INR", primaryImage: "/images/Silver.jpeg", galleryImages: [], material: "Silver", sku: "MIMU-S-012", stock: 6, available: true, featured: true, tags: ["silver", "necklace"] },
];
