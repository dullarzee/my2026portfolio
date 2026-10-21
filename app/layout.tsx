import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Syne,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timi's Portfolio",
  description: "Dullarzee's creation",
  icons: {
    icon: "/images/myPic.altered.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="my2026portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
