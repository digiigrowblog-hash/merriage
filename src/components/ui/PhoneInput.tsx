'use client';
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CustomOTPInput } from "./CustomOTPInput";
import { InputHTMLAttributes } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value?: string) => void;
  onOtpVerify: (otp: string) => void;
  loginMode?: boolean; // ✅ NEW: Disable internal OTP
}

// Custom Input component to filter unrecognized props
const CustomInput = ({ countryCallingCodeEditable, ...rest }: InputHTMLAttributes<HTMLInputElement> & {
  countryCallingCodeEditable?: boolean;
}) => {
  return <input {...rest} />;
};

function PhoneInputs({ value, onChange, onOtpVerify, loginMode }: PhoneInputProps) {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  // ✅ Ensure initial value is '+91' for consistent SSR/CSR
  const initialValue = value || "+91";

  // Removed: useEffect to force IN as initial country on mount

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
        <PhoneInput
          country={'IN'}
          countryCallingCodeEditable={undefined}
          defaultCountry="IN"
          value={initialValue}
          onChange={onChange}
          placeholder="Enter phone number"
          inputComponent={CustomInput}
          className="phone-input-custom h-16 px-4 py-3 text-lg border-2 border-gray-200 
          rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 
          focus:ring-orange-200/50 transition-all duration-200 w-full!"
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
              // international
              countryCallingCodeEditable={undefined}
              defaultCountry="IN"
              // ✅ Remove countries prop - let defaultCountry work
              value={initialValue}
              onChange={onChange}
              placeholder="Enter phone number"
              inputComponent={CustomInput}
              className="phone-input-custom h-16 px-4 py-3 text-lg border-2 border-gray-200 
              rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 
              focus:ring-orange-200/50 transition-all duration-200 w-full!"
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