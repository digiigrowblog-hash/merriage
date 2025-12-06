// components/ui/TagSelector.tsx
'use client';
import { X } from 'lucide-react';

interface TagOption {
  value: string;
  label: string;
}

interface TagSelectorProps {
  options: TagOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  maxTags?: number;
  title: string;
}

// 15 HOBBY OPTIONS - EXPORTED for signup page
export const HOBBIES: TagOption[] = [
  { value: 'music', label: 'Music' },
  { value: 'travel', label: 'Travel' },
  { value: 'coding', label: 'Coding' },
  { value: 'fitness', label: 'Fitness' },
  { value: 'cooking', label: 'Cooking' },
  { value: 'reading', label: 'Reading' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'photography', label: 'Photography' },
  { value: 'sports', label: 'Sports' },
  { value: 'movies', label: 'Movies' },
  { value: 'dancing', label: 'Dancing' },
  { value: 'painting', label: 'Painting' },
  { value: 'hiking', label: 'Hiking' },
  { value: 'writing', label: 'Writing' },
  { value: 'yoga', label: 'Yoga' }
];

export function TagSelector({ 
  options, 
  selected, 
  onChange, 
  maxTags = 5, 
  title 
}: TagSelectorProps) {
  const toggleTag = (value: string) => {
    if (selected.includes(value)) {
      // Remove tag
      onChange(selected.filter(tag => tag !== value));
    } else if (selected.length < maxTags) {
      // Add tag
      onChange([...selected, value]);
    }
  };

  const availableTags = options.filter(option => !selected.includes(option.value));
  const isMaxReached = selected.length >= maxTags;

  return (
    <div className="space-y-4">
      {/* Title */}
      <label className="block text-sm font-medium text-gray-700">
        {title} {maxTags && <span className="text-orange-500">({selected.length}/{maxTags})</span>}
      </label>

      {/* Selected Tags Display */}
      <div className="flex flex-wrap gap-2 mb-6 p-4 border-2 border-dashed rounded-2xl transition-all duration-200 min-h-[80px] items-center justify-center">
        {selected.length > 0 ? (
          selected.map(tag => (
            <div
              key={tag}
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group relative"
            >
              <span className="truncate max-w-[120px]">{tag}</span>
              <button
                onClick={() => toggleTag(tag)}
                className="ml-2 p-1 -mr-1 hover:bg-white/20 rounded-full transition-all duration-200 group-hover:opacity-100 opacity-70 flex-shrink-0"
                title="Remove"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <span className="text-gray-500 text-sm italic font-medium">
            Select up to {maxTags} hobbies by clicking below 👇
          </span>
        )}
      </div>

      {/* Available Tags Grid */}
      <div>
        <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
          Choose from these popular hobbies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {availableTags.map(option => (
            <button
              key={option.value}
              onClick={() => toggleTag(option.value)}
              disabled={isMaxReached}
              className={`group p-4 rounded-2xl text-sm font-semibold transition-all duration-300 border-2 shadow-sm hover:shadow-md active:shadow-inner transform active:scale-[0.98] ${
                isMaxReached
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : selected.includes(option.value)
                    ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white border-orange-400 shadow-orange-200/50 hover:shadow-orange-300/50 scale-105'
                    : 'bg-white/50 hover:bg-orange-50 border-gray-200 hover:border-orange-300 text-gray-800 hover:text-orange-700 hover:scale-[1.03]'
              }`}
              title={isMaxReached ? `Max ${maxTags} reached` : `Add ${option.label}`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-base leading-tight">{option.label}</span>
                {isMaxReached && (
                  <span className="text-xs bg-white/80 px-2 py-0.5 rounded-full text-gray-600">
                    Full
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Status Message */}
      {isMaxReached && (
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl">
          <p className="text-sm text-orange-800 font-medium flex items-center gap-2">
            ✨ Maximum {maxTags} hobbies selected! Remove some to add new ones.
          </p>
        </div>
      )}

      {/* Summary */}
      {selected.length > 0 && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Selected: {selected.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}
