import { Open_Sans as OpenSans } from "next/font/google";

import "./globals.css";
import Header from "./header";

export const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "PMB HMIF 2023",
  description: "Website Departemen Pengembangan Minat dan Bakat HMIF 2023",
  icons: {
    icon: "/logo-pmb.png",
    shortcut: "/logo-pmb.png",
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body
      className={`relative flex min-h-screen w-screen max-w-[100vw] flex-col overflow-x-hidden bg-inquares-loafer-500 ${openSans.className} font-open-sans`}
    >
      <Header />
      <main className="m-auto flex max-w-7xl flex-[2] flex-col gap-40 overflow-x-hidden p-4 lg:container md:p-8 xl:p-12">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
