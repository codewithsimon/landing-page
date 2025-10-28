import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`card-base ${hover ? 'glow-border' : ''} ${className} transition-colors duration-400`}>
      {children}
    </div>
  );
}
