import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function FadeInSection({ children, className = '', delay = 0, threshold = 0.1 }: FadeInSectionProps) {
  const { ref, isVisible } = useScrollReveal(threshold);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}