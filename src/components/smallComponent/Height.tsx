// components/HeightPopup.tsx
"use client";

import { useMemo } from "react";

type Props = {
  open: boolean;
  value: number | null;
  onClose: () => void;
  onChange: (v: number | null) => void;
};

export function HeightPopup({ open, value, onClose, onChange }: Props) {
  const options = useMemo(() => {
    const arr: number[] = [];
    for (let h = 140; h <= 210; h += 1) arr.push(h);
    return arr;
  }, []);

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
        <h1 className="text-lg font-semibold mb-3">Height preference</h1>

        <select
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={value ?? ""}
          onChange={(e) => {
            const v = e.target.value ? Number(e.target.value) : null;
            onChange(v);
          }}
        >
          <option value="">Open to all</option>
          {options.map((cm) => (
            <option key={cm} value={cm}>
              {cm} cm
            </option>
          ))}
        </select>

        <button
          className="mt-4 w-full rounded-md bg-pink-600 py-2 text-sm font-medium text-white"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
}
