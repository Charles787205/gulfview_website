import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin") && token === null) {
        console.log("middleware fail");
        return false;
      } else {
      }
      return true;
    },
  },
});
