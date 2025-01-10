import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import { LocationProvider } from './context/LocationContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <LocationProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <CategoryBar 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <main className="container mx-auto px-4 py-8">
          <ProductGrid activeCategory={activeCategory} />
        </main>
      </div>
    </LocationProvider>
  );
}

export default App;