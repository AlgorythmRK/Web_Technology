import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SuccessMessage = ({ formData }) => {
  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-sustainability-green/10 rounded-full flex items-center justify-center mx-auto">
        <Icon name="CheckCircle" size={40} color="var(--color-sustainability-green)" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Welcome to CampCart!</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Your account has been successfully created, {formData?.firstName}
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-campus-blue/10 rounded-full flex items-center justify-center">
            <Icon name="Shield" size={20} color="var(--color-campus-blue)" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-foreground">Verified Student</h4>
            <p className="text-sm text-muted-foreground">Campus email verified successfully</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-sustainability-green/10 rounded-full flex items-center justify-center">
            <Icon name="Users" size={20} color="var(--color-sustainability-green)" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-foreground">Campus Community</h4>
            <p className="text-sm text-muted-foreground">Connected to your university marketplace</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-campus-gold/10 rounded-full flex items-center justify-center">
            <Icon name="Star" size={20} color="var(--color-campus-gold)" />
          </div>
          <div className="text-left">
            <h4 className="font-medium text-foreground">Ready to Trade</h4>
            <p className="text-sm text-muted-foreground">Start buying and selling with confidence</p>
          </div>
        </div>
      </div>
      <div className="bg-campus-blue/5 border border-campus-blue/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">What's Next?</h3>
        <div className="space-y-2 text-sm text-muted-foreground text-left">
          <div className="flex items-center space-x-2">
            <Icon name="ArrowRight" size={16} color="var(--color-campus-blue)" />
            <span>Browse thousands of items from your campus community</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ArrowRight" size={16} color="var(--color-campus-blue)" />
            <span>List your own items to sell or trade</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ArrowRight" size={16} color="var(--color-campus-blue)" />
            <span>Connect with fellow students safely and securely</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <Button variant="default" fullWidth asChild>
          <Link to="/marketplace">
            <Icon name="Store" size={20} className="mr-2" />
            Explore Marketplace
          </Link>
        </Button>
        
        <Button variant="outline" fullWidth asChild>
          <Link to="/dashboard">
            <Icon name="LayoutDashboard" size={20} className="mr-2" />
            Go to Dashboard
          </Link>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Need help getting started? Check out our{' '}
        <Link to="/help" className="text-campus-blue hover:underline">
          Help Center
        </Link>{' '}
        or{' '}
        <Link to="/safety" className="text-campus-blue hover:underline">
          Safety Guidelines
        </Link>
      </p>
    </div>
  );
};

export default SuccessMessage;