import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RelatedItems = ({ items = [] }) => {
  if (!items?.length) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(price);
  };

  const getConditionColor = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'new':
        return 'text-sustainability-green';
      case 'like new':
        return 'text-campus-blue';
      case 'good':
        return 'text-campus-gold';
      case 'fair':
        return 'text-trust-gray';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Related Items</h3>
        <Link
          to="/marketplace"
          className="text-sm text-campus-blue hover:text-campus-blue/80 transition-colors"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((item) => (
          <Link
            key={item?.id}
            to={`/product-detail?id=${item?.id}`}
            className="group block bg-background border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 campus-hover"
          >
            {/* Item Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              
              {/* Condition Badge */}
              <div className="absolute top-2 left-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/90 ${getConditionColor(item?.condition)}`}>
                  {item?.condition}
                </span>
              </div>

              {/* Favorite Button */}
              <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Icon name="Heart" size={14} className="text-gray-600" />
              </button>
            </div>

            {/* Item Details */}
            <div className="p-3">
              <h4 className="font-medium text-foreground text-sm mb-1 line-clamp-2 group-hover:text-campus-blue transition-colors">
                {item?.title}
              </h4>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-campus-blue">
                  {formatPrice(item?.price)}
                </span>
                {item?.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(item?.originalPrice)}
                  </span>
                )}
              </div>

              {/* Seller Info */}
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={12} />
                  <span>{item?.seller}</span>
                </div>
                {item?.isVerified && (
                  <Icon name="CheckCircle" size={12} className="text-campus-blue" />
                )}
              </div>

              {/* Distance & Time */}
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={10} />
                  <span>{item?.distance}</span>
                </div>
                <span>{item?.timeAgo}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* View More Button */}
      <div className="mt-4 text-center">
        <Link
          to="/marketplace"
          className="inline-flex items-center space-x-2 text-sm text-campus-blue hover:text-campus-blue/80 transition-colors"
        >
          <span>Browse more similar items</span>
          <Icon name="ArrowRight" size={14} />
        </Link>
      </div>
    </div>
  );
};

export default RelatedItems;