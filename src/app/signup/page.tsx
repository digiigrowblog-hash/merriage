"use client";
import { useState, useEffect } from "react";
import { CustomOTPInput } from "@/components/ui/CustomOTPInput";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Stepper } from "@/components/ui/Stepper";
import InputField from "@/components/ui/InputField";
import PhoneInput from "@/components/ui/PhoneInput";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { CheckboxGroup } from "@/components/ui/CheckboxGroup";
import { HOBBIES, RELIGIONS } from "@/types/signup";
import { ImageUploader } from "@/components/ui/ImageUploader";
import { GoogleAddressPicker } from "@/components/ui/GoogleAddressPicker";
import { TagSelector } from "@/components/ui/TagSelector";
import { ReusableDropdown } from "@/components/ui/ReusableDropdown";
import type { FormData } from "@/types/signup";
import { ReligionCasteStep } from "@/components/ui/ReligionCasteStep";

interface DropdownOption {
  value: string;
  label: string;
}

const STEPS = [
  "Phone",
  "Basic Info",
  "Address",
  "Diet",
  "Gender",
  "Orientation",
  "Preference",
  "Job",
  "Religion",
  "Caste & ID",
  "Health",
  "Hobbies",
  "Photos",
  "Email",
];

const TOTAL_STEPS = STEPS.length;

