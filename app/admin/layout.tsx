import type { Metadata } from "next";
import { AdminSidePanel } from "@/components";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin",
  description: "Gulfview Subdivions Website",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  if (!session?.user.position) {
    redirect("/");
  }
  return (
    <div className="flex">
      <AdminSidePanel />
      <div className="flex w-[100%] h-[100%] justify-center">{children}</div>
    </div>
  );
}
