import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "List New Item",
      description: "Sell something you no longer need",
      icon: "Plus",
      color: "campus-blue",
      action: () => console.log("Navigate to create listing")
    },
    {
      id: 2,
      title: "Browse Marketplace",
      description: "Find items you need",
      icon: "Search",
      color: "sustainability-green",
      action: () => console.log("Navigate to marketplace")
    },
    {
      id: 3,
      title: "Check Messages",
      description: "3 unread conversations",
      icon: "MessageCircle",
      color: "campus-gold",
      badge: 3,
      action: () => console.log("Navigate to messages")
    },
    {
      id: 4,
      title: "Safety Center",
      description: "Trading tips and guidelines",
      icon: "Shield",
      color: "trust-gray",
      action: () => console.log("Navigate to safety center")
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={action?.action}
            className="relative flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 hover:border-primary/20 transition-all campus-transition group"
          >
            <div className={`flex items-center justify-center w-12 h-12 bg-${action?.color} rounded-lg group-hover:scale-105 transition-transform`}>
              <Icon name={action?.icon} size={20} color="white" />
            </div>
            
            <div className="flex-1 text-left">
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {action?.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {action?.description}
              </p>
            </div>
            
            {action?.badge && (
              <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-error text-white text-xs font-bold rounded-full">
                {action?.badge}
              </div>
            )}
            
            <Icon 
              name="ChevronRight" 
              size={16} 
              className="text-muted-foreground group-hover:text-primary transition-colors" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;