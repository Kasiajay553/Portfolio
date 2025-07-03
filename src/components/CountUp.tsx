import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [displayed, setDisplayed] = useState('0');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Special case for strings with non-numeric characters (like "20+")
          if (end.includes('+') || end.includes('B')) {
            // Extract the number part
            const numericPart = end.replace(/[^0-9.]/g, '');
            const suffix = end.replace(/[0-9.]/g, '');
            
            let startValue = 0;
            const endValue = parseFloat(numericPart);
            const stepTime = Math.abs(Math.floor(duration / endValue));
            
            let timer = setInterval(() => {
              startValue += 1;
              
              if (startValue >= endValue) {
                clearInterval(timer);
                setDisplayed(end);
              } else {
                setDisplayed(`${startValue}${suffix}`);
              }
            }, stepTime);
          } else {
            // Regular number
            let startValue = 0;
            const endValue = parseInt(end);
            const stepTime = Math.abs(Math.floor(duration / endValue));
            
            let timer = setInterval(() => {
              startValue += 1;
              
              if (startValue >= endValue) {
                clearInterval(timer);
                setDisplayed(end);
              } else {
                setDisplayed(startValue.toString());
              }
            }, stepTime);
          }
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return <div ref={elementRef}>{displayed}</div>;
};

export default CountUp;