-- CreateTable
CREATE TABLE "public"."Vulcan" (
    "id" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "elevation" INTEGER NOT NULL,
    "slogan" TEXT,
    "description" TEXT,
    "coords" TEXT,
    "photoUrl" TEXT NOT NULL,
    "videoUrl" TEXT,

    CONSTRAINT "Vulcan_pkey" PRIMARY KEY ("id")
);
