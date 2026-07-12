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
            <Link href="/">
              CasinoRadar
            </Link>
          </div>


          <div className="menu">

            <Link href="/">
              Home
            </Link>

            <Link href="/casinos">
              Casinos
            </Link>

            <Link href="/bonuses">
              Bonuses
            </Link>

            <Link href="/slots">
              Slots
            </Link>

            <Link href="/blog">
              Blog
            </Link>

          </div>

        </nav>



        {children}




        <footer>

          <p>
            🔞 18+ Only
          </p>


          <p>
            CasinoRadar provides casino reviews
            and information. Gambling should be
            entertainment only.
          </p>



          <div>

            <a
              href="https://www.ncpgambling.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Responsible Gaming
            </a>


            {" | "}


            <Link href="/privacy">
              Privacy Policy
            </Link>


            {" | "}


            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>



          <p>
            © 2026 CasinoRadar
          </p>


        </footer>


      </body>

    </html>
  );
}
