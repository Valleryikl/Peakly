import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // очищаем таблицу перед заливкой (опционально)
  await prisma.mountain.deleteMany();

  await prisma.mountain.createMany({
    data: [
      {
        slug: "everest",
        name: "EEEEverest",
        country: "Nepal/China",
        elevation: 8848,
        rank: 1,
        coords: "27.9881,86.9250",
        photoUrl: "https://upload.wikimedia.org/everest.jpg"
      },
      {
        slug: "mont-blanc",
        name: "Mont Blanc",
        country: "France/Italy",
        elevation: 4807,
        rank: 2,
        coords: "45.8326,6.8652",
        photoUrl: "https://upload.wikimedia.org/montblanc.jpg"
      }
    ]
  });

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
