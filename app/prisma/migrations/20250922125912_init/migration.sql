-- CreateTable
CREATE TABLE "public"."Mountain" (
    "id" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "elevation" INTEGER NOT NULL,
    "coords" TEXT,
    "photoUrl" TEXT NOT NULL,
    "videoUrl" TEXT,

    CONSTRAINT "Mountain_pkey" PRIMARY KEY ("id")
);
