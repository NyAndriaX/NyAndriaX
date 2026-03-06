import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tsilavina - Ingénieur Logiciel Full Stack",
  description: "Portfolio de Tsilavina, ingénieur logiciel spécialisé en développement frontend, backend et applications web.",
  icons: {
    icon: "/profil.jpeg",
    shortcut: "/profil.jpeg",
    apple: "/profil.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
