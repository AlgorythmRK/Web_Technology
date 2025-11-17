import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedItems = () => {
  const recommendations = [
  {
    id: 1,
    title: "Organic Chemistry Textbook",
    price: "$95.00",
    originalPrice: "$280.00",
    condition: "Like New",
    seller: "Emma S.",
    sellerRating: 4.9,
    image: "https://images.unsplash.com/photo-1640628188924-4e5953b5ac39",
    imageAlt: "Thick organic chemistry textbook with molecular structure diagrams on blue cover",
    distance: "0.3 miles",
    reason: "Based on your Chemistry major"
  },
  {
    id: 2,
    title: "Study Desk with Drawers",
    price: "$65.00",
    originalPrice: "$150.00",
    condition: "Good",
    seller: "James L.",
    sellerRating: 4.7,
    image: "https://images.unsplash.com/photo-1718049719677-85afb466425a",
    imageAlt: "Wooden study desk with multiple drawers and clean modern design",
    distance: "0.5 miles",
    reason: "Popular in your area"
  },
  {
    id: 3,
    title: "Scientific Calculator TI-84",
    price: "$45.00",
    originalPrice: "$120.00",
    condition: "Excellent",
    seller: "Maria R.",
    sellerRating: 5.0,
    image: "https://images.unsplash.com/photo-1563212034-ab3ab0345ed8",
    imageAlt: "Black TI-84 scientific calculator with graphing display and numeric keypad",
    distance: "0.2 miles",
    reason: "Matches your recent searches"
  }];


  const handleItemClick = (item) => {
    console.log(`Navigate to item: ${item?.id}`);
  };

  const handleMessageSeller = (item) => {
    console.log(`Message seller for item: ${item?.id}`);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recommended for You</h3>
        <button className="text-sm text-campus-blue hover:text-secondary transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {recommendations?.map((item) =>
        <div
          key={item?.id}
          className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/30 hover:border-primary/20 transition-all cursor-pointer group"
          onClick={() => handleItemClick(item)}>

            <div className="flex-shrink-0">
              <Image
              src={item?.image}
              alt={item?.imageAlt}
              className="w-20 h-20 rounded-lg object-cover" />

            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                {item?.title}
              </h4>
              
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-lg font-bold text-campus-blue">
                  {item?.price}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {item?.originalPrice}
                </span>
                <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  {Math.round((1 - parseFloat(item?.price?.replace('$', '')) / parseFloat(item?.originalPrice?.replace('$', ''))) * 100)}% off
                </span>
              </div>
              
              <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded-full">
                  {item?.condition}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="User" size={12} />
                  <span>{item?.seller}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-campus-gold fill-current" />
                  <span>{item?.sellerRating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={12} />
                  <span>{item?.distance}</span>
                </div>
              </div>
              
              <p className="text-xs text-trust-gray mt-1">
                {item?.reason}
              </p>
            </div>
            
            <div className="flex flex-col space-y-2">
              <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              onClick={(e) => {
                e?.stopPropagation();
                handleMessageSeller(item);
              }}>

                Message
              </Button>
              <Button
              variant="ghost"
              size="sm"
              iconName="Heart"
              onClick={(e) => {
                e?.stopPropagation();
                console.log(`Save item: ${item?.id}`);
              }}>

              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <Button variant="outline" fullWidth iconName="Search" iconPosition="left">
          Browse More Items
        </Button>
      </div>
    </div>);

};

export default RecommendedItems;