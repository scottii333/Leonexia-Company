import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Web Development in the Philippines | Leonexia",
    template: "%s | Leonexia",
  },
  description:
    "Leonexia offers expert Web Development in the Philippines along with UI/UX Design, AI Solutions, Cloud Consulting,  tailored for businesses.",
  keywords: [
    "Web Development Philippines",
    "Philippines Web Development Company",
    "UI/UX Design Philippines",
    "AI Solutions Philippines",
    "Cloud Solutions Philippines",
    "Software Development Philippines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=erode@300,400,500,600,700&display=swap"
        />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mb-[5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
