import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const SortOptions = ({ sortBy, onSortChange, viewMode, onViewModeChange }) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'distance', label: 'Nearest First' }
  ];

  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4 campus-shadow">
      <div className="flex items-center space-x-4">
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          placeholder="Sort by"
          className="w-48"
        />
        
        <div className="text-sm text-muted-foreground">
          Showing results
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground mr-2">View:</span>
        <button
          onClick={() => onViewModeChange('grid')}
          className={`p-2 rounded-md transition-colors ${
            viewMode === 'grid' ?'bg-campus-blue text-white' :'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
          title="Grid view"
        >
          <Icon name="Grid3X3" size={18} />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-2 rounded-md transition-colors ${
            viewMode === 'list' ?'bg-campus-blue text-white' :'text-muted-foreground hover:bg-muted hover:text-foreground'
          }`}
          title="List view"
        >
          <Icon name="List" size={18} />
        </button>
      </div>
    </div>
  );
};

export default SortOptions;