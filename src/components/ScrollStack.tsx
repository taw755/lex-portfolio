import type { ReactNode } from 'react';
import './ScrollStack.css';

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

export const ScrollStack = ({ children, className = '' }: ScrollStackProps) => {
  return (
    <div className={`scroll-stack-container ${className}`}>
      {children}
    </div>
  );
};

interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const ScrollStackItem = ({ children, className = '', index = 0 }: ScrollStackItemProps) => {
  // We can use the index to slightly offset the top position so cards stack with a slight gap,
  // or just use a fixed top. A fixed top creates the standard stacked cards effect.
  // We'll use a dynamic top to create a slight visual offset.
  const stackOffset = 100 + (index * 20); // 100px base offset from top, plus 20px per card

  return (
    <div 
      className={`scroll-stack-item ${className}`}
      style={{ top: `${stackOffset}px` }}
    >
      {children}
    </div>
  );
};
