import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CasinoRadar - Casino Reviews & Bonuses",
  description:
    "Casino reviews, bonuses and guides in English, Russian and Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <nav>

          <div className="logo">
            <Link href="/">CasinoRadar</Link>
          </div>

          <div className="menu">
            <Link href="/">Home</Link>
            <Link href="/casinos">Casinos</Link>
            <Link href="/bonuses">Bonuses</Link>
            <Link href="/slots">Slots</Link>
            <Link href="/blog">Blog</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}
