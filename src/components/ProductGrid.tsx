import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useLocation } from '../context/LocationContext';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

type SortOption = 'featured' | 'distance' | 'price' | 'rating';

interface ProductGridProps {
  activeCategory: string;
}

const ProductGrid = ({ activeCategory }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const { coordinates } = useLocation();

  const calculateDistance = (productCoords: { latitude: number; longitude: number }) => {
    if (!coordinates) return Infinity;
    
    const R = 6371; // Earth's radius in km
    const dLat = (productCoords.latitude - coordinates.latitude) * Math.PI / 180;
    const dLon = (productCoords.longitude - coordinates.longitude) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coordinates.latitude * Math.PI / 180) * Math.cos(productCoords.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    if (activeCategory !== 'all') {
      filtered = products.filter(p => p.category === activeCategory);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return calculateDistance(a.coordinates) - calculateDistance(b.coordinates);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.rentCount - a.rentCount;
      }
    });
  }, [sortBy, activeCategory, coordinates]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {activeCategory === 'all' ? 'Popular in your area' : `${activeCategory} for rent`}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredAndSortedProducts.length} items available
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="distance">Distance: Nearest</option>
            <option value="price">Price: Low to High</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </div>
      </div>
      
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items available in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                distance: `${calculateDistance(product.coordinates).toFixed(1)} km`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;