import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFeatures = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: "Shield",
      title: "Campus Verified",
      description: "Only verified .edu email addresses can access the platform"
    },
    {
      id: 2,
      icon: "Lock",
      title: "Secure Authentication",
      description: "JWT-based security with encrypted data transmission"
    },
    {
      id: 3,
      icon: "Smartphone",
      title: "Biometric Support",
      description: "Use fingerprint or face recognition on supported devices"
    },
    {
      id: 4,
      icon: "Clock",
      title: "Session Management",
      description: "Automatic logout for security with customizable timeouts"
    }
  ];

  return (
    <div className="hidden lg:block">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Secure Campus Access
        </h3>
        <p className="text-muted-foreground">
          Your safety and privacy are our top priorities in the campus marketplace.
        </p>
      </div>
      <div className="space-y-4">
        {securityFeatures?.map((feature) => (
          <div
            key={feature?.id}
            className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg campus-shadow hover:campus-shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-campus-blue/10 rounded-lg">
              <Icon name={feature?.icon} size={20} color="var(--color-campus-blue)" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-1">
                {feature?.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-sustainability-green/10 border border-sustainability-green/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-sustainability-green)" className="mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">
              Campus Community Guidelines
            </h4>
            <p className="text-sm text-muted-foreground">
              By signing in, you agree to maintain a respectful and safe trading environment for all students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;