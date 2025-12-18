// components/AgeRangePopup.tsx
"use client";

type Props = {
  open: boolean;
  minAge: number | null;
  maxAge: number | null;
  onClose: () => void;
  onChange: (min: number | null, max: number | null) => void;
};

const AGES = Array.from({ length: 50 - 21 + 1 }, (_, i) => 21 + i);

export function AgeRangePopup({ open, minAge, maxAge, onClose, onChange }: Props) {
  if (!open) return null;

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
        <h1 className="text-lg font-semibold mb-1">Age range</h1>
        <p className="text-xs text-gray-500 mb-3">
          Select minimum and maximum age.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Min */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600">Min</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={minAge ?? ""}
              onChange={(e) => {
                const v = e.target.value ? Number(e.target.value) : null;
                onChange(v, maxAge);
              }}
            >
              <option value="">No minimum</option>
              {AGES.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Max */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600">Max</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={maxAge ?? ""}
              onChange={(e) => {
                const v = e.target.value ? Number(e.target.value) : null;
                onChange(minAge, v);
              }}
            >
              <option value="">No maximum</option>
              {AGES.map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-xs text-gray-600 mb-3">
          Current: {minAge ?? "Any"} – {maxAge ?? "Any"}
        </div>

        <button
          className="mt-1 w-full rounded-md bg-pink-600 py-2 text-sm font-medium text-white"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
}
