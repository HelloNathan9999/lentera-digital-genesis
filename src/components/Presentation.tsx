
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
        className="flex transition-all duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
      >
        {Array.from({ length: totalSlides }, (_, index) => (
          <div key={index + 1} className="w-full h-full flex-shrink-0">
            <PresentationSlide
              slideNumber={index + 1}
              totalSlides={totalSlides}
              onNext={nextSlide}
              onPrev={prevSlide}
              isActive={currentSlide === index + 1}
            />
          </div>
        ))}
      </div>
      
      {/* Small Pagination Dots */}
      <div className="absolute top-6 left-6 flex space-x-1 z-30">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i + 1 === currentSlide
                ? 'bg-white/90 shadow-md scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Presentation;
