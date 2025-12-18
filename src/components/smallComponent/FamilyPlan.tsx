import { useState } from "react";
import { boolean } from "zod";

type Props = {
  open: boolean;
  value: string;
  onClose: () => void;
  onChange: (v: string) => void;
};

export function FamilyPlan({ open, value, onClose, onChange }: Props) {
  

  const options = ["Don't want children", "Open to children", "Want Children", "Not sure yet"];
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/40 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-4
                   shadow-lg transform transition-all duration-200
                   animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg font-semibold mb-3">Family Plans</h1>

        <div className="space-y-2">
          {options.map((opt) => (
            <button
              key={opt}
              className={`w-full rounded-lg border px-3 py-2 text-left
                 ${
                   value === opt
                     ? "border-pink-500 bg-pink-50"
                     : "border-gray-200"
                 }`}
              onClick={() => {
                onChange(opt);
                onClose();
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
