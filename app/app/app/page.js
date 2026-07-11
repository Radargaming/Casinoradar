export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo">CasinoRadar</div>

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
        <h1>Find The Best Online Casinos</h1>

        <p>
          Casino reviews, bonuses and guides in English,
          Russian and Spanish.
        </p>

        <button>
          View Top Casinos
        </button>
      </section>

      <section className="cards">

        <div className="card">
          <h2>Stake Casino</h2>
          <p>
            Crypto casino review, games and bonuses.
          </p>
          <button>Read Review</button>
        </div>

        <div className="card">
          <h2>Vavada Casino</h2>
          <p>
            Casino review, slots and promotions.
          </p>
          <button>Read Review</button>
        </div>

      </section>
    </main>
  );
}
