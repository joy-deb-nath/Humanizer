'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-background p-4 text-foreground">
          <div className="flex flex-col items-center gap-2 text-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h1 className="text-2xl font-bold tracking-tight">Something went wrong!</h1>
            <p className="text-muted-foreground">
              {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
            >
              Go Home
            </Button>
            <Button 
              onClick={() => reset()}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
