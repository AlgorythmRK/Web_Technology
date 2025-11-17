import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'new': case'like new':
        return 'text-sustainability-green bg-green-50';
      case 'excellent':
        return 'text-blue-600 bg-blue-50';
      case 'good':
        return 'text-amber-600 bg-amber-50';
      case 'fair':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-trust-gray bg-gray-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto campus-shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {item?.additionalImages && item?.additionalImages?.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {item?.additionalImages?.slice(0, 4)?.map((img, index) => (
                  <div key={index} className="aspect-square rounded-md overflow-hidden bg-muted">
                    <Image
                      src={img?.src}
                      alt={img?.alt}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-foreground">{item?.title}</h3>
                <div className="flex items-center space-x-2">
                  {item?.isUrgent && (
                    <span className="bg-action-red text-white text-xs px-2 py-1 rounded-full font-medium">
                      URGENT
                    </span>
                  )}
                  {item?.isFeatured && (
                    <span className="bg-campus-gold text-white text-xs px-2 py-1 rounded-full font-medium">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-campus-blue">${item?.price}</span>
                  {item?.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${item?.originalPrice}
                    </span>
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(item?.condition)}`}>
                  {item?.condition}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item?.description}
              </p>
            </div>

            {/* Item Details */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                <span className="text-foreground">{item?.location}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Icon name="Clock" size={16} className="mr-2 text-muted-foreground" />
                <span className="text-foreground">
                  Posted {new Date(item.postedAt)?.toLocaleDateString()}
                </span>
              </div>
              
              <div className="flex items-center text-sm">
                <Icon name="Eye" size={16} className="mr-2 text-muted-foreground" />
                <span className="text-foreground">{item?.views || 0} views</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-3">Seller Information</h4>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-card">
                  <Image
                    src={item?.seller?.avatar}
                    alt={item?.seller?.avatarAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">{item?.seller?.name}</span>
                    {item?.seller?.isVerified && (
                      <Icon name="BadgeCheck" size={16} className="text-sustainability-green" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Star" size={14} className="mr-1 text-campus-gold fill-current" />
                      <span>{item?.seller?.rating} rating</span>
                    </div>
                    <span>{item?.seller?.totalSales || 0} sales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
              >
                Message Seller
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  iconName="Heart"
                  iconPosition="left"
                >
                  Save Item
                </Button>
                <Button
                  variant="outline"
                  iconName="Share"
                  iconPosition="left"
                >
                  Share
                </Button>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Icon name="Shield" size={16} className="text-campus-blue mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-campus-blue mb-1">Safety First</div>
                  <div className="text-muted-foreground">
                    Meet in public places on campus. Check item condition before payment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;