import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredListings = [
  {
    id: 1,
    title: "MacBook Pro 13\" M1 - Perfect for CS Students",
    price: 74999,
    originalPrice: 109999,
    image: "https://images.unsplash.com/photo-1555449218-e3d347e35300",
    alt: "Silver MacBook Pro laptop open on white desk showing desktop screen",
    seller: "Priya Sharma",
    sellerAvatar: "https://images.unsplash.com/photo-1631268088758-3e1fe5346e0c",
    sellerAvatarAlt: "Indian woman with long black hair smiling in casual blue sweater",
    condition: "Excellent",
    category: "Electronics",
    timePosted: "2 hours ago",
    verified: true
  },
  {
    id: 2,
    title: "Complete Organic Chemistry Textbook Set",
    price: 14999,
    originalPrice: 37999,
    image: "https://images.unsplash.com/photo-1661055336636-b525b102624a",
    alt: "Stack of colorful chemistry textbooks with molecular structure diagrams on covers",
    seller: "Rahul Verma",
    sellerAvatar: "https://images.unsplash.com/photo-1624491949737-a0ad51eca61c",
    sellerAvatarAlt: "Indian man with beard wearing glasses and green polo shirt",
    condition: "Good",
    category: "Textbooks",
    timePosted: "1 day ago",
    verified: true
  },
  {
    id: 3,
    title: "Hostel Room Furniture Bundle - Moving Out Sale",
    price: 20999,
    originalPrice: 49999,
    image: "https://images.unsplash.com/photo-1687816043484-42ab95dd3ca1",
    alt: "Modern hostel room setup with wooden desk, chair, and bookshelf in bright natural lighting",
    seller: "Ananya Patel",
    sellerAvatar: "https://images.unsplash.com/flagged/photo-1574675806233-01c5f3f6b13d",
    sellerAvatarAlt: "Indian woman with ponytail wearing white t-shirt smiling outdoors",
    condition: "Very Good",
    category: "Furniture",
    timePosted: "3 hours ago",
    verified: true
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredListings?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredListings?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredListings?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredListings?.length) % featuredListings?.length);
  };

  const currentItem = featuredListings?.[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-campus-blue to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 border-2 border-white rounded-lg rotate-12"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sustainability-green rounded-full animate-pulse"></div>
                <span className="text-sustainability-green font-medium">Live Campus Marketplace</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Campus,
                <br />
                <span className="text-campus-gold">Your Community</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Where students help students succeed through smart trading, sustainable choices, and authentic connections at your college.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-campus-gold">2,847</div>
                <div className="text-sm text-blue-200">Items Traded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-campus-gold">₹75L</div>
                <div className="text-sm text-blue-200">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-campus-gold">1,200+</div>
                <div className="text-sm text-blue-200">Active Students</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-white text-campus-blue hover:bg-gray-100" asChild>
                <Link to="/marketplace">
                  <Icon name="Search" size={20} className="mr-2" />
                  Browse Marketplace
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-campus-blue" asChild>
                <Link to="/registration">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Item Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Featured Today</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label="Previous item">

                    <Icon name="ChevronLeft" size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                    aria-label="Next item">

                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden campus-shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={currentItem?.image}
                    alt={currentItem?.alt}
                    className="w-full h-full object-cover" />

                  <div className="absolute top-3 left-3">
                    <span className="bg-sustainability-green text-white px-2 py-1 rounded-full text-xs font-medium">
                      {Math.round((currentItem?.originalPrice - currentItem?.price) / currentItem?.originalPrice * 100)}% OFF
                    </span>
                  </div>
                  {currentItem?.verified &&
                  <div className="absolute top-3 right-3">
                      <div className="bg-campus-blue text-white p-1 rounded-full">
                        <Icon name="Shield" size={14} />
                      </div>
                    </div>
                  }
                </div>

                <div className="p-4 text-gray-900">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image
                      src={currentItem?.sellerAvatar}
                      alt={currentItem?.sellerAvatarAlt}
                      className="w-6 h-6 rounded-full" />

                    <span className="text-sm font-medium">{currentItem?.seller}</span>
                    <span className="text-xs text-gray-500">• {currentItem?.timePosted}</span>
                  </div>

                  <h4 className="font-semibold text-lg mb-2 line-clamp-2">{currentItem?.title}</h4>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-campus-blue">₹{currentItem?.price?.toLocaleString('en-IN')}</span>
                      <span className="text-sm text-gray-500 line-through">₹{currentItem?.originalPrice?.toLocaleString('en-IN')}</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {currentItem?.condition}
                    </span>
                  </div>

                  <Button variant="default" size="sm" fullWidth className="bg-campus-blue hover:bg-blue-700" asChild>
                    <Link to="/product-detail">
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {featuredListings?.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'}`
                  }
                  aria-label={`Go to slide ${index + 1}`} />

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;