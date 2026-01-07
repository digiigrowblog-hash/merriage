'use client';
import { useState, useEffect, forwardRef } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber, getCountryCallingCode, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CustomOTPInput } from "./CustomOTPInput";
import { InputHTMLAttributes } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value?: string) => void;
  onOtpVerify: (otp: string) => void;
  loginMode?: boolean; // ✅ NEW: Disable internal OTP
  label:string;
  required?:boolean;
  onValidationChange?: (isValid: boolean) => void; // New prop for validation state
}

// Custom Input component to filter unrecognized props
const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const { ...rest } = props;
  return <input ref={ref} {...rest} />;
});

CustomInput.displayName = 'CustomInput';

function PhoneInputs({ value, onChange, onOtpVerify, loginMode , label ,required, onValidationChange }: PhoneInputProps) {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // ✅ Ensure initial value is '+91' for consistent SSR/CSR
  const initialValue = value || "+91";

  // Removed: useEffect to force IN as initial country on mount

  // Custom onChange handler with validation
  const handlePhoneChange = (phoneValue?: string) => {
    // Always allow the change - validation will be handled by disabling submit
    onChange(phoneValue);

    // Validate phone number length
    if (phoneValue) {
      try {
        const phoneNumber = parsePhoneNumber(phoneValue);
        if (phoneNumber) {
          const nationalNumber = phoneNumber.nationalNumber;
          const isValidLength = nationalNumber.length <= 10;
          onValidationChange?.(isValidLength);
        } else {
          // For partial/incomplete numbers, consider them valid during typing
          onValidationChange?.(true);
        }
      } catch (error) {
        // If parsing fails, consider valid during typing
        onValidationChange?.(true);
      }
    } else {
      // Empty value is invalid
      onValidationChange?.(false);
    }
  };

  const handleSendOTP = async () => {
    if (isValidPhoneNumber(value)) {
      // API call: POST /api/send-otp
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    onOtpVerify(otp);
  };

  if (loginMode) {
    return (
      <div className="phone-input-wrapper">
        <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
        <PhoneInput
          defaultCountry="IN"
          value={value}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
          inputComponent={CustomInput}
          className={`phone-input-custom h-16 px-4 py-3 text-lg  transition-all duration-200 w-full!  `}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!otpSent ? (
        <>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="phone-input-wrapper">
            <PhoneInput
              defaultCountry="IN"
              value={initialValue}
              onChange={handlePhoneChange}
              placeholder="Enter phone number"
              inputComponent={CustomInput}
              className="phone-input-custom h-16 px-4 py-3 text-lg
              transition-all duration-200 w-full!"
            />
          </div>
          <button
            onClick={handleSendOTP}
            disabled={!isValidPhoneNumber(value)}
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl hover:bg-orange-600 disabled:bg-gray-400 transition-all duration-200 font-medium"
          >
            Send OTP
          </button>
        </>
      ) : (
        // OTP section unchanged...
        <>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter OTP
          </label>
          <CustomOTPInput
            value={otp}
            onChange={setOtp}
            length={6}
            className="mb-4"
          />
          <div className="flex gap-2">
            <button
              onClick={handleVerifyOTP}
              disabled={otp.length !== 6}
              className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-xl hover:bg-orange-600 disabled:bg-gray-400 transition-all duration-200 font-medium"
            >
              Verify OTP
            </button>
            <button
              onClick={() => setOtpSent(false)}
              className="px-6 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default PhoneInputs;