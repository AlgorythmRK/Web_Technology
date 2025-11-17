import React from 'react';
import Icon from '../../../components/AppIcon';
import ItemCard from './ItemCard';

const FeaturedItems = ({ items }) => {
  if (!items || items?.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-campus-blue to-blue-700 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Icon name="Star" size={24} className="mr-2 text-campus-gold fill-current" />
            Featured Items
          </h2>
          <p className="text-blue-100 mt-1">
            Handpicked deals from trusted sellers
          </p>
        </div>
        
        <div className="flex items-center text-blue-100">
          <Icon name="TrendingUp" size={20} className="mr-2" />
          <span className="text-sm">Updated hourly</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items?.slice(0, 4)?.map((item) => (
          <div key={item?.id} className="transform hover:scale-105 transition-transform duration-200">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;