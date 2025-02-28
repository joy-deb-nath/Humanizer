import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  try {
    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient({ req, res });
    
    // Refresh session if expired - required for Server Components
    await supabase.auth.getSession();
  } catch (error) {
    console.error('Middleware error:', error);
    // Continue even if Supabase client creation fails
  }
  
  return res;
}
