import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CategoryNavigation = () => {
  const categories = [
    {
      id: 'textbooks',
      name: 'Textbooks',
      icon: 'BookOpen',
      count: 847,
      color: 'bg-blue-500',
      description: 'Course materials & study guides'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: 'Laptop',
      count: 423,
      color: 'bg-purple-500',
      description: 'Laptops, phones & gadgets'
    },
    {
      id: 'furniture',
      name: 'Furniture',
      icon: 'Armchair',
      count: 312,
      color: 'bg-green-500',
      description: 'Dorm & apartment essentials'
    },
    {
      id: 'clothing',
      name: 'Clothing',
      icon: 'Shirt',
      count: 589,
      color: 'bg-pink-500',
      description: 'Fashion & accessories'
    },
    {
      id: 'sports',
      name: 'Sports & Fitness',
      icon: 'Dumbbell',
      count: 234,
      color: 'bg-orange-500',
      description: 'Equipment & gear'
    },
    {
      id: 'supplies',
      name: 'School Supplies',
      icon: 'PenTool',
      count: 156,
      color: 'bg-indigo-500',
      description: 'Stationery & materials'
    },
    {
      id: 'tickets',
      name: 'Event Tickets',
      icon: 'Ticket',
      count: 89,
      color: 'bg-red-500',
      description: 'Concerts, games & events'
    },
    {
      id: 'other',
      name: 'Other',
      icon: 'Package',
      count: 267,
      color: 'bg-gray-500',
      description: 'Miscellaneous items'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from fellow students in your campus community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <Link
              key={category?.id}
              to={`/marketplace?category=${category?.id}`}
              className="group bg-white rounded-xl p-6 campus-shadow hover:campus-shadow-lg campus-transition hover:-translate-y-1"
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 ${category?.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={category?.icon} size={28} color="white" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category?.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{category?.description}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-medium text-campus-blue">{category?.count}</span>
                    <span className="text-xs text-gray-400">items</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/marketplace"
            className="inline-flex items-center space-x-2 text-campus-blue hover:text-blue-700 font-medium transition-colors"
          >
            <span>Browse All Categories</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;