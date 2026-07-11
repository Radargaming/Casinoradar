import Link from "next/link";


export default function Home() {

  return (

    <main>


      <nav>


        <div className="logo">
          CasinoRadar
        </div>



        <div className="menu">

          <Link href="/">
            Home
          </Link>


          <Link href="/casinos">
            Casinos
          </Link>


          <Link href="/bonuses">
            Bonuses
          </Link>


          <Link href="/slots">
            Slots
          </Link>


          <Link href="/blog">
            Blog
          </Link>


          <span>
            EN | RU | ES
          </span>


        </div>


      </nav>





      <section className="hero">


        <h1>
          Find The Best Online Casinos
        </h1>


        <p>
          Trusted casino reviews,
          bonuses and slot guides.
        </p>


        <button>
          Explore Casinos
        </button>


      </section>





      <section className="top-casinos">


        <h2>
          🏆 Top Rated Casinos
        </h2>



        <div className="ranking">



          <div className="rank-card">


            <div className="badge">
              #1 BEST CHOICE
            </div>



            <div className="casino-logo">
              🎰
            </div>



            <h3>
              Golden Stake
            </h3>



            <div className="rating">
              ⭐⭐⭐⭐⭐
            </div>


            <h4>
              4.8 / 5
            </h4>



            <p>
              ✅ 10,000+ Games
            </p>


            <p>
              ✅ Instant Payments
            </p>


            <p>
              ✅ Crypto Friendly
            </p>



            <button>
              Visit Casino
            </button>


          </div>








          <div className="rank-card">


            <div className="badge">
              #2 TOP SLOTS
            </div>



            <div className="casino-logo">
              🎲
            </div>



            <h3>
              Royal Vavada
            </h3>



            <div className="rating">
              ⭐⭐⭐⭐☆
            </div>


            <h4>
              4.6 / 5
            </h4>



            <p>
              ✅ Premium Slots
            </p>


            <p>
              ✅ Fast Payments
            </p>


            <p>
              ✅ Rewards
            </p>



            <button>
              Visit Casino
            </button>


          </div>


        </div>


      </section>


    </main>

  );

}
