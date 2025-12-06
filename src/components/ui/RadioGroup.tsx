// components/ui/RadioGroup.tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  title: string;
  cols?: 1 | 2 | 3;
}

export function RadioGroup({ name, options, value, onChange, title, cols = 3 }: RadioGroupProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className={`grid grid-cols-${cols} gap-4`}>
        {options.map((option) => (
          <label key={option.value} className="group cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              value === option.value
                ? 'border-orange-400 bg-orange-50 ring-2 ring-orange-200'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}>
              <div className="font-medium text-gray-900">{option.label}</div>
              {option.description && (
                <p className="text-sm text-gray-500 mt-1">{option.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
