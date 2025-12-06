import React from 'react'
import { FieldError } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  type?: "string" | "number" | "boolean" | "date" | "password" | "email";
  name: string;
  placeholder?: string;
  onChange: (value: string | number) => void;
  value?: string;
  error?: FieldError;
  className?: string;
  required?: boolean;
  min?: number;
  max?: number;
  readOnly?: boolean;
}

const InputField = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  error,
  className,
  required,
  min,
  max,
  readOnly
}: InputFieldProps) => {
  return (
    <div className={`space-y-2 ${className || ""}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        readOnly={readOnly}
        className={`w-full px-4 py-3 border rounded-xl 
            focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all 
            duration-200 ${error
            ? 'border-red-300 bg-red-50 ring-1 ring-red-200'
            : 'border-gray-200 hover:border-gray-300'
          } ${readOnly ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}`}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">
          {typeof error === 'string' ? error : error.message}
        </p>
      )}
    </div>

  )
}

export default InputField
