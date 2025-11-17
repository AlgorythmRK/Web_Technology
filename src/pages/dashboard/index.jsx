import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import StatsCard from './components/StatsCard';
import ActivityTimeline from './components/ActivityTimeline';
import ActiveListings from './components/ActiveListings';
import QuickActions from './components/QuickActions';
import AchievementBadges from './components/AchievementBadges';
import NotificationCenter from './components/NotificationCenter';
import RecommendedItems from './components/RecommendedItems';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName] = useState("Alex Johnson");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime?.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const statsData = [
    {
      title: "Total Earnings",
      value: "$1,247",
      subtitle: "This semester",
      icon: "DollarSign",
      trend: "up",
      trendValue: "+12%",
      color: "success"
    },
    {
      title: "Items Sold",
      value: "23",
      subtitle: "All time",
      icon: "Package",
      trend: "up",
      trendValue: "+3",
      color: "campus-blue"
    },
    {
      title: "Active Listings",
      value: "8",
      subtitle: "Currently listed",
      icon: "Store",
      trend: "neutral",
      trendValue: "0",
      color: "sustainability-green"
    },
    {
      title: "Trust Score",
      value: "4.9",
      subtitle: "Based on 15 reviews",
      icon: "Star",
      trend: "up",
      trendValue: "+0.1",
      color: "campus-gold"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {getGreeting()}, {userName}!
                </h1>
                <p className="text-muted-foreground mt-1">
                  Welcome back to your CampCart dashboard. Here's what's happening with your marketplace activity.
                </p>
              </div>
              
              <div className="hidden lg:flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    {currentTime?.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-xs text-trust-gray">
                    {currentTime?.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-campus-blue rounded-full">
                  <Icon name="User" size={24} color="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData?.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat?.title}
                value={stat?.value}
                subtitle={stat?.subtitle}
                icon={stat?.icon}
                trend={stat?.trend}
                trendValue={stat?.trendValue}
                color={stat?.color}
              />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <QuickActions />
              
              {/* Active Listings */}
              <ActiveListings />
              
              {/* Achievement Badges */}
              <AchievementBadges />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Activity Timeline */}
              <ActivityTimeline />
              
              {/* Notification Center */}
              <NotificationCenter />
              
              {/* Recommended Items */}
              <RecommendedItems />
            </div>
          </div>

          {/* Bottom Section - Campus Impact */}
          <div className="mt-12 bg-gradient-to-r from-campus-blue/10 to-sustainability-green/10 border border-border rounded-lg p-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-sustainability-green rounded-full mx-auto mb-4">
                <Icon name="Leaf" size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Your Campus Impact
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Through your marketplace activities, you've helped create a more sustainable campus community. 
                Keep up the great work in promoting the circular economy!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sustainability-green mb-1">67</div>
                  <div className="text-sm text-muted-foreground">Items Saved from Waste</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-campus-blue mb-1">$2,340</div>
                  <div className="text-sm text-muted-foreground">Community Savings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-campus-gold mb-1">156</div>
                  <div className="text-sm text-muted-foreground">Students Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;