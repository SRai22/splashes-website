import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navbar";

export const metadata: Metadata = {
  title: "Splashes Website",
  description: "WEB601 Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
