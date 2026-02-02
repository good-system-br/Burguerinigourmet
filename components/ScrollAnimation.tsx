import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('visible');
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'animate-on-scroll-left';
      case 'right':
        return 'animate-on-scroll-right';
      case 'down':
        return 'animate-on-scroll-down';
      case 'scale':
        return 'animate-on-scroll-scale';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
