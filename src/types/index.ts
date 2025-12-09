export interface Address {
  lat: number | null;
  lng: number | null;
  formatted: string;
}

export type Frequency = "never" | "sometimes" | "often";

export interface HealthInfo {
  chronicDisease: boolean;
  smoking: Frequency;
  drinking: Frequency;
  drugs: "never" | "sometimes";
}

export type IdVerificationType = "pan" | "aadhar" | "passport" | null;

// Prisma will generate User type, but keep for reference
export interface User {
  id: number;
  phone: string;
  phoneOtp: string;
  name: string;
  age: number;
  heightCm?: number | null;  // Note: matches Prisma field name
  address: Address;
  eating: string;
  gender: string;
  orientation: string;
  preference: string;
  company?: string | null;
  jobRole?: string | null;
  salary?: number | null;
  health: HealthInfo;
  hobbies: string[];
  images: string[];
  email: string;
  emailOtp?: string | null;
  emailVerified: boolean;
  idVerification: IdVerificationType;
  createdAt: Date;
}

export type CreateUserInput = Omit<User, "id" | "emailVerified" | "createdAt">;
