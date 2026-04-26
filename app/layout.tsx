import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ContextProvider } from "./lib/FilmContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}, ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex flex-col">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
