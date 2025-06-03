import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export function middleware(request: NextRequest) {
    let isAuth = false;
    cookies().then(cookies => isAuth = !!cookies.get('token')?.value)

    if (request.url.includes('main'))
        return NextResponse.redirect(new URL("/", request.url));
    return  NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ['/main/:path*']
}
