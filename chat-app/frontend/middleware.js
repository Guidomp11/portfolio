import { NextResponse } from "next/server";

export async function middleware(req) {
    const URL = req.nextUrl.clone();
    
    try {
        const token = req.cookies.get('chatAppToken');
        
        if((!token || token === undefined) && URL.pathname.includes("login")) return NextResponse.next();
        if((!token || token === undefined) && URL.pathname.includes("register")) return NextResponse.next();
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/authenticate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
        const result = await response.json();
        
        if(!result.success && URL.pathname.includes("/app")) throw new Error("Invalid Credentials");

        if(result.success && ( URL.pathname.includes("/login") || URL.pathname.includes("/register") )) {
            URL.pathname = '/app';
            return NextResponse.redirect(URL);
        }

        return NextResponse.next();
    }catch(error) {
        if(!URL.pathname.includes('/login')){
            URL.pathname = '/login';
            return NextResponse.redirect(URL);
        }
    }
}