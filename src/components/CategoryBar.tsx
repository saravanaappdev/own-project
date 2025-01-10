import React from 'react';
import { 
  Home, Tv, Car, Camera, Laptop, Wrench, Bike, Sofa, Music, 
  Baby, Book, Tent, Dumbbell, PartyPopper, BookOpen
} from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const categories = [
  { icon: Home, name: 'All', id: 'all' },
  { icon: Sofa, name: 'Furniture', id: 'Furniture' },
  { icon: Tv, name: 'Electronics', id: 'Electronics' },
  { icon: Car, name: 'Vehicles', id: 'Vehicles' },
  { icon: Camera, name: 'Photography', id: 'Photography' },
  { icon: Laptop, name: 'Computers', id: 'Computers' },
  { icon: Wrench, name: 'Tools', id: 'Tools' },
  { icon: Bike, name: 'Sports', id: 'Sports' },
  { icon: Music, name: 'Music', id: 'Music' },
  { icon: Baby, name: 'Baby & Kids', id: 'Baby' },
  { icon: Book, name: 'Books', id: 'Books' },
  { icon: Tent, name: 'Outdoor', id: 'Outdoor' },
  { icon: Dumbbell, name: 'Fitness', id: 'Fitness' },
  { icon: PartyPopper, name: 'Events', id: 'Events' },
  { icon: BookOpen, name: 'Education', id: 'Education' },
];

interface CategoryBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryBar = ({ activeCategory, onCategoryChange }: CategoryBarProps) => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4 overflow-x-auto no-scrollbar">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center min-w-[80px] cursor-pointer transition-colors ${
                  activeCategory === category.id ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <div className={`p-3 rounded-lg mb-1 ${
                  activeCategory === category.id ? 'bg-indigo-100' : 'bg-gray-100'
                }`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;