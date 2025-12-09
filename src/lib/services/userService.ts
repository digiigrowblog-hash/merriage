import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { User } from '@/types'

// Zod validation schema matching your types
export const createUserSchema = z.object({
  phone: z.string(),
  phoneOtp: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(18, "Must be 18+").max(100),
  height: z.number().nullable(),
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
    smoking: z.enum(['never', 'sometimes', 'often']),
    drinking: z.enum(['never', 'sometimes', 'often']),
    drugs: z.enum(['never', 'sometimes']),
  }),
  hobbies: z.array(z.string()).min(1),
  images: z.array(z.string()).min(1, "At least one image required"),
  email: z.string().email(),
  emailOtp: z.string().nullable(),
  idVerification: z.enum(['PAN', 'AADHAR', 'PASSPORT']).nullable(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>

export async function createUser(data: CreateUserInput) {
  return await prisma.user.create({
    data: {
      phone: data.phone,
      phoneOtp: data.phoneOtp,
      name: data.name,
      age: data.age,
      heightCm: data.height,
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
      email: data.email,
      emailOtp: data.emailOtp,
      idVerification: data.idVerification,
    },
  })
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
  })
}

export async function getUserByPhone(phone: string) {
  return await prisma.user.findUnique({
    where: { phone },
  })
}

export async function updateUserPhoneVerified(id: number) {
  return await prisma.user.update({
    where: { id },
    data: { phoneOtp: '' },
  })
}
