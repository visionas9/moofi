import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ContextProvider } from "./lib/FilmContext";
import { Header } from "./components/header";

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
      <body className="min-h-full flex flex-col bg-bg min-h-screen">
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
