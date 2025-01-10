export interface Product {
  id: number;
  title: string;
  price: number;
  period: string;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: string;
  rating: number;
  reviews: number;
  condition: number;
  ownerRating: number;
  ownerName: string;
  rentCount: number;
  category: string;
}