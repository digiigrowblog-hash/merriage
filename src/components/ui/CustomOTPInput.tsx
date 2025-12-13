'use client';

import React, { useRef, useEffect, useState } from 'react';

interface CustomOTPInputProps {
    length?: number;
    value: string;
    onChange: (otp: string) => void;
    className?: string;
}

export function CustomOTPInput({ length = 6, value, onChange, className }: CustomOTPInputProps) {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Sync local state with prop value if needed (e.g. initial load or clear)
        if (value.length !== length && value === "") {
            setOtp(new Array(length).fill(""));
        } else if (value.length === length) {
            setOtp(value.split(""));
        }
    }, [value, length]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value;
        if (isNaN(Number(val))) return;

        const newOtp = [...otp];
        // Allow only last entered character
        newOtp[index] = val.substring(val.length - 1);
        setOtp(newOtp);

        // Combine and call onChange
        const combinedOtp = newOtp.join("");
        onChange(combinedOtp);

        // Focus next input
        if (val && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move to previous input on backspace if empty
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, i) => {
            if (i < length) newOtp[i] = char;
        });
        setOtp(newOtp);
        onChange(newOtp.join(""));

        // Focus last filled or last input
        const nextIndex = Math.min(pastedData.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
    };

    return (
        <div className={`flex gap-2 justify-center ${className}`}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-200 rounded-lg text-center text-lg font-medium focus:border-blue-500 focus:outline-none bg-white transition-colors"
                />
            ))}
        </div>
    );
}
