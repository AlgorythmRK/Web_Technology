import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ImageGallery = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images?.length) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images?.length) % images?.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
        <Image
          src={images?.[currentImageIndex]?.url}
          alt={images?.[currentImageIndex]?.alt}
          className={`w-full h-full object-cover cursor-pointer transition-transform duration-300 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          onClick={toggleZoom}
        />
        
        {/* Navigation Arrows */}
        {images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </>
        )}

        {/* Zoom Indicator */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
        </div>

        {/* Image Counter */}
        {images?.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {currentImageIndex + 1} / {images?.length}
          </div>
        )}
      </div>
      {/* Thumbnail Strip */}
      {images?.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                index === currentImageIndex
                  ? 'border-campus-blue' :'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image?.url}
                alt={image?.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;