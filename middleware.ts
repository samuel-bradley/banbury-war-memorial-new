import type { NextRequest } from 'next/server'
import { isLoggedIn } from '@/admin/login/session'
 
export async function middleware(request: NextRequest) {

  const authenticated: boolean = await isLoggedIn()

  if (request.nextUrl.pathname.startsWith('/api/') && !authenticated) {
    // Prevent any unauthenticated API usage
    return Response.json(
      { success: false, message: 'You must be logged in to perform this operation.' },
      { status: 401 }
    )
  }

  if (request.nextUrl.pathname.startsWith('/admin/')) {
    if (authenticated && request.nextUrl.pathname.startsWith('/admin/login')) {
      // Redirect if trying to log in and already logged in
      return Response.redirect(new URL('/admin/records', request.url))
    }
    if (!authenticated && request.nextUrl.pathname !== '/admin/login') {
      // Redirect to login if trying to access non-login page and not logged in
      return Response.redirect(new URL('/admin/login', request.url))
    }
  }
  
}

export const config = { matcher: ['/admin/:path*', '/api/:path*'] }
