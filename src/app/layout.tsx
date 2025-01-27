'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from 'convex/react'
import { ThemeProvider } from "./providers/theme-provider";
import { PostHogProvider } from "./providers/ph-provider";

const inter = Inter({ subsets: ["latin"] });

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          <ClerkProvider publishableKey='pk_test_dml0YWwtZG9yeS01OC5jbGVyay5hY2NvdW50cy5kZXYk'>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >                
                <div 
                  className="max-w-2xl mx-auto py-4 flex flex-col min-h-screen">
                  <Header />
                    {children}
                  <Footer />
                  <Analytics />
                  <SpeedInsights />
                </div>
              </ThemeProvider>
            </ConvexProviderWithClerk>
          </ClerkProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
