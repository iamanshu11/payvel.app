import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Script from "next/script"; 

export const metadata: Metadata = {
  title: "Payvel - Send Money Globally",
  description:
    "Payvel is a money app for testing payments. It allows you to create a virtual card and make payments without using real money.",
  icons: {
    icon: "/fav.svg",
    shortcut: "/fav.svg",
    apple: "/fav.svg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Payvel - Send Money Globally",
    description:
      "Payvel is a money app for testing payments. It allows you to create a virtual card and make payments without using real money.",
    url: "#",
    siteName: "Payvel",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Payvel - Money Transfer App",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Theme handling script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main className="mt-8 md:mt-0 transition-colors">{children}</main>
              <Footer />
            </div>
          </div>

          {/* ✅ Theme Toggle in bottom-right */}
          <div className="hidden md:block fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
