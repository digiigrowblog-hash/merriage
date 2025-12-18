// components/LocationPopup.tsx
"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useMemo } from "react";

type Props = {
  open: boolean;
  value: { lat: number; lng: number } | null;
  label: string; // text shown on page (e.g. "Vashi, Navi Mumbai")
  onClose: () => void;
  onChange: (pos: { lat: number; lng: number }, label: string) => void;
};

const libraries: ("places")[] = ["places"];

export function LocationPopup({ open, value, label, onClose, onChange }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const [markerPos, setMarkerPos] = useState(
    value ?? { lat: 19.0771, lng: 72.9986 } // default: Vashi
  );
  const [placeText, setPlaceText] = useState(label || "");

  const center = useMemo(
    () => markerPos,
    [markerPos]
  );

  if (!open) return null;
  if (!isLoaded) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center
                   bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <p>Loading map…</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-4 shadow-lg
                   flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg font-semibold">Choose location</h1>

        {/* place name / alternative input */}
        <input
          type="text"
          placeholder="Area / locality name (e.g. Vashi, Navi Mumbai)"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={placeText}
          onChange={(e) => setPlaceText(e.target.value)}
        />

        <div className="h-64 w-full rounded-lg overflow-hidden">
          <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="w-full h-full"
            onClick={(e) => {
              if (!e.latLng) return;
              const pos = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              };
              setMarkerPos(pos);
              // update parent immediately with last typed text as label
              onChange(pos, placeText || "Selected location");
            }}
          >
            <Marker
              position={markerPos}
              draggable
              onDragEnd={(e) => {
                if (!e.latLng) return;
                const pos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                setMarkerPos(pos);
                onChange(pos, placeText || "Selected location");
              }}
            />
          </GoogleMap>
        </div>

        <p className="text-[11px] text-gray-500">
          Tip: Drag the marker or tap on map to move it. Click outside the popup to close.
        </p>
      </div>
    </div>
  );
}
