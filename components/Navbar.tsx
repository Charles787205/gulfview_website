"use client";
import { PrismaClient } from "@prisma/client";
import { useState, useEffect } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("Navbar");
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  useEffect(() => {
    const getIfAdmin = async () => {
      const response = await fetch("/api/user/profile");
      const user = await response.json();
      console.log(user);
      setIsAdmin(user.position != null);
    };

    getIfAdmin();
  }, [session != null]);

  return (
    <nav className="min-h-[50px] md:min-h-[60px]   sticky top-0 left-0 w-[100%] z-[100] bg-slate-100 flex shadow-md">
      <DesktopNav session={session} isAdmin={isAdmin} providers={providers} />
      <MobileNav session={session} isAdmin={isAdmin} providers={providers} />
    </nav>
  );
};

export default Navbar;
