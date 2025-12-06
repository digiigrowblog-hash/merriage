'use client';
import { useState, useRef } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const LIBRARIES: ("places")[] = ["places"];

interface GoogleAddressPickerProps {
  onSelect: (address: { lat: number | null; lng: number | null; formatted: string }) => void;
  apiKey: string;
}

export function GoogleAddressPicker({ onSelect, apiKey }: GoogleAddressPickerProps) {
  const [address, setAddress] = useState('');
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  });

  const handleManualChange = (value: string) => {
    setAddress(value);
    // Allow manual entry without lat/lng
    onSelect({ lat: null, lng: null, formatted: value });
  };

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current?.getPlace();

    if (place && place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const formatted = place.formatted_address || '';

      setAddress(formatted);
      onSelect({ lat, lng, formatted });
    }
  };

  if (loadError) {
    return (
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Address *</label>
        <input
          type="text"
          placeholder="Enter your address manually"
          value={address}
          onChange={(e) => handleManualChange(e.target.value)}
          className="w-full px-4 py-3 border border-red-200 bg-red-50 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        />
        <p className="text-xs text-red-500">Google Maps failed to load. Please enter address manually.</p>
      </div>
    );
  }

  if (!isLoaded) return <div>Loading address picker...</div>;

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Address *</label>
      <Autocomplete
        onLoad={(autocomplete) => { autocompleteRef.current = autocomplete; }}
        onPlaceChanged={handlePlaceSelect}
      >
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => handleManualChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        />
      </Autocomplete>
      <p className="text-xs text-gray-500">Search for your address or enter manually</p>
    </div>
  );
}
