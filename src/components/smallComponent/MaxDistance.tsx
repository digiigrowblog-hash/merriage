// components/DistancePopup.tsx
"use client";

type Props = {
  open: boolean;
  value: number;
  onClose: () => void;
  onChange: (v: number) => void;
};

const MIN = 10;
const MAX = 120;
const STEP = 1;

export function DistancePopup({ open, value, onClose, onChange }: Props) {
  if (!open) return null;

  const percent = ((value - MIN) / (MAX - MIN)) * 100;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-lg
                   transform transition-all duration-200
                   animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg font-semibold mb-1">Max distance</h1>
        <p className="text-xs text-gray-500 mb-3">
          Drag the slider to set your distance.
        </p>

        <div className="flex items-end justify-between mb-2">
          <span className="text-xs text-gray-500">{MIN} km</span>
          <div className="text-2xl font-semibold text-pink-600">
            {value} <span className="text-xs text-gray-500">km</span>
          </div>
          <span className="text-xs text-gray-500">{MAX} km</span>
        </div>

        {/* custom-looking progress bar slider */}
        <div className="relative mt-1">
          <div className="pointer-events-none absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-200" />
          <div
            className="pointer-events-none absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-pink-500"
            style={{ width: `${percent}%` }}
          />
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="relative w-full appearance-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
