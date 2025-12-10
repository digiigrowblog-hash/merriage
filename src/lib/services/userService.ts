// src/services/userService.ts (adjust path as you like)
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Zod schema for incoming signup payload FROM CLIENT
export const createUserSchema = z.object({
  phone: z.string(),
  email: z.string().email(),

  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be 18+").max(100),

  heightCm: z.number().nullable(),
  address: z.object({
    lat: z.number().nullable(),
    lng: z.number().nullable(),
    formatted: z.string(),
  }),
  eating: z.string(),
  gender: z.string(),
  orientation: z.string(),
  preference: z.string(),

  company: z.string().nullable(),
  jobRole: z.string().nullable(),
  salary: z.number().nullable(),

  health: z.object({
    chronicDisease: z.boolean(),
    smoking: z.enum(["never", "sometimes", "often"]),
    drinking: z.enum(["never", "sometimes", "often"]),
    drugs: z.enum(["never", "sometimes"]),
  }),

  hobbies: z.array(z.string()).min(1),
  images: z.array(z.string()).min(1, "At least one image required"),

  religion: z.string(),
  caste: z.string(),

  idVerification: z.enum(["PAN", "AADHAR", "PASSPORT"]).nullable().optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

// Internal type used by service: client data + server generated OTPs
export type CreateUserWithOtp = CreateUserInput & {
  phoneOtp: string;
  emailOtp: string;
  otpExpiresAt: Date;
};

export async function createUser(data: CreateUserWithOtp) {
  const now = new Date();

  return prisma.user.create({
    data: {
      phone: data.phone,
      phoneOtp: data.phoneOtp,
      phoneOtpExpiresAt: data.otpExpiresAt,
      phoneVerified: false,

      email: data.email,
      emailOtp: data.emailOtp,
      emailOtpExpiresAt: data.otpExpiresAt,
      emailVerified: false,

      name: data.name,
      age: data.age,
      heightCm: data.heightCm,
      address: data.address,
      eating: data.eating,
      gender: data.gender,
      orientation: data.orientation,
      preference: data.preference,
      company: data.company,
      jobRole: data.jobRole,
      salary: data.salary,
      health: data.health,
      hobbies: data.hobbies,
      images: data.images,
      religion: data.religion,
      caste: data.caste,

      lastActiveAt: now,
      isActive: true,
      isHiddenByUser: false,

      idVerification: data.idVerification ?? null,
      idVerificationStatus: "PENDING",
      idVerificationRef: null,
    },
  });
}

// Basic helpers (you can keep using these)

export async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function getUserByPhone(phone: string) {
  return prisma.user.findUnique({
    where: { phone },
  });
}


export async function updateUserPhoneVerified(id: number) {
  return prisma.user.update({
    where: { id },
    data: {
      phoneVerified: true,
      phoneOtp: "",
      phoneOtpExpiresAt: null,
    },
  });
}


export async function updateUserEmailVerified(id: number) {
  return prisma.user.update({
    where: { id },
    data: {
      emailVerified: true,
      emailOtp: "",
      emailOtpExpiresAt: null,
    },
  });
}
