import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-indigo-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Rent Anything, Anytime
          </h1>
          <p className="text-xl mb-8">
            Join the sharing economy. Rent items from people in your community or list your items to earn extra income.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Renting
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              List Your Items
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center hidden lg:block"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
             opacity: '0.3'
           }}>
      </div>
    </div>
  );
}

export default Hero;