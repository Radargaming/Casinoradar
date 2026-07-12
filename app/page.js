import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          Find The Best Online Casinos
        </h1>

        <p>
          CasinoRadar helps you compare online casinos,
          bonuses and features to make smarter choices.
        </p>


        <Link href="/casinos">

          <button>
            View Top Casinos
          </button>

        </Link>


      </section>



      {/* FEATURED CASINO */}

      <section className="cards">


        <div className="card">


          <div className="casino-logo">
            🎰
          </div>


          <h2>
            Featured Casino
          </h2>


          <h3>
            Stake Casino ⭐⭐⭐⭐⭐
          </h3>


          <p>
            One of the popular online gaming platforms
            with casino games, live games and modern
            features.
          </p>


          <p>
            ✅ Large game selection
            <br />
            ✅ Live casino
            <br />
            ✅ Fast payments
            <br />
            ✅ Crypto support
          </p>


          <a
            href="https://stake.com/?c=EIJ1YRw3"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button>
              Visit Stake
            </button>

          </a>


        </div>


      </section>



      {/* MAIN FEATURES */}

      <section className="cards">


        <div className="card">

          <div className="casino-logo">
            🏆
          </div>

          <h2>
            Top Rated Casinos
          </h2>

          <p>
            We review casinos based on games,
            payments and user experience.
          </p>


          <Link href="/casinos">

            <button>
              View Casinos
            </button>

          </Link>

        </div>




        <div className="card">

          <div className="casino-logo">
            🎁
          </div>


          <h2>
            Casino Bonuses
          </h2>


          <p>
            Discover available promotions
            and casino offers.
          </p>


          <Link href="/bonuses">

            <button>
              View Bonuses
            </button>

          </Link>


        </div>




        <div className="card">

          <div className="casino-logo">
            🛡️
          </div>


          <h2>
            Responsible Gaming
          </h2>


          <p>
            Gambling should always be entertainment.
            Play responsibly and know your limits.
          </p>


        </div>


      </section>



      {/* TRUST SECTION */}

      <section className="hero">


        <h2>
          Why Choose CasinoRadar?
        </h2>


        <p>
          We provide casino reviews, ratings and
          information to help users compare
          online gaming platforms.
        </p>


      </section>


    </main>
  );
}
