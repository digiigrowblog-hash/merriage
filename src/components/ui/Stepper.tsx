// components/ui/Stepper.tsx
import { motion } from 'framer-motion';

interface StepperProps {
  activeStep: number;
  totalSteps: number;
  steps: string[];
}

export function Stepper({ activeStep, totalSteps, steps }: StepperProps) {
  const progress = ((activeStep - 1) / (totalSteps - 1)) * 100;
  
  return (
    <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
      <motion.div 
        className="h-2 bg-linear-to-r from-orange-400 to-pink-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
