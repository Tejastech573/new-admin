import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  if (currentUser) {
    if (disallowedPathsForLoggedInUser(path)) {
      return Response.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (
      !path.startsWith("/login") &&
      !path.startsWith("/register") &&
      path !== "/" &&
      !isAllowedWithoutLogin(path)
    ) {
      return Response.redirect(new URL("/login", request.url));
    }
  }
}

function disallowedPathsForLoggedInUser(path: string): boolean {
  const disallowedPaths = ["/login", "/register", "/"];
  return disallowedPaths.includes(path);
}

function isAllowedWithoutLogin(path: string): boolean {
  const allowedPaths = ["/dashboard"];
  return allowedPaths.includes(path);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
