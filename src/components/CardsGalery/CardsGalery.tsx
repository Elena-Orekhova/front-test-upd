import { FC, useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { Card } from "../Card/Card";
import "./style.scss";
import { initialCardData } from "./const"; 

export const CardsGalery: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const cardWidth = 280;
                                              
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isJumpingRef = useRef(false);
  const [cardData, setCardData] = useState<Array<{id: number, image: string, title: string, current: number}>>([]);

  useEffect(() => {    
    setCardData(initialCardData);
  }, []);
  
  const scrollToNearestCard = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const currentScrollLeft = container.scrollLeft;
    
    const cardIndex = Math.round(currentScrollLeft / cardWidth);
    const targetScrollLeft = cardIndex * cardWidth;
    
    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    
    setScrollPosition(targetScrollLeft);
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // * 2 для быстрого скролла
    const newScrollPosition = scrollLeft - walk;
    
    scrollContainerRef.current.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.removeProperty('user-select');
      
      processCircularScroll();
      
      scrollToNearestCard();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.removeProperty('user-select');
        
        processCircularScroll();
        
        scrollToNearestCard();
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].clientX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollPosition = scrollLeft - walk;
    
    scrollContainerRef.current.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      processCircularScroll();
      
      scrollToNearestCard();
    }
  };

  const processCircularScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollLeft;
    
    if (currentScroll < 0) {
      isJumpingRef.current = true;
      container.scrollTo({
        left: maxScroll,
        behavior: 'auto'
      });
      setScrollPosition(maxScroll);
      setTimeout(() => {
        isJumpingRef.current = false;
      }, 100);
    } 
    else if (currentScroll > maxScroll) {
      isJumpingRef.current = true;
      container.scrollTo({
        left: 0,
        behavior: 'auto'
      });
      setScrollPosition(0);
      setTimeout(() => {
        isJumpingRef.current = false;
      }, 100);
    }
  };

  const handleScrollEvent = () => {
    if (scrollContainerRef.current && !isJumpingRef.current) {
      const container = scrollContainerRef.current;
      const newPosition = container.scrollLeft;
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const currentCardIndex = Math.round(scrollPosition / cardWidth);
    
    let targetCardIndex = direction === 'left' 
      ? currentCardIndex - 1
      : currentCardIndex + 1;
      
    if (targetCardIndex < 0) {
      targetCardIndex = cardData.length - 1;
    } else if (targetCardIndex >= cardData.length) {
      targetCardIndex = 0;
    }
      
    const newPosition = targetCardIndex * cardWidth;
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newPosition);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateMaxScroll = () => {
        setMaxScroll(container.scrollWidth - container.clientWidth);
      };
      
      updateMaxScroll();
      
      container.addEventListener('scroll', handleScrollEvent);
      window.addEventListener('resize', updateMaxScroll);
      
      return () => {
        container.removeEventListener('scroll', handleScrollEvent);
        window.removeEventListener('resize', updateMaxScroll);
      };
    }
  }, [maxScroll]);

  return (
    <section className="cards">
      <div className="cards__header">
        <h2 className="cards__title">Weekly - Top NFTs</h2>
      </div>
      <div className="cards__scroll-wrapper">
        <div 
          className={`cards__container ${isDragging ? 'cards__container--dragging' : ''}`}
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              current={card.current}
            />
          ))}
        </div>
      </div>
      <div className="cards__navigation">
      <button 
        className="cards__arrow cards__arrow--prev"
        onClick={() => handleScroll('left')}
      ></button>
      <button 
        className="cards__arrow cards__arrow--next"
        onClick={() => handleScroll('right')}
      ></button>
    </div>
    </section>
  );
};
