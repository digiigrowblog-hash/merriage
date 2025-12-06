'use client';
import { useState, useCallback } from 'react';
import { X, Image as ImageIcon, Upload } from 'lucide-react';

interface ImageUploaderProps {
  images: File[];
  onChange: (images: File[]) => void;
  maxFiles?: number;
}

export function ImageUploader({ images, onChange, maxFiles = 4 }: ImageUploaderProps) {

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, indexToReplace?: number) => {
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith('image/'));
    if (files.length === 0) return;

    if (indexToReplace !== undefined) {
      // Replace specific image
      const newImages = [...images];
      newImages[indexToReplace] = files[0];
      onChange(newImages);
    } else {
      // Append new images
      const remainingSlots = maxFiles - images.length;
      const filesToAdd = files.slice(0, remainingSlots);
      onChange([...images, ...filesToAdd]);
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Profile Photos * (Select {maxFiles} images)
      </label>

      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: maxFiles }).map((_, index) => {
          const image = images[index];
          const isFilled = !!image;

          return (
            <div key={index} className="aspect-square relative">
              {isFilled ? (
                <div className="w-full h-full relative group rounded-2xl overflow-hidden border-2 border-orange-200">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => removeImage(index)}
                      className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <label className="w-full h-full border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200 group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden overflow-hidden"
                    disabled={index !== images.length} // Force filling in order
                  />
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2 group-hover:bg-orange-100 transition-colors ${index !== images.length ? 'opacity-50' : ''
                    }`}>
                    <Upload className={`w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors`} />
                  </div>
                  <span className={`text-sm text-gray-500 font-medium ${index !== images.length ? 'opacity-50' : ''
                    }`}>
                    Add Photo
                  </span>
                </label>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-sm text-gray-500 text-center">
        {images.length} / {maxFiles} photos added
      </p>
    </div>
  );
}






      