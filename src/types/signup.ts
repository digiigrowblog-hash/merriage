export interface FormData {
  phone: string;
  phoneOtp: string;
  name: string;
  age: string;
  height: string;
  address: { lat: number | null; lng: number | null; formatted: string };
  eating: 'vegetarian' | 'non-veg' | 'prefer-not' | '';
  gender: 'male' | 'female' | 'non-binary' | '';
  orientation: 'straight' | 'gay' | 'transgender' | '';
  preference: 'women' | 'men' | 'both' | '';
  company: string;
  jobRole: string;
  salary: string;
  health: string[];
  religion: string;
  caste: string;
  idVerification: 'pan' | 'aadhar' | 'passport' | '';
  idNumber: string;  // ✅ Fixed: proper type definition
  hobbies: string[];
  images: File[];
  email: string;
  emailOtp: string;
}


export const RELIGIONS = [
  { value: 'hindu', label: 'Hindu' },
  { value: 'muslim', label: 'Muslim' },
  { value: 'christian', label: 'Christian' },
  { value: 'sikh', label: 'Sikh' },
  { value: 'jain', label: 'Jain' },
  { value: 'buddhist', label: 'Buddhist' },
  { value: 'other', label: 'Other' }
];

export const HOBBIES = [
  { value: 'music', label: 'Music' },
  { value: 'travel', label: 'Travel' },
  { value: 'coding', label: 'Coding' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'reading', label: 'Reading' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'photography', label: 'Photography' },
  { value: 'sports', label: 'Sports' },
  { value: 'movies', label: 'Movies' },
  { value: 'dancing', label: 'Dancing' },
  { value: 'painting', label: 'Painting' },
  { value: 'hiking', label: 'Hiking' },
  { value: 'writing', label: 'Writing' },
  { value: 'yoga', label: 'Yoga' }
];
