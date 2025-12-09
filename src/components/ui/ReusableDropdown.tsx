'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  searchable?: boolean;
}

export const ReusableDropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption?.label || placeholder;

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
    if (!searchable) setSearchTerm('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between p-3 border border-gray-300 
          rounded-lg bg-white hover:border-gray-400 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer'}
          ${isOpen ? 'border-blue-500 ring-2 ring-blue-500' : ''}
        `}
      >
        <span className="truncate flex-1 text-left">
          {displayValue}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-xl max-h-60 overflow-auto">
          {searchable && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search options..."
              className="w-full p-3 border-b border-gray-200 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          )}
          {filteredOptions.length === 0 ? (
            <div className="p-4 text-gray-500 text-center">No options found</div>
          ) : (
            <div className="py-1">
              {filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none 
                    focus:bg-gray-100 transition-colors duration-150
                    ${option.value === value ? 'bg-blue-50 text-blue-900 font-medium' : ''}
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
