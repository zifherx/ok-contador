import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-providex";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ok Contadores Corporativo",
  description: "Profesionales Contables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
