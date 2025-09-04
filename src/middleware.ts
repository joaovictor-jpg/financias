import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

async function verifyToken(token: string) {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in .env');

    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return true;
    } catch (error) {
        return false;
    }
}


export async function middleware(request: NextRequest) {
    const token = request.cookies.get('session_token')?.value;
    const isTokenValid = token ? await verifyToken(token) : false;
    const isPrivateRoute = request.nextUrl.pathname.startsWith('/dashboard');
    const isPublicAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup');

    if (!isTokenValid && isPrivateRoute) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (isTokenValid && isPublicAuthRoute) {
        const dashboardUrl = new URL('/dashboard', request.url);
        return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};