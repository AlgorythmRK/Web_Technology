import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SellerProfile = ({ seller }) => {
  if (!seller) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < Math.floor(rating) ? "Star" : "Star"}
        size={16}
        className={index < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 campus-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4">Seller Information</h3>
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="relative">
          <Image
            src={seller?.avatar}
            alt={seller?.avatarAlt}
            className="w-16 h-16 rounded-full object-cover"
          />
          {seller?.isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-campus-blue rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          )}
        </div>

        {/* Seller Details */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-foreground">{seller?.name}</h4>
            {seller?.isVerified && (
              <span className="text-xs bg-campus-blue text-white px-2 py-0.5 rounded-full">
                Verified Student
              </span>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{seller?.university}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              {renderStars(seller?.rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              {seller?.rating?.toFixed(1)} ({seller?.reviewCount} reviews)
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Icon name="Package" size={12} />
              <span>{seller?.itemsSold} sold</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>Joined {seller?.joinDate}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="MessageCircle" size={12} />
              <span>Responds in {seller?.responseTime}</span>
            </span>
          </div>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-lg font-semibold text-campus-blue">{seller?.completionRate}%</div>
          <div className="text-xs text-muted-foreground">Completion Rate</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-sustainability-green">{seller?.sustainabilityScore}</div>
          <div className="text-xs text-muted-foreground">Eco Score</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-campus-gold">{seller?.badges}</div>
          <div className="text-xs text-muted-foreground">Badges</div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;