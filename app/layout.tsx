import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar, Provider } from "@/components";
import Head from "next/head";
const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gulfview Subdivision",
  description: "Gulfview Subdivions Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/gulfviewlogo.svg" />
      </head>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="overflow-y-auto  max-h-[calc(100vh-50px)]">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
