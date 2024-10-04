import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const nunitoFont = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-nunito",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brittany Mueller",
  description: "The personal website of Brittany Mueller, a recent Computer Science graduate and aspiring backend developer.",
  keywords: "Brittany Mueller, software developer, backend developer, computer science, university of guelph",
  authors: [{name: "Brittany Mueller"}],
};

export default function RootLayout ({children} : Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${nunitoFont.variable}`}>
        <header>
          <nav>
            <Link href="/" className="home-link">
              <Image 
                src="/bee_scale.png"
                width={50}
                height={50}
                alt="Bee icon link to home."
                className="home-icon"
              />
              <span className="desktop-only">Brittany Mueller</span>
            </Link>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              {/* <li>
                <Link href="/experience">Experience</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        <main className="content-wrapper">
          {children}
        </main>
        <footer>&copy; Brittany Mueller 2024</footer>
      </body>
    </html>
  );
}
