import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SafetyGuidelines = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const safetyTips = [
    {
      icon: "MapPin",
      title: "Meet in Public Places",
      description: "Always meet in well-lit, public campus locations like the library, student center, or main quad."
    },
    {
      icon: "Users",
      title: "Bring a Friend",
      description: "Consider bringing a friend along, especially for higher-value transactions."
    },
    {
      icon: "Eye",
      title: "Inspect Before Paying",
      description: "Thoroughly examine the item before completing the transaction. Test electronics if possible."
    },
    {
      icon: "CreditCard",
      title: "Secure Payment Methods",
      description: "Use cash, Venmo, or other secure payment methods. Avoid wire transfers or checks."
    },
    {
      icon: "Clock",
      title: "Daytime Meetings",
      description: "Schedule meetups during daylight hours when campus is most active."
    },
    {
      icon: "MessageCircle",
      title: "Keep Communication on Platform",
      description: "Use CampCart messaging for all communications to maintain transaction records."
    }
  ];

  const reportingOptions = [
    "Suspicious behavior",
    "Item not as described",
    "Safety concerns",
    "Spam or scam",
    "Inappropriate content"
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 campus-shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={20} className="text-campus-blue" />
          <h3 className="font-medium text-foreground">Safety Guidelines</h3>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-muted-foreground" 
        />
      </button>
      {isExpanded && (
        <div className="mt-4 space-y-4">
          {/* Safety Tips */}
          <div className="space-y-3">
            {safetyTips?.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-campus-blue/10 rounded-full flex items-center justify-center">
                  <Icon name={tip?.icon} size={14} className="text-campus-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">{tip?.title}</h4>
                  <p className="text-xs text-muted-foreground">{tip?.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="bg-action-red/10 border border-action-red/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="AlertTriangle" size={16} className="text-action-red" />
              <h4 className="text-sm font-medium text-action-red">Emergency Contact</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              If you feel unsafe during any transaction, contact campus security immediately.
            </p>
            <div className="flex items-center space-x-4 text-xs">
              <span className="flex items-center space-x-1">
                <Icon name="Phone" size={12} />
                <span className="font-medium">Campus Security: (555) 123-4567</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="AlertCircle" size={12} />
                <span className="font-medium">Emergency: 911</span>
              </span>
            </div>
          </div>

          {/* Report Issues */}
          <div className="border-t border-border pt-3">
            <h4 className="text-sm font-medium text-foreground mb-2">Report an Issue</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Help keep our community safe by reporting any concerns.
            </p>
            <div className="flex flex-wrap gap-1">
              {reportingOptions?.map((option, index) => (
                <button
                  key={index}
                  className="text-xs bg-muted hover:bg-muted/80 text-foreground px-2 py-1 rounded transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Community Guidelines Link */}
          <div className="text-center pt-2 border-t border-border">
            <a
              href="#"
              className="text-xs text-campus-blue hover:text-campus-blue/80 transition-colors"
            >
              Read Full Community Guidelines →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyGuidelines;