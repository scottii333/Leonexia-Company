import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingScheduleButton } from "@/components/FloatingScheduleButton";

export const metadata: Metadata = {
  title: {
    default: "Web Development in the Philippines | Leonexia",
    template: "%s | Leonexia",
  },
  description:
    "Leonexia offers expert Web Development in the Philippines along with UI/UX Design and Workflow Automation tailored for businesses.",
  keywords: [
    "Web Development Philippines",
    "Philippines Web Development Company",
    "UI/UX Design Philippines",
    "Automation Solutions Philippines",
    "Software Development Philippines",
  ],
  icons: {
    icon: "/Leonexia.png", // 👈 favicon/logo in /public
  },
  openGraph: {
    title: "Leonexia: Web Development in the Philippines",
    description:
      "Expert Web Development, UI/UX Design, and Workflow Automation Solutions for modern businesses.",
    url: "https://leonexia.com",
    siteName: "Leonexia",
    images: [
      {
        url: "https://leonexia.com/Leonexia.png", // 👈 must be absolute URL
        width: 512,
        height: 512,
        alt: "Leonexia Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
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

        <link rel="icon" href="/Leonexia.png" type="image/png" />

        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Leonexia",
              url: "https://leonexia.com",
              logo: "https://leonexia.com/Leonexia.png", // 👈 absolute URL to logo
            }),
          }}
        />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow mb-[5rem]">{children}</main>
        <FloatingScheduleButton />
        <Footer />
      </body>
    </html>
  );
}
