-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('NEVER', 'SOMETIMES', 'OFTEN');

-- CreateEnum
CREATE TYPE "IdVerificationType" AS ENUM ('PAN', 'AADHAR', 'PASSPORT');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "phoneOtp" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "height_cm" DOUBLE PRECISION,
    "address" JSONB NOT NULL,
    "eating" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "orientation" TEXT NOT NULL,
    "preference" TEXT NOT NULL,
    "company" TEXT,
    "job_role" TEXT,
    "salary" DOUBLE PRECISION,
    "health" JSONB NOT NULL,
    "hobbies" TEXT[],
    "images" TEXT[],
    "religion" TEXT NOT NULL,
    "caste" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_otp" TEXT,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "id_verification" "IdVerificationType",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
