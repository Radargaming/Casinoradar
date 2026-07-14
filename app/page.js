import Link from "next/link";

export default function Home() {
  return (
    <main>

      <section className="hero">

        <h1>
          Find The Best Online Casinos
        </h1>

        <p>
          CasinoRadar helps you compare online casinos,
          bonuses and features to make smarter choices.
        </p>

      </section>


      <section className="cards">


        <div className="card">

          <div className="casino-logo">
            🎲
          </div>

          <h2>
            Stake Casino
          </h2>


          <p>
            Crypto-friendly casino platform
            with poker, roulette and live games.
          </p>


          <p>

            <span style={{color:"#00ff66"}}>
              ✅ Crypto Friendly
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Poker
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Roulette
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Live Casino
            </span>

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


          <p
            style={{
              color:"#ffd700",
              fontSize:"18px",
              margin:"8px 0"
            }}
          >
            🇺🇸
          </p>


          <p
            style={{
              color:"#ffcc00",
              fontSize:"13px"
            }}
          >
            US Players Not Accepted
          </p>


          <p>
            Online casino with bonuses,
            games and multiple payment options.
          </p>


          <p>

            <span style={{color:"#00ff66"}}>
              ✅ Neteller
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Credit Cards
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Crypto Payments
            </span>

            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Casino Bonuses
            </span>

          </p>


          <Link href="/casinos/vavada">

            <button>
              Read Vavada Review
            </button>

          </Link>


        </div>


      </section>


      <section className="hero">

        <h2>
          Why Choose CasinoRadar?
        </h2>

        <p>
          We provide casino reviews,
          payment information and bonus guides
          to help users compare online casinos.
        </p>

      </section>


    </main>
  );
}
