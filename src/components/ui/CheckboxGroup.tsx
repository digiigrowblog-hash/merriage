interface CheckboxOption {
  value: string;
  label: string;
  tooltip?: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  title: string;
}

export function CheckboxGroup({ options, values, onChange, title }: CheckboxGroupProps) {
  const toggleValue = (value: string) => {
    const newValues = values.includes(value)
      ? values.filter(v => v !== value)
      : [...values, value];
    onChange(newValues);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer group">
            <input
              type="checkbox"
              checked={values.includes(option.value)}
              onChange={() => toggleValue(option.value)}
              className="h-5 w-5 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
            />
            <span className="ml-3 text-sm font-medium text-gray-900">{option.label}</span>
            {option.tooltip && (
              <span className="ml-2 text-xs text-gray-400" title={option.tooltip}>ℹ️</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
