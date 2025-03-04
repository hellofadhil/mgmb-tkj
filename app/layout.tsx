import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
  title: "Bazma – Baituzzakah Pertamina",
  description: "Yayasan Baituzzakah Pertamina (Bazma) adalah Lembaga Nirlaba yang berkhidmat mengangkat harkat sosial kemanusiaan dengan mendayagunakan dana zakat, infak/sedekah dan wakaf (Ziswaf) yang bersumber dari masyarakat. Dana yang terhimpun disalurkan dalam beragam bentuk program sosial, pendidikan, kesehatan, pelayanan dhuafa, penanganan bencana dan pemberdayaan ekonomi masyarakat di seluruh Indonesia.",
  icons: {
    icon: 'https://bazma.org/wp-content/uploads/2025/02/cropped-Logo-BAZMA-2-4-192x192.png'
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
          <Header/>
          <div className="mb-24"></div>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
