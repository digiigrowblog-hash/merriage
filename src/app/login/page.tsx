'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import  InputField  from '@/components/ui/InputField';
import  PhoneInput  from '@/components/ui/PhoneInput';
import { X } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [step, setStep] = useState<'enter' | 'verify'>('enter');
  const [credentials, setCredentials] = useState({
    email: '',
    phone: '',
    otp: ''
  });
  const [loading, setLoading] = useState(false);

  const updateField = <K extends keyof typeof credentials>(key: K, value: string) => {
    setCredentials(prev => ({ ...prev, [key]: value }));
  };

  const sendOTP = async () => {
    setLoading(true);
    try {
      // API call based on login type
      if (loginType === 'email') {
        // await fetch('/api/send-email-otp', { method: 'POST', body: JSON.stringify({ email: credentials.email }) });
        console.log('Sending email OTP to:', credentials.email);
      } else {
        // await fetch('/api/send-phone-otp', { method: 'POST', body: JSON.stringify({ phone: credentials.phone }) });
        console.log('Sending phone OTP to:', credentials.phone);
      }
      setStep('verify');
    } catch (error) {
      console.error('OTP send failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    try {
      // Verify OTP
      // await fetch('/api/verify-otp', { method: 'POST', body: JSON.stringify({ 
      //   [loginType]: credentials[loginType], 
      //   otp: credentials.otp 
      // }) });
      
      console.log('Login successful:', loginType, credentials.otp);
      router.push('/home');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const isValidInput = loginType === 'email' 
    ? credentials.email.includes('@') 
    : !!credentials.phone;

  const canSendOTP = step === 'enter' && isValidInput && !loading;
  const canVerifyOTP = step === 'verify' && credentials.otp.length === 6 && !loading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Sign in to your account
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 space-y-6">
          {/* Login Type Toggle */}
          <div className="flex bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setLoginType('email')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                loginType === 'email'
                  ? 'bg-white shadow-sm text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginType('phone')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                loginType === 'phone'
                  ? 'bg-white shadow-sm text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Phone
            </button>
          </div>

          {/* Step 1: Enter Credentials */}
          {step === 'enter' && (
            <div className="space-y-4">
              {loginType === 'email' ? (
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={v => updateField('email', v as string)}
                  required
                  placeholder="you@example.com"
                />
              ) : (
                <PhoneInput
                  value={credentials.phone}
                  onChange={phone => updateField('phone', phone || '')}
                  onOtpVerify={() => {}} // Not used here
                />
              )}

              <button
                onClick={sendOTP}
                disabled={!canSendOTP}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-pink-600 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" pathLength="0" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" stroke="currentColor" strokeWidth="3" pathLength="1" className="opacity-75" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send OTP</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Step 2: Enter OTP */}
          {step === 'verify' && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enter {loginType === 'email' ? 'Email' : 'Phone'} OTP
                </h3>
                <p className="text-sm text-gray-600">
                  We've sent a 6-digit code to your{' '}
                  <span className="font-medium text-orange-600">
                    {loginType === 'email' ? credentials.email : credentials.phone}
                  </span>
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="flex justify-center mb-6">
                  <input
                    type="text"
                    maxLength={6}
                    value={credentials.otp}
                    onChange={(e) => updateField('otp', e.target.value.replace(/\D/g, ''))}
                    placeholder="000000"
                    className="w-32 h-16 text-2xl font-bold text-center border-3 border-gray-300 rounded-2xl focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-200 letter-spacing-6 tracking-widest"
                  />
                </div>
                <div className="flex items-center justify-center text-xs text-gray-500 space-x-1">
                  <span>Didn't receive? </span>
                  <button
                    onClick={sendOTP}
                    disabled={loading}
                    className="text-orange-600 hover:text-orange-700 font-medium underline transition-colors"
                  >
                    Resend OTP
                  </button>
                  <span>| </span>
                  <button
                    onClick={() => setStep('enter')}
                    className="text-gray-600 hover:text-gray-900 font-medium underline transition-colors"
                  >
                    Change Number
                  </button>
                </div>
              </div>

              <button
                onClick={verifyOTP}
                disabled={!canVerifyOTP}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" pathLength="0" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" stroke="currentColor" strokeWidth="3" pathLength="1" className="opacity-75" />
                    </svg>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Create one now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
