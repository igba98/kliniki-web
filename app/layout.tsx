import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kliniki",
  description:
    "Modern and digital maternity clinic system for the Tanzanian hospitals and mothers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row gap-8">
          <Sidebar />
          <div className="p-4 w-full py-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
