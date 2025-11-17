import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentActivity = () => {
  const recentTransactions = [
  {
    id: 1,
    type: 'sale',
    buyer: 'Alex Johnson',
    buyerAvatar: "https://images.unsplash.com/photo-1698772697152-583078aebde4",
    buyerAvatarAlt: 'Young man with brown hair wearing blue hoodie smiling at camera',
    seller: 'Maria Garcia',
    sellerAvatar: "https://images.unsplash.com/photo-1591391380525-2c50b42aa7de",
    sellerAvatarAlt: 'Latina woman with curly hair wearing red sweater in outdoor setting',
    item: 'Calculus III Textbook',
    price: 85,
    timeAgo: '2 minutes ago',
    category: 'Textbooks'
  },
  {
    id: 2,
    type: 'sale',
    buyer: 'David Kim',
    buyerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3fca443-1762273296327.png",
    buyerAvatarAlt: 'Asian man with glasses wearing white button-up shirt in professional setting',
    seller: 'Jessica Brown',
    sellerAvatar: "https://images.unsplash.com/photo-1734892919239-811756c42d3d",
    sellerAvatarAlt: 'African American woman with braids wearing green blouse smiling warmly',
    item: 'iPhone 13 Pro Case',
    price: 25,
    timeAgo: '15 minutes ago',
    category: 'Electronics'
  },
  {
    id: 3,
    type: 'sale',
    buyer: 'Sophie Wilson',
    buyerAvatar: "https://images.unsplash.com/photo-1538154908444-30ad1073e79a",
    buyerAvatarAlt: 'Blonde woman with ponytail wearing casual gray t-shirt outdoors',
    seller: 'Ryan Martinez',
    sellerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17616e717-1762274227967.png",
    sellerAvatarAlt: 'Hispanic man with short black hair wearing navy polo shirt',
    item: 'Desk Lamp - IKEA',
    price: 15,
    timeAgo: '32 minutes ago',
    category: 'Furniture'
  },
  {
    id: 4,
    type: 'sale',
    buyer: 'Emma Davis',
    buyerAvatar: "https://images.unsplash.com/photo-1588358643017-65464bb2a667",
    buyerAvatarAlt: 'Redhead woman with freckles wearing blue denim jacket smiling brightly',
    seller: 'James Lee',
    sellerAvatar: "https://images.unsplash.com/photo-1603305384745-b7add138ed56",
    sellerAvatarAlt: 'Asian man with beard wearing black t-shirt in casual indoor setting',
    item: 'Organic Chemistry Lab Kit',
    price: 120,
    timeAgo: '1 hour ago',
    category: 'Supplies'
  },
  {
    id: 5,
    type: 'sale',
    buyer: 'Michael Chen',
    buyerAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c4584ee8-1762274487410.png",
    buyerAvatarAlt: 'Asian man with styled hair wearing white dress shirt in office environment',
    seller: 'Lisa Anderson',
    sellerAvatar: "https://images.unsplash.com/photo-1578692471836-4cdd5f179dd1",
    sellerAvatarAlt: 'Blonde woman with long hair wearing pink sweater in bright natural lighting',
    item: 'Basketball Shoes - Nike',
    price: 65,
    timeAgo: '2 hours ago',
    category: 'Sports'
  }];


  const communityStats = [
  {
    icon: 'TrendingUp',
    label: 'Items Sold Today',
    value: '47',
    change: '+12%',
    positive: true
  },
  {
    icon: 'Users',
    label: 'New Members',
    value: '23',
    change: '+8%',
    positive: true
  },
  {
    icon: 'DollarSign',
    label: 'Money Saved',
    value: '$2,340',
    change: '+15%',
    positive: true
  },
  {
    icon: 'Recycle',
    label: 'Items Reused',
    value: '156',
    change: '+22%',
    positive: true
  }];


  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Live Campus Activity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what's happening right now in your campus marketplace
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
                <div className="flex items-center space-x-1 text-sustainability-green">
                  <div className="w-2 h-2 bg-sustainability-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                {recentTransactions?.map((transaction) =>
                <div key={transaction?.id} className="bg-white rounded-lg p-4 campus-shadow-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        <Image
                        src={transaction?.buyerAvatar}
                        alt={transaction?.buyerAvatarAlt}
                        className="w-10 h-10 rounded-full border-2 border-white" />

                        <Image
                        src={transaction?.sellerAvatar}
                        alt={transaction?.sellerAvatarAlt}
                        className="w-10 h-10 rounded-full border-2 border-white" />

                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">{transaction?.buyer}</span>
                          <Icon name="ArrowRight" size={14} className="text-gray-400" />
                          <span className="font-medium text-gray-900">{transaction?.seller}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{transaction?.item}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-semibold text-sustainability-green">${transaction?.price}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{transaction?.category}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{transaction?.timeAgo}</span>
                        </div>
                      </div>

                      <div className="text-sustainability-green">
                        <Icon name="CheckCircle" size={20} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mt-6">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center space-x-2 text-campus-blue hover:text-blue-700 font-medium transition-colors">

                  <span>View All Activity</span>
                  <Icon name="ExternalLink" size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-campus-blue to-blue-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-6">Today's Impact</h3>
              
              <div className="space-y-4">
                {communityStats?.map((stat, index) =>
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon name={stat?.icon} size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-blue-100">{stat?.label}</p>
                        <p className="font-semibold">{stat?.value}</p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${stat?.positive ? 'text-sustainability-green' : 'text-red-300'}`}>
                      {stat?.change}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trust & Safety</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sustainability-green rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={16} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Verified Students Only</p>
                    <p className="text-xs text-gray-500">100% campus email verification</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-campus-blue rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={16} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Safe Messaging</p>
                    <p className="text-xs text-gray-500">Secure in-app communication</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-campus-gold rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Reputation System</p>
                    <p className="text-xs text-gray-500">Community-driven ratings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default RecentActivity;