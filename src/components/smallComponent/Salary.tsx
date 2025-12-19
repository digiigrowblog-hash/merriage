// components/SalaryPopup.tsx
"use client";

type Props = {
  open: boolean;
  minValue: number | null;
  maxValue: number | null;
  onClose: () => void;
  onChange: (min: number | null, max: number | null) => void;
};

const SALARY_STEPS = [
  15000,
  30000,
  60000,
  90000,
  120000,
  150000,
  200000,
  300000,
  500000,
  750000,
  1000000,
  2000000,
];

const formatSalary = (v: number | null) =>
  v == null ? "Any" : v >= 1000000 ? "10,00,000+" : v.toLocaleString("en-IN");

export function SalaryPopup({
  open,
  minValue,
  maxValue,
  onClose,
  onChange,
}: Props) {
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
        <h1 className="text-lg font-semibold mb-1">Salary preference</h1>
        <p className="text-xs text-gray-500 mb-3">
          Select minimum and maximum monthly salary.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Min select */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600">Min</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={minValue ?? ""}
              onChange={(e) => {
                const v = e.target.value ? Number(e.target.value) : null;
                onChange(v, maxValue);
              }}
            >
              <option value="">No minimum</option>
              {SALARY_STEPS.map((s) => (
                <option key={s} value={s}>
                  ₹ {formatSalary(s)}
                </option>
              ))}
            </select>
          </div>

          {/* Max select */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-600">Max</label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={maxValue ?? ""}
              onChange={(e) => {
                const v = e.target.value ? Number(e.target.value) : null;
                onChange(minValue, v);
              }}
            >
              <option value="">No maximum</option>
              {SALARY_STEPS.map((s) => (
                <option key={s} value={s}>
                  ₹ {formatSalary(s)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-xs text-gray-600 mb-3">
          Current: {formatSalary(minValue)} – {formatSalary(maxValue)}
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
