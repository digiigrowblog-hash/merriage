// components/ReligionPopup.tsx
"use client";

type Props = {
  open: boolean;
  value: string | null;
  onClose: () => void;
  onChange: (val: string | null) => void;
};

const RELIGIONS = [
  "Any",
  "Hindu",
  "Muslim",
  "Christian",
  "Sikh",
  "Jain",
  "Buddhist",
  "Parsi",
  "Jewish",
  "Other",
];

export function ReligionPopup({ open, value, onClose, onChange }: Props) {
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
        <h1 className="text-lg font-semibold mb-2">Religion preference</h1>
        <p className="text-xs text-gray-500 mb-3">
          Select the religion you prefer. Choose "Any" if you are open to all.
        </p>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {RELIGIONS.map((r) => {
            const selected = (value ?? "Any") === r;
            return (
              <button
                key={r}
                type="button"
                className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 text-sm
                  ${selected ? "border-pink-500 bg-pink-50 text-pink-700" : "border-gray-200"}`}
                onClick={() => {
                  onChange(r === "Any" ? null : r);
                  onClose();
                }}
              >
                <span>{r}</span>
                {selected && (
                  <span className="text-[11px] font-medium text-pink-600">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
