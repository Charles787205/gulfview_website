import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentitalsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      });
      const new_session_user = { ...session.user, id: sessionUser?.id };
      session.user = new_session_user;

      return session;
    },
    async signIn({ profile }) {
      try {
        const userExist = await prisma.user.findUnique({
          where: {
            email: profile!.email,
          },
        });
        if (!userExist) {
          await prisma.user.create({
            data: {
              email: profile?.email!,
              username: profile!.name!.replace(" ", "").toLowerCase(),
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
