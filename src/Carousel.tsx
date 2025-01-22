// Carousel.tsx
import { useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  const items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Tile ${index + 1}`,
    content: loremIpsum
  }));

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.3; // Scroll by one tile width
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button 
        className="nav-button nav-button-left" 
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        ←
      </button>
      
      <div className="carousel-container">
        <div className="carousel" ref={scrollContainerRef}>
          {items.map((item) => (
            <div key={item.id} className="carousel-tile">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="nav-button nav-button-right" 
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;