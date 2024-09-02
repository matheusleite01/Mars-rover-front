import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import { Toaster } from "sonner";
import Provider from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mars Rover",
  description:
    "Control the Mars Rover by setting the plateau size, initial position, and movement commands. Explore Mars with precise navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Provider>{children}</Provider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
