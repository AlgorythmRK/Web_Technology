import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import StepIndicator from './components/StepIndicator';
import CampusSelectionStep from './components/CampusSelectionStep';
import PersonalDetailsStep from './components/PersonalDetailsStep';
import VerificationStep from './components/VerificationStep';
import SuccessMessage from './components/SuccessMessage';
import Icon from '../../components/AppIcon';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    campus: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    graduationYear: '',
    major: '',
    otp: ''
  });
  const [errors, setErrors] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = 3;

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Clear related errors when user updates data
    const updatedErrors = { ...errors };
    Object.keys(newData)?.forEach(key => {
      if (updatedErrors?.[key]) {
        delete updatedErrors?.[key];
      }
    });
    setErrors(updatedErrors);
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.campus) newErrors.campus = 'Please select your campus';
      if (!formData?.email) newErrors.email = 'Email address is required';
      else if (!formData?.email?.includes('.edu')) {
        newErrors.email = 'Please use your official .edu email address';
      }
    }

    if (step === 2) {
      if (!formData?.firstName) newErrors.firstName = 'First name is required';
      if (!formData?.lastName) newErrors.lastName = 'Last name is required';
      if (!formData?.graduationYear) newErrors.graduationYear = 'Graduation year is required';
      if (!formData?.major) newErrors.major = 'Major/field of study is required';
    }

    if (step === 3) {
      if (!formData?.otp || formData?.otp !== '123456') {
        newErrors.otp = 'Please enter the correct verification code';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleComplete = () => {
    if (validateStep(currentStep)) {
      setIsComplete(true);
    }
  };

  const renderStep = () => {
    if (isComplete) {
      return <SuccessMessage formData={formData} />;
    }

    switch (currentStep) {
      case 1:
        return (
          <CampusSelectionStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            errors={errors}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            errors={errors}
          />
        );
      case 3:
        return (
          <VerificationStep
            formData={formData}
            updateFormData={updateFormData}
            onComplete={handleComplete}
            onBack={handleBack}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl">
            {/* Header Section */}
            <div className="text-center mb-8">
              <Link to="/homepage" className="inline-flex items-center space-x-2 text-campus-blue hover:opacity-80 transition-opacity mb-6">
                <Icon name="ArrowLeft" size={20} />
                <span className="text-sm font-medium">Back to Homepage</span>
              </Link>
              
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-campus-blue rounded-xl">
                  <Icon name="ShoppingCart" size={24} color="white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-campus-blue">Join CampCart</h1>
                  <p className="text-sm text-trust-gray">Your campus, your community, your marketplace</p>
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="bg-card border border-border rounded-xl campus-shadow-lg p-6 md:p-8">
              {!isComplete && (
                <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
              )}
              
              {renderStep()}
            </div>

            {/* Footer Links */}
            {!isComplete && (
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-campus-blue hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-sustainability-green/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={20} color="var(--color-sustainability-green)" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Secure & Verified</h4>
                  <p className="text-xs text-muted-foreground">Campus-only community</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-campus-blue/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} color="var(--color-campus-blue)" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Trusted Network</h4>
                  <p className="text-xs text-muted-foreground">Student-to-student trading</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-campus-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" size={20} color="var(--color-campus-gold)" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Sustainable</h4>
                  <p className="text-xs text-muted-foreground">Reduce, reuse, save money</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;