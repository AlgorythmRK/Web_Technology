import React from 'react';
import Icon from '../../../components/AppIcon';

const SustainabilityMetrics = () => {
  const metrics = [
    {
      id: 1,
      icon: "Recycle",
      value: "2,847",
      label: "Items Reused",
      description: "Diverted from landfills this month",
      color: "text-sustainability-green",
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      icon: "DollarSign",
      value: "$45,230",
      label: "Money Saved",
      description: "By students buying used items",
      color: "text-campus-blue",
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      icon: "Leaf",
      value: "1.2 tons",
      label: "CO₂ Reduced",
      description: "Through sustainable shopping",
      color: "text-sustainability-green",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      icon: "Users",
      value: "892",
      label: "Active Traders",
      description: "Building campus community",
      color: "text-campus-gold",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground flex items-center">
            <Icon name="TreePine" size={24} className="mr-2 text-sustainability-green" />
            Campus Impact
          </h3>
          <p className="text-muted-foreground mt-1">
            Together we're making a difference
          </p>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Calendar" size={16} className="mr-1" />
          <span>Updated daily</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric) => (
          <div
            key={metric?.id}
            className={`${metric?.bgColor} rounded-lg p-4 text-center transition-transform hover:scale-105`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 ${metric?.color} mb-3`}>
              <Icon name={metric?.icon} size={24} />
            </div>
            
            <div className="space-y-1">
              <div className={`text-2xl font-bold ${metric?.color}`}>
                {metric?.value}
              </div>
              <div className="font-medium text-foreground">
                {metric?.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-sustainability-green bg-opacity-10 rounded-lg border border-sustainability-green border-opacity-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="Award" size={20} className="mr-2 text-sustainability-green" />
            <div>
              <div className="font-medium text-foreground">
                Sustainability Champion
              </div>
              <div className="text-sm text-muted-foreground">
                Our campus ranks #3 in eco-friendly trading
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-sustainability-green">
              92%
            </div>
            <div className="text-xs text-muted-foreground">
              Waste reduction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityMetrics;