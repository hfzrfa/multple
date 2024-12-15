import { clerkMiddleware } from "@clerk/nextjs/server";
import { headers } from "next/headers";

export async function middleware() {
  const reqHeaders = await headers(); // ✅ Properly awaited
  console.log(reqHeaders);
}


export default clerkMiddleware();

export const config = {
  matcher: [
    /**
     * Match all application routes except for:
     * - Next.js internals (`/_next/*`)
     * - Static files (`*.html, *.css, *.js`, etc.)
     */
    '/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)$).*)',
    /**
     * Always run middleware for API and TRPC routes.
     */
    '/api/:path*',
    '/trpc/:path*',
  ],
};
 