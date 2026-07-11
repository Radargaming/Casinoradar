export default function Home() {
  return (
    <main>

      <nav>
        <div className="logo">
          CasinoRadar
        </div>

        <div className="menu">
          <span>Home</span>
          <span>Stake</span>
          <span>Vavada</span>
          <span>Bonuses</span>
          <span>Reviews</span>
          <span>EN | RU | ES</span>
        </div>
      </nav>


      <section className="hero">

        <h1>
          Best Online Casinos Reviews
        </h1>

        <p>
          Honest casino reviews, bonuses and guides.
          Compare Stake and Vavada casinos.
        </p>

        <button>
          View Casinos
        </button>

      </section>


      <section className="top-casinos">

        <h2>
          🏆 Top Casinos
        </h2>


        <div className="ranking">


          <div className="rank-card">

            <h3>
              🥇 Stake Casino
            </h3>

            <p>
              ⭐ Rating: 4.8 / 5
            </p>

            <p>
              💰 Bonus: 200% up to $1000
            </p>

            <button>
              Read Review
            </button>

          </div>



          <div className="rank-card">

            <h3>
              🥈 Vavada Casino
            </h3>

            <p>
              ⭐ Rating: 4.6 / 5
            </p>

            <p>
              💰 Bonus: 100% up to $500
            </p>

            <button>
              Read Review
            </button>

          </div>


        </div>

      </section>


    </main>
  );
}
