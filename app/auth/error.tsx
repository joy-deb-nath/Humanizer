'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Auth error:', error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-4 text-center p-8 border border-red-800/30 rounded-lg bg-red-900/10">
          <AlertCircle className="h-12 w-12 text-red-500" />
          <h1 className="text-2xl font-bold tracking-tight">Authentication Error</h1>
          <p className="text-muted-foreground">
            {error.message || 'There was a problem signing you in. Please try again.'}
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
            <Button 
              onClick={() => reset()}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
