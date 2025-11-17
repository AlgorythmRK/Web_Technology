import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit, suggestions = [] }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const searchRef = useRef(null);

  const recentSearches = [
    "MacBook Pro",
    "Calculus textbook",
    "Dorm furniture",
    "iPhone charger",
    "Chemistry lab coat"
  ];

  const trendingSearches = [
    "Winter jackets",
    "Study desk",
    "Gaming chair",
    "Textbooks",
    "Bike"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
    setShowSuggestions(value?.length > 0 || true);
    setSelectedSuggestion(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    const allSuggestions = searchQuery?.length > 0 ? suggestions : [...recentSearches, ...trendingSearches];

    if (e?.key === 'ArrowDown') {
      e?.preventDefault();
      setSelectedSuggestion(prev => 
        prev < allSuggestions?.length - 1 ? prev + 1 : prev
      );
    } else if (e?.key === 'ArrowUp') {
      e?.preventDefault();
      setSelectedSuggestion(prev => prev > -1 ? prev - 1 : prev);
    } else if (e?.key === 'Enter') {
      e?.preventDefault();
      if (selectedSuggestion >= 0) {
        const selectedText = allSuggestions?.[selectedSuggestion];
        onSearchChange(selectedText);
        onSearchSubmit(selectedText);
      } else {
        onSearchSubmit(searchQuery);
      }
      setShowSuggestions(false);
    } else if (e?.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    onSearchSubmit(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearchSubmit(searchQuery);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="search"
            placeholder="Search for textbooks, electronics, furniture..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(true)}
            className="pl-10 pr-12 h-12 text-base"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10"
          >
            <Icon name="Search" size={18} />
          </Button>
        </div>
      </form>
      {/* Search Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg campus-shadow-lg z-50 max-h-96 overflow-y-auto">
          {searchQuery?.length > 0 ? (
            // Search suggestions based on query
            (suggestions?.length > 0 ? (<div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">
                Suggestions
              </div>
              {suggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors flex items-center ${
                    selectedSuggestion === index ? 'bg-muted' : ''
                  }`}
                >
                  <Icon name="Search" size={16} className="mr-3 text-muted-foreground" />
                  <span>{suggestion}</span>
                </button>
              ))}
            </div>) : (<div className="p-4 text-center text-muted-foreground text-sm">No suggestions found
                            </div>))
          ) : (
            // Recent and trending searches when no query
            (<div className="p-2">
              {recentSearches?.length > 0 && (
                <div className="mb-4">
                  <div className="text-xs font-medium text-muted-foreground px-3 py-2 flex items-center">
                    <Icon name="Clock" size={14} className="mr-2" />
                    Recent Searches
                  </div>
                  {recentSearches?.slice(0, 3)?.map((search, index) => (
                    <button
                      key={`recent-${index}`}
                      onClick={() => handleSuggestionClick(search)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors flex items-center ${
                        selectedSuggestion === index ? 'bg-muted' : ''
                      }`}
                    >
                      <Icon name="Clock" size={16} className="mr-3 text-muted-foreground" />
                      <span>{search}</span>
                    </button>
                  ))}
                </div>
              )}
              <div>
                <div className="text-xs font-medium text-muted-foreground px-3 py-2 flex items-center">
                  <Icon name="TrendingUp" size={14} className="mr-2" />
                  Trending Now
                </div>
                {trendingSearches?.slice(0, 4)?.map((search, index) => (
                  <button
                    key={`trending-${index}`}
                    onClick={() => handleSuggestionClick(search)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors flex items-center ${
                      selectedSuggestion === (recentSearches?.length + index) ? 'bg-muted' : ''
                    }`}
                  >
                    <Icon name="TrendingUp" size={16} className="mr-3 text-muted-foreground" />
                    <span>{search}</span>
                  </button>
                ))}
              </div>
            </div>)
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;