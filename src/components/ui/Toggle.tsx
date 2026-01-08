// components/Toggle.tsx
"use client"
type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${
        checked ? "bg-[#fd4f87]" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white  rounded-full shadow-md transform transition-transform duration-200 ${
          checked ? "translate-x-4   md:translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
