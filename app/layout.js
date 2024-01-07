import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

import TopNav from "@/components/nav/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextEcom",
  description: "Ecommerce app using Nextjs Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
