import Link from "next/link";

export default function Home() {
  return (
    <main>


      <section className="hero">


        <h1>
          Find The Best Online Casinos
        </h1>


        <p>
          CasinoRadar helps you compare
          online casinos, bonuses and features
          to make smarter choices.
        </p>



        <Link href="/casinos">

          <button>
            View Top Casinos
          </button>

        </Link>


      </section>




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
            payments, features and user experience.
          </p>


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
            Play Responsibly
          </h2>


          <p>
            Gambling should always be
            entertainment. Play responsibly.
          </p>


        </div>


      </section>



      <section className="hero">


        <h2>
          Featured Casino
        </h2>


        <h3>
          Stake Casino ⭐⭐⭐⭐⭐
        </h3>


        <p>
          Explore games, payments and
          platform features.
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


      </section>



    </main>
  );
}
