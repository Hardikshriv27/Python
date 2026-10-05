import "./globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Triune — The House of Builders",
  description:
    "Triune builds enterprise software, hospitality technology, and digital investing products for businesses that need to move forward. IMS Web ERP, Cafe Management System, and Mero Lagaani — one company, three products.",
  metadataBase: new URL("https://triune.example.com"),
  openGraph: {
    title: "Triune — The House of Builders",
    description:
      "One technology company. Multiple powerful products — enterprise ERP, hospitality management, and digital investing.",
    type: "website",
  },
  icons: {
    icon: "/brand/triune-mark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
