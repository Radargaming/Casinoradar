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

            <Link href="/">Home</Link>
            <Link href="/casinos">Casinos</Link>
            <Link href="/bonuses">Bonuses</Link>
            <Link href="/slots">Slots</Link>
            <Link href="/blog">Blog</Link>

          </div>

        </nav>


        {children}



        <footer>


          <p>
            🔞 18+ Only
          </p>


          <p>
            CasinoRadar provides casino reviews,
            ratings and information.
            Gambling should be entertainment only.
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

            <span>
              Privacy Policy
            </span>

            {" | "}

            <span>
              Terms & Conditions
            </span>

          </div>



          <small>

            Privacy Policy: We respect user privacy.
            We do not sell personal information.
            Our website may contain third-party links
            and affiliate links.

          </small>



          <small>

            © 2026 CasinoRadar

          </small>


        </footer>


      </body>

    </html>
  );
}
