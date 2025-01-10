import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';

interface LocationContextType {
  userLocation: string;
  setUserLocation: (location: string) => void;
  coordinates: { latitude: number; longitude: number } | null;
  loading: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<string>('');
  const { location, loading } = useGeolocation();

  useEffect(() => {
    if (location && !location.error) {
      // Reverse geocoding could be implemented here
      // For now, we'll just use coordinates
      setUserLocation(`${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`);
    }
  }, [location]);

  return (
    <LocationContext.Provider
      value={{
        userLocation,
        setUserLocation,
        coordinates: location && !location.error ? location : null,
        loading
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};