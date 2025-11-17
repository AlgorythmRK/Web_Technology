import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ImageGallery from './components/ImageGallery';
import SellerProfile from './components/SellerProfile';
import MessagingInterface from './components/MessagingInterface';
import RelatedItems from './components/RelatedItems';
import SafetyGuidelines from './components/SafetyGuidelines';
import ItemConditionAssessment from './components/ItemConditionAssessment';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock product data
  const mockItem = {
    id: "1",
    title: "MacBook Pro 13-inch M2 - Perfect for CS Students",
    description: `Selling my MacBook Pro 13-inch with M2 chip in excellent condition. This laptop has been my reliable companion throughout my Computer Science program and is perfect for coding, design work, and everyday tasks.\n\nKey Features:\n• Apple M2 chip with 8-core CPU and 10-core GPU\n• 16GB unified memory for smooth multitasking\n• 512GB SSD storage - plenty of space for projects\n• Stunning Retina display with True Tone\n• All-day battery life (up to 20 hours)\n• Includes original charger and box\n\nI'm graduating and upgrading to a desktop setup, so this beauty needs a new home. It's been kept in a protective case since day one and has never been dropped or damaged. Perfect for any student looking for a premium laptop that can handle demanding coursework.\n\nComes with:\n• Original box and documentation\n• MagSafe 3 charging cable\n• USB-C to MagSafe 3 cable\n• Protective hard case (worth $40)\n• Screen protector already applied\n\nNo trades please - need cash for my new setup. Serious inquiries only!`,
    price: 1299,
    originalPrice: 1599,
    condition: "Like New",
    conditionDetails: {
      functional: true,
      originalPackaging: true,
      noDamage: true,
      allAccessories: true,
      clean: true,
      notes: "Kept in protective case since purchase. No scratches, dents, or signs of wear. Battery health at 96%. Always used with keyboard cover to prevent key shine."
    },
    category: "Electronics",
    subcategory: "Laptops",
    images: [
    {
      url: "https://images.unsplash.com/photo-1734797129438-62f0ec468417",
      alt: "Silver MacBook Pro 13-inch closed on white desk showing Apple logo and sleek aluminum finish"
    },
    {
      url: "https://images.unsplash.com/photo-1669977633028-9c3b23ad1aab",
      alt: "MacBook Pro open displaying colorful desktop wallpaper with keyboard and trackpad visible"
    },
    {
      url: "https://images.unsplash.com/photo-1457010267632-5e1e3c9b9273",
      alt: "MacBook Pro side profile showing thin design and port configuration"
    },
    {
      url: "https://images.unsplash.com/photo-1540542287318-2b3e0a706e0e",
      alt: "MacBook Pro with original box and accessories laid out on wooden surface"
    }],

    seller: {
      id: "seller123",
      name: "Alex Chen",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2720bf6-1762273579122.png",
      avatarAlt: "Professional headshot of young Asian man with short black hair wearing navy blue shirt",
      university: "Stanford University - Computer Science",
      rating: 4.9,
      reviewCount: 47,
      itemsSold: 23,
      joinDate: "Sep 2022",
      responseTime: "~2 hours",
      isVerified: true,
      completionRate: 98,
      sustainabilityScore: 85,
      badges: 12
    },
    location: {
      campus: "Stanford University",
      area: "Main Campus",
      distance: "0.3 miles from you",
      meetupSuggestions: [
      "Green Library - Main Floor",
      "Tresidder Union - Food Court",
      "Engineering Quad - Outdoor Tables"]

    },
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    views: 156,
    favorites: 23,
    tags: ["laptop", "macbook", "m2", "computer science", "programming", "design"],
    specifications: {
      "Processor": "Apple M2 chip",
      "Memory": "16GB unified memory",
      "Storage": "512GB SSD",
      "Display": "13.3-inch Retina",
      "Graphics": "10-core GPU",
      "Battery": "Up to 20 hours",
      "Weight": "3.0 pounds",
      "Color": "Space Gray"
    },
    sustainabilityImpact: {
      co2Saved: "45 kg",
      wasteReduced: "2.1 kg",
      resourcesConserved: "78%"
    }
  };

  const relatedItems = [
  {
    id: "2",
    title: "iPad Pro 11-inch with Apple Pencil",
    price: 699,
    originalPrice: 899,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8",
    imageAlt: "iPad Pro with Apple Pencil on white background showing screen with digital artwork",
    seller: "Sarah Kim",
    isVerified: true,
    distance: "0.5 miles",
    timeAgo: "3 hours ago"
  },
  {
    id: "3",
    title: "Mechanical Keyboard - Cherry MX Blue",
    price: 89,
    originalPrice: 129,
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1636059151106-5471f93f1dc9",
    imageAlt: "Black mechanical keyboard with RGB backlighting on dark desk surface",
    seller: "Mike Rodriguez",
    isVerified: true,
    distance: "0.2 miles",
    timeAgo: "1 day ago"
  },
  {
    id: "4",
    title: "Dell UltraSharp 27-inch Monitor",
    price: 299,
    originalPrice: 449,
    condition: "Good",
    image: "https://images.unsplash.com/photo-1674083401514-7a982e16e69f",
    imageAlt: "Large computer monitor displaying colorful desktop wallpaper on modern desk setup",
    seller: "Emma Thompson",
    isVerified: false,
    distance: "0.8 miles",
    timeAgo: "2 days ago"
  }];


  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setItem(mockItem);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(price);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })?.format(date);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  if (!item) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <Icon name="AlertCircle" size={48} className="mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Item Not Found</h1>
          <p className="text-muted-foreground mb-6">The item you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/marketplace">Browse Marketplace</Link>
          </Button>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/marketplace" className="hover:text-foreground transition-colors">
            Marketplace
          </Link>
          <Icon name="ChevronRight" size={14} />
          <Link to={`/marketplace?category=${item?.category}`} className="hover:text-foreground transition-colors">
            {item?.category}
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{item?.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <ImageGallery images={item?.images} />

            {/* Item Information */}
            <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground mb-2">{item?.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{item?.location?.distance}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{item?.views} views</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>Posted {formatDate(item?.postedDate)}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={toggleFavorite}
                  className="p-2 hover:bg-muted rounded-md transition-colors">

                  <Icon
                    name="Heart"
                    size={20}
                    className={isFavorited ? "text-action-red fill-current" : "text-muted-foreground"} />

                </button>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-campus-blue">{formatPrice(item?.price)}</span>
                {item?.originalPrice &&
                <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(item?.originalPrice)}
                  </span>
                }
                {item?.originalPrice &&
                <span className="bg-sustainability-green text-white text-sm px-2 py-1 rounded-full">
                    Save {formatPrice(item?.originalPrice - item?.price)}
                  </span>
                }
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item?.tags?.map((tag, index) =>
                <span
                  key={index}
                  className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">

                    #{tag}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                <div className="text-muted-foreground whitespace-pre-line">
                  {item?.description}
                </div>
              </div>
            </div>

            {/* Specifications */}
            {item?.specifications &&
            <div className="bg-card border border-border rounded-lg p-6 campus-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(item?.specifications)?.map(([key, value]) =>
                <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    </div>
                )}
                </div>
              </div>
            }

            {/* Condition Assessment */}
            <ItemConditionAssessment
              condition={item?.condition}
              conditionDetails={item?.conditionDetails} />


            {/* Sustainability Impact */}
            {item?.sustainabilityImpact &&
            <div className="bg-sustainability-green/10 border border-sustainability-green/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Leaf" size={20} className="text-sustainability-green" />
                  <h3 className="text-lg font-semibold text-foreground">Environmental Impact</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sustainability-green">
                      {item?.sustainabilityImpact?.co2Saved}
                    </div>
                    <div className="text-xs text-muted-foreground">CO₂ Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sustainability-green">
                      {item?.sustainabilityImpact?.wasteReduced}
                    </div>
                    <div className="text-xs text-muted-foreground">Waste Reduced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sustainability-green">
                      {item?.sustainabilityImpact?.resourcesConserved}
                    </div>
                    <div className="text-xs text-muted-foreground">Resources Conserved</div>
                  </div>
                </div>
              </div>
            }
          </div>

          {/* Right Column - Seller and Actions */}
          <div className="space-y-6">
            {/* Seller Profile */}
            <SellerProfile seller={item?.seller} />

            {/* Messaging Interface */}
            <MessagingInterface seller={item?.seller} item={item} />

            {/* Pickup Locations */}
            <div className="bg-card border border-border rounded-lg p-4 campus-shadow">
              <h3 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Suggested Meetup Locations</span>
              </h3>
              <div className="space-y-2">
                {item?.location?.meetupSuggestions?.map((location, index) =>
                <div key={index} className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={12} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{location}</span>
                  </div>
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <button className="text-xs text-campus-blue hover:text-campus-blue/80 transition-colors">
                  View on Campus Map →
                </button>
              </div>
            </div>

            {/* Safety Guidelines */}
            <SafetyGuidelines />
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-12">
          <RelatedItems items={relatedItems} />
        </div>
      </div>
    </div>);

};

export default ProductDetail;