'use client';

import { RELIGIONS } from '@/types/signup';
import InputField from '@/components/ui/InputField';
import type { FormData } from '@/types/signup';

interface ReligionCasteStepProps {
  formData: FormData;
  updateField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
}

export function ReligionCasteStep({ formData, updateField }: ReligionCasteStepProps) {
  return (
    <div className="space-y-6">
      {/* Religion Dropdown */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Religion <span className="text-orange-600">*</span>
        </label>
        <div className="relative">
          <select
            value={formData.religion}
            onChange={(e) => updateField('religion', e.target.value as any)}
            className="w-full p-4 pr-12 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100/50 bg-white/80 backdrop-blur-sm text-lg font-medium transition-all duration-200 hover:border-orange-300 hover:shadow-md shadow-sm"
            required
          >
            <option value="">Select your religion</option>
            {RELIGIONS.map((religion) => (
              <option key={religion.value} value={religion.value}>
                {religion.label}
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          This helps us show you better matches
        </p>
      </div>

      {/* Caste/Community Input */}
      <div>
        <InputField
          label="Caste/Community"
          name="caste"
          value={formData.caste}
          onChange={v => updateField('caste', v as string)}
          required
          placeholder="e.g., Brahmin, Rajput, Yadav, Maratha, etc."
          className="text-lg"
        />
        <p className="text-xs text-gray-500 mt-1">
          Be specific for better compatibility matching
        </p>
      </div>
    </div>
  );
}
