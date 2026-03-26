import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  // Dumplings
  {
    name: "The Classic",
    description: "Pork & Ginger - Juicy pork with fresh ginger and scallions. Served with our house soy dip.",
    price: 9.50,
    category: "Dumplings",
    image: "/images/classic-pork.png"
  },
  {
    name: "Green Veggie",
    description: "Spinach & Feta - A delicious blend of fresh spinach and creamy feta cheese.",
    price: 9.00,
    category: "Dumplings",
    image: "/images/green-veggie.png"
  },
  {
    name: "Vegan Delight",
    description: "Potato & Mushroom - Hearty potatoes and earthy mushrooms. 100% vegan and gluten-free dough.",
    price: 9.00,
    category: "Dumplings",
    image: "/images/vegan-delight.png"
  },
  {
    name: "Spicy Beef",
    description: "Beef & Chili - Minced beef with chili and aromatic spices for those who like it hot.",
    price: 10.50,
    category: "Dumplings",
    image: "/images/spicy-beef.png"
  },
  {
    name: "Chicken Teriyaki",
    description: "Chicken & Scallion - Tender chicken in a savory teriyaki glaze.",
    price: 10.00,
    category: "Dumplings",
    image: "/images/chicken-teriyaki.png"
  },
  // Sides
  {
    name: "Edamame",
    description: "Steamed soybeans with sea salt. A perfect starter.",
    price: 4.50,
    category: "Sides",
    image: "/images/edamame.png"
  },
  {
    name: "Wakame Salad",
    description: "Traditional Japanese seaweed salad with sesame dressing and sesame seeds.",
    price: 5.50,
    category: "Sides",
    image: "/images/wakame.png"
  },
  {
    name: "Miso Soup",
    description: "Warm miso broth with tofu, seaweed, and scallions.",
    price: 3.50,
    category: "Sides",
    image: "/images/miso-soup.png"
  },
  {
    name: "Rice Bowl",
    description: "Fluffy steamed jasmine rice.",
    price: 3.00,
    category: "Sides",
    image: "/images/rice-bowl.png"
  },
  // Drinks
  {
    name: "Homemade Ginger Lemonade",
    description: "Refreshing lemonade with a spicy ginger kick. 0.5l",
    price: 4.80,
    category: "Drinks",
    image: "/images/ginger-lemonade.png"
  },
  {
    name: "Organic Apple Juice",
    description: "100% natural cloudy apple juice from local orchards. 0.33l",
    price: 3.90,
    category: "Drinks",
    image: "/images/apple-juice.png"
  },
  {
    name: "Stiegl Beer",
    description: "Classic Austrian lager. 0.5l",
    price: 4.50,
    category: "Drinks",
    image: "/images/stiegl-beer.png"
  },
  {
    name: "Vöslauer Water",
    description: "Mineral water (still or sparkling). 0.5l",
    price: 3.20,
    category: "Drinks",
    image: "/images/mineral-water.png"
  }
]

async function main() {
  console.log('Start seeding...')
  
  // Clear existing products to ensure a fresh start
  await prisma.orderItem.deleteMany({})
  await prisma.product.deleteMany({})
  
  for (const product of products) {
    const p = await prisma.product.create({
      data: product,
    })
    console.log(`Created product: ${p.name} with id: ${p.id}`)
  }
  
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
