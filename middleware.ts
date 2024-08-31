import type { NextRequest } from 'next/server'
import { isLoggedIn } from '@/admin/login/session'
 
export async function middleware(request: NextRequest) {

  const loggedIn: boolean = await isLoggedIn()

  if (!loggedIn && !request.nextUrl.pathname.startsWith('/admin/login')) {
    return Response.redirect(new URL('/admin/login', request.url))
  }
  
  if (loggedIn && request.nextUrl.pathname.startsWith('/admin/login')) {
    return Response.redirect(new URL('/admin/records', request.url))
  }
}

export const config = { matcher: '/admin/:path*' }
