import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL ?? "file:./dev.db";

const adapter = new PrismaBetterSqlite3({
  url: connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const demoProducts = [
  // GOLD
  { slug: "mimu-aurelia-gold-ring", name: "MIMU Aurelia Gold Ring", category: "gold", type: "Ring", collection: "Signature", description: "Distinctive warmth. A timeless gold ring designed for enduring elegance.", price: 45000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-001", stock: 5, available: true, featured: true },
  { slug: "mimu-solenne-gold-necklace", name: "MIMU Solenne Gold Necklace", category: "gold", type: "Necklace", collection: "Heritage", description: "Classic craftsmanship.", price: 65000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-002", stock: 3, available: true, featured: true },
  { slug: "mimu-celeste-gold-earrings", name: "MIMU Celeste Gold Earrings", category: "gold", type: "Earrings", collection: "Contemporary", description: "Subtle elegance.", price: 32000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-003", stock: 10, available: true, featured: false },
  { slug: "mimu-lumiere-gold-pendant", name: "MIMU Lumière Gold Pendant", category: "gold", type: "Pendant", collection: "Signature", description: "A radiant expression.", price: 28000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-004", stock: 8, available: true, featured: true },
  { slug: "mimu-elan-gold-bracelet", name: "MIMU Élan Gold Bracelet", category: "gold", type: "Bracelet", collection: "Signature", description: "Refined and structured.", price: 85000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-005", stock: 4, available: true, featured: false },
  { slug: "mimu-signature-gold-hoops", name: "MIMU Signature Gold Hoops", category: "gold", type: "Earrings", collection: "Signature", description: "An everyday statement.", price: 42000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-006", stock: 15, available: true, featured: true },
  { slug: "mimu-amara-gold-chain", name: "MIMU Amara Gold Chain", category: "gold", type: "Necklace", collection: "Essentials", description: "A fine, durable chain.", price: 55000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-007", stock: 12, available: true, featured: false },
  { slug: "mimu-noelle-gold-statement-ring", name: "MIMU Noelle Gold Statement Ring", category: "gold", type: "Ring", collection: "Heritage", description: "Bold and intricate.", price: 78000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-008", stock: 2, available: true, featured: true },
  { slug: "mimu-heritage-gold-pendant", name: "MIMU Heritage Gold Pendant", category: "gold", type: "Pendant", collection: "Heritage", description: "Traditional roots, modern form.", price: 34000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-009", stock: 5, available: true, featured: false },
  { slug: "mimu-sienna-gold-earrings", name: "MIMU Sienna Gold Earrings", category: "gold", type: "Earrings", collection: "Contemporary", description: "Fluid, contemporary design.", price: 48000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-010", stock: 6, available: true, featured: false },
  { slug: "mimu-aster-gold-bracelet", name: "MIMU Aster Gold Bracelet", category: "gold", type: "Bracelet", collection: "Contemporary", description: "Subtle chain bracelet.", price: 29000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-011", stock: 10, available: true, featured: false },
  { slug: "mimu-etoile-gold-necklace", name: "MIMU Étoile Gold Necklace", category: "gold", type: "Necklace", collection: "Signature", description: "Stunning star motifs.", price: 92000, primaryImage: "/images/Gold.jpeg", material: "Gold", sku: "MIMU-G-012", stock: 3, available: true, featured: true },

  // SILVER
  { slug: "mimu-luna-silver-ring", name: "MIMU Luna Silver Ring", category: "silver", type: "Ring", collection: "Contemporary", description: "Refined form. A luminous silver ring for quietly distinctive expression.", price: 18000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-001", stock: 12, available: true, featured: true },
  { slug: "mimu-selene-silver-necklace", name: "MIMU Selene Silver Necklace", category: "silver", type: "Necklace", collection: "Contemporary", description: "Cool and poised.", price: 22000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-002", stock: 8, available: true, featured: true },
  { slug: "mimu-mira-silver-earrings", name: "MIMU Mira Silver Earrings", category: "silver", type: "Earrings", collection: "Essentials", description: "Perfect minimal studs.", price: 12000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-003", stock: 20, available: true, featured: false },
  { slug: "mimu-solace-silver-pendant", name: "MIMU Solace Silver Pendant", category: "silver", type: "Pendant", collection: "Signature", description: "Understated elegance.", price: 15000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-004", stock: 15, available: true, featured: true },
  { slug: "mimu-elara-silver-bracelet", name: "MIMU Elara Silver Bracelet", category: "silver", type: "Bracelet", collection: "Contemporary", description: "A fluid silver cuff.", price: 28000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-005", stock: 7, available: true, featured: false },
  { slug: "mimu-signature-silver-hoops", name: "MIMU Signature Silver Hoops", category: "silver", type: "Earrings", collection: "Signature", description: "The perfect everyday hoop.", price: 16000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-006", stock: 25, available: true, featured: true },
  { slug: "mimu-aria-silver-chain", name: "MIMU Aria Silver Chain", category: "silver", type: "Necklace", collection: "Essentials", description: "Delicate and strong.", price: 19000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-007", stock: 14, available: true, featured: false },
  { slug: "mimu-nova-silver-statement-ring", name: "MIMU Nova Silver Statement Ring", category: "silver", type: "Ring", collection: "Contemporary", description: "Architectural design.", price: 32000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-008", stock: 4, available: true, featured: true },
  { slug: "mimu-lumi-silver-pendant", name: "MIMU Lumi Silver Pendant", category: "silver", type: "Pendant", collection: "Contemporary", description: "Catch the light.", price: 14500, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-009", stock: 9, available: true, featured: false },
  { slug: "mimu-seren-silver-earrings", name: "MIMU Seren Silver Earrings", category: "silver", type: "Earrings", collection: "Signature", description: "Flowing shapes.", price: 21000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-010", stock: 11, available: true, featured: false },
  { slug: "mimu-aster-silver-bracelet", name: "MIMU Aster Silver Bracelet", category: "silver", type: "Bracelet", collection: "Contemporary", description: "Light chain details.", price: 17500, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-011", stock: 16, available: true, featured: false },
  { slug: "mimu-celeste-silver-necklace", name: "MIMU Celeste Silver Necklace", category: "silver", type: "Necklace", collection: "Contemporary", description: "A celestial-inspired piece.", price: 34000, primaryImage: "/images/Silver.jpeg", material: "Silver", sku: "MIMU-S-012", stock: 6, available: true, featured: true },
];

async function main() {
  console.log('🌱 Seeding MIMU database...');

  // Clear existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Seed products
  for (const product of demoProducts) {
    await prisma.product.create({ data: product });
  }

  // Create demo admin user
  await prisma.user.create({
    data: {
      email: 'admin@mimu.in',
      password: 'demo-password-hash', // In production, use bcrypt
      name: 'Milan Mundada',
      role: 'ADMIN',
    },
  });

  console.log(`✅ Seeded ${demoProducts.length} products and 1 admin user.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
