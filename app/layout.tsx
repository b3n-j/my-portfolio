
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { APP_TITLE, APP_DESCRIPTION } from "@/app/_constants/config";
import { Footer } from "./_components/layout/footer";
import { Header } from "./_components/layout/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
                <SpeedInsights />
              </div>
             <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
