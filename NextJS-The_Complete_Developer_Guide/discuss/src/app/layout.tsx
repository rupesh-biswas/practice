import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discuss",
  description:
    "Start a discussion, ask questions, or share your thoughts and get feedback from the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Provider>
            <Header />
            {children}
          </Provider>
        </div>
        <GoogleAnalytics gaId="G-H7E6GB03Y8" />
      </body>
    </html>
  );
}
