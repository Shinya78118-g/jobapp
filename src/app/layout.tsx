import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "求人検索アプリ",
  description: "求人検索および求人投稿ができるシンプルなアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">求人検索アプリ</h1>
            <nav>
              <a href="/job-list" className="mr-4 text-white hover:underline">
                求人検索
              </a>
              <a href="/job-post" className="text-white hover:underline">
                求人投稿
              </a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4 pt-20">{children}</main>
      </body>
    </html>
  );
}
