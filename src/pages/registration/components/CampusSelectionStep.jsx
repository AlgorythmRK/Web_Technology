import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CampusSelectionStep = ({ formData, updateFormData, onNext, errors }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const campusOptions = [
    { value: 'harvard', label: 'Harvard University', description: 'Cambridge, MA' },
    { value: 'mit', label: 'Massachusetts Institute of Technology', description: 'Cambridge, MA' },
    { value: 'stanford', label: 'Stanford University', description: 'Stanford, CA' },
    { value: 'berkeley', label: 'UC Berkeley', description: 'Berkeley, CA' },
    { value: 'yale', label: 'Yale University', description: 'New Haven, CT' },
    { value: 'princeton', label: 'Princeton University', description: 'Princeton, NJ' },
    { value: 'columbia', label: 'Columbia University', description: 'New York, NY' },
    { value: 'upenn', label: 'University of Pennsylvania', description: 'Philadelphia, PA' },
    { value: 'chicago', label: 'University of Chicago', description: 'Chicago, IL' },
    { value: 'northwestern', label: 'Northwestern University', description: 'Evanston, IL' }
  ];

  const handleCampusChange = (value) => {
    updateFormData({ campus: value });
  };

  const handleEmailChange = (e) => {
    updateFormData({ email: e?.target?.value });
  };

  const handleNext = () => {
    if (formData?.campus && formData?.email) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-campus-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="School" size={32} color="var(--color-campus-blue)" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Campus</h2>
        <p className="text-muted-foreground">
          Select your university to join your campus marketplace community
        </p>
      </div>
      <div className="space-y-4">
        <Select
          label="University/College"
          description="Search and select your educational institution"
          placeholder="Search for your campus..."
          searchable
          required
          options={campusOptions}
          value={formData?.campus}
          onChange={handleCampusChange}
          error={errors?.campus}
          className="mb-4"
        />

        <Input
          label="Campus Email Address"
          type="email"
          placeholder="your.name@university.edu"
          description="Use your official .edu email address for verification"
          required
          value={formData?.email}
          onChange={handleEmailChange}
          error={errors?.email}
        />

        <div className="bg-sustainability-green/10 border border-sustainability-green/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={20} color="var(--color-sustainability-green)" className="mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Campus Verification</h4>
              <p className="text-sm text-muted-foreground">
                We verify your student status through your .edu email to maintain a trusted campus community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button 
          variant="default" 
          onClick={handleNext}
          disabled={!formData?.campus || !formData?.email}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampusSelectionStep;