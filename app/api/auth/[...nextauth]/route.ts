import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { options } from "./options";
const prisma = new PrismaClient();

type test = {
  clientId: string;
  clientSecret: string;
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
