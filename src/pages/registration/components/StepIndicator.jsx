import React from 'react';
import Icon from '../../../components/AppIcon';

const StepIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, title: 'Campus Info', icon: 'School' },
    { number: 2, title: 'Personal Details', icon: 'User' },
    { number: 3, title: 'Verification', icon: 'Shield' }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 w-full h-0.5 bg-muted">
          <div 
            className="h-full bg-campus-blue transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {/* Step Circles */}
        {steps?.map((step) => (
          <div key={step?.number} className="flex flex-col items-center relative z-10">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
              ${currentStep >= step?.number 
                ? 'bg-campus-blue border-campus-blue text-white' :'bg-card border-muted text-muted-foreground'
              }
            `}>
              {currentStep > step?.number ? (
                <Icon name="Check" size={20} />
              ) : (
                <Icon name={step?.icon} size={20} />
              )}
            </div>
            <span className={`
              mt-2 text-sm font-medium transition-colors
              ${currentStep >= step?.number ? 'text-campus-blue' : 'text-muted-foreground'}
            `}>
              {step?.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;