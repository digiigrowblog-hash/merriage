interface FormData {
  phone: string; otp: string;
  name: string; age: number; height: string;
  address: { lat: number; lng: number; formatted: string }; pincode: string;
  eating: 'vegetarian' | 'non-veg' | 'prefer-not';
  gender: 'male' | 'female' | 'non-binary';
  orientation: 'straight' | 'gay' | 'transgender';
  preference: 'women' | 'men' | 'both';
  job: { company: string; role: string; salary?: number };
  health: { disease: boolean; smoking: boolean; drinking: boolean; drugs: boolean };
  hobbies: string[]; // max 5 keywords
  images: File[];
  email: string; emailOtp: string;
}
