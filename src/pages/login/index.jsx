import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SecurityFeatures from './components/SecurityFeatures';
import CampusStats from './components/CampusStats';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>

        {/* Right Side - Security Features & Stats */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col bg-muted/30">
          {/* Security Features Section */}
          <div className="flex-1 flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-lg">
              <SecurityFeatures />
            </div>
          </div>

          {/* Campus Stats Section */}
          <div className="border-t border-border bg-card/50">
            <div className="px-8 py-6">
              <div className="w-full max-w-lg mx-auto">
                <CampusStats />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Stats - Visible only on mobile */}
      <div className="lg:hidden bg-card border-t border-border">
        <div className="px-4 py-6">
          <CampusStats />
        </div>
      </div>
      {/* Footer */}
      <div className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© {new Date()?.getFullYear()} CampCart</span>
              <span>•</span>
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Need help?</span>
              <a
                href="/contact"
                className="text-campus-blue hover:text-secondary transition-colors font-medium"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;