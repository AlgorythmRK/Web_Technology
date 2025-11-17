import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const MessagingInterface = ({ seller, item }) => {
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const messageTemplates = [
    "Hi! Is this item still available?",
    "Would you consider $[PRICE] for this item?",
    "When would be a good time to meet for pickup?",
    "Can you provide more details about the condition?",
    "Is the price negotiable?"
  ];

  const handleSendMessage = () => {
    if (!message?.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate seller response
    setTimeout(() => {
      const responses = [
        "Yes, it's still available! When would you like to see it?",
        "Thanks for your interest! I can meet on campus this week.",
        "Let me check my schedule and get back to you.",
        "Sure, I'm flexible on the price. What did you have in mind?"
      ];
      
      const response = {
        id: Date.now() + 1,
        text: responses?.[Math.floor(Math.random() * responses?.length)],
        sender: 'seller',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  const handleTemplateSelect = (template) => {
    const processedTemplate = template?.replace('[PRICE]', `$${Math.floor(item?.price * 0.9)}`);
    setMessage(processedTemplate);
    setSelectedTemplate(template);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })?.format(date);
  };

  if (!isMessagingOpen) {
    return (
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          iconName="MessageCircle"
          iconPosition="left"
          onClick={() => setIsMessagingOpen(true)}
        >
          Message Seller
        </Button>
        
        <Button
          variant="outline"
          fullWidth
          iconName="DollarSign"
          iconPosition="left"
        >
          Make Offer
        </Button>
        
        <Button
          variant="ghost"
          fullWidth
          iconName="Heart"
          iconPosition="left"
        >
          Save Item
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden campus-shadow">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
        <div className="flex items-center space-x-2">
          <Icon name="MessageCircle" size={20} className="text-campus-blue" />
          <span className="font-medium text-foreground">Chat with {seller?.name}</span>
        </div>
        <button
          onClick={() => setIsMessagingOpen(false)}
          className="p-1 hover:bg-muted rounded-md transition-colors"
        >
          <Icon name="X" size={16} />
        </button>
      </div>
      {/* Messages Area */}
      <div className="h-64 overflow-y-auto p-4 space-y-3">
        {messages?.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <Icon name="MessageCircle" size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Start a conversation with the seller</p>
          </div>
        ) : (
          messages?.map((msg) => (
            <div
              key={msg?.id}
              className={`flex ${msg?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg?.sender === 'user' ?'bg-campus-blue text-white' :'bg-muted text-foreground'
                }`}
              >
                <p>{msg?.text}</p>
                <p className={`text-xs mt-1 ${
                  msg?.sender === 'user' ? 'text-blue-100' : 'text-muted-foreground'
                }`}>
                  {formatTime(msg?.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Quick Templates */}
      {messages?.length === 0 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-muted-foreground mb-2">Quick messages:</p>
          <div className="flex flex-wrap gap-1">
            {messageTemplates?.slice(0, 3)?.map((template, index) => (
              <button
                key={index}
                onClick={() => handleTemplateSelect(template)}
                className="text-xs bg-muted hover:bg-muted/80 text-foreground px-2 py-1 rounded transition-colors"
              >
                {template?.replace('[PRICE]', `$${Math.floor(item?.price * 0.9)}`)}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Message Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
            onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            variant="default"
            size="icon"
            onClick={handleSendMessage}
            disabled={!message?.trim()}
          >
            <Icon name="Send" size={16} />
          </Button>
        </div>
        
        {/* Safety Notice */}
        <div className="flex items-center space-x-1 mt-2 text-xs text-muted-foreground">
          <Icon name="Shield" size={12} />
          <span>Always meet in public campus locations for safety</span>
        </div>
      </div>
    </div>
  );
};

export default MessagingInterface;