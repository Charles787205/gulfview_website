"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NextUIProvider } from "@nextui-org/react";
type providerProps = {
  children: React.ReactNode;
  session?: Session;
};
const Provider = ({ children, session }: providerProps) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
};

export default Provider;
