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


          <h3>
            🔞 18+ Responsible Gaming
          </h3>


          <p>
            CasinoRadar provides information
            about online casinos.
            Gambling should be entertainment
            only.
          </p>


          <p>
            Play responsibly.
            Know your limits.
          </p>



          <p>
            © 2026 CasinoRadar
          </p>



          <p>
            Privacy Policy | Terms & Conditions | Contact
          </p>


        </footer>



      </body>


    </html>
  );
}
