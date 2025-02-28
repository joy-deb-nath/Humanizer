import { Loader2 } from 'lucide-react';

export default function AuthLoading() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-10">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-500" />
        <p className="text-lg text-muted-foreground">Authenticating...</p>
      </div>
    </div>
  );
}
