import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

// Import all components
import CategoryFilter from './components/CategoryFilter';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import ItemCard from './components/ItemCard';
import FeaturedItems from './components/FeaturedItems';
import SustainabilityMetrics from './components/SustainabilityMetrics';
import QuickViewModal from './components/QuickViewModal';

const Marketplace = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    conditions: [],
    location: '',
    verifiedOnly: false,
    availableOnly: true
  });

  // Mock data
  const categories = [
  { id: 'textbooks', name: 'Textbooks', icon: 'Book', count: 234 },
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 156 },
  { id: 'furniture', name: 'Furniture', icon: 'Armchair', count: 89 },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt', count: 167 },
  { id: 'sports', name: 'Sports & Fitness', icon: 'Dumbbell', count: 78 },
  { id: 'supplies', name: 'School Supplies', icon: 'PenTool', count: 145 },
  { id: 'bikes', name: 'Bikes & Transport', icon: 'Bike', count: 45 },
  { id: 'other', name: 'Other', icon: 'Package', count: 92 }];


  const mockItems = [
  {
    id: 1,
    title: "MacBook Pro 13\" 2021 - Excellent Condition",
    description: "Barely used MacBook Pro with M1 chip. Perfect for computer science students. Includes original charger and box. No scratches or dents.",
    price: 74999,
    originalPrice: 109999,
    condition: "Excellent",
    location: "North Campus",
    image: "https://images.unsplash.com/photo-1555449218-e3d347e35300",
    imageAlt: "Silver MacBook Pro laptop open on white desk showing desktop screen",
    category: "electronics",
    postedAt: "2025-11-09T10:30:00Z",
    isUrgent: false,
    isFeatured: true,
    isFavorited: false,
    views: 127,
    seller: {
      name: "Priya Sharma",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d640bdad-1762273654298.png",
      avatarAlt: "Professional headshot of Indian woman with shoulder-length black hair in navy blazer",
      rating: 4.9,
      isVerified: true,
      totalSales: 23
    },
    additionalImages: [
    { src: "https://images.unsplash.com/photo-1555449218-e3d347e35300", alt: "MacBook Pro closed view" },
    { src: "https://images.unsplash.com/photo-1605828533197-14da14a1324e", alt: "MacBook Pro keyboard close-up" }]
  },
  {
    id: 2,
    title: "Calculus Early Transcendentals 8th Edition",
    description: "Stewart's Calculus textbook in great condition. Minimal highlighting, no torn pages. Essential for MATH 151/152 courses.",
    price: 3499,
    originalPrice: 26999,
    condition: "Good",
    location: "South Campus",
    image: "https://images.unsplash.com/photo-1728047152277-270f18aafca0",
    imageAlt: "Stack of mathematics textbooks with calculus book on top showing mathematical formulas on cover",
    category: "textbooks",
    postedAt: "2025-11-08T14:15:00Z",
    isUrgent: true,
    isFeatured: false,
    isFavorited: true,
    views: 89,
    seller: {
      name: "Rahul Verma",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1275db797-1762274180843.png",
      avatarAlt: "Casual photo of Indian man with short dark hair wearing blue t-shirt",
      rating: 4.7,
      isVerified: true,
      totalSales: 15
    }
  },
  {
    id: 3,
    title: "IKEA Study Desk with Drawers",
    description: "White IKEA desk perfect for hostel room. Two drawers for storage. Easy to assemble/disassemble. Moving out sale!",
    price: 5499,
    originalPrice: 9999,
    condition: "Good",
    location: "West Campus",
    image: "https://images.unsplash.com/photo-1718049719677-85afb466425a",
    imageAlt: "White wooden desk with two drawers in modern hostel room with laptop and books on surface",
    category: "furniture",
    postedAt: "2025-11-07T09:45:00Z",
    isUrgent: false,
    isFeatured: false,
    isFavorited: false,
    views: 156,
    seller: {
      name: "Ananya Patel",
      avatar: "https://images.unsplash.com/photo-1622461828282-5aa1cf5f0924",
      avatarAlt: "Friendly photo of Indian woman with ponytail wearing casual green sweater",
      rating: 4.8,
      isVerified: false,
      totalSales: 8
    }
  },
  {
    id: 4,
    title: "iPhone 13 Pro 128GB - Unlocked",
    description: "Excellent condition iPhone 13 Pro in Sierra Blue. Always kept in case with screen protector. Battery health 94%. Unlocked for all carriers.",
    price: 54999,
    originalPrice: 84999,
    condition: "Excellent",
    location: "East Campus",
    image: "https://images.unsplash.com/photo-1647780792162-86970473b010",
    imageAlt: "Blue iPhone 13 Pro displaying home screen with apps, lying on white surface next to charging cable",
    category: "electronics",
    postedAt: "2025-11-06T16:20:00Z",
    isUrgent: false,
    isFeatured: true,
    isFavorited: false,
    views: 203,
    seller: {
      name: "Arjun Kumar",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14a413bfb-1762273322026.png",
      avatarAlt: "Professional headshot of Indian man with glasses wearing white button-down shirt",
      rating: 4.9,
      isVerified: true,
      totalSales: 31
    }
  },
  {
    id: 5,
    title: "Nike Air Max 270 - Size 9.5",
    description: "Comfortable running shoes in great condition. Worn only a few times. Perfect for campus walks and gym workouts.",
    price: 6999,
    originalPrice: 12999,
    condition: "Like New",
    location: "North Campus",
    image: "https://images.unsplash.com/photo-1603326312979-e294dea62421",
    imageAlt: "Pair of white and blue Nike Air Max sneakers on wooden floor with natural lighting",
    category: "clothing",
    postedAt: "2025-11-05T11:30:00Z",
    isUrgent: false,
    isFeatured: false,
    isFavorited: false,
    views: 67,
    seller: {
      name: "Riya Singh",
      avatar: "https://images.unsplash.com/photo-1670841063394-d6909f7529aa",
      avatarAlt: "Smiling photo of Indian woman with curly hair wearing red hoodie",
      rating: 4.6,
      isVerified: true,
      totalSales: 12
    }
  },
  {
    id: 6,
    title: "Gaming Chair - Ergonomic Design",
    description: "Black and red gaming chair with lumbar support. Adjustable height and armrests. Great for long study sessions or gaming.",
    price: 9999,
    originalPrice: 16999,
    condition: "Good",
    location: "South Campus",
    image: "https://images.unsplash.com/photo-1701937189060-8b87985d85e1",
    imageAlt: "Black ergonomic gaming chair with red accents in modern room setup with desk and computer",
    category: "furniture",
    postedAt: "2025-11-04T13:45:00Z",
    isUrgent: true,
    isFeatured: false,
    isFavorited: true,
    views: 134,
    seller: {
      name: "Vikram Gupta",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f184d436-1762274270648.png",
      avatarAlt: "Casual photo of Indian man with brown hair wearing gray hoodie and friendly smile",
      rating: 4.5,
      isVerified: false,
      totalSales: 6
    }
  }];



  const searchSuggestions = [
  "MacBook Pro",
  "Calculus textbook",
  "Study desk",
  "iPhone 13",
  "Gaming chair",
  "Nike shoes"];


  // Filter and sort items
  const getFilteredItems = useCallback(() => {
    let filtered = [...mockItems];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered?.filter((item) => item?.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter((item) =>
      item?.title?.toLowerCase()?.includes(query) ||
      item?.description?.toLowerCase()?.includes(query) ||
      item?.category?.toLowerCase()?.includes(query)
      );
    }

    // Price range filter
    if (filters?.priceRange?.min) {
      filtered = filtered?.filter((item) => item?.price >= parseFloat(filters?.priceRange?.min));
    }
    if (filters?.priceRange?.max) {
      filtered = filtered?.filter((item) => item?.price <= parseFloat(filters?.priceRange?.max));
    }

    // Condition filter
    if (filters?.conditions?.length > 0) {
      filtered = filtered?.filter((item) =>
      filters?.conditions?.some((condition) =>
      item?.condition?.toLowerCase()?.includes(condition?.toLowerCase())
      )
      );
    }

    // Verified sellers filter
    if (filters?.verifiedOnly) {
      filtered = filtered?.filter((item) => item?.seller?.isVerified);
    }

    // Sort items
    switch (sortBy) {
      case 'price-low':
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-high':
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case 'popularity':
        filtered?.sort((a, b) => (b?.views || 0) - (a?.views || 0));
        break;
      case 'oldest':
        filtered?.sort((a, b) => new Date(a.postedAt) - new Date(b.postedAt));
        break;
      case 'newest':
      default:
        filtered?.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, filters, sortBy, mockItems]);

  const filteredItems = getFilteredItems();
  const featuredItems = mockItems?.filter((item) => item?.isFeatured);

  // Event handlers
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleQuickView = (item) => {
    setSelectedItem(item);
    setIsQuickViewOpen(true);
  };

  // Infinite scroll simulation
  const itemsPerPage = 12;
  const displayedItems = filteredItems?.slice(0, currentPage * itemsPerPage);
  const hasMoreItems = filteredItems?.length > displayedItems?.length;

  const loadMoreItems = () => {
    if (!isLoading && hasMoreItems) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsLoading(false);
      }, 1000);
    }
  };

  // Scroll to top when filters change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section with Search */}
        <div className="bg-gradient-to-br from-campus-blue via-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                College Marketplace
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Discover amazing deals from fellow students. Buy, sell, and trade with confidence in your college community.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSearchSubmit={handleSearchSubmit}
                suggestions={searchSuggestions} />

            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold">{mockItems?.length}+</div>
                <div className="text-blue-200 text-sm">Active Listings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">892</div>
                <div className="text-blue-200 text-sm">Active Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2.8k</div>
                <div className="text-blue-200 text-sm">Items Sold</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-blue-200 text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sustainability Metrics */}
          <SustainabilityMetrics />

          {/* Featured Items */}
          {featuredItems?.length > 0 &&
          <FeaturedItems items={featuredItems} />
          }

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Category Filter */}
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange} />


              {/* Desktop Filter Sidebar */}
              <div className="hidden lg:block">
                <FilterSidebar
                  isOpen={true}
                  onClose={() => {}}
                  filters={filters}
                  onFiltersChange={handleFiltersChange} />

              </div>

              {/* Sell Your Items CTA */}
              <div className="bg-gradient-to-br from-sustainability-green to-green-600 rounded-lg p-6 text-white">
                <div className="text-center">
                  <Icon name="Plus" size={32} className="mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Got items to sell?</h3>
                  <p className="text-green-100 text-sm mb-4">
                    Turn your unused items into cash and help fellow students save money.
                  </p>
                  <Button
                    variant="secondary"
                    fullWidth
                    asChild>

                    <Link to="/sell">Start Selling</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Sort Options and Filter Toggle */}
              <div className="flex items-center justify-between mb-6">
                <SortOptions
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode} />


                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden"
                  iconName="Filter"
                  iconPosition="left">

                  Filters
                </Button>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing {displayedItems?.length} of {filteredItems?.length} results
                  {searchQuery &&
                  <span> for "{searchQuery}"</span>
                  }
                </div>

                {/* Saved Search */}
                {(searchQuery || selectedCategory !== 'all') &&
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Bell"
                  iconPosition="left">

                    Save Search
                  </Button>
                }
              </div>

              {/* Items Grid/List */}
              {displayedItems?.length > 0 ?
              <div className={`${
              viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`
              }>
                  {displayedItems?.map((item) =>
                <ItemCard
                  key={item?.id}
                  item={item}
                  viewMode={viewMode}
                  onQuickView={() => handleQuickView(item)} />

                )}
                </div> :

              <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No items found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setFilters({
                      priceRange: { min: '', max: '' },
                      conditions: [],
                      location: '',
                      verifiedOnly: false,
                      availableOnly: true
                    });
                  }}>

                    Clear All Filters
                  </Button>
                </div>
              }

              {/* Load More Button */}
              {hasMoreItems &&
              <div className="text-center mt-8">
                  <Button
                  variant="outline"
                  onClick={loadMoreItems}
                  loading={isLoading}
                  iconName="ChevronDown"
                  iconPosition="right">

                    {isLoading ? 'Loading...' : 'Load More Items'}
                  </Button>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onFiltersChange={handleFiltersChange} />


        {/* Quick View Modal */}
        <QuickViewModal
          item={selectedItem}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)} />

      </main>
    </div>);

};

export default Marketplace;