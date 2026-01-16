import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import "antd/dist/reset.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tsilavina - Software Engineer, Front End & App Developer",
  description: "Portfolio of Tsilavina - Software Engineer specializing in Front End and App Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
