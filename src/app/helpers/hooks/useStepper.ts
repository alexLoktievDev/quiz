import { useState } from 'react';

export interface IUseStepperProps {
  initialStep?: number;
  totalSteps: number;
  onStepChange?: (step: number) => void;
}

export interface IUseStepperReturn {
  currentStep: number;
  goToNext: () => void;
  goToPrevious: () => void;
  reset: () => void;
  setStep: (step: number) => void;
}

export const useStepper = ({
  initialStep = 0,
  totalSteps,
  onStepChange,
}: IUseStepperProps): IUseStepperReturn => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const goToNext = () => {
    if (currentStep < totalSteps - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      if (onStepChange) onStepChange(nextStep);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      if (onStepChange) onStepChange(prevStep);
    }
  };

  const reset = () => {
    setCurrentStep(initialStep);
    if (onStepChange) onStepChange(initialStep);
  };

  const setStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
      if (onStepChange) onStepChange(step);
    }
  };

  return {
    currentStep,
    goToNext,
    goToPrevious,
    reset,
    setStep,
  };
};
