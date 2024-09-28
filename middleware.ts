import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//public routes for pages which do not require the user to be loggedin
const isPublicRoute= createRouteMatcher([
  '/sign-in',
  '/sign-up',
  '/',
])
//protected routes which require the user to be loggedin
const isProtectedRoute= createRouteMatcher([
  '/dashboard'
])


export default clerkMiddleware((auth,req)=>{
  const {userId}=auth();
  // const currentURL= new URL (req.url);
  //redirecting if the user is logged in and the route is protected
  if(userId && isProtectedRoute(req)){
    return NextResponse.redirect(new URL ("/dashboard",req.url))
  }
  //reedirecting if the user is not logged in and the route is public
  if(!userId && isPublicRoute(req)){
    return NextResponse.redirect(new URL ("/sign-in",req.url))
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};