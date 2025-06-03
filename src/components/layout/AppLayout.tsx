import { ReactNode } from 'react';
import BottomBar from './BottomBar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-container">
      {children}
      <BottomBar />
    </div>
  );
}
