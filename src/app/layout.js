import Navbar from "@/component/Navbar";
import "./globals.css";
import Hero from "@/component/Hero";
import Content from "@/component/Content";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children} {/* To render children in page component */}
        </main>
      </body>
    </html>
  );
}
