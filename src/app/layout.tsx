import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "../styles/globals.css";
import {AuthProvider} from "@app/providers/auth.provider";

const appFont = Montserrat({
    weight: ['300', '400', '500', '700'],
    display: 'swap',
    subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Music Library",
  description: "Find your favorite music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={appFont.className}
      >
      <AuthProvider>
          <div className={'w-full h-full'}>
              {children}
          </div>

      </AuthProvider>
      </body>
    </html>
  );
}
