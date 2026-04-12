// components/SectionWrapper.tsx
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
    default: 'bg-black/80',
    dark: 'bg-black/90'
  };

  return (
    <section
      id={id}
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:px-8 ${bgClasses[bg]} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.15),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.85))]" />
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/55 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-md md:p-10">
        <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-200/20 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-cyan-300/15 blur-2xl" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
        {children}
      </div>
    </section>
  );
};