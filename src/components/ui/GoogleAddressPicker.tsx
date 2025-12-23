'use client';
import { useState, useRef } from 'react';
import { useLoadScript, Autocomplete, GoogleMap, Marker } from '@react-google-maps/api';

const LIBRARIES: ("places")[] = ["places"];

interface GoogleAddressPickerProps {
  onSelect: (address: { lat: number | null; lng: number | null; formatted: string }) => void;
  apiKey: string;
}

const DEFAULT_CENTER = { lat: 20.5937, lng: 78.9629 }; // India
const MAP_CONTAINER_STYLE = { width: '100%', height: '300px', borderRadius: '12px' };

export function GoogleAddressPicker({ onSelect, apiKey }: GoogleAddressPickerProps) {
  const [address, setAddress] = useState('');
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral | null>(null);
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
      setMapCenter({ lat, lng });
      setMarkerPosition({ lat, lng });
      onSelect({ lat, lng, formatted });
    }
  };

  const handleReverseGeocode = (lat: number, lng: number) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const newAddress = results[0].formatted_address;
        setAddress(newAddress);
        onSelect({ lat, lng, formatted: newAddress });
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat, lng });
      // Don't center map on click to keep context, just move marker
      handleReverseGeocode(lat, lng);
    }
  };

  const onMarkerDragEnd = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkerPosition({ lat, lng });
      handleReverseGeocode(lat, lng);
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

      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <GoogleMap
          mapContainerStyle={MAP_CONTAINER_STYLE}
          center={mapCenter}
          zoom={markerPosition ? 15 : 5}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onClick={onMapClick}
        >
          {markerPosition && (
            <Marker
              position={markerPosition}
              draggable={true}
              onDragEnd={onMarkerDragEnd}
            />
          )}
                                                                                                                                                                                                                               </GoogleMap>
      </div>

      <p className="text-xs text-gray-500">Search for your address or enter manually</p>
    </div>
  );
}
