import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/Footer"; // Import Footer component (you'll need to create this)

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

export const metadata = {
  title: "Hash Sync",
  description: "Your digital solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-roboto`}
      >
        <Navbar /> {/* Add Header/Navbar */}
        <main>{children}</main> {/* Main content area */}
        <Footer /> {/* Add Footer */}
      </body>
    </html>
  );
}
