// types/signup.ts
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
  salary?: string;
  health: string[];
  hobbies: string[];
  images: File[];
  email: string;
  emailOtp: string;
}

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
