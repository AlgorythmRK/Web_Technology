import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Marketplace', path: '/marketplace', icon: 'Store' },
    { name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { name: 'Messages', path: '/messages', icon: 'MessageCircle' },
    { name: 'Sell Item', path: '/sell', icon: 'Plus' }
  ];

  const moreMenuItems = [
    { name: 'Help Center', path: '/help', icon: 'HelpCircle' },
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Safety Guidelines', path: '/safety', icon: 'Shield' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border campus-shadow">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo Section */}
        <Link to="/homepage" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-8 h-8 bg-campus-blue rounded-lg">
            <Icon name="ShoppingCart" size={20} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-campus-blue">CampKart</span>
            <span className="text-xs text-trust-gray -mt-1">College & University Marketplace</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon name={item?.icon} size={16} />
              <span>{item?.name}</span>
            </Link>
          ))}
          
          {/* More Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors">
              <Icon name="MoreHorizontal" size={16} />
              <span>More</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-md campus-shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-popover-foreground hover:bg-muted transition-colors"
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/registration">Join Campus</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle mobile menu"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Items in Mobile */}
            <div className="pt-2 mt-2 border-t border-border">
              {moreMenuItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-3 mt-3 border-t border-border space-y-2">
              <Button variant="ghost" fullWidth asChild>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button variant="default" fullWidth asChild>
                <Link to="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                  Join Campus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;