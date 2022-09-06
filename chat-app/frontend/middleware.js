import { NextResponse } from "next/server";
import { getToken } from "./src/backend";

export async function middleware(req) {
    const URL = req.nextUrl.clone();
    
    try {
        const token = req.cookies.get('chatAppToken');
        
        if(!token && !URL.pathname.includes("login")) throw new Error("You must be logged in to use the App");

        if(!token && URL.pathname.includes("login")) return NextResponse.next();

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
    }catch(error) {
        if(!URL.pathname.includes('/login')){
            URL.pathname = '/login';
            return NextResponse.redirect(URL);
        }
    }
}