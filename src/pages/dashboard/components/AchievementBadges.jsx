import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = () => {
  const achievements = [
    {
      id: 1,
      title: "Trusted Seller",
      description: "Complete 10 successful transactions",
      icon: "Award",
      earned: true,
      progress: 10,
      total: 10,
      earnedDate: "Nov 7, 2025",
      color: "campus-gold"
    },
    {
      id: 2,
      title: "Eco Warrior",
      description: "Save 50 items from waste",
      icon: "Leaf",
      earned: true,
      progress: 67,
      total: 50,
      earnedDate: "Nov 5, 2025",
      color: "sustainability-green"
    },
    {
      id: 3,
      title: "Quick Responder",
      description: "Reply to messages within 1 hour",
      icon: "Zap",
      earned: true,
      progress: 25,
      total: 25,
      earnedDate: "Nov 3, 2025",
      color: "campus-blue"
    },
    {
      id: 4,
      title: "Community Helper",
      description: "Help 100 fellow students",
      icon: "Users",
      earned: false,
      progress: 73,
      total: 100,
      color: "trust-gray"
    },
    {
      id: 5,
      title: "Bargain Hunter",
      description: "Save $500 through smart purchases",
      icon: "Target",
      earned: false,
      progress: 387,
      total: 500,
      color: "action-red"
    },
    {
      id: 6,
      title: "Campus Ambassador",
      description: "Refer 20 new users",
      icon: "Megaphone",
      earned: false,
      progress: 12,
      total: 20,
      color: "campus-gold"
    }
  ];

  const earnedBadges = achievements?.filter(badge => badge?.earned);
  const inProgressBadges = achievements?.filter(badge => !badge?.earned);

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Achievement Badges</h3>
        <div className="text-sm text-muted-foreground">
          {earnedBadges?.length} of {achievements?.length} earned
        </div>
      </div>
      {/* Earned Badges */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Earned Badges</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {earnedBadges?.map((badge) => (
            <div
              key={badge?.id}
              className="relative flex flex-col items-center p-4 border border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
            >
              <div className={`flex items-center justify-center w-12 h-12 bg-${badge?.color} rounded-full mb-2 group-hover:scale-105 transition-transform`}>
                <Icon name={badge?.icon} size={20} color="white" />
              </div>
              <h5 className="text-xs font-medium text-foreground text-center mb-1">
                {badge?.title}
              </h5>
              <p className="text-xs text-muted-foreground text-center">
                Earned {badge?.earnedDate}
              </p>
              
              {/* Earned indicator */}
              <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-success rounded-full">
                <Icon name="Check" size={12} color="white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* In Progress Badges */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">In Progress</h4>
        <div className="space-y-3">
          {inProgressBadges?.map((badge) => (
            <div
              key={badge?.id}
              className="flex items-center space-x-4 p-3 border border-border rounded-lg hover:bg-muted/30 transition-colors"
            >
              <div className={`flex items-center justify-center w-10 h-10 bg-${badge?.color}/20 rounded-full`}>
                <Icon name={badge?.icon} size={16} className={`text-${badge?.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="text-sm font-medium text-foreground">
                    {badge?.title}
                  </h5>
                  <span className="text-xs text-muted-foreground">
                    {badge?.progress}/{badge?.total}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {badge?.description}
                </p>
                
                {/* Progress bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`bg-${badge?.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${Math.min((badge?.progress / badge?.total) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;