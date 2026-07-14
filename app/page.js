import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <h1>
          Compare Online Casinos, Bonuses & Features
        </h1>

        <p>
          CasinoRadar provides casino reviews,
          bonus guides and comparisons to help
          players make informed decisions.
        </p>

        <Link href="/casinos">
          <button>
            Explore Casinos
          </button>
        </Link>

      </section>


      {/* FEATURED CASINOS */}

      <section className="cards">


        <div className="card">

          <div className="casino-logo">
            🎲
          </div>

          <h2>
            Stake Casino
          </h2>

          <p>
            A popular crypto casino platform
            with casino games, live games
            and modern features.
          </p>

          <p>
            ✅ Large game selection
            <br />
            ✅ Live casino
            <br />
            ✅ Crypto support
            <br />
            ✅ Fast transactions
          </p>

          <Link href="/casinos/stake">
            <button>
              Read Stake Review
            </button>
          </Link>

        </div>



        <div className="card">

          <div className="casino-logo">
            🎰
          </div>

          <h2>
            Vavada Casino
          </h2>

          <p>
            Casino review including bonuses,
            payments and player experience.
          </p>

          <p>
            ✅ Casino games
            <br />
            ✅ Promotions
            <br />
            ✅ Payment options
            <br />
            ✅ Mobile friendly
          </p>

          <Link href="/casinos/vavada">
            <button>
              Read Vavada Review
            </button>
          </Link>

        </div>


      </section>



      {/* FEATURES */}

      <section className="cards">


        <div className="card">

          <div className="casino-logo">
            🏆
          </div>

          <h2>
            Casino Reviews
          </h2>

          <p>
            We analyze casinos based on
            features, payments and user experience.
          </p>

        </div>



        <div className="card">

          <div className="casino-logo">
            🎁
          </div>

          <h2>
            Bonus Guides
          </h2>

          <p>
            Discover casino promotions
            and bonus information.
          </p>

        </div>



        <div className="card">

          <div className="casino-logo">
            🛡️
          </div>

          <h2>
            Responsible Gaming
          </h2>

          <p>
            Gambling should always be
            entertainment. Play responsibly.
          </p>

        </div>


      </section>



      {/* TRUST */}

      <section className="hero">

        <h2>
          Why Choose CasinoRadar?
        </h2>

        <p>
          We provide independent casino reviews,
          comparisons and guides to help users
          find information about online casinos.
        </p>

      </section>


    </main>
  );
}
