import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Thread",
  description: "Thread Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="antialiased bg-background h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 max-w-lg m-auto py-12 w-full">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
