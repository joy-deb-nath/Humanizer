import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;
  const plan = requestUrl.searchParams.get('plan');

  try {
    if (code) {
      const cookieStore = cookies();
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
      await supabase.auth.exchangeCodeForSession(code);
    }

    // Always redirect to home or dashboard
    return NextResponse.redirect(origin);
  } catch (error) {
    console.error('Auth callback error:', error);
    // Redirect to error page with specific error message
    return NextResponse.redirect(`${origin}/?auth_error=true`);
  }
}
