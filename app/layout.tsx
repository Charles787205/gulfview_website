import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar, Provider } from "@/components";

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
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
