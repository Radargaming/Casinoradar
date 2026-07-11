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
          Reviews, bonuses and guides for top online casinos.
        </p>

        <button>
          View Top Casinos
        </button>

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
            Crypto casino with thousands of games,
            live casino and fast payments.
          </p>

          <strong>
            💰 Bonus: Welcome Offer
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
            Popular casino with slots,
            tournaments and promotions.
          </p>

          <strong>
            💰 Bonus: Casino Rewards
          </strong>

          <button>
            Read Review
          </button>

        </div>


      </section>


    </main>
  );
}
