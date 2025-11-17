import React from 'react';
import Icon from '../../../components/AppIcon';

const CampusStats = () => {
  const stats = [
  {
    id: 1,
    icon: "Users",
    value: "15,000+",
    label: "Active Students",
    color: "text-campus-blue"
  },
  {
    id: 2,
    icon: "ShoppingBag",
    value: "50,000+",
    label: "Items Traded",
    color: "text-sustainability-green"
  },
  {
    id: 3,
    icon: "DollarSign",
    value: "$2.5M+",
    label: "Money Saved",
    color: "text-campus-gold"
  },
  {
    id: 4,
    icon: "Recycle",
    value: "85%",
    label: "Waste Reduced",
    color: "text-sustainability-green"
  }];


  const recentActivity = [
  {
    id: 1,
    user: "Sarah M.",
    action: "sold Calculus textbook",
    time: "2 minutes ago",
    avatar: "https://images.unsplash.com/photo-1666256068603-8c7ece868b00",
    avatarAlt: "Young woman with long brown hair smiling at camera in casual blue sweater"
  },
  {
    id: 2,
    user: "Mike R.",
    action: "listed gaming chair",
    time: "5 minutes ago",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1367deb4c-1762274573807.png",
    avatarAlt: "Professional headshot of young man with short dark hair in navy blue shirt"
  },
  {
    id: 3,
    user: "Emma L.",
    action: "bought mini fridge",
    time: "12 minutes ago",
    avatar: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd",
    avatarAlt: "Smiling woman with blonde hair in casual white t-shirt outdoors"
  }];


  return (
    <div className="space-y-8">
      {/* Campus Impact Stats */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Campus Impact
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {stats?.map((stat) =>
          <div
            key={stat?.id}
            className="text-center p-4 bg-card border border-border rounded-lg campus-shadow">

              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 bg-muted rounded-lg">
                <Icon name={stat?.icon} size={20} className={stat?.color} />
              </div>
              <div className="text-xl font-bold text-foreground">{stat?.value}</div>
              <div className="text-xs text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
      {/* Live Activity Feed */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Live Campus Activity
        </h3>
        <div className="space-y-3">
          {recentActivity?.map((activity) =>
          <div
            key={activity?.id}
            className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg campus-shadow">

              <img
              src={activity?.avatar}
              alt={activity?.avatarAlt}
              className="w-8 h-8 rounded-full object-cover" />

              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{activity?.user}</span>{' '}
                  <span className="text-muted-foreground">{activity?.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity?.time}</p>
              </div>
              <div className="w-2 h-2 bg-sustainability-green rounded-full campus-pulse"></div>
            </div>
          )}
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="p-4 bg-campus-blue/5 border border-campus-blue/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Award" size={16} color="var(--color-campus-blue)" />
          <span className="text-sm font-medium text-campus-blue">Trusted Platform</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Verified by campus security and endorsed by student government associations.
        </p>
      </div>
    </div>);

};

export default CampusStats;