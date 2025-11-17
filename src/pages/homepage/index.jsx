import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CategoryNavigation from './components/CategoryNavigation';
import RecentActivity from './components/RecentActivity';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <CategoryNavigation />
        <RecentActivity />
        <TrustIndicators />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;