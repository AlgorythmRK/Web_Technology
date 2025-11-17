import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PersonalDetailsStep = ({ formData, updateFormData, onNext, onBack, errors }) => {
  const graduationYearOptions = [
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
    { value: '2028', label: '2028' },
    { value: '2029', label: '2029' }
  ];

  const majorOptions = [
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'business', label: 'Business Administration' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'biology', label: 'Biology' },
    { value: 'economics', label: 'Economics' },
    { value: 'english', label: 'English Literature' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'physics', label: 'Physics' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field) => (e) => {
    updateFormData({ [field]: e?.target?.value });
  };

  const handleSelectChange = (field) => (value) => {
    updateFormData({ [field]: value });
  };

  const handleNext = () => {
    if (formData?.firstName && formData?.lastName && formData?.graduationYear && formData?.major) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-campus-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="User" size={32} color="var(--color-campus-blue)" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tell Us About Yourself</h2>
        <p className="text-muted-foreground">
          Help us create your campus marketplace profile
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          required
          value={formData?.firstName}
          onChange={handleInputChange('firstName')}
          error={errors?.firstName}
        />

        <Input
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          required
          value={formData?.lastName}
          onChange={handleInputChange('lastName')}
          error={errors?.lastName}
        />
      </div>
      <Input
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
        description="For secure communication about transactions"
        value={formData?.phone}
        onChange={handleInputChange('phone')}
        error={errors?.phone}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Expected Graduation Year"
          placeholder="Select year"
          required
          options={graduationYearOptions}
          value={formData?.graduationYear}
          onChange={handleSelectChange('graduationYear')}
          error={errors?.graduationYear}
        />

        <Select
          label="Major/Field of Study"
          placeholder="Select your major"
          searchable
          required
          options={majorOptions}
          value={formData?.major}
          onChange={handleSelectChange('major')}
          error={errors?.major}
        />
      </div>
      <div className="bg-campus-blue/5 border border-campus-blue/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Users" size={20} color="var(--color-campus-blue)" className="mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Building Your Community</h4>
            <p className="text-sm text-muted-foreground">
              This information helps connect you with classmates and relevant marketplace items.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack} iconName="ArrowLeft" iconPosition="left">
          Back
        </Button>
        <Button 
          variant="default" 
          onClick={handleNext}
          disabled={!formData?.firstName || !formData?.lastName || !formData?.graduationYear || !formData?.major}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;