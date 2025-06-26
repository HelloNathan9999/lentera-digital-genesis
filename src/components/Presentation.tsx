
import React, { useState, useEffect } from 'react';
import PresentationSlide from './PresentationSlide';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 11;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && currentSlide < totalSlides) {
        setCurrentSlide(prev => prev + 1);
      } else if (event.key === 'ArrowLeft' && currentSlide > 1) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
      >
        {Array.from({ length: totalSlides }, (_, index) => (
          <div key={index + 1} className="w-full h-full flex-shrink-0">
            <PresentationSlide
              slideNumber={index + 1}
              totalSlides={totalSlides}
              onNext={nextSlide}
              onPrev={prevSlide}
            />
          </div>
        ))}
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
          Gunakan tombol panah ← → untuk navigasi
        </div>
      </div>
    </div>
  );
};

export default Presentation;
