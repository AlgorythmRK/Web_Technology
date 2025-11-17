import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 campus-shadow">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Grid3X3" size={20} className="mr-2 text-campus-blue" />
        Categories
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedCategory === 'all' ?'bg-campus-blue text-white' :'text-foreground hover:bg-muted'
          }`}
        >
          All Items ({categories?.reduce((total, cat) => total + cat?.count, 0)})
        </button>
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
              selectedCategory === category?.id
                ? 'bg-campus-blue text-white' :'text-foreground hover:bg-muted'
            }`}
          >
            <div className="flex items-center">
              <Icon name={category?.icon} size={16} className="mr-2" />
              <span>{category?.name}</span>
            </div>
            <span className="text-xs opacity-70">({category?.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;