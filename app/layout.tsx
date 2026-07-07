import type { Metadata } from "next";
import PortalLayout from "./components/PortalLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Portal",
  description: "BNU Student Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PortalLayout>{children}</PortalLayout>
      </body>
    </html>
  );
}
