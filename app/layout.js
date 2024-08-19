import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TuBros Windows - Window Cleaning Services in Tulsa, OK",
  description: "Professional window cleaning services in Tulsa, OK. Enhance your home's appearance with our reliable and affordable window cleaning solutions. Contact us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
