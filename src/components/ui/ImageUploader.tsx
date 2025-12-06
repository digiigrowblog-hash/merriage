'use client';
import { useState, useCallback } from 'react';
import { X, Image as ImageIcon, Upload } from 'lucide-react';

interface ImageUploaderProps {
  images: File[];
  onChange: (images: File[]) => void;
  maxFiles?: number;
}

export function ImageUploader({ images, onChange, maxFiles = 4 }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    if (files.length > 0 && images.length + files.length <= maxFiles) {
      onChange([...images, ...files.slice(0, maxFiles - images.length)]);
    }
  }, [images, onChange, maxFiles]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => file.type.startsWith('image/'));
    if (files.length > 0 && images.length + files.length <= maxFiles) {
      onChange([...images, ...files.slice(0, maxFiles - images.length)]);
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Profile Photos * (Select {maxFiles} images, max 5MB each)
      </label>
      
      <div
        className={`p-8 border-2 border-dashed rounded-xl transition-all duration-200 text-center ${
          dragActive
            ? 'border-orange-400 bg-orange-50 ring-2 ring-orange-200'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
        }`}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragEnterCapture={() => setDragActive(true)}
        onDragLeaveCapture={() => setDragActive(false)}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-3">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${
            dragActive ? 'border-orange-400 bg-orange-100' : 'border-gray-300 bg-gray-100'
          }`}>
            {dragActive ? <Upload className="w-8 h-8 text-orange-500" /> : <ImageIcon className="w-8 h-8 text-gray-400" />}
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">Drop images here or click to browse</p>
            <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
          </div>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-xl shadow-md"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
            </div>
          ))}
        </div>
      )}
      
      {images.length < maxFiles && (
        <p className="text-sm text-orange-600">Add {maxFiles - images.length} more images</p>
      )}
    </div>
  );
}
