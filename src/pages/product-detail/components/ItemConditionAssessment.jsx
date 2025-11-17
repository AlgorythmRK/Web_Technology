import React from 'react';
import Icon from '../../../components/AppIcon';

const ItemConditionAssessment = ({ condition, conditionDetails }) => {
  const getConditionInfo = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'new':
        return {
          color: 'text-sustainability-green',
          bgColor: 'bg-sustainability-green/10',
          borderColor: 'border-sustainability-green/20',
          icon: 'Sparkles',
          description: 'Brand new, never used',
          score: 100
        };
      case 'like new':
        return {
          color: 'text-campus-blue',
          bgColor: 'bg-campus-blue/10',
          borderColor: 'border-campus-blue/20',
          icon: 'Star',
          description: 'Excellent condition, minimal wear',
          score: 90
        };
      case 'good':
        return {
          color: 'text-campus-gold',
          bgColor: 'bg-campus-gold/10',
          borderColor: 'border-campus-gold/20',
          icon: 'ThumbsUp',
          description: 'Good condition, some signs of use',
          score: 75
        };
      case 'fair':
        return {
          color: 'text-trust-gray',
          bgColor: 'bg-trust-gray/10',
          borderColor: 'border-trust-gray/20',
          icon: 'AlertCircle',
          description: 'Fair condition, noticeable wear',
          score: 60
        };
      case 'poor':
        return {
          color: 'text-action-red',
          bgColor: 'bg-action-red/10',
          borderColor: 'border-action-red/20',
          icon: 'AlertTriangle',
          description: 'Poor condition, significant wear',
          score: 40
        };
      default:
        return {
          color: 'text-muted-foreground',
          bgColor: 'bg-muted',
          borderColor: 'border-border',
          icon: 'HelpCircle',
          description: 'Condition not specified',
          score: 0
        };
    }
  };

  const conditionInfo = getConditionInfo(condition);

  const conditionChecklist = [
    { label: 'Functional', status: conditionDetails?.functional ?? true },
    { label: 'Original Packaging', status: conditionDetails?.originalPackaging ?? false },
    { label: 'No Damage', status: conditionDetails?.noDamage ?? true },
    { label: 'All Accessories', status: conditionDetails?.allAccessories ?? false },
    { label: 'Clean', status: conditionDetails?.clean ?? true }
  ];

  return (
    <div className="space-y-4">
      {/* Condition Header */}
      <div className={`border rounded-lg p-4 ${conditionInfo?.bgColor} ${conditionInfo?.borderColor}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Icon name={conditionInfo?.icon} size={20} className={conditionInfo?.color} />
            <span className={`font-semibold ${conditionInfo?.color}`}>
              {condition}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full ${conditionInfo?.color?.replace('text-', 'bg-')}`}
                style={{ width: `${conditionInfo?.score}%` }}
              />
            </div>
            <span className={`text-sm font-medium ${conditionInfo?.color}`}>
              {conditionInfo?.score}%
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{conditionInfo?.description}</p>
      </div>
      {/* Condition Checklist */}
      <div className="bg-card border border-border rounded-lg p-4">
        <h4 className="font-medium text-foreground mb-3">Condition Details</h4>
        <div className="space-y-2">
          {conditionChecklist?.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-foreground">{item?.label}</span>
              <div className="flex items-center space-x-1">
                <Icon 
                  name={item?.status ? "CheckCircle" : "XCircle"} 
                  size={16} 
                  className={item?.status ? "text-sustainability-green" : "text-action-red"} 
                />
                <span className={`text-xs ${item?.status ? "text-sustainability-green" : "text-action-red"}`}>
                  {item?.status ? "Yes" : "No"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Notes */}
      {conditionDetails?.notes && (
        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
            <Icon name="FileText" size={16} />
            <span>Seller Notes</span>
          </h4>
          <p className="text-sm text-muted-foreground">{conditionDetails?.notes}</p>
        </div>
      )}
      {/* Inspection Reminder */}
      <div className="bg-campus-blue/10 border border-campus-blue/20 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <Icon name="Eye" size={16} className="text-campus-blue mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-campus-blue mb-1">Inspection Recommended</h4>
            <p className="text-xs text-muted-foreground">
              Always inspect items in person before completing your purchase to ensure they meet your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemConditionAssessment;