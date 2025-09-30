import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Script from "next/script"; 

export const metadata: Metadata = {
  title: "Dummy",
  description:
    "Dummy is a money app for testing payments. It allows you to create a virtual card and make payments without using real money.",
  // icons: {
  //   icon: "/fav.svg",
  //   shortcut: "/fav.svg",
  //   apple: "/fav.svg",
  // },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dummy",
    description:
      "Dummy is a money app for testing payments. It allows you to create a virtual card and make payments without using real money.",
    url: "#",
    siteName: "Dummy",
    images: [
      {
        url: "https://www.dummy.com/fav.svg",
        width: 1200,
        height: 630,
        alt: "Dummy - Money Transfer App",
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

        {/* ✅ Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5D3TDDJ1M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y5D3TDDJ1M');
            `,
          }}
        />

        {/* ✅ HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na2.hs-scripts.com/243753600.js"
        ></script>

        {/* ✅ Leadfeeder script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(ss,ex){
                window.ldfdr=window.ldfdr||function(){
                  (ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));
                };
                (function(d,s){
                  fs=d.getElementsByTagName(s)[0];
                  function ce(src){
                    var cs=d.createElement(s);
                    cs.src=src; cs.async=1;
                    fs.parentNode.insertBefore(cs,fs);
                  };
                  ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
                })(document,'script');
              })('DzLR5a5NqxA8BoQ2');
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

        {/* ✅ Microsoft Clarity script */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t1vyo36qbd");
          `}
        </Script>
      </body>
    </html>
  );
}
