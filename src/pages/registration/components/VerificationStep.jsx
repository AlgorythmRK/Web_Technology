import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const VerificationStep = ({ formData, updateFormData, onComplete, onBack, errors }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleSendOTP = () => {
    setOtpSent(true);
    setCountdown(60);
    // Mock OTP sending
    console.log('OTP sent to:', formData?.email);
  };

  const handleResendOTP = () => {
    if (countdown === 0) {
      setCountdown(60);
      console.log('OTP resent to:', formData?.email);
    }
  };

  const handleOTPChange = (e) => {
    const value = e?.target?.value?.replace(/\D/g, '')?.slice(0, 6);
    // Update parent form data immediately
    updateFormData({ otp: value });
  };

  const handleComplete = () => {
    if (formData?.otp === '123456' && termsAccepted && privacyAccepted) {
      onComplete();
    }
  };

  const isFormValid = formData?.otp?.length === 6 && termsAccepted && privacyAccepted;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-campus-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Shield" size={32} color="var(--color-campus-blue)" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Verify Your Email</h2>
        <p className="text-muted-foreground">
          We've sent a verification code to <span className="font-medium text-foreground">{formData?.email}</span>
        </p>
      </div>
      <div className="space-y-4">
        {!otpSent ? (
          <div className="text-center">
            <Button 
              variant="default" 
              onClick={handleSendOTP}
              iconName="Mail"
              iconPosition="left"
              fullWidth
            >
              Send Verification Code
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              label="Verification Code"
              type="text"
              placeholder="Enter 6-digit code"
              description="Check your email for the verification code"
              value={formData?.otp || ''}
              onChange={handleOTPChange}
              error={errors?.otp}
              maxLength={6}
            />

            <div className="text-center">
              <Button
                variant="ghost"
                onClick={handleResendOTP}
                disabled={countdown > 0}
                size="sm"
              >
                {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Code'}
              </Button>
            </div>

            <div className="bg-campus-gold/10 border border-campus-gold/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} color="var(--color-campus-gold)" className="mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Demo Code</h4>
                  <p className="text-sm text-muted-foreground">
                    For testing purposes, use code: <span className="font-mono font-bold">123456</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4 pt-4 border-t border-border">
          <Checkbox
            label="I agree to the Terms of Service"
            description="Read our community guidelines and marketplace policies"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e?.target?.checked)}
            required
          />

          <Checkbox
            label="I accept the Privacy Policy"
            description="Understand how we protect and use your information"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e?.target?.checked)}
            required
          />
        </div>

        <div className="bg-sustainability-green/10 border border-sustainability-green/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Leaf" size={20} color="var(--color-sustainability-green)" className="mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Welcome to Sustainable Trading</h4>
              <p className="text-sm text-muted-foreground">
                Join thousands of students reducing waste and saving money through campus marketplace trading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack} iconName="ArrowLeft" iconPosition="left">
          Back
        </Button>
        <Button 
          variant="default" 
          onClick={handleComplete}
          disabled={!isFormValid}
          iconName="Check"
          iconPosition="right"
        >
          Complete Registration
        </Button>
      </div>
    </div>
  );
};

export default VerificationStep;