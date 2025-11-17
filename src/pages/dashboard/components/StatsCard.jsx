import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ title, value, subtitle, icon, trend, trendValue, color = "campus-blue" }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow hover:campus-shadow-lg campus-transition">
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center justify-center w-12 h-12 bg-${color} rounded-lg`}>
          <Icon name={icon} size={24} color="white" />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 text-sm ${
            trend === 'up' ? 'text-success' : trend === 'down' ? 'text-error' : 'text-trust-gray'
          }`}>
            <Icon 
              name={trend === 'up' ? 'TrendingUp' : trend === 'down' ? 'TrendingDown' : 'Minus'} 
              size={16} 
            />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-foreground">{value}</h3>
        <p className="text-sm font-medium text-trust-gray">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;