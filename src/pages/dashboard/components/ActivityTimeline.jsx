import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ActivityTimeline = () => {
  const activities = [
  {
    id: 1,
    type: "sale",
    title: "Sold Calculus Textbook",
    description: "Transaction completed with Sarah M.",
    amount: "$85.00",
    timestamp: "2 hours ago",
    icon: "DollarSign",
    color: "success",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5234dbc-1762273965593.png",
    avatarAlt: "Professional headshot of young woman with brown hair smiling at camera"
  },
  {
    id: 2,
    type: "message",
    title: "New message from Alex K.",
    description: "Interested in your gaming chair",
    timestamp: "4 hours ago",
    icon: "MessageCircle",
    color: "campus-blue",
    avatar: "https://images.unsplash.com/photo-1646324799589-4eaa88a9a82a",
    avatarAlt: "Casual headshot of young man with beard wearing gray sweater"
  },
  {
    id: 3,
    type: "listing",
    title: "Listed Mini Fridge",
    description: "Your item is now live in marketplace",
    timestamp: "1 day ago",
    icon: "Plus",
    color: "sustainability-green",
    avatar: null
  },
  {
    id: 4,
    type: "purchase",
    title: "Purchased Lab Equipment",
    description: "From Chemistry Department Store",
    amount: "-$45.00",
    timestamp: "2 days ago",
    icon: "ShoppingCart",
    color: "campus-gold",
    avatar: "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d",
    avatarAlt: "Professional photo of middle-aged man in white lab coat smiling"
  },
  {
    id: 5,
    type: "achievement",
    title: "Earned Trusted Seller Badge",
    description: "Completed 10 successful transactions",
    timestamp: "3 days ago",
    icon: "Award",
    color: "campus-gold",
    avatar: null
  }];


  const getActivityIcon = (type, icon) => {
    return icon;
  };

  const getActivityColor = (color) => {
    switch (color) {
      case 'success':return 'text-success';
      case 'campus-blue':return 'text-campus-blue';
      case 'sustainability-green':return 'text-sustainability-green';
      case 'campus-gold':return 'text-campus-gold';
      default:return 'text-trust-gray';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-campus-blue hover:text-secondary transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) =>
        <div key={activity?.id} className="flex items-start space-x-4">
            <div className="relative">
              {activity?.avatar ?
            <Image
              src={activity?.avatar}
              alt={activity?.avatarAlt}
              className="w-10 h-10 rounded-full object-cover" /> :


            <div className={`flex items-center justify-center w-10 h-10 bg-${activity?.color} rounded-full`}>
                  <Icon
                name={getActivityIcon(activity?.type, activity?.icon)}
                size={16}
                color="white" />

                </div>
            }
              {index < activities?.length - 1 &&
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-6 bg-border"></div>
            }
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity?.title}
                </p>
                {activity?.amount &&
              <span className={`text-sm font-medium ${
              activity?.amount?.startsWith('-') ? 'text-error' : 'text-success'}`
              }>
                    {activity?.amount}
                  </span>
              }
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {activity?.description}
              </p>
              <p className="text-xs text-trust-gray mt-1">
                {activity?.timestamp}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ActivityTimeline;