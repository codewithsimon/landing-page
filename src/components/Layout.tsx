import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="grid-background fixed inset-0 pointer-events-none opacity-50" />

      <div className="relative z-10">
        {children}
      </div>

      <div className="fixed top-0 left-0 w-full h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, var(--muted), transparent)' }} />
      <div className="fixed bottom-0 left-0 w-full h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, var(--muted), transparent)' }} />
    </div>
  );
}
