import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = () => {
  const [activeTab, setActiveTab] = useState('unread');
  
  const notifications = {
    unread: [
      {
        id: 1,
        type: "message",
        title: "New message from Alex K.",
        description: "\"Is the gaming chair still available? I\'m interested in purchasing it.\"",
        timestamp: "2 hours ago",
        icon: "MessageCircle",
        color: "campus-blue",
        actionText: "Reply"
      },
      {
        id: 2,
        type: "offer",
        title: "Price negotiation on MacBook Pro",
        description: "Sarah M. offered $850 for your MacBook Pro 13\" 2021",
        timestamp: "4 hours ago",
        icon: "DollarSign",
        color: "campus-gold",
        actionText: "View Offer"
      },
      {
        id: 3,
        type: "system",
        title: "Listing performance update",
        description: "Your Mini Fridge listing has received 15 new views today",
        timestamp: "6 hours ago",
        icon: "TrendingUp",
        color: "sustainability-green",
        actionText: "View Stats"
      }
    ],
    all: [
      {
        id: 4,
        type: "achievement",
        title: "Achievement unlocked!",
        description: "You\'ve earned the \'Trusted Seller\' badge for completing 10 transactions",
        timestamp: "1 day ago",
        icon: "Award",
        color: "campus-gold",
        read: true
      },
      {
        id: 5,
        type: "transaction",
        title: "Payment received",
        description: "You received $85.00 for Calculus Textbook - 8th Edition",
        timestamp: "2 days ago",
        icon: "CheckCircle",
        color: "success",
        read: true
      },
      {
        id: 6,
        type: "reminder",
        title: "Respond to buyer inquiry",
        description: "Mike R. is waiting for your response about the desk lamp",
        timestamp: "3 days ago",
        icon: "Clock",
        color: "warning",
        read: true
      }
    ]
  };

  const tabs = [
    { id: 'unread', label: 'Unread', count: notifications?.unread?.length },
    { id: 'all', label: 'All Notifications', count: notifications?.all?.length + notifications?.unread?.length }
  ];

  const currentNotifications = activeTab === 'unread' ? notifications?.unread : [...notifications?.unread, ...notifications?.all];

  const markAllAsRead = () => {
    console.log("Mark all notifications as read");
  };

  const handleNotificationAction = (notification) => {
    console.log(`Action for notification: ${notification?.id}`);
  };

  return (
    <div className="bg-card border border-border rounded-lg campus-shadow">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
          {notifications?.unread?.length > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        
        <div className="flex space-x-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {tab?.label}
              {tab?.count > 0 && (
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  activeTab === tab?.id 
                    ? 'bg-primary-foreground text-primary' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {tab?.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {currentNotifications?.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Bell" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No notifications found</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {currentNotifications?.map((notification) => (
              <div
                key={notification?.id}
                className={`p-4 hover:bg-muted/30 transition-colors ${
                  !notification?.read && activeTab === 'all' ? 'bg-muted/20' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-10 h-10 bg-${notification?.color} rounded-full flex-shrink-0`}>
                    <Icon name={notification?.icon} size={16} color="white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground">
                          {notification?.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {notification?.description}
                        </p>
                        <p className="text-xs text-trust-gray mt-2">
                          {notification?.timestamp}
                        </p>
                      </div>
                      
                      {notification?.actionText && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleNotificationAction(notification)}
                          className="ml-4 flex-shrink-0"
                        >
                          {notification?.actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {!notification?.read && activeTab === 'all' && (
                    <div className="w-2 h-2 bg-campus-blue rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;