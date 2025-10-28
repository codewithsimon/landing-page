import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-basix-black relative overflow-x-hidden">
      <div className="grid-background fixed inset-0 pointer-events-none opacity-50" />

      <div className="relative z-10">
        {children}
      </div>

      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-basix-500 to-transparent opacity-20" />
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-basix-500 to-transparent opacity-20" />
    </div>
  );
}
