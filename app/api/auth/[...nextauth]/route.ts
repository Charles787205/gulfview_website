import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { options } from "./options";

type test = {
  clientId: string;
  clientSecret: string;
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
