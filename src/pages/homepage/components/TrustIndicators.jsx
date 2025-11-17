import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: "https://images.unsplash.com/photo-1611861006254-da900f4f41a5",
    avatarAlt: 'Young woman with brown hair wearing yellow sweater smiling in campus setting',
    year: 'Junior, Computer Science',
    rating: 5,
    text: `CampCart saved me over $400 this semester on textbooks alone! The verification system makes me feel safe trading with other students, and I've made some great connections too.`,
    itemsSold: 12,
    itemsBought: 8
  },
  {
    id: 2,
    name: 'Marcus Johnson', avatar: "https://images.unsplash.com/photo-1696347609175-49b310bb8106", avatarAlt: 'African American man with short hair wearing blue button-up shirt in library', year: 'Senior, Business',
    rating: 5,
    text: `As someone moving off-campus, CampCart was perfect for selling my dorm furniture and buying apartment essentials. The community here is incredibly trustworthy and helpful.`,
    itemsSold: 18,
    itemsBought: 15
  },
  {
    id: 3,
    name: 'Emily Rodriguez', avatar: "https://images.unsplash.com/photo-1695150530302-8615b9811a1f", avatarAlt: 'Latina woman with long dark hair wearing green cardigan in outdoor campus area', year: 'Sophomore, Environmental Science', rating: 5, text: `I love that CampCart promotes sustainability on campus. Instead of throwing things away, we're creating a circular economy that benefits everyone and helps the environment.`,
    itemsSold: 9,
    itemsBought: 11
  }];


  const securityFeatures = [
  {
    icon: 'ShieldCheck',
    title: 'Campus Email Verification',
    description: 'Only verified students with .edu emails can join our marketplace',
    color: 'bg-sustainability-green'
  },
  {
    icon: 'MessageSquare',
    title: 'Secure Messaging',
    description: 'All communications happen through our encrypted in-app messaging system',
    color: 'bg-campus-blue'
  },
  {
    icon: 'UserCheck',
    title: 'Identity Verification',
    description: 'Student ID verification ensures authentic campus community members',
    color: 'bg-purple-500'
  },
  {
    icon: 'AlertTriangle',
    title: 'Report & Block',
    description: 'Easy reporting system with quick response from our moderation team',
    color: 'bg-campus-gold'
  }];


  const impactStats = [
  {
    value: '$127,000',
    label: 'Total Money Saved',
    description: 'by our campus community'
  },
  {
    value: '3,247',
    label: 'Items Diverted',
    description: 'from landfills this year'
  },
  {
    value: '98.5%',
    label: 'Satisfaction Rate',
    description: 'from completed transactions'
  },
  {
    value: '24hrs',
    label: 'Average Response',
    description: 'time for messages'
  }];


  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust & Safety Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sustainability-green/10 text-sustainability-green px-4 py-2 rounded-full mb-4">
            <Icon name="Shield" size={16} />
            <span className="text-sm font-medium">Trusted by 1,200+ Students</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for Campus Safety & Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive verification and safety systems ensure every transaction happens in a secure, trusted environment
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures?.map((feature, index) =>
          <div key={index} className="bg-white rounded-xl p-6 campus-shadow hover:campus-shadow-lg campus-transition">
              <div className={`w-12 h-12 ${feature?.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon name={feature?.icon} size={24} color="white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature?.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature?.description}</p>
            </div>
          )}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-2xl p-8 campus-shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Community Impact</h3>
            <p className="text-gray-600">Real numbers from our thriving campus marketplace</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats?.map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-campus-blue mb-2">{stat?.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat?.label}</div>
                <div className="text-sm text-gray-500">{stat?.description}</div>
              </div>
            )}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What Students Are Saying
            </h3>
            <p className="text-lg text-gray-600">
              Real experiences from your fellow campus community members
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) =>
            <div key={testimonial?.id} className="bg-white rounded-xl p-6 campus-shadow hover:campus-shadow-lg campus-transition">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-12 h-12 rounded-full" />

                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial?.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial?.year}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} className="text-campus-gold fill-current" />
                )}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{testimonial?.text}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span>{testimonial?.itemsSold} items sold</span>
                  <span>{testimonial?.itemsBought} items bought</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-campus-blue to-blue-700 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Join the Community?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start trading safely with verified students in your campus community today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-campus-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors">

              <Icon name="UserPlus" size={20} className="mr-2" />
              Create Account
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-campus-blue transition-colors">

              <Icon name="Search" size={20} className="mr-2" />
              Browse Items
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;