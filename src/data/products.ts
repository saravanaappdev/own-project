import { Product } from '../types/product';

// Velachery, Chennai coordinates
const VELACHERY_COORDS = {
  latitude: 12.9815,
  longitude: 80.2180
};

// Nearby areas in Chennai
const AREAS = [
  'Velachery',
  'Guindy',
  'Adyar',
  'Tambaram',
  'Pallikaranai',
  'Madipakkam',
  'Nanganallur',
  'T. Nagar',
  'Chromepet',
  'Thoraipakkam'
];

// Function to generate nearby coordinates within ~5km radius
const getNearbyCoordinates = () => {
  const radius = 0.045; // Approximately 5km
  return {
    latitude: VELACHERY_COORDS.latitude + (Math.random() - 0.5) * radius,
    longitude: VELACHERY_COORDS.longitude + (Math.random() - 0.5) * radius
  };
};

// Function to get random area
const getRandomArea = () => AREAS[Math.floor(Math.random() * AREAS.length)];

// Function to generate random Indian name
const generateIndianName = () => {
  const firstNames = ['Raj', 'Priya', 'Amit', 'Deepa', 'Karthik', 'Anita', 'Suresh', 'Meena', 'Vikram', 'Lakshmi'];
  const lastInitials = ['K', 'R', 'S', 'M', 'P', 'T', 'N', 'G', 'V', 'L'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastInitials[Math.floor(Math.random() * lastInitials.length)]}`;
};

export const products: Product[] = [
  // Furniture Category
  {
    id: 1,
    title: "Modern L-Shaped Sofa Set",
    price: 799,
    period: "month",
    location: `${getRandomArea()}, Chennai`,
    coordinates: getNearbyCoordinates(),
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 24,
    condition: 5,
    ownerRating: 4.9,
    ownerName: generateIndianName(),
    rentCount: 15,
    category: "Furniture"
  },
  {
    id: 2,
    title: "Executive Office Desk",
    price: 299,
    period: "month",
    location: `${getRandomArea()}, Chennai`,
    coordinates: getNearbyCoordinates(),
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 18,
    condition: 4,
    ownerRating: 4.7,
    ownerName: generateIndianName(),
    rentCount: 12,
    category: "Furniture"
  },
  // Add more furniture items...

  // Electronics Category
  {
    id: 3,
    title: "Sony 65\" 4K Smart TV",
    price: 999,
    period: "month",
    location: `${getRandomArea()}, Chennai`,
    coordinates: getNearbyCoordinates(),
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 32,
    condition: 5,
    ownerRating: 5.0,
    ownerName: generateIndianName(),
    rentCount: 25,
    category: "Electronics"
  },
  // Continue with more products...
  
  // Add 100 more products following this pattern for all categories
  // Include products for: Vehicles, Photography, Computers, Tools, Sports,
  // Music, Baby & Kids, Books, Outdoor, Fitness, Events, Education
  
  // Example structure for each category:
  // 15 Furniture items
  // 15 Electronics items
  // 10 Vehicles
  // 10 Photography
  // 10 Computers
  // 8 Tools
  // 8 Sports
  // 5 Music
  // 5 Baby & Kids
  // 4 Books
  // 3 Outdoor
  // 3 Fitness
  // 2 Events
  // 2 Education
  
  // ... (continue with all 100 products)
];