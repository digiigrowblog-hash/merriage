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
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_hidden_by_user" BOOLEAN NOT NULL DEFAULT false,
    "last_active_at" TIMESTAMP(3),
    "email_otp_expires_at" TIMESTAMP(3),
    "id_verification_ref" TEXT,
    "id_verification_status" TEXT,
    "phone_otp_expires_at" TIMESTAMP(3),
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "refresh_token_hash" TEXT NOT NULL,
    "user_agent" TEXT,
    "ip_address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
