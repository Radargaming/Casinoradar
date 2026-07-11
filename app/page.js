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
          CasinoRadar helps you find the best
          casinos, bonuses and slot games.
        </p>

        <button>
          View Top Casinos
        </button>

      </section>



      <section className="top-casinos">

        <h2>
          🏆 CasinoRadar Top Casinos
        </h2>


        <div className="ranking">


          <div className="rank-card">

            <div className="casino-logo">
              🎰
            </div>

            <div className="badge">
              #1 BEST CHOICE
            </div>


            <h3>
              Golden Stake
            </h3>


            <div className="rating">
              ⭐⭐⭐⭐⭐
            </div>


            <p>
              Premium crypto casino
              experience.
            </p>


            <strong>
              💰 Welcome Bonus
            </strong>


            <button>
              Visit Casino
            </button>

          </div>





          <div className="rank-card">


            <div className="casino-logo">
              🎲
            </div>


            <div className="badge">
              #2 TOP SLOTS
            </div>


            <h3>
              Royal Vavada
            </h3>


            <div className="rating">
              ⭐⭐⭐⭐☆
            </div>


            <p>
              Slots, jackpots
              and tournaments.
            </p>


            <strong>
              💰 Casino Rewards
            </strong>


            <button>
              Visit Casino
            </button>


          </div>


        </div>

      </section>



      <section className="cards">


        <div className="card">

          <h2>
            🎰 Casino Reviews
          </h2>

          <p>
            Detailed reviews,
            ratings and guides.
          </p>

        </div>


        <div className="card">

          <h2>
            🎁 Bonuses
          </h2>

          <p>
            Find the best casino offers.
          </p>

        </div>


      </section>


    </main>
  );
}
