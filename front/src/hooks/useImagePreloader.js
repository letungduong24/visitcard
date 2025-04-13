import { useEffect } from 'react';

export const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, [imageUrls]);
}; 