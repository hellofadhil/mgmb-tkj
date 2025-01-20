import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MGMP TKJ JAWA BARAT",
  description: "Musyawarah Guru Mata Pelajaran (MGMP) untuk pengembangan kurikulum dan peningkatan kompetensi guru di Jawa Barat.",
  icons: {
    icon: 'logo.webp'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="logo.webp" type="image/webp" />
        <meta name="google-site-verification" content="LQl0zOczqi-fcwMP9HcJJAeTuLg3s2JZLnzb_rroMxY" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
