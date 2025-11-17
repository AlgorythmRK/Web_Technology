import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    marketplace: {
      title: 'Marketplace',
      links: [
        { name: 'Browse Items', path: '/marketplace' },
        { name: 'Sell Item', path: '/sell' },
        { name: 'Categories', path: '/marketplace?view=categories' },
        { name: 'Featured Items', path: '/marketplace?featured=true' }
      ]
    },
    community: {
      title: 'Community',
      links: [
        { name: 'Safety Guidelines', path: '/safety' },
        { name: 'Trust & Verification', path: '/trust' },
        { name: 'Community Rules', path: '/rules' },
        { name: 'Success Stories', path: '/stories' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Report Issue', path: '/report' },
        { name: 'FAQ', path: '/faq' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About CampCart', path: '/about' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Campus Partnerships', path: '/partnerships' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  const campusStats = [
    { label: 'Active Students', value: '1,200+' },
    { label: 'Items Traded', value: '2,847' },
    { label: 'Money Saved', value: '$89K+' },
    { label: 'Campus Partners', value: '15' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-campus-blue rounded-lg">
                <Icon name="ShoppingCart" size={24} color="white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">CampCart</span>
                <div className="text-sm text-gray-400 -mt-1">Campus Marketplace</div>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted campus marketplace where students help students succeed through smart trading, 
              sustainable choices, and authentic community connections.
            </p>

            {/* Campus Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {campusStats?.map((stat, index) => (
                <div key={index} className="text-center bg-gray-800 rounded-lg p-3">
                  <div className="text-lg font-bold text-campus-gold">{stat?.value}</div>
                  <div className="text-xs text-gray-400">{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-campus-blue rounded-lg flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks)?.map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section?.title}</h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get notified about new features and campus marketplace updates</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your campus email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-campus-blue flex-1 lg:w-64"
              />
              <button className="px-6 py-2 bg-campus-blue hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="Shield" size={16} className="text-sustainability-green" />
              <span className="text-sm">Campus Verified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="Lock" size={16} className="text-sustainability-green" />
              <span className="text-sm">Secure Transactions</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="Users" size={16} className="text-sustainability-green" />
              <span className="text-sm">Student Community</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="Recycle" size={16} className="text-sustainability-green" />
              <span className="text-sm">Sustainable Trading</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} CampCart. All rights reserved. Built for campus communities with ❤️
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;