import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ActiveListings = () => {
  const [activeTab, setActiveTab] = useState('active');

  const listings = {
    active: [
    {
      id: 1,
      title: "Gaming Chair - Ergonomic Design",
      price: "$120.00",
      condition: "Like New",
      views: 45,
      messages: 8,
      image: "https://images.unsplash.com/photo-1631035799998-a450b2950466",
      imageAlt: "Black ergonomic gaming chair with red accents and adjustable armrests",
      listedDate: "Nov 8, 2025",
      status: "active"
    },
    {
      id: 2,
      title: "Mini Fridge - Perfect for Dorms",
      price: "$75.00",
      condition: "Good",
      views: 23,
      messages: 3,
      image: "https://images.unsplash.com/photo-1723810774308-6dab2f35f50e",
      imageAlt: "Compact white mini refrigerator with freezer compartment suitable for dorm rooms",
      listedDate: "Nov 9, 2025",
      status: "active"
    },
    {
      id: 3,
      title: "MacBook Pro 13\" 2021",
      price: "$899.00",
      condition: "Excellent",
      views: 89,
      messages: 15,
      image: "https://images.unsplash.com/photo-1583273501748-4fea50c1b4c0",
      imageAlt: "Silver MacBook Pro laptop open displaying desktop screen on white surface",
      listedDate: "Nov 7, 2025",
      status: "active"
    }],

    sold: [
    {
      id: 4,
      title: "Calculus Textbook - 8th Edition",
      price: "$85.00",
      condition: "Good",
      views: 67,
      messages: 12,
      image: "https://images.unsplash.com/photo-1640628188924-4e5953b5ac39",
      imageAlt: "Thick calculus mathematics textbook with blue cover lying on wooden desk",
      listedDate: "Nov 5, 2025",
      soldDate: "Nov 10, 2025",
      status: "sold"
    },
    {
      id: 5,
      title: "Desk Lamp - Adjustable LED",
      price: "$25.00",
      condition: "Like New",
      views: 34,
      messages: 6,
      image: "https://images.unsplash.com/photo-1611060897179-fffefd5118b7",
      imageAlt: "Modern white LED desk lamp with adjustable arm and touch controls",
      listedDate: "Nov 3, 2025",
      soldDate: "Nov 8, 2025",
      status: "sold"
    }]

  };

  const tabs = [
  { id: 'active', label: 'Active Listings', count: listings?.active?.length },
  { id: 'sold', label: 'Sold Items', count: listings?.sold?.length }];


  const currentListings = listings?.[activeTab];

  return (
    <div className="bg-card border border-border rounded-lg campus-shadow">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">My Listings</h3>
          <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
            Add Listing
          </Button>
        </div>
        
        <div className="flex space-x-1">
          {tabs?.map((tab) =>
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === tab?.id ?
            'bg-primary text-primary-foreground' :
            'text-muted-foreground hover:text-foreground hover:bg-muted'}`
            }>

              {tab?.label} ({tab?.count})
            </button>
          )}
        </div>
      </div>
      <div className="p-6">
        {currentListings?.length === 0 ?
        <div className="text-center py-8">
            <Icon name="Package" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No {activeTab} listings found</p>
          </div> :

        <div className="space-y-4">
            {currentListings?.map((listing) =>
          <div key={listing?.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <Image
                src={listing?.image}
                alt={listing?.imageAlt}
                className="w-16 h-16 rounded-lg object-cover" />

                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {listing?.title}
                  </h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-lg font-bold text-campus-blue">
                      {listing?.price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {listing?.condition}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-trust-gray">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{listing?.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={12} />
                      <span>{listing?.messages} messages</span>
                    </div>
                    <span>Listed {listing?.listedDate}</span>
                    {listing?.soldDate &&
                <span className="text-success">Sold {listing?.soldDate}</span>
                }
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {activeTab === 'active' &&
              <>
                      <Button variant="ghost" size="sm" iconName="Edit">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" iconName="TrendingUp">
                        Promote
                      </Button>
                      <Button variant="ghost" size="sm" iconName="MoreVertical">
                      </Button>
                    </>
              }
                  {activeTab === 'sold' &&
              <Button variant="ghost" size="sm" iconName="RotateCcw">
                      Relist
                    </Button>
              }
                </div>
              </div>
          )}
          </div>
        }
      </div>
    </div>);

};

export default ActiveListings;