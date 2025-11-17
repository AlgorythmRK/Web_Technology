import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const FilterSidebar = ({ isOpen, onClose, filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const conditionOptions = [
    { value: 'new', label: 'Like New' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' }
  ];

  const locationOptions = [
    { value: 'campus', label: 'On Campus' },
    { value: 'nearby', label: 'Near Campus (1 mile)' },
    { value: 'city', label: 'City Wide (5 miles)' }
  ];

  const handlePriceChange = (field, value) => {
    setLocalFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev?.priceRange,
        [field]: value
      }
    }));
  };

  const handleConditionChange = (condition, checked) => {
    setLocalFilters(prev => ({
      ...prev,
      conditions: checked
        ? [...prev?.conditions, condition]
        : prev?.conditions?.filter(c => c !== condition)
    }));
  };

  const applyFilters = () => {
    onFiltersChange(localFilters);
    onClose();
  };

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: { min: '', max: '' },
      conditions: [],
      location: '',
      verifiedOnly: false,
      availableOnly: true
    };
    setLocalFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed top-16 right-0 h-full w-80 bg-card border-l border-border z-50 transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:relative lg:top-0 lg:translate-x-0 lg:w-full lg:h-auto lg:border-l-0 lg:border lg:rounded-lg lg:campus-shadow`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center">
              <Icon name="Filter" size={20} className="mr-2 text-campus-blue" />
              Filters
            </h3>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Price Range</h4>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Min ($)"
                value={localFilters?.priceRange?.min}
                onChange={(e) => handlePriceChange('min', e?.target?.value)}
              />
              <Input
                type="number"
                placeholder="Max ($)"
                value={localFilters?.priceRange?.max}
                onChange={(e) => handlePriceChange('max', e?.target?.value)}
              />
            </div>
          </div>

          {/* Condition */}
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Condition</h4>
            <div className="space-y-2">
              {conditionOptions?.map((option) => (
                <Checkbox
                  key={option?.value}
                  label={option?.label}
                  checked={localFilters?.conditions?.includes(option?.value)}
                  onChange={(e) => handleConditionChange(option?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <Select
              label="Location"
              options={locationOptions}
              value={localFilters?.location}
              onChange={(value) => setLocalFilters(prev => ({ ...prev, location: value }))}
              placeholder="Select location"
            />
          </div>

          {/* Additional Filters */}
          <div className="mb-6 space-y-3">
            <Checkbox
              label="Verified sellers only"
              checked={localFilters?.verifiedOnly}
              onChange={(e) => setLocalFilters(prev => ({ ...prev, verifiedOnly: e?.target?.checked }))}
            />
            <Checkbox
              label="Available items only"
              checked={localFilters?.availableOnly}
              onChange={(e) => setLocalFilters(prev => ({ ...prev, availableOnly: e?.target?.checked }))}
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              variant="default"
              fullWidth
              onClick={applyFilters}
              iconName="Check"
              iconPosition="left"
            >
              Apply Filters
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={clearFilters}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;