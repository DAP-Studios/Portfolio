// components/SectionWrapper.tsx
import { AnimatedDiv } from './UI/AnimatedDiv';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 'default' | 'dark';
}

export const SectionWrapper = ({
  children,
  id,
  className = '',
  bg = 'default'
}: SectionWrapperProps) => {
  const bgClasses = {
    default: 'bg-gray-900',
    dark: 'bg-gray-800/50'
  };

  return (
    <section 
      id={id}
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${bgClasses[bg]} ${className}`}
    >
      <AnimatedDiv type="fade" className="max-w-4xl w-full">
        {children}
      </AnimatedDiv>
    </section>
  );
};