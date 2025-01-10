import React, { useState } from 'react';
import { Search, Menu, User, PlusCircle, MapPin, Loader } from 'lucide-react';
import { useLocation } from '../context/LocationContext';

const Navbar = () => {
  const { userLocation, setUserLocation, loading } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 mr-4 cursor-pointer" />
            <span className="text-2xl font-bold text-indigo-600">RentShare</span>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for items to rent..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative w-48">
                <input
                  type="text"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pl-10"
                />
                {loading ? (
                  <Loader className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 animate-spin" />
                ) : (
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <PlusCircle className="h-5 w-5 mr-2" />
              <span>List Item</span>
            </button>
            <div className="flex items-center cursor-pointer">
              <User className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;