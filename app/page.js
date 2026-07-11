export default function Home() {
  return (
    <main>

      <nav>
        <div className="logo">
          CasinoRadar
        </div>

        <div className="menu">
          <span>Home</span>
          <span>Casinos</span>
          <span>Bonuses</span>
          <span>Slots</span>
          <span>Blog</span>
          <span>EN | RU | ES</span>
        </div>
      </nav>


      <section className="hero">

        <h1>
          Find The Best Online Casinos
        </h1>

        <p>
          Casino reviews, bonuses and guides
          in English, Russian and Spanish.
        </p>

        <button>
          View Top Casinos
        </button>

      </section>



      <section className="top-casinos">

        <h2>
          🏆 Top Online Casinos
        </h2>


        <div className="ranking">


          <div className="rank-card">

            <h3>
              🥇 #1 Stake Casino
            </h3>

            <p>
              ⭐ 4.8 / 5
            </p>

            <p>
              Best Crypto Casino
            </p>

            <button>
              Visit Stake
            </button>

          </div>



          <div className="rank-card">

            <h3>
              🥈 #2 Vavada Casino
            </h3>

            <p>
              ⭐ 4.6 / 5
            </p>

            <p>
              Best Slots Experience
            </p>

            <button>
              Visit Vavada
            </button>

          </div>


        </div>

      </section>




      <section className="cards">


        <div className="card">

          <h2>
            🎰 Stake Casino
          </h2>

          <p className="rating">
            ⭐ 4.8 / 5
          </p>

          <p>
            Crypto casino, live games
            and fast payments.
          </p>

          <strong>
            💰 Premium Casino Choice
          </strong>

          <button>
            Read Review
          </button>

        </div>




        <div className="card">

          <h2>
            🎰 Vavada Casino
          </h2>

          <p className="rating">
            ⭐ 4.6 / 5
          </p>

          <p>
            Slots, tournaments
            and casino promotions.
          </p>

          <strong>
            💰 Slots & Bonuses
          </strong>

          <button>
            Read Review
          </button>

        </div>


      </section>


    </main>
  );
}
