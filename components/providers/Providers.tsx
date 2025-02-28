'use client';

import { AuthProvider } from '@/hooks/useAuth';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