export default function SignupPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    phone: "",
    phoneOtp: "",
    name: "",
    age: "",
    height: "",
    address: { lat: null, lng: null, formatted: "" },
    eating: "",
    gender: "",
    orientation: "",
    preference: "",
    company: "",
    jobRole: "",
    salary: "",
    health: {
      chronicDisease: false,
      smoking: "",
      drinking: "",
      drugs: "",
    },
    religion: "",
    caste: "",
    idVerification: "",
    hobbies: [],
    images: [],
    email: "",
    emailOtp: "",
    idNumber: "",

  });
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [idOtpSent, setIdOtpSent] = useState(false);
  const [idOtpVerified, setIdOtpVerified] = useState(false);
  const [idOtp, setIdOtp] = useState("");

  // Persist to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("signup-form", JSON.stringify(formData));
    }
  }, [formData]);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const updateHealth = <K extends keyof FormData["health"]>(
    key: K,
    value: FormData["health"][K]
  ) => {
    setFormData((prev) => ({ ...prev, health: { ...prev.health, [key]: value } }));
  };

  const handleSendEmailOTP = async () => {
    if (!formData.email) return;
    console.log("Sending OTP to", formData.email);
    setEmailOtpSent(true);
  };

  const handleVerifyEmailOTP = () => {
    if (formData.emailOtp.length === 6) {
      console.log("Email Verified");
      setIsEmailVerified(true);
    }
  };

  const handleSendIdOTP = () => {
    if (!formData.idVerification || !formData.idNumber) return;
    if (!isValidID(formData.idVerification, formData.idNumber)) return;
    setIdOtpSent(true);
    setIdOtp("");
    setIdOtpVerified(false);
  };

  const handleVerifyIdOTP = () => {
    if (idOtp.length === 6) {
      setIdOtpVerified(true);
    }
  };

  // Add these validation functions BEFORE the component
  const isValidPAN = (pan: string): boolean => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan.toUpperCase());
  };

  const isValidAadhaar = (aadhaar: string): boolean => {
    const cleanAadhaar = aadhaar.replace(/\D/g, "");
    // Aadhaar validation is numeric-only and exactly 12 digits.
    return /^\d{12}$/.test(cleanAadhaar);
  };

  const isValidPassport = (passport: string): boolean => {
    const passportRegex = /^(Z[A-Z][1-9A-Z]{6}[0-9])|([A-Z]{3}[1-9][0-9][A-Z]{3}[0-9]{3})$/;
    return passportRegex.test(passport);
  };

  const isValidID = (type: string, number: string): boolean => {
    switch (type) {
      case "pan": return isValidPAN(number);
      case "aadhar": return isValidAadhaar(number);
      case "passport": return isValidPassport(number);
      default: return false;
    }
  };

  // Inside validateStep function, fix case 10:
  const validateStep = (step: number, data: FormData): boolean => {
    switch (step) {
      case 1: return !!data.phone && !!data.phoneOtp;
      case 2: return !!data.name && !!data.age;
      case 3: return !!data.address.formatted;
      case 4: return !!data.eating;
      case 5: return !!data.gender;
      case 6: return !!data.orientation;
      case 7: return !!data.preference;
      case 8: return true;
      case 9: return !!data.religion;
      case 10:
        return !!data.idVerification && !!data.idNumber && isValidID(data.idVerification, data.idNumber) && idOtpVerified;
      case 11: return !!data.health.smoking && !!data.health.drinking && !!data.health.drugs;
      case 12: return data.hobbies.length > 0;
      case 13: return data.images.length >= 1;
      case 14: return isEmailVerified;
      default: return true;
    }
  };

  const nextStep = () => {
    if (activeStep === TOTAL_STEPS) {
      handleSubmit();
    } else if (validateStep(activeStep, formData)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        (value as File[]).forEach((file) => {
          submitData.append("images", file);
        });
      } else if (value) {
        submitData.append(key, String(value));
      }
    });

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User created:", result.user);
        localStorage.removeItem("signup-form");
        router.push("/home   ");
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
        alert(error.error || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Network error. Please try again.");
    }
  };

  const canNext = validateStep(activeStep, formData);

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <PhoneInput
            value={formData.phone}
            onChange={(phone) => updateField("phone", phone || "")}
            onOtpVerify={(otp) => updateField("phoneOtp", otp)}
          />
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField
              label="Full Name *"
              name="name"
              value={formData.name}
              onChange={(v) => updateField("name", v as string)}
              required
            />
            <InputField
              label="Age *"
              name="age"
              type="number"
              min={18}
              max={100}
              value={formData.age}
              onChange={(v) => updateField("age", v as string)}
              required
            />
            <InputField
              label="Height (cm)"
              name="height"
              type="number"
              min={100}
              max={250}
              value={formData.height}
              onChange={(v) => updateField("height", v as string)}
            />
          </div>
        );

      case 3:
        return (
          <GoogleAddressPicker
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            onSelect={(address) => updateField("address", address)}
          />
        );

      case 4:
        return (
          <RadioGroup
            name="eating"
            title="Eating Preference *"
            value={formData.eating}
            onChange={(v) => updateField("eating", v as string)}
            options={[
              { value: "vegetarian", label: "Vegetarian" },
              { value: "non-veg", label: "Non-vegetarian" },
              { value: "prefer-not", label: "Prefer not to say" },
            ]}
          />
        );

      case 5:
        return (
          <RadioGroup
            name="gender"
            title="Gender *"
            value={formData.gender}
            onChange={(v) => updateField("gender", v as string)}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "non-binary", label: "Non-binary" },
            ]}
          />
        );

      case 6:
        return (
          <RadioGroup
            name="orientation"
            title="Sexual Orientation *"
            value={formData.orientation}
            onChange={(v) => updateField("orientation", v as string)}
            options={[
              { value: "straight", label: "Straight" },
              { value: "gay", label: "Gay/Lesbian" },
              { value: "transgender", label: "Transgender" },
            ]}
          />
        );

      case 7:
        return (
          <RadioGroup
            name="preference"
            title="Who would you like to date? *"
            value={formData.preference}
            onChange={(v) => updateField("preference", v as string)}
            options={[
              { value: "women", label: "Women" },
              { value: "men", label: "Men" },
              { value: "both", label: "Both" },
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
              onChange={(v) => updateField("company", v as string)}
            />
            <InputField
              label="Job Role"
              name="jobRole"
              value={formData.jobRole}
              onChange={(v) => updateField("jobRole", v as string)}
            />
            <InputField
              label="Salary (₹/month)"
              name="salary"
              type="number"
              value={formData.salary || ""}
              onChange={(v) => updateField("salary", v as string)}
            />
          </div>
        );

      case 9:
        return (
          <ReligionCasteStep formData={formData} updateField={updateField} />
        );

      case 10:
        const idOptions: DropdownOption[] = [
          { value: "pan", label: "PAN Card" },
          { value: "aadhar", label: "Aadhaar Card" },
          { value: "passport", label: "Passport" },
        ];

        const getIDInputLabel = () => {
          switch (formData.idVerification) {
            case "pan": return "Enter PAN Number";
            case "aadhar": return "Enter Aadhaar Number";
            case "passport": return "Enter Passport Number";
            default: return "";
          }
        };

        const getIDInputPlaceholder = () => {
          switch (formData.idVerification) {
            case "pan": return "ABCDE1234F";
            case "aadhar": return "1234 5678 9012";
            case "passport": return "Z1234567 or ABC123456";
            default: return "";
          }
        };

        return (
          <div className="space-y-6">
            {/* ID Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ID Verification Type *
              </label>
              <ReusableDropdown
                options={idOptions}
                value={formData.idVerification}
                onChange={(value) => {
                  updateField("idVerification", value as 'pan' | 'aadhar' | 'passport' | '');
                  // Reset ID number when type changes
                  updateField("idNumber", "" as any);
                  setIdOtpSent(false);
                  setIdOtpVerified(false);
                  setIdOtp("");
                }}
                placeholder="Select ID type"
                className="w-full"
                searchable
              />
            </div>

            {/* Conditional ID Number Input */}
            {formData.idVerification && (
              <div>
                <InputField
                  label={getIDInputLabel()}
                  name="idNumber"
                  type={formData.idVerification === "aadhar" ? "tel" : "text"}
                  placeholder={getIDInputPlaceholder()}
                  value={formData.idNumber}
                  onChange={(v) => {
                    updateField("idNumber", v as string);
                    setIdOtpSent(false);
                    setIdOtpVerified(false);
                    setIdOtp("");
                  }}
                  required
                  maxLength={formData.idVerification === "aadhar" ? 14 : 9}
                />

                {/* Real-time Validation Feedback */}
                {formData.idNumber && (
                  <div className={`mt-2 text-xs p-2 rounded-lg ${isValidID(formData.idVerification, formData.idNumber)
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {isValidID(formData.idVerification, formData.idNumber) ? (
                      <>
                        <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Valid {formData.idVerification.toUpperCase()} number
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Invalid {formData.idVerification.toUpperCase()} format
                      </>
                    )}
                  </div>
                )}

                {/* OTP Actions */}
                <div className="mt-4 space-y-3">
                  <button
                    type="button"
                    onClick={handleSendIdOTP}
                    disabled={
                      !formData.idVerification ||
                      !formData.idNumber ||
                      !isValidID(formData.idVerification, formData.idNumber)
                    }
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {idOtpSent ? "Resend Verification Code" : "Send Verification Code"}
                  </button>

                  {idOtpSent && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 text-center">
                        Enter the 6-digit code sent to your registered contact.
                      </p>
                      <CustomOTPInput
                        value={idOtp}
                        onChange={setIdOtp}
                        length={6}
                      />
                      <button
                        type="button"
                        onClick={handleVerifyIdOTP}
                        disabled={idOtp.length !== 6}
                        className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        Verify ID OTP
                      </button>

                      {idOtpVerified && (
                        <div className="mt-2 text-xs p-2 rounded-lg bg-green-50 text-green-700 border border-green-200 text-center">
                          ID verification successful.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            {/* Chronic disease toggle */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
              <div>
                <p className="text-sm font-medium text-gray-800">Any chronic disease</p>
                <p className="text-xs text-gray-500">Diabetes, hypertension, etc.</p>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 accent-orange-500"
                checked={formData.health.chronicDisease}
                onChange={(e) => updateHealth("chronicDisease", e.target.checked)}
              />
            </div>

            {/* Smoking */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-800">Do you smoke?</p>
              <div className="space-y-2">
                {["sometimes", "often", "never"].map((option) => (
                  <label
                    key={`smoking-${option}`}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-orange-400 transition"
                  >
                    <span className="text-sm capitalize">{option}</span>
                    <input
                      type="radio"
                      name="smoking"
                      value={option}
                      checked={formData.health.smoking === option}
                      onChange={() =>
                        updateHealth("smoking", option as "sometimes" | "often" | "never")
                      }
                      className="h-4 w-4 accent-orange-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Drinking */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-800">Do you drink alcohol?</p>
              <div className="space-y-2">
                {["sometimes", "often", "never"].map((option) => (
                  <label
                    key={`drinking-${option}`}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-orange-400 transition"
                  >
                    <span className="text-sm capitalize">{option}</span>
                    <input
                      type="radio"
                      name="drinking"
                      value={option}
                      checked={formData.health.drinking === option}
                      onChange={() =>
                        updateHealth("drinking", option as "sometimes" | "often" | "never")
                      }
                      className="h-4 w-4 accent-orange-500"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Drugs */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-800">Do you take drugs?</p>
              <div className="space-y-2">
                {["sometimes", "often", "never"].map((option) => (
                  <label
                    key={`drugs-${option}`}
                    className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-orange-400 transition"
                  >
                    <span className="text-sm capitalize">{option}</span>
                    <input
                      type="radio"
                      name="drugs"
                      value={option}
                      checked={formData.health.drugs === option}
                      onChange={() =>
                        updateHealth("drugs", option as "sometimes" | "often" | "never")
                      }
                      className="h-4 w-4 accent-orange-500"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 12:
        return (
          <TagSelector
            title="Select your hobbies *"
            options={HOBBIES}
            selected={formData.hobbies}
            onChange={(vals) => updateField("hobbies", vals)}
            maxTags={5}
          />
        );

      case 13:
        return (
          <ImageUploader
            images={formData.images}
            onChange={(images) => updateField("images", images)}
            maxFiles={4}
            title="Upload your photos * (Min 1 required)"
          />
        );

      case 14:
        return (
          <div className="space-y-6">
            {!isEmailVerified ? (
              <>
                <div className="relative">
                  <InputField
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(v) => updateField("email", v as string)}
                    required
                    readOnly={emailOtpSent}
                  />
                  {emailOtpSent && (
                    <button
                      onClick={() => setEmailOtpSent(false)}
                      className="absolute right-0 top-8 text-xs text-orange-600 font-medium px-2 py-1 hover:text-orange-700"
                    >
                      Change
                    </button>
                  )}
                </div>

                {!emailOtpSent ? (
                  <button
                    onClick={handleSendEmailOTP}
                    disabled={!formData.email.includes("@")}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Send Verification Code
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-sm text-blue-800 mb-3 text-center font-medium">
                        Enter verification code sent to your email
                      </p>
                      <CustomOTPInput
                        value={formData.emailOtp}
                        onChange={(otp) => updateField("emailOtp", otp)}
                        length={6}
                      />
                    </div>
                    <button
                      onClick={handleVerifyEmailOTP}
                      disabled={formData.emailOtp.length !== 6}
                      className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Verify Email
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Email Verified!
                </h3>
                <p className="text-gray-600">
                  Your email <strong>{formData.email}</strong> has been
                  successfully verified.
                </p>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 text-sm text-orange-800">
                  You are all set! Click "Create Account" below to finish
                  signing up.
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-3 sm:px-6 lg:px-8 sm:pt-6 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-5 md:p-12">
          <Stepper
            activeStep={activeStep}
            totalSteps={TOTAL_STEPS}
            steps={STEPS}
          />

          <div className="mt-8">
            <div className="min-h-[200px]">{renderStepContent()}</div>

            <div className="md:mt-12 mt-20 flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={activeStep === 1}
                className="md:px-8 px-5 py-3 rounded-2xl border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 
                disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-1 text-sm md:text-base"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Previous</span>
              </button>

              <button
                onClick={nextStep}
                disabled={!canNext}
                className="md:px-12 md:py-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white 
                font-semibold hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 
                disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-1 text-sm md:text-base"
              >
                <span>
                  {activeStep === TOTAL_STEPS ? "Create Account" : "Next Step"}
                </span>
                {activeStep === TOTAL_STEPS ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
