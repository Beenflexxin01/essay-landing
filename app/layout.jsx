import "./globals.css";
import { Poppins } from "next/font/google";

import Header from "./components/Header";

const satoshi = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Essay9ja Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${satoshi.className}`}>{children}</main>
      </body>
    </html>
  );
}
