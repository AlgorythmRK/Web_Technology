import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ItemCard = ({ item, viewMode = 'grid' }) => {
  const [isFavorited, setIsFavorited] = useState(item?.isFavorited || false);

  const handleFavoriteClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsFavorited(!isFavorited);
  };

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

  const formatTimeAgo = (date) => {
    const now = new Date();
    const itemDate = new Date(date);
    const diffInHours = Math.floor((now - itemDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return itemDate?.toLocaleDateString();
  };

  if (viewMode === 'list') {
    return (
      <Link
        to={`/product-detail?id=${item?.id}`}
        className="block bg-card border border-border rounded-lg p-4 hover:campus-shadow-lg transition-all duration-200 campus-transition"
      >
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted">
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {item?.isUrgent && (
              <div className="absolute -top-1 -right-1 bg-action-red text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                URGENT
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground truncate">
                  {item?.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {item?.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-campus-blue">
                    ₹{item?.price?.toLocaleString('en-IN')}
                  </div>
                  {item?.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ₹{item?.originalPrice?.toLocaleString('en-IN')}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={handleFavoriteClick}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Icon
                    name={isFavorited ? "Heart" : "Heart"}
                    size={20}
                    className={isFavorited ? "text-action-red fill-current" : "text-muted-foreground"}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item?.condition)}`}>
                  {item?.condition}
                </span>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} className="mr-1" />
                  <span>{item?.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} className="mr-1" />
                  <span>{formatTimeAgo(item?.postedAt)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {item?.seller?.isVerified && (
                  <div className="flex items-center text-xs text-sustainability-green">
                    <Icon name="BadgeCheck" size={14} className="mr-1" />
                    <span>Verified</span>
                  </div>
                )}
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Icon name="Star" size={14} className="mr-1 text-campus-gold fill-current" />
                  <span>{item?.seller?.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product-detail?id=${item?.id}`}
      className="block bg-card border border-border rounded-lg overflow-hidden hover:campus-shadow-lg transition-all duration-200 campus-hover group"
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-muted">
          <Image
            src={item?.image}
            alt={item?.imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Overlay badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
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

        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-all duration-200"
        >
          <Icon
            name={isFavorited ? "Heart" : "Heart"}
            size={18}
            className={isFavorited ? "text-action-red fill-current" : "text-muted-foreground"}
          />
        </button>

        {/* Quick view button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            iconName="Eye"
            iconPosition="left"
          >
            Quick View
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 flex-1">
            {item?.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {item?.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-campus-blue">
              ₹{item?.price?.toLocaleString('en-IN')}
            </span>
            {item?.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{item?.originalPrice?.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item?.condition)}`}>
            {item?.condition}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Icon name="MapPin" size={14} className="mr-1" />
            <span>{item?.location}</span>
          </div>
          
          <div className="flex items-center">
            <Icon name="Clock" size={14} className="mr-1" />
            <span>{formatTimeAgo(item?.postedAt)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-muted">
              <Image
                src={item?.seller?.avatar}
                alt={item?.seller?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-foreground">
              {item?.seller?.name}
            </span>
            {item?.seller?.isVerified && (
              <Icon name="BadgeCheck" size={14} className="text-sustainability-green" />
            )}
          </div>
          
          <div className="flex items-center text-sm">
            <Icon name="Star" size={14} className="mr-1 text-campus-gold fill-current" />
            <span className="text-foreground font-medium">{item?.seller?.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;