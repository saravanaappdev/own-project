import React from 'react';
import { MapPin, Star, ThumbsUp, Shield } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  period: string;
  location: string;
  distance: string;
  image: string;
  rating: number;
  reviews: number;
  condition: number;
  ownerRating: number;
  ownerName: string;
  rentCount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pb-[66%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute h-full w-full object-cover"
        />
        {product.rentCount > 10 && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <div className="flex items-center">
            <Shield className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">Verified</span>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">{product.location}</span>
          <span className="text-sm text-gray-400 ml-2">({product.distance} away)</span>
        </div>

        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center" title="Item Condition">
            <ThumbsUp className="h-4 w-4 text-blue-500 mr-1" />
            <span className="text-sm text-gray-600">{product.condition}/5</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
              <span className="text-sm font-semibold">{product.ownerName[0]}</span>
            </div>
            <div>
              <p className="text-sm font-medium">{product.ownerName}</p>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-gray-500 ml-1">{product.ownerRating} Owner rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold">${product.price}</span>
            <span className="text-gray-500">/{product.period}</span>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;