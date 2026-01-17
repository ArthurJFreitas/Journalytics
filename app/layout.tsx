import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}); 


export const metadata: Metadata = {
  title: "Journalytic",
  description: "Build Profitable Habits",
};

export default function RootLayouwt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
