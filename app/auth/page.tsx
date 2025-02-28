'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a placeholder as mentioned in the requirements
    // Email signup functionality would be implemented here
    alert('Email signup is not implemented yet. Please use Google Sign In.');
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn();
      // The redirect is handled by the OAuth callback
    } catch (error) {
      console.error('Error signing in with Google:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-10">
      <div className="w-full max-w-md">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">Create your account</CardTitle>
            <CardDescription className="text-gray-400">
              Join thousands of users who transform their text with AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-800/50 border-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-700"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                disabled={true} // Disabled as per requirements
              >
                Continue with Email
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-gray-900 px-2 text-gray-400">or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full border-gray-700 bg-gray-800/50 hover:bg-gray-700 text-white"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Sign in with Google
                </span>
              )}
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-400">
            By creating an account, you agree to our{' '}
            <a href="#" className="underline text-indigo-400 hover:text-indigo-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline text-indigo-400 hover:text-indigo-300">
              Privacy Policy
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
