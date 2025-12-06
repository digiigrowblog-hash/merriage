'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Stepper } from '@/components/ui/Stepper';
import InputField from '@/components/ui/InputField';
import PhoneInput from '@/components/ui/PhoneInput';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { CheckboxGroup } from '@/components/ui/CheckboxGroup';
import { TagSelector, HOBBIES } from '@/components/ui/TagSelector';
import { ImageUploader } from '@/components/ui/ImageUploader';
import { GoogleAddressPicker } from '@/components/ui/GoogleAddressPicker';
import type { FormData } from '@/types/signup';

const STEPS = [
  'Phone', 'Basic Info', 'Address', 'Diet', 'Gender', 'Orientation',
  'Preference', 'Job', 'Health', 'Hobbies', 'Photos', 'Email'
];

const TOTAL_STEPS = STEPS.length;

export default function SignupPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    phoneOtp: '',
    name: '',
    age: '',
    height: '',
    address: { lat: null, lng: null, formatted: '' },
    eating: '',
    gender: '',
    orientation: '',
    preference: '',
    company: '',
    jobRole: '',
    salary: '',
    health: [],
    hobbies: [],
    images: [],
    email: '',
    emailOtp: '',
  });

  // Persist to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('signup-form', JSON.stringify(formData));
    }
  }, [formData]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (activeStep === TOTAL_STEPS) {
      handleSubmit();
    } else if (validateStep(activeStep, formData)) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    const submitData = new FormData();
    // Add all form data to FormData for multipart upload
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'images') {
        (value as File[]).forEach((file, idx) => {
          submitData.append(`image${idx}`, file);
        });
      } else if (value) {
        submitData.append(key, String(value));
      }
    });

    try {
      // await fetch('/api/signup', { method: 'POST', body: submitData });
      console.log('Form submitted:', Object.fromEntries(submitData));
      localStorage.removeItem('signup-form');
      router.push('/home');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const canNext = validateStep(activeStep, formData);

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <PhoneInput
            value={formData.phone}
            onChange={phone => updateField('phone', phone || '')}
            onOtpVerify={otp => updateField('phoneOtp', otp)}
          />
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Full Name *"
              name="name"
              value={formData.name}
              onChange={v => updateField('name', v as string)}
              required
            />
            <InputField
              label="Age *"
              name="age"
              type="number"
              min={18}
              value={formData.age}
              onChange={v => updateField('age', v as string)}
              required
            />
            <InputField
              label="Height (cm)"
              name="height"
              type="number"
              min={100}
              max={250}
              value={formData.height}
              onChange={v => updateField('height', v as string)}
            />
          </div>
        );

      case 3:
        return (
          <GoogleAddressPicker
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
            onSelect={address => updateField('address', address)}
          />
        );

      case 4:
        return (
          <RadioGroup
            name="eating"
            title="Eating Preference *"
            value={formData.eating}
            onChange={v => updateField('eating', v as any)}
            options={[
              { value: 'vegetarian', label: 'Vegetarian' },
              { value: 'non-veg', label: 'Non-vegetarian' },
              { value: 'prefer-not', label: 'Prefer not to say' },
            ]}
          />
        );

      case 5:
        return (
          <RadioGroup
            name="gender"
            title="Gender *"
            value={formData.gender}
            onChange={v => updateField('gender', v as any)}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'non-binary', label: 'Non-binary' },
            ]}
          />
        );

      case 6:
        return (
          <RadioGroup
            name="orientation"
            title="Sexual Orientation *"
            value={formData.orientation}
            onChange={v => updateField('orientation', v as any)}
            options={[
              { value: 'straight', label: 'Straight' },
              { value: 'gay', label: 'Gay/Lesbian' },
              { value: 'transgender', label: 'Transgender' },
            ]}
          />
        );

      case 7:
        return (
          <RadioGroup
            name="preference"
            title="Who would you like to date? *"
            value={formData.preference}
            onChange={v => updateField('preference', v as any)}
            options={[
              { value: 'women', label: 'Women' },
              { value: 'men', label: 'Men' },
              { value: 'both', label: 'Both' },
            ]}
          />
        );

      case 8:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Company"
              name="company"
              value={formData.company}
              onChange={v => updateField('company', v as string)}
            />
            <InputField
              label="Job Role"
              name="jobRole"
              value={formData.jobRole}
              onChange={v => updateField('jobRole', v as string)}
            />
            <InputField
              label="Salary (optional)"
              name="salary"
              type="number"
              value={formData.salary || ''}
              onChange={v => updateField('salary', v as string)}
            />
          </div>
        );

      case 9:
        return (
          <CheckboxGroup
            title="Health & Lifestyle"
            options={[
              { value: 'disease', label: 'Any chronic disease', tooltip: 'Diabetes, hypertension, etc.' },
              { value: 'smoking', label: 'I smoke', tooltip: 'Occasional or regular' },
              { value: 'drinking', label: 'I drink alcohol', tooltip: 'Socially or regularly' },
              { value: 'drugs', label: 'I use recreational drugs' },
            ]}
            values={formData.health}
            onChange={vals => updateField('health', vals)}
          />
        );

      case 10:
        return (
          <TagSelector
            title="Select your hobbies"
            options={HOBBIES}
            selected={formData.hobbies}
            onChange={vals => updateField('hobbies', vals)}
            maxTags={5}
          />
        );

      case 11:
        return (
          <ImageUploader
            images={formData.images}
            onChange={images => updateField('images', images)}
            maxFiles={4}
          />
        );

      case 12:
        return (
          <div className="space-y-6">
            <InputField
              label="Email Address *"
              name="email"
              type="email"
              value={formData.email}
              onChange={v => updateField('email', v as string)}
              required
            />
            {/* Email OTP similar to Phone OTP */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800">
                Email verification will be sent after form submission
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
          <Stepper
            activeStep={activeStep}
            totalSteps={TOTAL_STEPS}
            steps={STEPS}
          />

          <div className="mt-8">
            <div className="min-h-[200px]">
              {renderStepContent()}
            </div>

            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={activeStep === 1}
                className="px-8 py-3 rounded-2xl border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Previous</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!canNext}
                className="px-12 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2"
              >
                <span>{activeStep === TOTAL_STEPS ? 'Create Account' : 'Next Step'}</span>
                {activeStep === TOTAL_STEPS ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </div>

            {activeStep !== TOTAL_STEPS && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-500">
                  Step {activeStep} of {TOTAL_STEPS}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function validateStep(step: number, data: FormData): boolean {
  switch (step) {
    case 1: return !!data.phone && !!data.phoneOtp;
    case 2: return !!data.name && !!data.age;
    case 3: return !!data.address.formatted;
    case 4: return !!data.eating;
    case 5: return !!data.gender;
    case 6: return !!data.orientation;
    case 7: return !!data.preference;
    case 10: return data.hobbies.length > 0;
    case 11: return data.images.length === 4;
    case 12: return !!data.email;
    default: return true;
  }
}
