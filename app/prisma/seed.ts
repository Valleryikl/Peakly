import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.mountain.deleteMany();

  await prisma.mountain.createMany({
    data: [
      {
        id: 1,
        rank: 1,
        name: "Everest",
        country: "Nepal/China",
        elevation: 8848,
        slogan: "Everest — the crown of our planet",
        description: "The highest mountain on Earth — 8,848.86 m (29,031 ft) above sea level, straddling the Nepal–China border. Two main climbing routes — from the south via Nepal and from the north via Tibet. Hazards of the ascent — altitude sickness, avalanches, the Khumbu Icefall, severe weather, and strong winds. First documented ascent — 1953 by Edmund Hillary and Tenzing Norgay. Over 340 deaths as of May 2024 — due to extreme conditions, many bodies remain on the mountain.",
        coords: "27°59′17″N 86°55′30″E",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        videoUrl: "https://youtu.be/0pIyIMqwu0E",
      },
      {
        id: 2,
        rank: 2,
        name: "K2",
        country: "Pakistan/China",
        elevation: 8611,
        slogan: "K2 — the Wild Summit of the World",
        description: "The world’s second-highest peak — 8,611 m (28,251 ft) above sea level, second only to Everest. The deadliest of the eight-thousanders — for many years K2 had the highest fatality rate among the tallest peaks. Never had an authentic local name — “K2” remained from the 19th-century British Great Trigonometrical Survey. First ascent in 1954 — by Italians Lino Lacedelli and Achille Compagnoni. Its eastern face remains unclimbed — due to unstable ice and avalanche hazards.",
        coords: "35°52′53″N 76°30′48″E",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Chogori.jpg/1280px-Chogori.jpg",
        videoUrl: "https://youtu.be/Ou3m2Ic4gFE",
      },
      {
        id: 3,
        rank: 3,
        name: "Kangchenjunga",
        country: "Nepal/India",
        elevation: 8586,
        slogan: "Kangchenjunga — The Five Treasures of the Great Snow",
        description: "The world’s third-highest mountain — 8,586 m (28,169 ft), straddling the Nepal–India (Sikkim) border. A sacred peak — in 1955 climbers stopped just short of the true summit to honor its sanctity. Its name means “The Five Treasures of the Great Snow” — symbolizing spiritual treasures hidden in the mountains. Four massive glaciers — feed the Teesta, Arun, and Kosi rivers; a vital water source for the region. UNESCO World Heritage Site — the adjoining Khangchendzonga National Park has been protected since 2016.",
        coords: "35°52′53″N 76°30′48″E",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Kangchenjunga%2C_India.jpg",
        videoUrl: "https://youtu.be/Irj6_lTQbeg",
      },
      {
        id: 4,
        rank: 4,
        name: "Lhotse",
        country: "China/Nepal",
        elevation: 8516,
        slogan: "Lhotse — The Southern Guardian of Everest",
        description: "The world’s fourth-highest mountain — 8,516 m, forming a giant horseshoe of the Everest massif together with Everest and Nuptse. Its name means “South Peak” — marking its position south of Everest and its link via the South Col. Four main summits — Main, Middle, Central II, and Shar — creating one of the Himalayas most striking ridges. Lhotse’s South Face — among the most difficult and dangerous climbs on Earth; its North East Face remains unclimbed. The ascent route — follows the Lhotse Face and the narrow Reiss Couloir, a dramatic gateway to the summit.",
        coords: "27°42′12″N 88°08′51″E",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Lhotse-fromChukhungRi.jpg",
        videoUrl: "https://youtu.be/OTQtiIFbA6g",
      },
      {
        id: 5,
        rank: 5,
        name: "Makalu",
        country: "Nepal/China",
        elevation: 8485,
        slogan: "Makalu — The Pyramid of the Himalayas",
        description: "The world’s fifth-highest mountain — 8,485 m (27,838 ft), located 19 km southeast of Everest on the Nepal–China border. Pyramid shape — the only eight-thousander with a near-perfect four-sided pyramid profile. Two notable satellite peaks — Kangchungtse (Makalu II, 7,678 m) and Chomo Lonzo (7,804 m), linked to Makalu by the narrow Makalu La saddle. An isolated summit — separated from neighboring mountains by broad plateaus and deep valleys, making it a tougher climb. Standard route via Makalu La — follows the North Face and Northeast Ridge, where extreme altitude and fierce winds dominate.",
        coords: "27°53′23″N 87°05′20″E",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Makalu.jpg",
        videoUrl: "https://youtu.be/XFXpPWGwd7E",
      },
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
