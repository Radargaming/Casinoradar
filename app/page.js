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
          Discover top casinos, bonuses,
          slots and expert reviews.
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

            <div className="badge">
              #1 BEST CHOICE
            </div>

            <h3>
              🥇 Stake Casino
            </h3>

            <div className="rating">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              4.8 / 5 Rating
            </p>

            <p>
              The ultimate crypto casino
              with thousands of games.
            </p>

            <strong>
              💰 Premium Bonus
            </strong>

            <button>
              Visit Stake
            </button>

          </div>




          <div className="rank-card">

            <div className="badge">
              #2 TOP SLOTS
            </div>

            <h3>
              🥈 Vavada Casino
            </h3>

            <div className="rating">
              ⭐⭐⭐⭐☆
            </div>

            <p>
              4.6 / 5 Rating
            </p>

            <p>
              Slots, tournaments
              and promotions.
            </p>

            <strong>
              💰 Casino Rewards
            </strong>

            <button>
              Visit Vavada
            </button>

          </div>


        </div>

      </section>




      <section className="cards">


        <div className="card">

          <h2>
            🎰 Stake Review
          </h2>

          <p>
            Games, payments,
            bonuses and full casino guide.
          </p>

          <button>
            Read Review
          </button>

        </div>



        <div className="card">

          <h2>
            🎰 Vavada Review
          </h2>

          <p>
            Slots, promotions
            and player experience.
          </p>

          <button>
            Read Review
          </button>

        </div>


      </section>


    </main>
  );
}
