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


        <Link href="/casinos">
          <button>
            View Top Casinos
          </button>
        </Link>


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
            Popular crypto casino platform
            with casino games, live casino
            and modern features.
          </p>


          <p>
            <span style={{color:"#00ff66"}}>
              ✅ Large game selection
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Live casino
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Crypto support
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Fast payments
            </span>

          </p>


          <Link href="/casinos/stake">

            <button>
              Read Review
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
            Online casino review including
            bonuses, games and payment options.
          </p>


          <p>

            <span style={{color:"#00ff66"}}>
              ✅ Casino games
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Promotions
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Multiple payments
            </span>
            <br />

            <span style={{color:"#00ff66"}}>
              ✅ Mobile friendly
            </span>

          </p>


          <Link href="/casinos/vavada">

            <button>
              Read Review
            </button>

          </Link>


        </div>


      </section>





      <section className="cards">


        <div className="card">

          <h2>
            🏆 Casino Reviews
          </h2>

          <p>
            We compare casinos based on
            games, payments and features.
          </p>

        </div>



        <div className="card">

          <h2>
            🎁 Bonuses
          </h2>

          <p>
            Discover promotions and
            casino offers.
          </p>

        </div>



      </section>


    </main>
  );
}
