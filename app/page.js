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
          Casino reviews, bonuses and guides in English,
          Russian and Spanish.
        </p>

        <button>
          View Top Casinos
        </button>

      </section>


      <section className="top-casinos">

        <h2>
          🏆 Top Casinos 2026
        </h2>


        <div className="ranking">

          <div className="rank-card">
            <h3>🥇 Stake Casino</h3>
            <p>⭐ 4.8 / 5</p>
            <p>💰 Bonus: 200% up to $1000</p>
          </div>


          <div className="rank-card">
            <h3>🥈 Vavada Casino</h3>
            <p>⭐ 4.6 / 5</p>
            <p>💰 Bonus: 100% up to $500</p>
          </div>


          <div className="rank-card">
            <h3>🥉 Lucky Casino</h3>
            <p>⭐ 4.5 / 5</p>
            <p>💰 Bonus: 150% up to $800</p>
          </div>

        </div>

      </section>


      <section className="cards">


        <div className="card">

          <h2>
            Stake Casino
          </h2>

          <div className="rating">
            ⭐ Rating: 4.8/5
          </div>

          <p>
            Crypto casino review, games and bonuses.
          </p>

          <strong>
            💰 Bonus: 200% up to $1000
          </strong>

          <button>
            Read Review
          </button>

        </div>



        <div className="card">

          <h2>
            Vavada Casino
          </h2>

          <div className="rating">
            ⭐ Rating: 4.6/5
          </div>

          <p>
            Casino review, slots and promotions.
          </p>

          <strong>
            💰 Bonus: 100% up to $500
          </strong>

          <button>
            Read Review
          </button>

        </div>


      </section>


    </main>
  );
}
