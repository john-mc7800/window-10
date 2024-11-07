import "./globals.css";
import {Inter} from "next/font/google";
import Toolbar from "@/components/Toolbar/Toolbar";
import AppState from "@/context/AppState";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-inter',
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased max-w-[100vw] h-fit `}
      >
        <AppState>
        <Toolbar />
        {children}
        </AppState>
      </body>
    </html>
  );
}
