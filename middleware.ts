import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        // Redirect to login if token is missing
        return NextResponse.redirect(new URL("/auth", req.url));
    }

    try {
        // Verify the token
        jwt.verify(token, JWT_SECRET);
        return NextResponse.next(); // Allow access if the token is valid
    } catch (error) {
        console.error("Invalid token:", error);
        return NextResponse.redirect(new URL("/auth", req.url));
    }
}

// Specify the routes you want this middleware to run on
export const config = {
    matcher: ["/",], // Example: apply to home and a protected route
};
