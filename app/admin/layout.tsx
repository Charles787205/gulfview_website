import type { Metadata } from "next";
import { AdminSidePanel } from "@/components";
import styles from "@css/admin.module.css";
export const metadata: Metadata = {
  title: "Admin",
  description: "Gulfview Subdivions Website",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidePanel />
      <div className="flex w-[100%] h-[100%] justify-center">{children}</div>
    </div>
  );
}
